import type { Locale } from '../i18n/config';
import addedAtByUrl from './catalog-added-at.json';

export type NavigationCategory = {
  id: string;
  name: string;
  count: number;
};

const categoryIds = [
  'official',
  'sdks-and-clients',
  'jev-like-models',
  'frameworks-and-integrations',
  'agent-tooling',
  'browser-and-computer-use',
  'applications',
  'games-and-simulations',
  'demos-and-playgrounds',
  'benchmarks-and-research',
  'other-lists',
] as const;

const categoryCounts = [6, 61, 85, 89, 238, 77, 137, 73, 67, 117, 42] as const;

const categoryNames: Record<Locale, readonly string[]> = {
  en: ['Official', 'SDKs & clients', 'Jev-like models', 'Frameworks & integrations', 'Agent tooling', 'Browser & computer use', 'Applications', 'Games & simulations', 'Demos & playgrounds', 'Benchmarks & research', 'Other lists'],
  zh: ['官方项目', 'SDK 与客户端', 'Jev-like 模型', '框架与集成', 'Agent 工具', '浏览器与计算机操作', '应用', '游戏与模拟', '演示与试验场', '基准测试与研究', '其他列表'],
  ja: ['公式HP', 'SDK & クライアント', 'Jev-likeモデル', 'フレームワークと統合', 'エージェントツーリング', 'ブラウザとコンピュータの使用', 'アプリケーション', 'ゲーム&シミュレーション', 'デモ&遊び場', 'ベンチマーク & 研究', 'その他のリスト'],
  ko: ['공식', 'SDK 및 클라이언트', 'Jev-like 모델', 'Frameworks 및 통합', '에이전트 툴링', '브라우저 및 컴퓨터 사용', '애플리케이션', '게임 및 시뮬레이션', '데모 및 놀이터', '벤치 마크 & 연구', '기타 목록'],
  es: ['Oficial', 'SDKs & clientes', 'Modelos Jev-like', 'Marcos e integraciones', 'Agente herramienta', 'Uso del navegador', 'Aplicaciones', 'Juegos & simulaciones', 'Demos & parques infantiles', 'Criterios de investigación', 'Otras listas'],
  'pt-br': ['Oficial', 'SDKs & clientes', 'Modelos Jev-like', 'Quadros e integrações', 'Ferramentas de agente', 'Navegador & uso do computador', 'Aplicações', 'Jogos e simulações', 'Demos & playgrounds', 'Benchmarks & pesquisa', 'Outras listas'],
};

export const navigationCategories = Object.fromEntries(
  Object.entries(categoryNames).map(([locale, names]) => [
    locale,
    categoryIds.map((id, index) => ({ id, name: names[index], count: categoryCounts[index] })),
  ]),
) as Record<Locale, NavigationCategory[]>;

export const navigationCatalogStats = {
  projects: categoryCounts.reduce((total, count) => total + count, 0),
  changelogDays: new Set(Object.values(addedAtByUrl).map((addedAt) => addedAt.slice(0, 10))).size,
};
