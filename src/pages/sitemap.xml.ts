import type { APIRoute } from 'astro';
import { catalogStats, getCatalog } from '../lib/catalog';
import { defaultLocale, localeConfig, locales, type Locale } from '../i18n';
import { getLocalePath } from '../i18n/config';

const siteUrl = 'https://jevbest.com/';
const categoryIds = getCatalog(defaultLocale).categories.map((category) => category.id);
const localizedRoutes = [
  '',
  'changelog/',
  'sponsors/',
  'projects/today/',
  'projects/this-week/',
  ...categoryIds.map((categoryId) => `projects/${categoryId}/`),
];
const highPriorityRoutes = new Set([
  'changelog/',
  'sponsors/',
  'projects/today/',
  'projects/this-week/',
]);

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const localizedUrl = (locale: Locale, route: string) => `${siteUrl}${getLocalePath(locale)}${route}`;

const localizedEntry = (locale: Locale, route: string) => {
  const url = localizedUrl(locale, route);
  const priority = route === '' ? '1.0' : highPriorityRoutes.has(route) ? '0.9' : '0.8';
  const alternates = locales
    .map((candidate) => `    <xhtml:link rel="alternate" hreflang="${localeConfig[candidate].languageTag}" href="${escapeXml(localizedUrl(candidate, route))}" />`)
    .join('\n');

  return [
    '  <url>',
    `    <loc>${escapeXml(url)}</loc>`,
    `    <lastmod>${catalogStats.today}</lastmod>`,
    '    <changefreq>daily</changefreq>',
    `    <priority>${priority}</priority>`,
    alternates,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl(defaultLocale, route))}" />`,
    '  </url>',
  ].join('\n');
};

const standaloneEntry = (route: string, priority: string) => [
  '  <url>',
  `    <loc>${escapeXml(`${siteUrl}${route}`)}</loc>`,
  `    <lastmod>${catalogStats.today}</lastmod>`,
  '    <changefreq>monthly</changefreq>',
  `    <priority>${priority}</priority>`,
  '  </url>',
].join('\n');

export const GET: APIRoute = () => {
  const entries = [
    ...localizedRoutes.flatMap((route) => locales.map((locale) => localizedEntry(locale, route))),
    standaloneEntry('about/', '0.6'),
    standaloneEntry('privacy/', '0.3'),
    standaloneEntry('terms/', '0.3'),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
