import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defaultLocale, localeConfig, locales, type Locale } from '../i18n/config';
import addedAtByUrl from '../data/catalog-added-at.json';

export type Category = { id: string; name: string; count: number };
export type Project = {
  name: string; url: string; stars: number; starsLabel: string; language: string;
  description: string; categoryId: string; category: string; searchText: string;
  addedAt: string; addedDate: string;
};

type ParsedProject = Omit<Project, 'categoryId' | 'category' | 'searchText' | 'addedAt' | 'addedDate'>;
type ParsedCategory = { name: string; count: number; rows: ParsedProject[] };
type LocalizedCatalog = { categories: Category[]; projects: Project[] };

const currentRoot = process.cwd();
const repositoryRoot = existsSync(resolve(currentRoot, 'README.md')) ? currentRoot : resolve(currentRoot, '..');
const slugify = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const plainText = (value: string) => value.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/`([^`]+)`/g, '$1').replace(/\*\*/g, '').trim();
const normalizeUrl = (url: string) => url.toLowerCase().replace(/\.git\/?$/, '').replace(/\/$/, '');
const inclusionDates = addedAtByUrl as Record<string, string>;

function parse(markdown: string): ParsedCategory[] {
  const headings = [...markdown.matchAll(/^### (.+?)(?: \((\d+)\)|（(\d+)）)$/gm)];
  return headings.map((heading) => {
    const start = heading.index ?? 0;
    const headingEnd = start + heading[0].length;
    const nextHeadingOffset = markdown.slice(headingEnd).search(/^### /m);
    const end = nextHeadingOffset === -1 ? markdown.length : headingEnd + nextHeadingOffset;
    const rows = markdown.slice(start, end).split(/\r?\n/)
      .filter((line) => line.startsWith('| [') && line.includes('https://github.com/'))
      .map((line) => {
        const cells = line.slice(1, -1).split('|').map((cell) => cell.trim());
        const link = cells[0]?.match(/^\[([^\]]+)\]\((https:\/\/github\.com\/[^)]+)\)$/);
        if (!link || cells.length !== 5) throw new Error(`Unable to parse catalog row: ${line}`);
        const expectedAddedAt = inclusionDates[normalizeUrl(link[2])];
        if (!expectedAddedAt) throw new Error(`Missing inclusion timestamp for catalog project: ${link[2]}`);
        if (cells[3] !== expectedAddedAt.slice(0, 10)) throw new Error(`README inclusion date mismatch for ${link[2]}: expected ${expectedAddedAt.slice(0, 10)}, received ${cells[3]}`);
        const starsLabel = cells[1].replace(/^★\s*/, '');
        return { name: link[1], url: link[2], starsLabel, stars: Number(starsLabel.replace(/,/g, '')) || 0, language: cells[2], description: plainText(cells[4]) };
      });
    return { name: heading[1], count: Number(heading[2] ?? heading[3]), rows };
  });
}

const parsedByLocale = Object.fromEntries(locales.map((locale) => {
  const path = resolve(repositoryRoot, localeConfig[locale].readme);
  if (!existsSync(path)) throw new Error(`Missing catalog translation for ${locale}: ${path}`);
  return [locale, parse(readFileSync(path, 'utf8'))];
})) as Record<Locale, ParsedCategory[]>;

const sourceCategories = parsedByLocale[defaultLocale];
if (sourceCategories.length === 0) throw new Error('The default catalog contains no categories.');

for (const locale of locales) {
  const localized = parsedByLocale[locale];
  if (localized.length !== sourceCategories.length) throw new Error(`Catalog category count mismatch for locale ${locale}.`);
  sourceCategories.forEach((sourceCategory, categoryIndex) => {
    const localizedCategory = localized[categoryIndex];
    if (localizedCategory.rows.length !== sourceCategory.rows.length) throw new Error(`Catalog row count mismatch for locale ${locale}, category ${sourceCategory.name}.`);
    sourceCategory.rows.forEach((sourceProject, projectIndex) => {
      if (localizedCategory.rows[projectIndex]?.url !== sourceProject.url) throw new Error(`Catalog project mismatch for locale ${locale}: ${sourceProject.name}.`);
    });
  });
}

const catalogs = Object.fromEntries(locales.map((locale) => {
  const localizedCategories = parsedByLocale[locale];
  const categories = sourceCategories.map((sourceCategory, index) => ({ id: slugify(sourceCategory.name), name: localizedCategories[index].name, count: sourceCategory.count }));
  const projects = sourceCategories.flatMap((sourceCategory, categoryIndex) => {
    const localizedCategory = localizedCategories[categoryIndex];
    return sourceCategory.rows.map((sourceProject, projectIndex) => {
      const localizedProject = localizedCategory.rows[projectIndex];
      const descriptions = locales.map((candidate) => parsedByLocale[candidate][categoryIndex].rows[projectIndex].description);
      const addedAt = inclusionDates[normalizeUrl(sourceProject.url)];
      if (!addedAt) throw new Error(`Missing inclusion timestamp for catalog project: ${sourceProject.url}`);
      return { ...sourceProject, description: localizedProject.description, categoryId: slugify(sourceCategory.name), category: localizedCategory.name, searchText: [sourceProject.name, sourceProject.url, sourceProject.language, ...descriptions].join(' ').toLowerCase(), addedAt, addedDate: addedAt.slice(0, 10) };
    });
  });
  return [locale, { categories, projects }];
})) as Record<Locale, LocalizedCatalog>;

export const getCatalog = (locale: Locale): LocalizedCatalog => catalogs[locale];
const sourceProjects = getCatalog(defaultLocale).projects;
const localDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const startOfWeek = (() => {
  const date = new Date(`${localDate}T12:00:00+08:00`);
  const day = date.getUTCDay();
  date.setUTCDate(date.getUTCDate() - (day === 0 ? 6 : day - 1));
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
})();
export const catalogStats = {
  projects: sourceProjects.length,
  categories: sourceCategories.length,
  languages: new Set(sourceProjects.map((project) => project.language).filter((language) => language !== '—')).size,
  stars: sourceProjects.reduce((total, project) => total + project.stars, 0),
  addedToday: sourceProjects.filter((project) => project.addedDate === localDate).length,
  addedThisWeek: sourceProjects.filter((project) => project.addedDate >= startOfWeek && project.addedDate <= localDate).length,
  today: localDate,
  weekStartsOn: startOfWeek,
};
