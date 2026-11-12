const en = {
  seo: {
    title: (projects: number) => `bestjev: ${projects} Open Source Jev Projects & Tools`,
    description: (projects: number) => `Explore ${projects} verified open-source Jev projects on bestjev, including SDKs, agents, integrations, applications, benchmarks, and developer tools.`,
    catalogName: 'bestjev Open-Source Project Catalog',
    alternateName: 'bestjev Jev Project Catalog',
    imageAlt: (projects: number, categories: number) => `${projects} verified open-source Jev projects across ${categories} categories`,
  },
  nav: {
    close: 'Close navigation', primary: 'Primary navigation', overview: 'Overview', allProjects: 'All projects', aboutBestjev: 'About bestjev', aboutJev: 'About Jev',
    categories: 'Categories', projectCategories: 'Project categories', collaborate: 'Submit & collaborate', collaborateLabel: 'Submit and collaborate',
    submit: 'Submit', email: 'Email', promote: 'Promote your project', open: 'Open navigation', language: 'Language', home: 'bestjev home',
    logoAlt: 'bestjev logo', flagAlt: (language: string) => `${language} language flag`, githubRepository: 'Open the bestjev repository on GitHub',
    xProfile: 'Follow the bestjev maintainer on X', emailMaintainer: 'Email the bestjev maintainer', promoteEmail: 'Email bestjev about project promotion',
  },
  hero: {
    title: 'Best Jev Projects',
    summary: (projects: number, categories: number, languages: number) => `Search ${projects} verified repositories across ${categories} categories and ${languages} languages.`,
    lastUpdated: 'Last updated', updatedDate: 'September 23, 2026', filterLanguage: 'Filter by language', allLanguages: 'All languages', languages: 'Languages',
    addedToday: 'Today', addedThisWeek: 'This week', clearRecency: 'Show all dates',
    searchPlaceholder: 'Search projects, languages, or decisions', imageAlt: 'GitHub star growth for heyjunpenn/awesome-jev over time',
    featureAnnouncement: 'New: product promotion.', viewTour: 'View guide',
  },
  filterPage: {
    categoryTitle: (category: string) => `Awesome ${category} Jev Projects`,
    categorySeoTitle: (category: string) => `Awesome ${category} Jev Projects | bestjev`,
    categoryDescription: (projects: number, category: string) => `Explore an awesome collection of ${projects} verified open-source ${category} Jev projects on bestjev. Compare GitHub stars, languages, repositories, and implementations.`,
    todayTitle: 'Jev Projects Added Today',
    todaySeoTitle: 'New Jev Projects Today | bestjev',
    todayDescription: (projects: number) => `Discover ${projects} new open-source Jev projects added today to bestjev, with verified GitHub repositories, languages, stars, and implementation details.`,
    weekTitle: 'Jev Projects Added This Week',
    weekSeoTitle: 'New Jev Projects This Week | bestjev',
    weekDescription: (projects: number) => `Discover ${projects} new open-source Jev projects added this week to bestjev, with verified GitHub repositories, languages, stars, and implementation details.`,
  },
  catalog: {
    all: 'All', project: 'Project', stars: 'Stars', language: 'Language', addedAt: 'Added', description: 'Description', projectsLabel: 'Jev projects',
    sortAscending: 'Sort by stars ascending', sortDescending: 'Sort by stars descending', noMatches: 'No matching projects',
    noMatchesHint: 'Try another keyword or category.', showMore: 'Show more projects',
  },
  siteIntro: {
    eyebrow: 'About the catalog',
    title: 'What is bestjev?',
    paragraphs: [
      "bestjev is an independent, community-maintained directory of open-source projects built around Jev, TypeSafe AI's System One model for typed decisions.",
      'Each listing links to its original repository and records its category, primary language, GitHub star snapshot, and a localized description, helping developers find verifiable Jev SDKs, agents, integrations, applications, research, and tools.',
      'bestjev is not affiliated with or endorsed by TypeSafe AI.',
    ],
  },
  about: {
    title: 'What is Jev?',
    paragraphs: [
      "Jev is TypeSafe AI's System One model for decisions that software needs to consume. Instead of generating free-form prose, it accepts a state and one or more typed questions, then returns structured answers with calibrated probabilities.",
      'It fits workflows where the option space or scoring rubric is known in advance: routing an agent, validating a tool call, ranking candidates, checking a policy, or deciding whether an action should proceed.',
    ],
    advantage: 'Operational advantage',
    advantageText: 'Applications can set deterministic thresholds, inspect uncertainty, and route low-confidence cases to a person or a larger model.',
    primitives: [
      { code: 'CHOICE', title: 'Pick one option', description: 'Select from a known set and return probabilities with confidence.' },
      { code: 'SCORE', title: 'Rate on a rubric', description: 'Place an input on an ordered scale with a full distribution.' },
      { code: 'NOUL', title: 'Estimate truth', description: 'Return the probability that a statement is true, from zero to one.' },
    ],
  },
  methodology: {
    title: 'How is this catalog verified?',
    intro: 'Each entry is checked against public evidence: the upstream repository, project-authored documentation, and visible Jev usage. Stars are a dated discovery snapshot, not a quality ranking.',
    curatedBy: 'Curated by', quote: '“Think of Jev as a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out.”',
    quoteSource: 'TypeSafe AI, introducing Jev', sourcesTitle: 'Which sources does bestjev use?',
    officialDocs: 'Official Jev documentation', officialDocsSuffix: ' for product concepts and primitives.',
    repositories: 'Public GitHub repositories', repositoriesSuffix: ' for implementation evidence and metadata.',
    catalogData: 'Machine-readable catalog data', catalogDataSuffix: ' for reproducible project records.',
  },
  submission: {
    eyebrow: 'Contribute',
    title: 'How to submit a new project',
    intro: 'Know a public project that uses Jev? Send us its repository and the evidence needed to verify it. Submissions are reviewed before they appear in the catalog.',
    shortCta: 'Submit project', cta: 'Submit a project', ctaHint: 'Opens a pre-filled GitHub issue.',
    steps: [
      { title: 'Share the repository', description: 'Provide the public GitHub URL and a concise description of what the project does.' },
      { title: 'Show how it uses Jev', description: 'Link to code, documentation, a demo, or another public source that makes the Jev integration verifiable.' },
      { title: 'We review and publish', description: 'We verify the evidence, choose the right category, and add accepted projects in a future catalog update.' },
    ],
  },
  footer: { label: 'Site information', about: 'About bestjev', contact: 'Contact bestjev', privacy: 'Privacy policy', terms: 'Terms of use', docs: 'Jev documentation' },
} as const;

type DeepWiden<T> = T extends (...args: infer Args) => infer Result
  ? (...args: Args) => Result
  : T extends string ? string
  : T extends readonly unknown[] ? { readonly [Key in keyof T]: DeepWiden<T[Key]> }
  : T extends object ? { readonly [Key in keyof T]: DeepWiden<T[Key]> }
  : T;

export type Messages = DeepWiden<typeof en>;
export default en;
