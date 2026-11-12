import type { Messages } from './en';

const zh: Messages = {
  seo: {
    title: (projects) => `bestjev：${projects} 个 Jev 开源项目与工具`,
    description: (projects) => `bestjev 收录 ${projects} 个经过核验的 Jev 开源项目，包括 SDK、Agent、集成、应用、基准测试和开发工具，可按 Star、语言与分类浏览。`,
    catalogName: 'bestjev 开源项目目录', alternateName: 'bestjev Jev 项目目录',
    imageAlt: (projects, categories) => `${projects} 个经过核验的 Jev 开源项目，覆盖 ${categories} 个分类`,
  },
  nav: {
    close: '关闭导航', primary: '主导航', overview: '概览', allProjects: '全部项目', aboutBestjev: '关于 bestjev', aboutJev: '关于 Jev', categories: '项目分类',
    projectCategories: '项目分类', collaborate: '提交与合作', collaborateLabel: '提交与合作', submit: '提交', email: '邮件', promote: '推广你的项目',
    open: '打开导航', language: '语言', home: 'bestjev 首页', logoAlt: 'bestjev 标志', flagAlt: (language) => `${language}语言旗帜`,
    githubRepository: '在 GitHub 打开 bestjev 仓库', xProfile: '在 X 上关注 bestjev 维护者', emailMaintainer: '给 bestjev 维护者发送邮件', promoteEmail: '通过邮件联系 bestjev 推广项目',
  },
  hero: {
    title: '最佳 Jev 项目', summary: (projects, categories, languages) => `从 ${projects} 个已核验仓库中搜索，也可以按 ${categories} 个分类和 ${languages} 种语言筛选。`,
    lastUpdated: '最近更新', updatedDate: '2026 年 9 月 23 日', filterLanguage: '按语言筛选', allLanguages: '全部语言', languages: '语言',
    addedToday: '今天新增', addedThisWeek: '本周新增', clearRecency: '显示全部日期',
    searchPlaceholder: '搜索项目、语言或决策', imageAlt: 'heyjunpenn/awesome-jev 仓库的 GitHub Star 增长趋势',
    featureAnnouncement: '新功能：产品推广。', viewTour: '查看引导',
  },
  filterPage: {
    categoryTitle: (category) => `精选 Jev 项目：${category}`,
    categorySeoTitle: (category) => `精选 Jev 项目：${category} | bestjev`,
    categoryDescription: (projects, category) => `浏览 bestjev 精选的 ${projects} 个 awesome ${category} Jev 开源项目，对比 GitHub 仓库、Star、开发语言和实现方式。`,
    todayTitle: '今天新增的 Jev 项目', todaySeoTitle: '今日新增 Jev 开源项目 | bestjev', todayDescription: (projects) => `查看 bestjev 今天新增的 ${projects} 个 Jev 开源项目，包括经过核验的 GitHub 仓库、Star、开发语言和实现信息。`,
    weekTitle: '本周新增的 Jev 项目', weekSeoTitle: '本周新增 Jev 开源项目 | bestjev', weekDescription: (projects) => `查看 bestjev 本周新增的 ${projects} 个 Jev 开源项目，包括经过核验的 GitHub 仓库、Star、开发语言和实现信息。`,
  },
  catalog: {
    all: '全部', project: '项目', stars: 'Star', language: '语言', addedAt: '收录时间', description: '简介', projectsLabel: 'Jev 项目', sortAscending: '按 Star 升序排列',
    sortDescending: '按 Star 降序排列', noMatches: '没有符合条件的项目', noMatchesHint: '换个关键词或分类试试。', showMore: '查看更多',
  },
  siteIntro: {
    eyebrow: '关于目录',
    title: 'bestjev 是什么？',
    paragraphs: [
      'bestjev 是一个独立、由社区维护的 Jev 开源项目目录。Jev 是 TypeSafe AI 面向软件类型化决策的 System One 模型。',
      '每个条目都链接到原始仓库，并记录分类、主要开发语言、GitHub Star 快照和本地化简介，帮助开发者查找可核验的 Jev SDK、Agent、集成、应用、研究和工具。',
      'bestjev 与 TypeSafe AI 无隶属关系，也未获得其官方背书。',
    ],
  },
  about: {
    title: 'Jev 是什么？',
    paragraphs: [
      'Jev 是 TypeSafe AI 推出的 System One 模型，供软件直接调用来做判断。它接收状态信息和一个或多个类型化问题，不生成自由文本，直接返回结构化答案和校准后的概率。',
      '当选项范围或评分规则已经明确，Jev 可以给 Agent 分流、校验工具调用、排列候选项、检查策略，也可以判断一次操作是否该继续。',
    ],
    advantage: '工程优势', advantageText: '开发者可以在代码里设定阈值，直接查看结果有多大把握。置信度不足时，再交给人工或更大的模型处理。',
    primitives: [
      { code: 'CHOICE', title: '做单项选择', description: '从给定选项中选出一个，并给出每个选项的概率。' },
      { code: 'SCORE', title: '按量表打分', description: '把输入放到有序量表上，并返回各档位的概率。' },
      { code: 'NOUL', title: '判断真假', description: '判断一段陈述为真的可能性，返回 0 到 1 的概率。' },
    ],
  },
  methodology: {
    title: '这份目录如何核验？', intro: '我们会检查每个条目的公开依据，包括上游仓库、项目文档以及可以确认的 Jev 用法。Star 数记录的是核验当天的快照，只供参考，不代表项目质量。',
    curatedBy: '整理：', quote: '“可以把 Jev 看成一次前沿智能函数调用：输入非结构化状态，输出带类型的概率决策。”',
    quoteSource: 'TypeSafe AI，《Introducing System One Models and Jev》', sourcesTitle: '核验时看哪些资料？',
    officialDocs: 'Jev 官方文档', officialDocsSuffix: '，用于核对产品概念和基础能力。', repositories: '公开 GitHub 仓库',
    repositoriesSuffix: '，用于确认实现方式和项目数据。', catalogData: '可机读目录数据', catalogDataSuffix: '，用于复核每条项目记录。',
  },
  submission: {
    eyebrow: '参与贡献',
    title: '如何提交新项目？',
    intro: '如果你发现了使用 Jev 的公开项目，请把仓库和可核验的依据发给我们。所有项目通过人工核验后才会加入目录。',
    shortCta: '提交项目', cta: '提交新项目', ctaHint: '将打开预填好的 GitHub Issue。',
    steps: [
      { title: '提供项目仓库', description: '填写公开的 GitHub 仓库地址，并用一句话说明项目解决什么问题。' },
      { title: '说明如何使用 Jev', description: '附上代码、文档、演示或其他公开链接，让 Jev 的实际集成方式可以被核验。' },
      { title: '等待核验与收录', description: '我们会核对依据、选择合适分类，并在后续目录更新中加入符合条件的项目。' },
    ],
  },
  footer: { label: '网站信息', about: '关于 bestjev', contact: '联系 bestjev', privacy: '隐私政策', terms: '使用条款', docs: 'Jev 官方文档' },
};

export default zh;
