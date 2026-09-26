<p align="center">
  <a href="https://jevbest.com"><img src="public/readme/awesome-jev-hero.png" alt="Awesome Jev：11 个分类、917 个经过核验的开源项目" width="100%"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/verified_projects-917-1e63ff?style=flat-square" alt="917 个经过核验的项目">
  <img src="https://img.shields.io/badge/categories-11-111111?style=flat-square" alt="11 个分类">
  <img src="https://img.shields.io/badge/languages-27-676767?style=flat-square" alt="27 种语言">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-1e63ff?style=flat-square" alt="许可证：MIT"></a>
</p>

<p align="center">
  <a href="README.md">English</a> · <strong>简体中文</strong> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a>
</p>

<p align="center">
  🌐 <a href="https://jevbest.com"><strong>浏览在线目录</strong></a>
  &nbsp;·&nbsp;
  📜 <a href="CHANGELOG.md"><strong>更新日志</strong></a>
  &nbsp;·&nbsp;
  🧠 <a href="#jev-like-models"><strong>Jev-like 模型</strong></a>
  &nbsp;·&nbsp;
  ➕ <a href="https://github.com/heyjunpenn/awesome-jev/issues/new?title=%5BSubmission%5D%20"><strong>提交项目</strong></a>
</p>

## 关于 Awesome Jev

Awesome Jev 是一份由社区独立维护、以公开依据为基础的项目目录，收录了 **917 个使用 [Jev](https://typesafe.ai/) 构建的开源项目**。Jev 是 TypeSafe AI 面向软件类型化决策的 System One 模型。本项目与 TypeSafe AI 无隶属关系，也未获得其官方背书。

> **这份目录有什么不同？**
>
> 我们不只记录项目名称，还会说明 Jev 在其中负责哪项具体决策，并链接到目前可获得的可靠公开依据，帮助你判断真实实现，而不只看项目自述。

## 目录

- ✅ [官方项目](#官方项目-6) — **6**
- 📦 [SDK 与客户端](#sdk-与客户端-55) — **55**
- 🧠 [Jev-like 模型](#jev-like-models) — **65**
- 🧩 [框架与集成](#框架与集成-78) — **78**
- 🤖 [Agent 工具](#agent-工具-223) — **223**
- 🖥️ [浏览器与计算机操作](#浏览器与计算机操作-75) — **75**
- 🪟 [应用](#应用-128) — **128**
- 🎮 [游戏与模拟](#游戏与模拟-70) — **70**
- 🧪 [演示与试验场](#演示与试验场-64) — **64**
- 📊 [基准测试与研究](#基准测试与研究-114) — **114**
- 📚 [其他列表](#其他列表-39) — **39**

本 README 是一份带日期的完整快照，收录 **917 个公开 GitHub 仓库**。Star 数采集于 **2026 年 9 月 18–25 日**，仅用于帮助发现项目，不代表质量排名；使用前请到原仓库确认实际行为、活跃度和许可证。

## 今日新增

<details open>
<summary><strong>2026 年 9 月 25 日新增 20 个项目</strong></summary>

- **Jev-like 模型   (5):** [ollaya](https://github.com/ollaya-dev/ollaya), [Eikos](https://github.com/caiovicentino/eikos), [JevAny](https://github.com/weitianxin/JevAny), [Bev](https://github.com/Reza2kn/Bev), [Verdict](https://github.com/Manavarya09/verdict)
- **框架与集成   (2):** [Prompture](https://github.com/jhd3197/Prompture), [gut](https://github.com/vinibrsl/gut)
- **Agent 工具   (3):** [memsearch](https://github.com/zilliztech/memsearch), [agentconnect](https://github.com/agentconnect-md/agentconnect), [distill](https://github.com/samuelfaj/distill)
- **浏览器与计算机操作   (2):** [Jevry](https://github.com/michaelswissa/jevry), [jev-browser-bridge](https://github.com/lexmount/jev-browser-bridge)
- **应用   (5):** [TradingAgents](https://github.com/TauricResearch/TradingAgents), [PyGPT](https://github.com/szczyglis-dev/py-gpt), [Paca](https://github.com/Paca-AI/paca), [jevclip](https://github.com/cclank/jevclip), [Byeori](https://github.com/joonan-lab/byeori)
- **演示与试验场   (2):** [away-together-starter](https://github.com/earlyaidopters/away-together-starter), [Magic Jev Ball (mikecann)](https://github.com/mikecann/magic-jev-ball)
- **基准测试与研究   (1):** [Convex Decision Evals](https://github.com/get-convex/convex-evals)

</details>

### 官方项目   (6)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [TypeSafe agent skills](https://github.com/typesafe-ai/skills) | ★ 765 | — | 2026-09-19 | 面向 Claude Code、Codex 及兼容 Agent 的官方技能，涵盖原语、模式和评测结构设计。 |
| [System One adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python) | ★ 171 | Python | 2026-09-19 | 官方即插即用 TypeSafeClient 替代实现，支持 OpenAI、Anthropic 及兼容 LLM API，用于对比 Jev 与聊天模型。 |
| [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) | ★ 168 | TypeScript | 2026-09-19 | 官方 TypeScript/JavaScript 客户端，可推断答案类型；安装：`npm install @typesafe-ai/sdk`。 |
| [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) | ★ 128 | Python | 2026-09-19 | 官方同步及异步 Python 客户端；安装：`pip install typesafe-sdk`。 |
| [TypeSafe Daggerverse](https://github.com/typesafe-ai/daggerverse) | ★ 12 | Python | 2026-09-20 | TypeSafe AI 官方 Dagger 模块集合，用于复用 TypeSafe AI 与 System One 工作流。 |
| [TypeSafe Overwatch](https://github.com/typesafe-ai/Overwatch) | ★ 4 | Python | 2026-09-20 | 用于观测和评估 System One 工作流的官方工具。 |

### SDK 与客户端   (55)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [openai-scala-client](https://github.com/cequence-io/openai-scala-client) | ★ 249 | Scala | 2026-09-23 | TypeSafe System One 的 Scala 客户端模块，提交 Jev Noul、Choice 和 Score 问题并返回类型化的答案。 |
| [advocaat](https://github.com/pithings/advocaat) | ★ 85 | TypeScript | 2026-09-19 | 基于 TypeSafe Jev 的轻量类型安全客户端，可针对数据提出 AI 问题。 |
| [ruby_decision_model](https://github.com/obie/ruby_decision_model) | ★ 49 | Ruby | 2026-09-22 | 用于决策模型的 Ruby 客户端，例如 Typesafe Jev |
| [spring-ai-typesafe](https://github.com/spring-ai-community/spring-ai-typesafe) | ★ 31 | Java | 2026-09-23 | 用于 TypeSafe AI Jev API 和 Spring AI TypeSafe 集成的 Java SDK。 |
| [pijev](https://github.com/TypeLLM/pijev) | ★ 27 | Python | 2026-09-23 | 排列不变式 Jev。 |
| [pi-typesafe](https://github.com/DevMortimer/pi-typesafe) | ★ 26 | TypeScript | 2026-09-21 | Pi 扩展，提供批量 Jev 评估工具、终端试验场和供其他扩展使用的类型化 API。 |
| [TypeSafe Swift SDK](https://github.com/krzyzanowskim/TypeSafe) | ★ 24 | Swift | 2026-09-21 | TypeSafe System One API 的 SwiftPM 客户端，支持类型化的 Noul、Choice 和 Score 问题。 |
| [jev (dannote)](https://github.com/dannote/jev) | ★ 17 | Elixir | 2026-09-19 | 面向 OTP 的 TypeSafe Jev 客户端：从 GenServer 响应 Jev，并对答案进行模式匹配。 |
| [go-jev](https://github.com/mattn/go-jev) | ★ 13 | Go | 2026-09-24 | 用于 TypeSafe Jev 的 Go SDK 和 CLI 输入是/否、选择和评分决策。 |
| [swift-jev](https://github.com/d-date/swift-jev) | ★ 11 | Swift | 2026-09-24 | TypeSafe Jev 的 Swift 客户端输入判断而不是生成文本。 |
| [typesafe-ai](https://github.com/Twister915/typesafe-ai) | ★ 10 | Rust | 2026-09-19 | Rust 类型化 TypeSafe AI 客户端，提供异步和阻塞后端以及可观测重试。 |
| [typesafe-sdk-go (Tangerg)](https://github.com/Tangerg/typesafe-sdk-go) | ★ 8 | Go | 2026-09-19 | TypeSafe AI API 的 Go SDK：输入类型化问题，返回概率分布。 |
| [zod-jev](https://github.com/jomatsu/zod-jev) | ★ 7 | TypeScript | 2026-09-19 | Zod 校验结构，Jev 校验语义：将请求体的语义检查转为可由代码设定阈值的校准概率。 |
| [jev-dsl](https://github.com/inanna-malick/jev-dsl) | ★ 6 | Haskell | 2026-09-19 | 面向 Agent 的 Haskell DSL，为 Jev 判断模型提供类型化数据包、类型推断和同标签答案。 |
| [scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk) | ★ 6 | Scala | 2026-09-22 | Jev 的 Scala SDK。没有捆绑效果系统。 |
| [super-jev](https://github.com/Kevthetech143/super-jev) | ★ 5 | Python | 2026-09-19 | 小型、可扩展的 TypeSafe Jev“决策到动作”运行框架。 |
| [typesafe-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk) | ★ 5 | C# | 2026-09-19 | 社区版 .NET SDK，支持 Noul、Choice 和 Score 类型问题并返回带置信度的结构化答案；非 TypeSafe AI 官方项目。 |
| [typesafe-sdk-swift (alterhq)](https://github.com/alterhq/typesafe-sdk-swift) | ★ 4 | Swift | 2026-09-19 | 无依赖的 Swift 6 客户端，支持 Jev Choice、Score、Noul、严格并发、重试和离线传输测试。 |
| [typesafe-sdk (joshmn)](https://github.com/joshmn/typesafe-sdk) | ★ 4 | Ruby | 2026-09-19 | typesafe.ai 的 Ruby 客户端。 |
| [jev-go (Gaurav-Gosain)](https://github.com/Gaurav-Gosain/jev-go) | ★ 3 | Go | 2026-09-19 | TypeSafe System One API 及 Jev 模型的 Go 客户端，以类型化判断和校准概率替代文本生成。 |
| [typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs) | ★ 3 | Rust | 2026-09-19 | TypeSafe AI System One API 的独立 Rust SDK，支持异步和阻塞调用。 |
| [typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift) | ★ 3 | Swift | 2026-09-19 | TypeSafe AI 的 Swift SDK。 |
| [zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai) | ★ 3 | Scala | 2026-09-19 | System One API 的 Scala 3 / ZIO 客户端，通过 NamedTuple 实现端到端类型化和单次往返多问题。 |
| [jod](https://github.com/mateonunez/jod) | ★ 3 | TypeScript | 2026-09-19 | 构建在 Jev 之上的语义 Schema：先在本地验证状态，再映射类型化答案。 |
| [typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk) | ★ 3 | Elixir | 2026-09-19 | 官方 TypeScript AI SDK（ai / ai-sdk）的惯用、类型安全 Elixir 移植版，提供统一 LLM 集成、流式文本、结构化输出、工具调用和 Agent 工作流；Jev 是其首个 System One 模型。 |
| [jev-java](https://github.com/Olti1947/jev-java) | ★ 3 | Java | 2026-09-19 | 符合 Java 习惯的 TypeSafe AI Jev System One 决策引擎 SDK。 |
| [typesafe-ai-go](https://github.com/kisshan13/typesafe-ai-go) | ★ 3 | Go | 2026-09-21 | Community Go client for the TypeSafe System One API with typed builders, retries, examples, and `jev-latest` by default. |
| [typesafe-sdk-rust](https://github.com/codeitlikemiley/typesafe-sdk-rust) | ★ 2 | Rust | 2026-09-19 | TypeSafe AI API 的 Rust SDK。 |
| [typesafe-go (cole-gillespie)](https://github.com/cole-gillespie/typesafe-go) | ★ 2 | Go | 2026-09-19 | 非官方 TypeSafe AI Go SDK，支持类型化答案、重试和上下文。 |
| [jevgo](https://github.com/fgn/jevgo) | ★ 2 | Go | 2026-09-19 | TypeSafe AI System One API（Jev）的 Go 客户端，可选集成 Langfuse 观测。 |
| [TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net) | ★ 2 | C# | 2026-09-19 | TypeSafe AI 平台的 .NET SDK。 |
| [typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java) | ★ 2 | Java | 2026-09-19 | TypeSafe System One API 的社区 Java 客户端（非官方）。 |
| [jevclient](https://github.com/AboveColin/jevclient) | ★ 1 | Python | 2026-09-19 | TypeSafe Jev 的异步 Python 客户端：输入类型化问题，直接获得概率与选择，无需解析文本。 |
| [jev](https://github.com/anilsenay/jev) | ★ 1 | Go | 2026-09-19 | TypeSafe System One API 及 Jev 模型的非官方 Go 客户端。 |
| [typesafe-sdk (binnash)](https://github.com/binnash/typesafe-sdk) | ★ 1 | PHP | 2026-09-19 | 面向 TypeSafe AI JEV 模型系列的 PHP 与 Laravel SDK。 |
| [typesafeai-go](https://github.com/chez-shanpu/typesafeai-go) | ★ 1 | Go | 2026-09-19 | TypeSafe AI API 的 Go SDK。 |
| [jev-go (guillemus)](https://github.com/guillemus/jev-go) | ★ 1 | Go | 2026-09-19 | TypeSafe AI Jev API 的非官方 Go SDK。 |
| [typesafe-client](https://github.com/JedimEmO/typesafe-client) | ★ 1 | Rust | 2026-09-19 | TypeSafe System One API 的非官方类型化异步 Rust 客户端。 |
| [typesafe_sdk_ex](https://github.com/vinnie357/typesafe_sdk_ex) | ★ 1 | Elixir | 2026-09-19 | 基于 Req 的 Elixir TypeSafe AI SDK。 |
| [decido](https://github.com/yairshy/decido) | ★ 1 | Python | 2026-09-19 | Python 概率决策库，可使用 Jev 或自带提供商，并通过 Playwright 抓取网页。 |
| [typesafe-go (zhirschtritt)](https://github.com/zhirschtritt/typesafe-go) | ★ 1 | Go | 2026-09-19 | 符合 Go 习惯的 TypeSafe AI API SDK。 |
| [typesafe-sdk-php (Butochnikov)](https://github.com/Butochnikov/typesafe-sdk-php) | ★ 1 | PHP | 2026-09-22 | TypeSafe System One 的非官方 PHP 客户端，具有类型化 Choice、Score 和 Noul 请求以及同步或并发传输。 |
| [jev-sdk-java](https://github.com/luigivis/jev-sdk-java) | ★ 1 | Java | 2026-09-22 | TypeSafe AI Jev (System One) 决策 API 的类型安全 Java 21 客户端 |
| [s1-rs](https://github.com/AbdelStark/s1-rs) | ★ 0 | Rust | 2026-09-19 | Rust 的类型化 System One 层，支持 Choice、Score 和 Noul。 |
| [typesafe-rs](https://github.com/AbdelStark/typesafe-rs) | ★ 0 | Rust | 2026-09-19 | 以低延迟为优先的 Rust TypeSafe System One SDK。 |
| [typesafe_ai (hfiguera)](https://github.com/hfiguera/typesafe_ai) | ★ 0 | Elixir | 2026-09-19 | TypeSafe AI System One API 的受监督 Mint 客户端。 |
| [kunobi-jev](https://github.com/kunobi-ninja/kunobi-jev) | ★ 0 | Rust | 2026-09-19 | TypeSafe System One API（Jev）的 Rust 客户端。 |
| [jev-cli (lhotwll217)](https://github.com/lhotwll217/jev-cli) | ★ 0 | TypeScript | 2026-09-20 | 面向 TypeSafe System One API 的 JSON 输入、类型化决策输出 CLI。 |
| [typesafe](https://github.com/mattneel/typesafe) | ★ 0 | Elixir | 2026-09-19 | 符合 Elixir 习惯的 TypeSafe AI API 客户端。 |
| [typesafe.zig](https://github.com/mattneel/typesafe.zig) | ★ 0 | Zig | 2026-09-19 | 符合 Zig 习惯的 TypeSafe AI API 客户端。 |
| [tinyjevclient](https://github.com/tinyhumansai/tinyjevclient) | ★ 0 | Rust | 2026-09-19 | 以 Rust 实现的 typesafe.ai Jev 集成。 |
| [typesafe_ai (typesend)](https://github.com/typesend/typesafe_ai) | ★ 0 | Elixir | 2026-09-19 | TypeSafe AI API 的非官方 Elixir SDK。 |
| [typesafe-sdk-go](https://github.com/valksor/typesafe-sdk-go) | ★ 0 | Go | 2026-09-19 | 非官方 Go SDK，与 TypeSafe AI System One 官方 JS 和 Python SDK 保持 1:1 功能对应；非 TypeSafe AI 官方项目。 |
| [typesafe-sdk-php](https://github.com/valksor/typesafe-sdk-php) | ★ 0 | PHP | 2026-09-19 | 非官方 PHP SDK，与 TypeSafe AI System One 官方 JS 和 Python SDK 保持 1:1 功能对应；非 TypeSafe AI 官方项目。 |
| [typesafe-go](https://github.com/Shubham510/typesafe-go) | ★ 0 | Go | 2026-09-22 | 适用于 TypeSafe AI 的 System One API (Jev) 的非官方 Go SDK。 |

<a id="jev-like-models"></a>

### Jev-like 模型   (65)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [laya](https://github.com/NandhaKishorM/laya) | ★ 17,709 | Python | 2026-09-23 | 多语言、非自回归 System 1 决策引擎。在单次前向传递（33 毫秒）中输入超过 100 多种语言的决策，并根据严格正确的评分规则 (RLCD) 通过强化学习进行训练，并通过路由器为每个请求选择正确的检查点。 |
| [SemIf-OpenJev](https://github.com/TheoLeeCJ/SemIf-OpenJev) | ★ 4,121 | Python | 2026-09-24 | 用于本地 Jev 式决策的开放模型语义 if 引擎。 |
| [SemIf](https://github.com/TheoLeeCJ/SemIf) | ★ 2,023 | Python | 2026-09-19 | 在家用 RTX 3090 上通过开源模型实现语义 If；独立项目，与 Jev 或 TypeSafe 无隶属关系。 |
| [kev](https://github.com/jaredpalmer/kev) | ★ 1,558 | Python | 2026-09-21 | 基于 Qwen 的小型可训练 Jev 类决策模型系列，提供类型化原语、数据集、评测工具和本地推理。 |
| [LocalJev](https://github.com/githubnext/localjev) | ★ 662 | TypeScript | 2026-09-21 | 本地 Jev 兼容 System One API，把类型化问题转换为 DiffusionGemma 分类提示与概率。 |
| [von](https://github.com/wfzyx/von) | ★ 507 | Python | 2026-09-23 | 开源System One决策模型。 Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev. |
| [Simple Jev](https://github.com/featherless-ai/simple-jev) | ★ 429 | Python | 2026-09-21 | 开放模型 Jev 类服务，通过读取下一 Token 的 Logit 返回类型化选择、评分和真假判断。 |
| [deepopen](https://github.com/deepopen-com/deepopen) | ★ 383 | Python | 2026-09-23 | 非自回归System 1决策引擎，专为决策类型决策场景设计DeepOpen多语言、非自回归System 1决策引擎。 |
| [laya](https://github.com/receptron/laya) | ★ 302 | TypeScript | 2026-09-23 | 通过 ONNX 运行时从 Node.js / TypeScript 运行 Laya，这是与开源 Jev 兼容的 System-1 决策模型。 |
| [openjev-sglang](https://github.com/ekzhang/openjev-sglang) | ★ 245 | Python | 2026-09-21 | 基于开放模型和 SGLang 的 Jev 兼容 API 服务，使用仅预填充推理提供类型化决策端点。 |
| [agent-jev](https://github.com/malevrigns/agent-jev) | ★ 235 | Python | 2026-09-23 | AgentJev-0.6B - 用于 AI 代理的快速“System One”决策模型：向其提供任何非结构化状态（差异、跟踪、日志）和结构化问题，在约 50 毫秒的前向传递中获得校准的概率分布。零输出令牌解码。 |
| [Open-Jev](https://github.com/Zefan-Cai/Open-Jev) | ★ 231 | Python | 2026-09-23 | 使用 Qwen3.5-2B、Qwen3.5-9B 和 Qwen3.8-27B 开放概率决策。 |
| [rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow) | ★ 230 | Python | 2026-09-22 | Jev 的开放、本地化：来自 LLM 的键入决策，无需生成单个令牌 |
| [jeff](https://github.com/logan-markewich/jeff) | ★ 189 | Python | 2026-09-21 | 基于 GLiNER 系列模型的自托管 Jev 兼容 System One 服务，支持批处理和类型化问题。 |
| [djev-spark](https://github.com/mmastrac/djev-spark) | ★ 168 | HTML | 2026-09-22 | DiffusionGemma NVFP4 关于 DGX Spark 的结构化决策：容器配方 在审核期间未找到存储库级许可证文件。 |
| [openjev](https://github.com/razorback16/openjev) | ★ 142 | Python | 2026-09-19 | 基于 DiffusionGemma 的开放 Jev 兼容 System One 决策服务器。 |
| [AnyJev](https://github.com/nokia-applied-research/AnyJev) | ★ 142 | Python | 2026-09-23 | 将任何 LLM 转变为 Jev 式的决策模型：类型化决策、真实概率、无需训练。 （继续更新）。 |
| [laya-ultrafast](https://github.com/ipenywis/laya-ultrafast) | ★ 116 | Python | 2026-09-23 | 与 jev-ultrafast 相同，但使用 Laya。 |
| [LLM2Jev](https://github.com/Yinsongxu/LLM2Jev) | ★ 114 | Python | 2026-09-21 | 把本地语言模型转换为 Jev 类 Choice、Score 和 Noul 决策引擎，并返回类型化概率。 |
| [CLM](https://github.com/Contrastive-LM/CLM) | ★ 103 | Python | 2026-09-24 | 用于一次性类型决策和选项概率的对比语言模型。 |
| [OpenJev](https://github.com/SiliconLabAI/OpenJev) | ★ 102 | TypeScript | 2026-09-23 | 开源 Jev。 |
| [jimothy](https://github.com/AndrewPrifer/jimothy) | ★ 68 | TypeScript | 2026-09-23 | 从 Jev 兼容示例中训练小型、快速的本地分类器。在浏览器或 Node.js 中本地运行。 |
| [JevK5](https://github.com/allebee/jevk5) | ★ 51 | Python | 2026-09-24 | 开放权重 Jev 替代方案，可在一次前向传递中返回带有概率的类型化决策。 |
| [OpenDecision](https://github.com/deepanwadhwa/OpenDecision) | ★ 45 | Python | 2026-09-21 | 开放语义决策引擎，实现 Choice、Noul 和 Score 原语，并提供 TypeSafe 对比工具。 |
| [open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine) | ★ 40 | Python | 2026-09-23 | Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 对比 Jev 的 0.727，校准效果好 2.5 倍，速度快 4 倍，免费。在 Colab T4 上进行训练只需 30 分钟。 |
| [TypeLLM](https://github.com/TypeLLM/TypeLLM) | ★ 40 | Python | 2026-09-24 | 类型安全语言模型生成和结构化决策。 |
| [solar-mini4-jev](https://github.com/hunkim/solar-mini4-jev) | ★ 39 | Python | 2026-09-24 | 基于 Solar Mini 的 Jev 式类型决策的本地模型。 |
| [laya-server](https://github.com/1Panel-dev/laya-server) | ★ 38 | TypeScript | 2026-09-24 | 自托管 API 和用于 Laya 决策模型的 Web 界面，具有与 Jev 兼容的 API 形状。 |
| [OpenJev-Vision](https://github.com/IamBusy/OpenJev-Vision) | ★ 36 | Python | 2026-09-24 | 开放视觉决策模型，对图像进行一次编码并回答多个结构化问题。 |
| [djev](https://github.com/mmastrac/djev) | ★ 35 | Python | 2026-09-23 | DiffusionGemma 上的 Jev 式结构化决策：来自 vLLM PR 57250 的示例服务器。 |
| [Valen](https://github.com/Liuziyu77/Valen) | ★ 33 | Python | 2026-09-24 | 用于具有视觉功能的类似 Jev 的多模态 System One 模型的训练堆栈。 |
| [jevify](https://github.com/fidecastro/jevify) | ★ 32 | Python | 2026-09-23 | 将 LLM 作为类似 Jev 的端点提供服务的超级简单方法。 |
| [jev-forge](https://github.com/zwliJay/jev-forge) | ★ 32 | Python | 2026-09-24 | 具有动态候选集的校准 Jev 式选择模型的训练和推理堆栈。 |
| [OpenSourceJev](https://github.com/sabeel111/OpenSourceJev) | ★ 31 | Python | 2026-09-23 | 将LLM模型转变为类似Jev的系统。 |
| [typed-decision-bert](https://github.com/hawkymisc/typed-decision-bert) | ★ 30 | Python | 2026-09-23 | 非官方 PoC：类型化决策（noul / choice / Score）HTTP API 背后的 BERT 式编码器决策引擎。 Not affiliated with TypeSafe. |
| [open-jev](https://github.com/nico-martin/open-jev) | ★ 30 | TypeScript | 2026-09-23 | open-jev 是一个以浏览器为中心的 TypeScript 库，用于输入决策：一段文本（状态）加上任意数量的输入问题，一次前向传递会返回每个问题的校准概率分布。不会生成任何内容，因此答案始终是您提供的选项之一。 |
| [OpenThai-SystemOne](https://github.com/iapp-technology/openthai-systemone) | ★ 29 | Python | 2026-09-21 | 开放的泰英双语 System One 模型，提供 Choice 推理、校准、评测脚本和 Jev 对比套件。 |
| [MoJev](https://github.com/MoLeMo-Lab/mojev) | ★ 28 | Python | 2026-09-24 | 开放模型，可在一次前向传递中进行输入、校准决策。 |
| [OpenJev](https://github.com/zhangcy122/OpenJev) | ★ 25 | HTML | 2026-09-24 | 开放概率 Choice、Noul 和 Score API 由受限开放模型日志概率提供支持。 |
| [sys1](https://github.com/alvarobartt/sys1) | ★ 22 | Rust | 2026-09-24 | Rust System One - 兼容 API，用于开放决策模型，例如 Laya。 |
| [arbiter](https://github.com/0xBakeer/arbiter) | ★ 21 | HTML | 2026-09-23 | 通过与 Jev 兼容的 API 和编码代理集成，在 NVIDIA GPU 或 Apple Silicon 上提供类型决策（系统 1）模型 - Laya 或您自己的模型。 |
| [stuntd](https://github.com/bladedevoff/stuntd) | ★ 19 | Python | 2026-09-24 | 本地 Jev 兼容代理，可学习应用程序的类型化决策并通过 Laya 头为它们提供服务。 |
| [notjev](https://github.com/9pings/notjev) | ★ 18 | JavaScript | 2026-09-23 | 超快速 Jev，如服务器，与模型无关，可与任何 OpenAI 兼容端点一起使用。 |
| [open-jev (JoshuaSP)](https://github.com/JoshuaSP/open-jev) | ★ 17 | Python | 2026-09-19 | 使用 DiffusionGemma 进行类型化 JSON 推理，并提供 Every 与 Jev 基准结果。 |
| [JEV-CPU](https://github.com/leesk212/JEV-CPU) | ★ 17 | Python | 2026-09-23 | 在 CPU 上运行 SemIf（Jev 式语义 if 决策）——无 GPU。在一次正向传递中直接从开放模型读取类型化的选项概率，以及 Web UI。 |
| [snap](https://github.com/emnlmn/snap) | ★ 17 | Rust | 2026-09-24 | 一次前向传递中来自非结构化状态的本地 Jev 兼容类型决策。 |
| [ollaya](https://github.com/ollaya-dev/ollaya) | ★ 17 | Rust | 2026-09-25 | 提供 Jev 兼容 System One API 的本地决策模型运行器。 |
| [Eikos](https://github.com/caiovicentino/eikos) | ★ 16 | Python | 2026-09-25 | 面向金融的开放决策模型，提供 Jev 兼容类型化 API 和评测工具。 |
| [tev1](https://github.com/togethercomputer/tev1) | ★ 15 | Python | 2026-09-24 | 受 Jev 启发的开放权重决策模型，从 Qwen3.5 4B 进行微调。 |
| [laya-mps](https://github.com/afshinm/laya-mps) | ★ 13 | Python | 2026-09-23 | 在 Mac 上本地运行 Jev 风格的类型决策，RAM 使用率低且响应快。 |
| [blink](https://github.com/sqliteai/blink) | ★ 13 | C | 2026-09-24 | 高性能 System One 模型，具有嵌入式 C 运行时和 WebAssembly 支持。 |
| [JevAny](https://github.com/weitianxin/JevAny) | ★ 13 | Python | 2026-09-25 | 用于类型化决策与选项概率的开放 Jev 风格模型及训练工具。 |
| [Nemotron_Jev](https://github.com/pst2154/Nemotron_Jev) | ★ 12 | Python | 2026-09-23 | 提出有关文本或 JSON 的类型化问题，并在浏览器中检查模型导出的概率分布。 One container runs the model, the original Decision Lab explorer, and a TypeSafe-shaped API. |
| [open-jev](https://github.com/kyegomez/open-jev) | ★ 11 | Python | 2026-09-23 | 一个开源的、从第一原则出发重建 TypeSafe AI 的 Jev 背后思想的项目，用 pytorch 编写。 |
| [snapjudge](https://github.com/Micha0827/snapjudge) | ★ 11 | Python | 2026-09-23 | 从 Apple Silicon 上的本地 Qwen 模型中输入决策（选择/评分/是-否）。概率直接来自逻辑，没有文本生成。 TypeSafe-compatible HTTP API, runs on MLX. |
| [jevper](https://github.com/zhulinchng/jevper) | ★ 11 | Python | 2026-09-24 | Jev 形状的分类包装器，位于 OpenAI 兼容客户端上，返回概率和置信度。 |
| [Bev](https://github.com/Reza2kn/Bev) | ★ 11 | Python | 2026-09-25 | 使用三值模型进行 Jevfire 风格候选评分的本地 System One API；概率仅表示候选间的相对分数。 |
| [open-spark-jev](https://github.com/abhishek085/open-spark-jev) | ★ 5 | Python | 2026-09-21 | Open local System One implementation for NVIDIA DGX Spark with a Jev-compatible API. |
| [poorjev](https://github.com/rupeshpoojary9/poorjev) | ★ 5 | Python | 2026-09-22 | 类似 Jev 的本地系统 One 决策层，无需托管 API，即可返回类型选择和校准置信度。 |
| [OpenJev (xingwudao)](https://github.com/xingwudao/OpenJev) | ★ 5 | Python | 2026-09-22 | OpenJev：一个独立的、受 Jev 启发的 System One 决策 API，基于 TypeSafe.ai 概念。选择、分数和 noul 原语、本地模拟服务器、Python 和 TypeScript SDK。真实推理计划；不隶属于 TypeSafe AI。审核期间未找到存储库级许可证文件。 |
| [edgejev](https://github.com/yzfly/edgejev) | ★ 5 | Python | 2026-09-22 | 使用 ONNX 和量化模型进行离线 CPU 推理的本地类 Jev 类型决策运行时。 |
| [jev-local](https://github.com/us/jev-local) | ★ 3 | Python | 2026-09-22 | 本地 Jev 兼容评估服务器：POST /v1/systemone，输入 noul/choice/score，开放权重，无候补名单 审核期间未找到存储库级许可证文件。 |
| [TinyJev](https://github.com/ankit-aglawe/tinyjev) | ★ 3 | Python | 2026-09-23 | 拥有自有权重的本地 5.96 亿参数类型化决策模型，支持 Choice、Score、Noul，并提供兼容 Jev 的 System One 端点。 |
| [Diffusion Jev](https://github.com/Hangzhi/diffusion-jev-sglang) | ★ 1 | Python | 2026-09-23 | 基于 DiffusionGemma 与 SGLang 的独立图文类型化决策服务器，附绘图试验场和公开评测材料。 |
| [Verdict](https://github.com/Manavarya09/verdict) | ★ 0 | Python | 2026-09-25 | 独立的多语言决策模型，提供校准答案、弃答机制和 Jev 兼容 API。 |

### 框架与集成   (78)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [litellm](https://github.com/BerriAI/litellm) | ★ 59,363 | Python | 2026-09-22 | 具有 TypeSafe 护栏和 Jev 分类器的 AI 网关，用于策略判断和基于复杂性的请求路由。 |
| [oh-my-pi](https://github.com/can1357/oh-my-pi) | ★ 32,394 | TypeScript | 2026-09-22 | 具有 TypeSafe 判断提供程序的编码代理，该提供程序使用 Jev 进行类型检查、路由和工作流程决策。 |
| [json-render](https://github.com/vercel-labs/json-render) | ★ 17,982 | TypeScript | 2026-09-22 | 带有实验评估器的生成式 UI 框架，可让 Jev 在应用程序提供的组合标准中进行选择。 |
| [eve](https://github.com/vercel/eve) | ★ 5,274 | TypeScript | 2026-09-19 | Vercel 开源 Agent 框架，在实验性 evaluate 流程中将 Jev 作为默认评测模型。 |
| [ai](https://github.com/laravel/ai) | ★ 1,183 | PHP | 2026-09-22 | Laravel AI SDK 带有 TypeSafe 提供程序，用于 Jev Choice、Score 和 Noul 分类请求。 |
| [learn-agent-architecture](https://github.com/hardness1020/learn-agent-architecture) | ★ 980 | Python | 2026-09-24 | 使用 Jev 进行快速类型控制决策的代理架构示例。 |
| [ai-cli](https://github.com/vercel-labs/ai-cli) | ★ 807 | TypeScript | 2026-09-19 | Vercel Labs 终端 CLI，可在 evaluate 命令中使用 Jev 作为评测模型。 |
| [hippo-memory](https://github.com/kitfunso/hippo-memory) | ★ 752 | TypeScript | 2026-09-22 | 具有可选 Jev 重新排序器的代理内存库，可判断哪些检索到的内存是相关的。 |
| [ai-sdk-provider](https://github.com/OpenRouterTeam/ai-sdk-provider) | ★ 686 | TypeScript | 2026-09-23 | Vercel AI SDK 的 OpenRouter 提供程序包含通过 OpenRouter 聊天和完成 API 对数百种模型的支持。 |
| [aiavatarkit](https://github.com/uezo/aiavatarkit) | ★ 678 | Python | 2026-09-22 | 对话化身框架，带有 Jev 门，可判断说话者是否已完成回合。 |
| [smithers](https://github.com/smithersai/smithers) | ★ 417 | TypeScript | 2026-09-19 | Agent 化 TypeScript 工作流框架，内置 Jev 会话检查器。 |
| [pg-jev](https://github.com/realZachi/pg-jev) | ★ 224 | Python | 2026-09-19 | 由 TypeSafe Jev 驱动的 PostgreSQL 扩展，可用自然语言查询 Postgres 表。 |
| [skillbox](https://github.com/kitze/skillbox) | ★ 200 | TypeScript | 2026-09-19 | 面向 AI Agent 的自托管、版本化技能库，可通过 TypeSafe 或 AI 网关提供 Jev 推荐。 |
| [ai-backends](https://github.com/donvito/ai-backends) | ★ 146 | HTML | 2026-09-23 | 用于常见 AI 用例的 API 服务器运行时 - 支持多个模型和提供者。使用 Ollama 或 LM Studio 在本地运行，或通过 OpenRouter、OpenAI、Anthropic 或 Google 在云端运行。 |
| [NeuroLink](https://github.com/juspay/neurolink) | ★ 134 | TypeScript | 2026-09-21 | 统一 AI SDK，其 TypeSafe decide API 为模型路由、压缩、工具选择和检索规划提供类型化判断。 |
| [pg_typesafe](https://github.com/giuliosmall/pg_typesafe) | ★ 79 | C | 2026-09-19 | 用于 TypeSafe AI（Jev）分类的早期预览版 PostgreSQL 扩展。 |
| [jev-shell-history](https://github.com/mrnugget/jev-shell-history) | ★ 67 | TypeScript | 2026-09-19 | 由 Jev 排序的 Fish 风格 zsh 历史自动建议。 |
| [milvus-model](https://github.com/milvus-io/milvus-model) | ★ 60 | Python | 2026-09-24 | Milvus 模型库，带有用于语义搜索的 TypeSafe Jev reranker 提供程序。 |
| [beam_weaver](https://github.com/caudena/beam_weaver) | ★ 56 | Elixir | 2026-09-23 | BeamWeaver 将 Jev Choice、Score 和 Noul 评估公开为 Elixir 工作流程中提供者中立的决策模型调用。 |
| [system-one](https://github.com/iamaamir/system-one) | ★ 47 | TypeScript | 2026-09-24 | 用于 TypeScript 和 Pi 编码代理的提供者中立 System One 运行时。 |
| [neo4jev](https://github.com/jexp/neo4jev) | ★ 38 | Jupyter Notebook | 2026-09-19 | 使用邻接关系分类器，让 typesafe.ai 的 Jev System One 模型在 Neo4j 图中导航。 |
| [tocket](https://github.com/pedrocivita/tocket) | ★ 38 | TypeScript | 2026-09-23 | Jev 从有界选项中选择下一步，并将该选择记录在 Tocket 的共享项目笔记本中。 |
| [jev-tree](https://github.com/Chuf-H/jev-tree) | ★ 36 | Python | 2026-09-24 | 用于可验证的多步骤 Jev 决策的概率树和图形运行时。 |
| [Jevbridge](https://github.com/tacticocc/Jevbridge) | ★ 35 | TypeScript | 2026-09-21 | ACP 与 MCP 适配器，把 Jev 类型化决策和计算机操作能力提供给 Codex、Claude、OpenCode 等 Agent。 |
| [Astra](https://github.com/matrixorigin/Astra) | ★ 32 | Rust | 2026-09-23 | Astra 使用本机 Jev 判断来检查代理上下文并选择有证据支持的运行时操作。 |
| [Loki](https://github.com/wundercorp/loki) | ★ 26 | Python | 2026-09-19 | 自我改进 Agent 框架，可选配 TypeSafe Jev，以执行 Choice、Score 和 Noul 类型化判断。 |
| [HA-Jev](https://github.com/AboveColin/HA-Jev) | ★ 24 | Python | 2026-09-19 | TypeSafe Jev 的 Home Assistant 集成，可针对家庭状态提问，并将概率、选择或评分作为实体返回。 |
| [ST-jeved](https://github.com/mossyfield/ST-jeved) | ★ 22 | JavaScript | 2026-09-22 | SillyTavern 扩展，Jev 在添加指导之前根据配置的旁白规则对回复进行评分。 |
| [laya-jev-GraphRAG](https://github.com/bodepudimuneendra-netizen/laya-jev-GraphRAG) | ★ 22 | Python | 2026-09-24 | 具有可交换本地 Laya 或云 Jev 决策模型的代理 GraphRAG 管道。 |
| [duckdb-jev (colliber)](https://github.com/colliber/duckdb-jev) | ★ 20 | C++ | 2026-09-22 | DuckDB 扩展：输入 Jev 答案作为真正的 SQL 类型 |
| [ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe) | ★ 15 | Ruby | 2026-09-19 | RubyLLM 2 的 TypeSafe 结构化输出提供商。 |
| [invalidate](https://github.com/chopratejas/invalidate) | ★ 15 | Python | 2026-09-22 | AI 内存的失效层。每个事实都有租约；新的证据结束了这一切。基于 TypeSafe Jev 构建。 |
| [jev-reranker](https://github.com/hotchpotch/jev-reranker) | ★ 15 | Python | 2026-09-23 | Jev 支持的 Python 中 RAG 的相关性过滤和重新排名。 |
| [hunch](https://github.com/carldaws/hunch) | ★ 14 | Ruby | 2026-09-23 | Ruby 和 Rails 的概率控制流 - 由 TypeSafe 的 Jev 提供支持。 |
| [Prompture](https://github.com/jhd3197/Prompture) | ★ 14 | Python | 2026-09-25 | 集成 TypeSafe Jev 驱动的结构化输出库，支持 Noul、Choice 和 Score 决策。 |
| [jev-edge](https://github.com/kiwi0719/jev-edge) | ★ 13 | Lua | 2026-09-23 | Typed-judgment admission control at the traffic edge: three-layer prompt-injection and abuse filter for nginx/OpenResty, powered by TypeSafe Jev.故障打开、缓存、热重载。 |
| [discern](https://github.com/doeixd/discern) | ★ 12 | TypeScript | 2026-09-23 | 为 Effect DecisionModel 和 Jev 制作类型安全的不确定性感知语义模式匹配、控制流和智能程序。 |
| [Turn](https://github.com/ekizito96/Turn) | ★ 11 | Rust | 2026-09-23 | 转向程序调用 Jev 进行 Choice、Score 和 Noul 决策并根据类型化的答案路由执行。 |
| [JevLint](https://github.com/iamtoomas/JevLint) | ★ 11 | TypeScript | 2026-09-23 | 由 Jev 提供支持的可配置语义 linting，具有文件级 NOUL 判断和 magic-string 插件。 |
| [gut](https://github.com/vinibrsl/gut) | ★ 11 | Elixir | 2026-09-25 | 通过 ReqLLM 调用 Jev Choice 选择分支的 Elixir 控制流库。 |
| [jevalyn](https://github.com/Ray-Hughes/jevalyn) | ★ 10 | Ruby | 2026-09-21 | Rails-native Jev wrapper for typed, calibrated application control flow. |
| [jevframe](https://github.com/ktaletsk/jevframe) | ★ 10 | Python | 2026-09-22 | pandas 和 Polars 的语义 AI：使用 TypeSafe Jev 对文本进行分类、分析情绪并通过自然语言问题和完整概率对 DataFrame 行进行评分。 |
| [jev-foundation-models](https://github.com/peterfriese/jev-foundation-models) | ★ 10 | Swift | 2026-09-22 | 一种轻量级的原生 Swift 6 桥，将 TypeSafe AI 的 Jev System One 决策模型集成到 Apple 的基础模型框架中。 |
| [algal](https://github.com/hraness/algal) | ★ 10 | TypeScript | 2026-09-24 | 使用 Jev 支持的决策进行代理图演化的语言和运行时。 |
| [J++](https://github.com/Towow-ai/jpp) | ★ 8 | Python | 2026-09-21 | Experimental language and Rust runtime with composable semantic questions and Jev-backed decision methods. |
| [jev-feels](https://github.com/Qew7/jev-feels) | ★ 8 | Ruby | 2026-09-22 | 像普通 Ruby 一样的语义决策 — 感觉？、决定、评分、由 Jev 支持的 Rails 验证和模式匹配 |
| [jevql](https://github.com/kylemclaren/jevql) | ★ 7 | Go | 2026-09-20 | 通过类 psql CLI 及 Go、TypeScript、Python SDK，为原生 PostgreSQL 查询加入 `jev()`、`jev_prob`、`jev_choice` 和 `jev_score`。 |
| [a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai) | ★ 5 | Python | 2026-09-19 | 为 Agent Zero 提供 TypeSafe AI Jev 判断，包括类型化工具和概率卡片。 |
| [typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) | ★ 5 | Python | 2026-09-19 | 异步 LangGraph 工作流，通过 Jev Choice 判断邮件属于发票还是一般邮件，并路由到对应处理器。 |
| [jevsearch](https://github.com/kylemclaren/jevsearch) | ★ 5 | TypeScript | 2026-09-24 | 站点搜索在本地召回候选人，然后使用 Jev 对他们进行评分和重新排名。 |
| [typesafe-on-neon](https://github.com/andrelandgraf/safer-with-jev) | ★ 4 | TypeScript | 2026-09-19 | 面向 Neon AI Gateway 的 Neon Function 代理，使用 TypeSafe Jev 进行路由。 |
| [mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | ★ 4 | C++ | 2026-09-22 | MySQL 的自然语言行过滤，由 TypeSafe Jev 提供支持。 |
| [llama-index-jev](https://github.com/WiktorB2004/llama-index-jev) | ★ 3 | Python | 2026-09-19 | 由 TypeSafe Jev 驱动的 LlamaIndex 重排序器与路由器，提供类型化评分和选择，成本低于 LLM-as-judge。 |
| [jevals](https://github.com/openlayer-ai/jevals) | ★ 3 | Python | 2026-09-21 | Agent evals and guardrails that batch trace checks into one Jev-style decision request. |
| [duckdb-jev (prasanthj)](https://github.com/prasanthj/duckdb-jev) | ★ 3 | C++ | 2026-09-22 | 高吞吐量、强大的本机 DuckDB 扩展，用于来自 SQL 的批处理和流式 TypeSafe/Jev 分类、评分和语义谓词。 |
| [vgi-typesafe](https://github.com/Query-farm/vgi-typesafe) | ★ 3 | Python | 2026-09-22 | 一名 VGI 工作人员将 TypeSafe System One 问题（choice、noul、score）作为 LATERAL-joinable 表函数暴露给 DuckDB/SQL |
| [typesafe-ui](https://github.com/BunsDev/typesafe-ui) | ★ 2 | TypeScript | 2026-09-19 | 用于 TypeSafe AI 的 Shadcn 风格可复用组件与区块。 |
| [laravel-typesafe-jev](https://github.com/Butochnikov/laravel-typesafe-jev) | ★ 2 | PHP | 2026-09-19 | TypeSafe Jev AI 的非官方 Laravel 集成，支持类型化响应、异步请求、作用域依赖注入和测试替身。 |
| [new-api-plugin-typesafe](https://github.com/FFatTiger/new-api-plugin-typesafe) | ★ 2 | JavaScript | 2026-09-19 | 面向 New API 的 TypeSafe AI System One 任务插件，提供原生 `/v1/systemone` 端点、路由和 Token 计费。 |
| [typesafe-ai-rails](https://github.com/GenieRobot/typesafe-ai-rails) | ★ 2 | Ruby | 2026-09-19 | 基于 typesafe-sdk gem 的社区 Rails 集成，支持配置、用量与成本持久化，以及可选置信度策略。 |
| [jev-ui](https://github.com/etweisberg/jev-ui) | ★ 2 | TypeScript | 2026-09-22 | React 组件根据 TypeSafe 的 Jev 返回的校准判断来决定要渲染哪个组件、如何对列表进行排序以及是否显示可供性。审核期间未找到存储库级许可证文件。 |
| [tripwire](https://github.com/noelzappy/tripwire) | ★ 2 | TypeScript | 2026-09-22 | 在用户看到每个 LLM 响应之前对其进行判断。 AI SDK 中间件和 OpenAI 兼容代理。 |
| [jev-layer](https://github.com/typakon4/jev-layer) | ★ 2 | JavaScript | 2026-09-22 | 用于代理的便携式 System-1 决策层具有主机拥有的路由、收据、重播和故障开放集成。 |
| [pydantic-jev-examples](https://github.com/adtyavrdhn/pydantic-jev-examples) | ★ 1 | Python | 2026-09-19 | 使用 Jev 增强 Pydantic AI 能力的一组单文件、可运行小型示例。 |
| [judging-with-typesafe](https://github.com/carlsonchik/judging-with-typesafe) | ★ 1 | Python | 2026-09-19 | 面向 Letta Agent 的技能，通过 TypeSafe System One（Jev）按标准执行判断。 |
| [typesafe-assist](https://github.com/JanOstrowka/typesafe-assist) | ★ 1 | Python | 2026-09-19 | 由 TypeSafe Jev（System One）驱动的 Home Assistant Assist 对话 Agent。 |
| [hunch](https://github.com/steven-shoemaker/hunch) | ★ 1 | Python | 2026-09-23 | Python 库，把 Jev 的 Choice、Score、Noul 问题封装为分类、排序、抽取、核验和 DataFrame 工作流。 |
| [hunch-js](https://github.com/steven-shoemaker/hunch-js) | ★ 1 | TypeScript | 2026-09-23 | TypeScript 库，把 Jev 的 Choice、Score、Noul 问题封装为分类、排序、抽取、核验和数组工作流。 |
| [chat2jev](https://github.com/Chandler-Sun/chat2jev) | ★ 1 | TypeScript | 2026-09-23 | 工作台，将聊天完成请求转换为可编辑的 Jev 状态和问题，将文本生成与类型化的判断进行比较，并公开可重用的代理路由。 |
| [jev-connector](https://github.com/adhamelhayek-lab/jev-connector) | ★ 0 | JavaScript | 2026-09-20 | 将 TypeSafe Jev 决策接入应用工作流的连接器。 |
| [n8n-nodes-typesafe-ai](https://github.com/DomMonte/n8n-nodes-typesafe-ai) | ★ 0 | TypeScript | 2026-09-19 | TypeSafe AI System One API 的 n8n 社区节点，支持带校准概率的是非、选择和评分问题。 |
| [hiep-paseo-plugin](https://github.com/HiepPP/hiep-paseo-plugin) | ★ 0 | TypeScript | 2026-09-20 | 通过 MCP 暴露 Jev 评估能力的本地 Paseo 插件。 |
| [Jev4Mellea](https://github.com/SoundBlaster/Jev4Mellea) | ★ 0 | Python | 2026-09-19 | 连接 Jev 与 Mellea 的适配器。 |
| [ground-zero](https://github.com/zavocc/ground-zero) | ★ 0 | Python | 2026-09-20 | 使用 Jev 检测 AI 幻觉与指令遵循失败的评估框架。 |
| [pytest-jev](https://github.com/allebee/pytest-jev) | ★ 0 | Python | 2026-09-22 | pytest 的语义断言：测试您的 LLM 应用程序的输出含义，由 TypeSafe 的 Jev 判断。 |
| [openclaw-typesafe-ai](https://github.com/Olli0103/openclaw-typesafe-ai) | ★ 0 | TypeScript | 2026-09-22 | OpenClaw 的可选类型 TypeSafe AI Jev 决策，具有 SecretRef 凭证和严格的 API 验证。 |
| [jev-switch](https://github.com/ARCJ137442/jev-switch) | ★ 0 | Rust | 2026-09-24 | 用于 Jev 协议的本地多上游路由器，具有 Rust 后端和 React 接口。 |
| [Yueli DEX](https://github.com/haxitag/Yueli-Dex) | ★ 0 | TypeScript | 2026-09-26 | Choice-only 决策执行框架：本地规则引擎先短路或拦截可规则化策略（零远程调用），未命中时由 16 个场景模板编译出 Choice 请求，路由到 TypeSafe / Cloudflare / Vercel 或自托管 host，由 Jev 从有界选项中选定，答案再映射为可审计的 ActionIntent（请求而非授权，执行方负责权限）。 |

### Agent 工具   (223)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [claude-code-templates](https://github.com/davila7/claude-code-templates) | ★ 30,897 | Python | 2026-09-22 | Claude Code 配置工具包提供基于 Jev 的模型路由、技能建议和工具护栏模块。 |
| [openwork](https://github.com/different-ai/openwork) | ★ 23,654 | TypeScript | 2026-09-19 | 开源 Claude Cowork 替代方案，其评测工具包可使用 Jev 作为类型化裁判，验证 Agent 产出的工作。 |
| [fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | ★ 4,427 | TypeScript | 2026-09-19 | Claude Code 插件，用 Jev 决策替代压缩摘要：一次快速请求评估所有工具调用与结果，丢弃或截断过期内容，其余内容原样保留。 |
| [memsearch](https://github.com/zilliztech/memsearch) | ★ 2,654 | Python | 2026-09-25 | 智能体记忆搜索工具，可用 Jev 判断相关性并重排检索片段。 |
| [agentconnect](https://github.com/agentconnect-md/agentconnect) | ★ 1,428 | TypeScript | 2026-09-25 | 团队智能体工作区，使用 Jev 类型化决策进行响应路由和模型选择。 |
| [distill](https://github.com/samuelfaj/distill) | ★ 688 | Rust | 2026-09-25 | 编码智能体运行时，使用 Jev 决策进行模型路由、上下文保留和工具选择。 |
| [vexjoy-agent](https://github.com/notque/vexjoy-agent) | ★ 423 | Python | 2026-09-23 | 带有 Jev 智能路由的 VexJoy AI 代理 - /do 将简单的英语请求路由到正确的专业代理，并通过审查、测试和学习循环来控制工作。 |
| [foreman](https://github.com/thruwire/foreman) | ★ 406 | Python | 2026-09-19 | 软件工厂 Foreman：使用 Jev 决策让编程 Agent 保持任务方向的监督器。 |
| [jev-review (devagrawal09)](https://github.com/devagrawal09/jev-review) | ★ 366 | TypeScript | 2026-09-19 | 基于 TypeSafe Jev 的分阶段代码审查工作流与本地仪表板。 |
| [hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills) | ★ 345 | Python | 2026-09-21 | Hermes 插件与技能套件，使用 Jev 进行模型路由、技能选择、记忆过滤、压缩和 GUI 操作选择。 |
| [jev-search](https://github.com/superagents-lab/jev-search) | ★ 244 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 搜索网页，覆盖来源选择、查询理解和相关性排序；基于 Search1API。 |
| [decapod](https://github.com/DecapodLabs/decapod) | ★ 233 | Rust | 2026-09-23 | 在保证评估期间，Jev 估计建议的代理轨迹满足其有界目标的可能性。 |
| [Albatross](https://github.com/morganlinton/Albatross) | ★ 232 | Rust | 2026-09-23 | 开源、终端优先的人工智能编码代理，具有完全透明的多模型路由。本地（Ollama、LM Studio、MLX、llama.cpp）或云端，您的钥匙，一个 TUI。没有黑匣子。 |
| [jev-router (gargpratyush)](https://github.com/gargpratyush/jev-router) | ★ 214 | JavaScript | 2026-09-19 | 使用 jev-router 为 Claude Code 的任务选择成本最低的模型。 |
| [jev-gateway](https://github.com/vinilana/jev-gateway) | ★ 181 | TypeScript | 2026-09-23 | 一种将 jev 与编码代理一起使用以进行工具调用推理的简单方法。 |
| [Astra-Ares](https://github.com/miuuyy/Astra-Ares) | ★ 178 | JavaScript | 2026-09-23 | 在 Codex 任务期间 GPT-6 Astra 的自适应推理工作，由 Jev 提供支持，以减少令牌使用。 |
| [compact-adviser](https://github.com/kunchenguid/compact-adviser) | ★ 173 | TypeScript | 2026-09-22 | 使用 Jev 来判断编码会话何时应压缩其上下文的代理插件。 |
| [jev-review (NiazMorshed2007)](https://github.com/NiazMorshed2007/jev-review) | ★ 171 | TypeScript | 2026-09-19 | 本地优先的 MCP 插件，由 Jev 驱动，为 AI 编程 Agent 持续审查软件质量。 |
| [abide](https://github.com/coldteadotai/abide) | ★ 169 | TypeScript | 2026-09-19 | 监督编程 Agent 的编辑，并使用 Jev 标记违反项目规则的修改。 |
| [glowbom-oss](https://github.com/glowbom/glowbom-oss) | ★ 163 | Go | 2026-09-23 | 编码代理可以要求 Jev 判断小的工作流程决策，例如构建结果看起来是否健康。 |
| [Anna-Agent](https://github.com/Foxtailsss-Andy/Anna-Agent) | ★ 149 | TypeScript | 2026-09-23 | Anna 使用 Jev 作为有界企业代理推荐和弃权的快速判断层。 |
| [jev-pruner](https://github.com/tamaratran/jev-pruner) | ★ 130 | TypeScript | 2026-09-21 | Claude Code 与 Codex Hook，通过 Jev 判断长篇 Shell 输出中哪些部分仍然相关，再送入模型上下文。 |
| [jev-semgrep](https://github.com/uehaj/jev-semgrep) | ★ 125 | JavaScript | 2026-09-22 | grep 按含义，跨语言。 TypeSafe Jev 根据含义对每一行进行评分；用 AND/OR/NOT 组合含义。 意思で探す grep。日本语で英语を、英语で日本语を検索できる |
| [jev-mcp (jkudish)](https://github.com/jkudish/jev-mcp) | ★ 121 | TypeScript | 2026-09-19 | TypeSafe 新 Jev AI 模型的 MCP 概念验证。 |
| [building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill) | ★ 118 | — | 2026-09-19 | 用于编写和改进 Jev 调用程序的 Agent 技能。 |
| [typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) | ★ 117 | Go | 2026-09-19 | Go CLI 与单二进制 MCP 服务器，向 Claude Desktop、Claude Code 和 Codex 提供 TypeSafe 判断。 |
| [stanley-code](https://github.com/devagrawal09/stanley-code) | ★ 113 | TypeScript | 2026-09-23 | 用于编码代理的有界 TypeSafe Jev 工作流程。 |
| [supercov](https://github.com/supercorp-ai/supercov) | ★ 109 | Rust | 2026-09-24 | 使用 Jev 判断编码代理更改的代码质量和覆盖率审核器。 |
| [pi-warden](https://github.com/DevMortimer/pi-warden) | ★ 96 | TypeScript | 2026-09-19 | 基于 pi-typesafe 的 Pi 护栏：由 Jev 判断不可逆和偏离任务的工具调用、检测死循环、检查未验证的完成声明并标记低质输出。 |
| [pi-jev (y0usaf)](https://github.com/y0usaf/pi-jev) | ★ 92 | TypeScript | 2026-09-19 | Pi 编程 Agent 的 TypeSafe Jev 决策层，提供可度量的工具调用门控和用于类型化校准答案的 `jev_ask`。 |
| [JevRouter](https://github.com/BillionsBobby/JevRouter) | ★ 90 | TypeScript | 2026-09-19 | 由 Jev 驱动的轻量模型、工具及子 Agent 路由器。 |
| [skills](https://github.com/fabricioctelles/skills) | ★ 90 | Python | 2026-09-23 | 四种代理技能使用 Jev Score 和 Noul 判断来评估具有校准概率的主观标准。 |
| [jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) | ★ 75 | Python | 2026-09-19 | 由 Jev 驱动的 Codex 单轮模型与推理路由器，为每轮选择模型、思考深度和速度模式。 |
| [jev-code](https://github.com/devagrawal09/jev-code) | ★ 75 | TypeScript | 2026-09-19 | 面向编程 Agent 的有边界 TypeSafe Jev 工作流。 |
| [captaincore](https://github.com/CaptainCore/captaincore) | ★ 71 | Go | 2026-09-23 | Jev 对恶意软件扫描结果进行分类，并为 WordPress 维护提供类型为 Noul、Choice 和 Score 的决策。 |
| [grok-bot-jev](https://github.com/Bodila51/grok-bot-jev) | ★ 70 | Python | 2026-09-21 | Grok Bot 集成，由 Jev 在生成模型运行前执行使用门控并路由请求。 |
| [skillranker](https://github.com/Dicklesworthstone/skillranker) | ★ 69 | Rust | 2026-09-19 | 由 TypeSafe.ai Jev 驱动的 Rust CLI，依据实时会话上下文为下一步排序 Agent 技能；支持 Claude Code hooks、结构化 JSON、拒答和本地反馈。 |
| [total-agent-memory](https://github.com/vbcherepanov/total-agent-memory) | ★ 69 | Python | 2026-09-23 | Jev 在代理将检索到的记忆用于答案之前检查它们是否存在矛盾。 |
| [save-token-jev-clean](https://github.com/IAmUnbounded/save-token-jev-clean) | ★ 67 | TypeScript | 2026-09-23 | 用于编码代理的便携式、Jev 引导的上下文压缩。 |
| [jmeter-ai](https://github.com/QAInsights/jmeter-ai) | ★ 60 | Java | 2026-09-23 | Jev 对 JMeter 代理意图进行分类并选择有针对性的工具包，在路由不确定时提供完整的工具回退。 |
| [weflow-cli](https://github.com/zhuobichen/weflow-cli) | ★ 59 | Python | 2026-09-23 | 启用后，Jev 会对微信每日摘要的文章主题和相关性进行分类。 |
| [agent-router](https://github.com/nidhi-singh02/agent-router) | ★ 58 | TypeScript | 2026-09-21 | CLI 使用 Jev 对任务分类，再选择并启动 Cursor、Claude Code、Codex 或 OpenCode，同时匹配模型和推理强度。 |
| [oxlint-plugin-jev](https://github.com/wobsoriano/oxlint-plugin-jev) | ★ 58 | TypeScript | 2026-09-23 | > 该软件包是实验性的。使用风险自负。 |
| [jegrep](https://github.com/can1357/jegrep) | ★ 57 | Rust | 2026-09-21 | 语义 grep CLI，由 Jev 判断哪些文件和精确行范围匹配自然语言代码查询。 |
| [jev-lint](https://github.com/mizchi/jev-lint) | ★ 55 | TypeScript | 2026-09-21 | 文本检查工具，使用 Jev Score 判断源码中的字符串是否符合可配置的写作规则。 |
| [Canny](https://github.com/qkal/Canny) | ★ 52 | TypeScript | 2026-09-23 | 阻止 AI 编码代理声称工作已在没有证据的情况下完成。 Deterministic hooks decide, TypeSafe's Jev advises.仅附加账本，零运行时依赖性。 |
| [jev-recruiter](https://github.com/skeptrunedev/jev-recruiter) | ★ 46 | Python | 2026-09-23 | Jev 提供支持的 LinkedIn 招聘代理。观看它浏览相关个人资料、保存链接并根据您的招聘简介审查证据。 |
| [jev-rules](https://github.com/EliaAlberti/jev-rules) | ★ 45 | JavaScript | 2026-09-21 | Claude Code 插件，由 Jev 判断每个提示和正在编辑的文件适用哪些项目规则。 |
| [jev-sift](https://github.com/kbhuw/jev-sift) | ★ 45 | JavaScript | 2026-09-22 | 代理插件和 MCP 工具，Jev 对批量文本进行分类，以便代理只能读取相关项目。审核期间未找到存储库级许可证文件。 |
| [duet-agent](https://github.com/dzhng/duet-agent) | ★ 43 | TypeScript | 2026-09-19 | 全栈 Agent 框架，支持记忆、长任务、多 Agent 中继和基于 Jev 的模型路由表。 |
| [hono-jev-router](https://github.com/yusukebe/hono-jev-router) | ★ 39 | TypeScript | 2026-09-19 | 按语义路由 HTTP 请求的 Hono 路由器，由 Jev 驱动。 |
| [JevRev](https://github.com/Alex314618-create/JevRev) | ★ 39 | TypeScript | 2026-09-23 | LLM + Jev 工作流程。用里面的脊柱增强你的脊椎动物大脑。 |
| [skilled-agent-harness_spec-driven-loops](https://github.com/MichelKerkmeester/skilled-agent-harness_spec-driven-loops) | ★ 36 | TypeScript | 2026-09-23 | cli-jev 传输将类型判断请求从技能工具传送到 Jev CLI 和 MCP 接口。 |
| [jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision) | ★ 35 | JavaScript | 2026-09-21 | Jev decision plugin for agent harnesses. |
| [ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill) | ★ 34 | Python | 2026-09-19 | 让 Hermes 及其他 Agent 调用 TypeSafe Jev 的技能。 |
| [Jev-Mem](https://github.com/libingzheren/Jev-Mem) | ★ 34 | Python | 2026-09-23 | Jev-Mem：系统一控制代理内存。 |
| [obsidian-llm-hub](https://github.com/takeshy/obsidian-llm-hub) | ★ 34 | TypeScript | 2026-09-23 | 用于 AI 聊天、工作流程自动化和语义搜索的 Obsidian 插件 — 支持 Gemini、OpenAI、OpenRouter、Grok、Ollama 和 CLI 后端。 |
| [jev-skill-suggester](https://github.com/win4r/jev-skill-suggester) | ★ 32 | Python | 2026-09-23 | 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI、Codex 技能、双语文档和实例。 |
| [pi-jev-skill-picker](https://github.com/safzanpirani/pi-jev-skill-picker) | ★ 29 | TypeScript | 2026-09-23 | 使用 TypeSafe Jev 对当前任务的 Pi 代理技能进行排名。 |
| [jevgrep](https://github.com/nassim-arifette/jevgrep) | ★ 28 | TypeScript | 2026-09-21 | Semantic code search CLI and MCP server with exact source excerpts. |
| [ai-news-aggregator](https://github.com/flyryan/ai-news-aggregator) | ★ 27 | Python | 2026-09-23 | 由 GLM-5.3-Flash 和 Jev 提供支持的多智能体人工智能新闻管道。 |
| [winnow](https://github.com/GhalebDweikat/winnow) | ★ 26 | Python | 2026-09-19 | Claude Code 的校准上下文筛选器，每个工具结果进入上下文前都由 System One 模型判断。 |
| [jev-judge-mcp](https://github.com/PyModel/jev-judge-mcp) | ★ 24 | Python | 2026-09-24 | MCP 工具，公开 Jev 进行验证、筛选、分类、重新排名、审查、门控和评分。 |
| [snifftest](https://github.com/DanRWilloughby/snifftest) | ★ 22 | TypeScript | 2026-09-19 | 检测 AI 写作痕迹的文本 Linter，零依赖，结合可计数规则与一个判断模型。 |
| [jev-use](https://github.com/shitianfang/jev-use) | ★ 20 | JavaScript | 2026-09-23 | Claude Code / Codex / pi 插件，可将不需要文本输出的代理步骤传递给 Jev（TypeSafe 的判断模型） - 测量 p50 ~230 毫秒，每 1,000 个判断约 0.02 美元，并通过类型升级返回 LLM。 |
| [agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | ★ 20 | TypeScript | 2026-09-24 | MCP 代理，使用 Jev 筛选代理工具调用和工具结果。 |
| [jev-agent-design-with-topk-logits-choices](https://github.com/6Mikao9/jev-agent-design-with-topk-logits-choices) | ★ 20 | Python | 2026-09-24 | Jev - 具有 top-k 提案、后备决策、内存和重新规划的原生代理设计。 |
| [pi-advisor](https://github.com/philipbrembeck/pi-advisor) | ★ 20 | TypeScript | 2026-09-24 | 可定制的 Pi 顾问和执行器工作流程，具有 Jev 决策支持。 |
| [jev-mcp (burnigtm)](https://github.com/burnigtm/jev-mcp) | ★ 19 | TypeScript | 2026-09-19 | 将 TypeSafe Jev 接入 Cursor、Codex 及任意 MCP 客户端编程循环的 MCP 服务器。 |
| [ErisLint](https://github.com/Eriskii/ErisLint) | ★ 19 | Rust | 2026-09-23 | Rust linter 由可配置的 Jev 规则提供支持，并带有 VS Code 扩展。 |
| [Multi-Agent](https://github.com/masonlee39/Multi-Agent) | ★ 19 | TypeScript | 2026-09-23 | 多代理编排引擎，具有热会话、持久邮箱和每任务令牌记帐。 |
| [yoshi](https://github.com/compozy/yoshi) | ★ 18 | TypeScript | 2026-09-19 | Claude Code 与 Codex 的上下文裁剪代理，由 Jev 判断哪些历史仍有价值；概念验证将迁移至 [Compozy](https://github.com/compozy/compozy)。 |
| [pi-jev (TheoOliveira)](https://github.com/TheoOliveira/pi-jev) | ★ 18 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 为 Pi 编程 Agent 提供语义工具路由和类型化 System One 决策。 |
| [cnki-skills](https://github.com/longkou1988/cnki-skills) | ★ 18 | Python | 2026-09-23 | 可选的 cnki-jev 包使用 Jev 进行首次文献筛选，并升级复杂案例以供模型或人工审核。 |
| [pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode) | ★ 17 | TypeScript | 2026-09-19 | 由 Jev 驱动的 Pi 编程 Agent 自动模式，按语义自动批准 Bash、写入和编辑调用，无法决策时默认拒绝。 |
| [jev-axi](https://github.com/shiftynick/jev-axi) | ★ 17 | TypeScript | 2026-09-19 | 面向 Agent 的 Jev CLI，可在 Shell 中快速执行带校准的选择、评分、检查、排序、分诊和护栏判断。 |
| [oh-my-harness](https://github.com/kyu1204/oh-my-harness) | ★ 17 | TypeScript | 2026-09-23 | 用自然语言驯服你的人工智能编码代理。从单个命令生成强制护栏（CLAUDE.md、挂钩、设置）。 |
| [zero-api-key-web-search](https://github.com/wd041216-bit/zero-api-key-web-search) | ★ 17 | Python | 2026-09-23 | 由 Jev 驱动的 AI 代理搜索基础设施：零 API 密钥、MCP 就绪、LLM 上下文感知，具有本地神经证据验证。 |
| [dsh-jev](https://github.com/buberlo/dsh-jev) | ★ 16 | TypeScript | 2026-09-23 | 由 Jev 驱动的 DeepSeek Harness 决策层。 |
| [a3m-router](https://github.com/Das-rebel/a3m-router) | ★ 16 | TypeScript | 2026-09-23 | ⚡ 自适应多模型 LLM 路由器 — 80 多个提供商、Jev System One 单通道路由（model=jev-auto）、信息素轨迹故障转移、并行集成合并。 npm：自适应内存多模型路由器。 |
| [jgrep](https://github.com/kyu1204/jgrep) | ★ 16 | TypeScript | 2026-09-23 | grep 查看代码的用途，而不是它的名称。 Semantic code search powered by TypeSafe Jev. |
| [jev-cli](https://github.com/shaharia-lab/jev-cli) | ★ 16 | Rust | 2026-09-23 | Command-line tool for TypeSafe AI's Jev model.询问有关任何文本的是/否、多项选择题和标题问题，并获得校准后的概率。答案将成为 shell 和 CI 的退出代码、脚本的 JSON 以及 AI 代理的 MCP 工具。 |
| [JevLoop](https://github.com/zjunlp/JevLoop) | ★ 16 | TypeScript | 2026-09-23 | 代理循环，其中决策不会花费大量语言模型调用。零依赖，离线运行，无需 API 密钥。 |
| [deepreseach-learing](https://github.com/1612535983/deepreseach-learing) | ★ 15 | Python | 2026-09-23 | Jev 在影子模式下运行，将结构化质量评估附加到生成的深度研究报告中。 |
| [jev-test-filter](https://github.com/mizchi/jev-test-filter) | ★ 15 | TypeScript | 2026-09-23 | Score 使用 Jev 对 git diff 进行的每个测试，并发出已经理解的过滤器参数 vitest、node:test、Playwright、cargo test 和 go test。 |
| [jevvy](https://github.com/PanAchy/jevvy) | ★ 15 | TypeScript | 2026-09-23 | Jev 支持的编码代理插件。 |
| [pi-review](https://github.com/ZephyrDeng/pi-review) | ★ 15 | TypeScript | 2026-09-23 | Jev 筛选可能的缺陷，仲裁不明确的发现，对范围进行分类，并支持跨轮审查记忆。 |
| [is-malicious](https://github.com/luantak/is-malicious) | ★ 14 | TypeScript | 2026-09-19 | 使用 Jev 扫描代码库中的隐蔽、欺骗或窃取数据行为，在运行前报告可疑文件与行范围。 |
| [pi-jev-router (philippdubach)](https://github.com/philippdubach/pi-jev-router) | ★ 14 | TypeScript | 2026-09-21 | Pi model router using Jev and a quality-cost-latency Pareto frontier. |
| [patdown](https://github.com/tyler-dot-earth/patdown) | ★ 14 | TypeScript | 2026-09-22 | 使用 Jev 进行阻止、引导和“模糊处理”，使代理遵循您的规则和约定。 CLI、github 操作、pi 包等等。用效果构建。 |
| [MetaCog](https://github.com/ItIsCuthNotCup/MetaCog) | ★ 14 | Python | 2026-09-23 | MetaCoginition 由 Reflex 4B 提供支持。 |
| [Tiermem](https://github.com/FreedomIntelligence/Tiermem) | ★ 13 | Python | 2026-09-23 | Jev 集成在紧凑的 Markdown 笔记和可搜索的原始历史记录之间路由代理内存查询。 |
| [azdaja](https://github.com/kubet/azdaja) | ★ 13 | Python | 2026-09-23 | Azdaja 在有界局部评估表面内公开可选的 Jev 语义判断。 |
| [jevyoumean](https://github.com/syumai/jevyoumean) | ★ 13 | Go | 2026-09-23 | 语义“你是说吗？” for any CLI — wraps commands and uses TypeSafe's Jev to match subcommand typos by intent, not edit distance. |
| [jgrep](https://github.com/keltokhy/jgrep) | ★ 12 | Python | 2026-09-19 | 以自然语言描述作为匹配模式的 Grep，使用 Jev 决策模型按语义过滤行。 |
| [jev-code](https://github.com/FrancoisChastel/jev-code) | ★ 12 | TypeScript | 2026-09-23 | Jev，TypeSafe 的 System One 分类器，作为 Claude Code、Codex、Pi 和 OpenCode 中的工具：类型化分类、检查、评分、排名和询问，以及单命令设置。 |
| [jevcore](https://github.com/PerryLink/jevcore) | ★ 12 | TypeScript | 2026-09-23 | 用于 DeepSeek Harness 的 TypeSafe Jev、模型上下文协议和普通节点：类型化判断而不是散文，默认离线。 |
| [claude-jev](https://github.com/0x7067/claude-jev) | ★ 12 | Python | 2026-09-24 | Claude Code 插件，使用 Jev 进行规则检查、逐字压缩和提示路由。 |
| [lintus](https://github.com/virolea/lintus) | ★ 12 | Rust | 2026-09-24 | 使用 Jev 根据简单语言规则评估代码的自然语言 linter。 |
| [jev-seo](https://github.com/AkashPriyadarshii/jev-seo) | ★ 11 | Rust | 2026-09-19 | 面向 Agent 的 SEO 与 GEO CLI 套件和 MCP 服务器，使用 DuckDuckGo 证据与 Jev 评分。 |
| [jev-mcp (blakestone-x)](https://github.com/blakestone-x/jev-mcp) | ★ 11 | Python | 2026-09-19 | TypeSafe Jev MCP 服务器，为任意 Agent 提供类型化分类、评分、检查、匹配和筛查，并为每个答案附带置信度。 |
| [jev-cli (Nasrallah-AL)](https://github.com/Nasrallah-AL/jev-cli) | ★ 11 | TypeScript | 2026-09-19 | TypeSafe Jev AI 模型的命令行工具。 |
| [slop-grader](https://github.com/lukstei/slop-grader) | ★ 11 | TypeScript | 2026-09-22 | 由 Jev 驱动、基于规则的文本文件评分器。针对每条线并行运行每条规则。不略读，不漏行。 |
| [cmd-mod-jev-nudge](https://github.com/CommandCodeAI/cmd-mod-jev-nudge) | ★ 11 | TypeScript | 2026-09-23 | 命令代码 mod：当代理因 Jev 判断而停止并剩余工作时，推动代理继续前进。 |
| [eutrya](https://github.com/hellozenstrategist-lab/eutrya) | ★ 11 | JavaScript | 2026-09-23 | Jev - 用于自主研究、多代理群、持久狩猎板和长时间运行的代理工作流程的原生人工智能安全工具。 CLI - 首创、开源，专为授权安全研究而构建。 |
| [pi-jev](https://github.com/madeye/pi-jev) | ★ 11 | TypeScript | 2026-09-23 | Jev 辅助文件检索和请求缓存，以实现更快的 Pi 工作流程。 |
| [zevals](https://github.com/opencx-labs/zevals) | ★ 11 | TypeScript | 2026-09-23 | Jev 判断代理记录的是或否断言，当其概率达到配置的阈值时测试通过。 |
| [pi-jev-router](https://github.com/win4r/pi-jev-router) | ★ 11 | TypeScript | 2026-09-23 | Task-boundary model routing for Pi Coding Agent, powered by TypeSafe Jev.保守的策略、精确的缓存和可观察的故障转移。 |
| [jev (BorisLeMeec)](https://github.com/BorisLeMeec/jev) | ★ 10 | Go | 2026-09-19 | 面向 Claude Code 的 Jev 插件。 |
| [jevwire](https://github.com/Brainwires/jevwire) | ★ 10 | TypeScript | 2026-09-19 | Agent 的 Jev 决策层，包含 MCP 服务器、可嵌入 DecisionModel 库和仅在升级时介入的 Claude Code 插件。 |
| [JevLint](https://github.com/huntedman/JevLint) | ★ 10 | TypeScript | 2026-09-19 | 由 Jev 驱动的可配置语义 Linter，支持文件级 Noul 判断和魔法字符串插件。 |
| [jev-guard](https://github.com/leepokai/jev-guard) | ★ 10 | JavaScript | 2026-09-19 | 由 Jev 驱动的编程 Agent 提示词注入与危险操作护栏，支持 Claude Code、Codex、Pi 和 ACP。 |
| [jcr](https://github.com/NiazMorshed2007/jcr) | ★ 10 | JavaScript | 2026-09-21 | Jev Capability Resolver for task-relevant deterministic commands. |
| [evoke](https://github.com/evoke-build/evoke) | ★ 10 | Rust | 2026-09-22 | 软件，通过反射。一个句子成为一个小程序的调用，由 TypeSafe AI 的分类器 Jev 选择，并且仅在足够确定时运行。反应是任何人都可以编写、分享和改进的食谱。一个与您交谈的 CLI、一个用于 git 反射的包管理器以及一个 TypeScript SDK。 |
| [liteagents](https://github.com/BerriAI/liteagents) | ★ 10 | Python | 2026-09-24 | 独立于提供商的代理 SDK，使用类型化路由为每轮选择模型。 |
| [jev-belay](https://github.com/valentynkit/jev-belay) | ★ 9 | JavaScript | 2026-09-20 | Claude Code Stop hook：文件变化后若没有通过检查，就一次询问 Jev 四个问题，阻止未经验证的完成声明；出错时放行。 |
| [hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals) | ★ 8 | Python | 2026-09-19 | 概念验证：让 TypeSafe Jev 审查 Hermes Agent 的智能命令审批；在 153 条真实命令上测得更快且提示更少，仅处理审批。 |
| [typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router) | ★ 8 | Python | 2026-09-19 | Hermes Agent 的 TypeSafe（Jev）技能路由器，在模型调用前选出唯一值得加载的技能；按需启用且仅使用标准库。 |
| [jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router) | ★ 8 | Python | 2026-09-19 | 使用 TypeSafe Jev 实现类型化、感知置信度的 Agent 技能路由。 |
| [pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask) | ★ 8 | TypeScript | 2026-09-19 | 作为 Pi 编程 Agent 静默决策层的 TypeSafe Jev。 |
| [hermes-jev](https://github.com/keeltrace/hermes-jev) | ★ 8 | Python | 2026-09-19 | 使用 TypeSafe Jev 提供类型化 System One 决策、排序、验证及可选 Hermes 工具门控。 |
| [jev-router](https://github.com/rajdhakad9826/jev-router) | ★ 8 | TypeScript | 2026-09-22 | LLM 路由器选择能够处理查询的最便宜的模型，使用 TypeSafe 的 Jev 进行快速分类而不是 LLM 调用。 |
| [omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) | ★ 7 | TypeScript | 2026-09-19 | 通过 TypeSafe 或 OpenRouter 为 OMP 提供由 Jev 评分、原文保留的上下文缩减。 |
| [pi-jev-router](https://github.com/mejiasd3v/pi-jev-router) | ★ 7 | JavaScript | 2026-09-19 | 通过 Vercel AI Gateway 使用 TypeSafe Jev，为 Pi 自动选择模型。 |
| [clean-code-review](https://github.com/frostney/clean-code-review) | ★ 6 | TypeScript | 2026-09-19 | 逐个使用 Jev 按《代码整洁之道》判断 Pull Request 文件，再由 Luna 审查；基于 eve 和 Next.js。 |
| [opencompany](https://github.com/useopencompany/opencompany) | ★ 6 | TypeScript | 2026-09-19 | AI 工作空间，通过 Jev 审批审查以类型化决策约束工作空间操作。 |
| [jev-architect](https://github.com/karanb192/jev-architect) | ★ 6 | HTML | 2026-09-21 | Agent skill for designing and validating Jev decision loops. |
| [pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context) | ★ 6 | TypeScript | 2026-09-22 | 模型性能第一。代币储蓄第二。具有新鲜度感知读取重复数据删除、Jev 日志过滤和可搜索逐字调用功能的 Pi 扩展。保持现有消息历史记录完好无损。 |
| [jev-mcp (arunav25)](https://github.com/arunav25/jev-mcp) | ★ 5 | JavaScript | 2026-09-19 | 将 Jev 接入 MCP 客户端，并用共享数据集和可量化准确率对比其与通用 LLM 的判断。 |
| [pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction) | ★ 5 | TypeScript | 2026-09-19 | Pi 扩展：使用 TypeSafe Jev 决策进行原文保留式上下文压缩。 |
| [riff](https://github.com/scale-venture-partners/riff) | ★ 5 | Python | 2026-09-19 | 小巧快速的文本 Linter，使用类似 Ruff 的写作规则代码，并由 TypeSafe Jev 支持。 |
| [jev-commit](https://github.com/valentynkit/jev-commit) | ★ 5 | Python | 2026-09-20 | Pre-commit hook：由 Jev 对照暂存 Diff 检查提交信息，并标记调试残留、未说明改动和新增凭据。 |
| [bicameral](https://github.com/AbdelStark/bicameral) | ★ 4 | TypeScript | 2026-09-19 | 混合编程框架：System 2 负责写作，System 1（Jev）执行反射式判断。 |
| [jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers) | ★ 4 | Shell | 2026-09-19 | 跨 Agent 软件开发技能，将 Jev 决策加入规划、执行、调试和完成门控。 |
| [slidepilot](https://github.com/harshil1712/slidepilot) | ★ 4 | TypeScript | 2026-09-19 | Slidev 的语音驱动语义自动翻页工具，由 Cloudflare Agents 和 TypeSafe AI Jev 驱动。 |
| [diffjury](https://github.com/raihankhan-rk/diffjury) | ★ 4 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 进行 Pull Request 风险路由并提供代码审查指导。 |
| [tenet](https://github.com/zoidsh/tenet) | ★ 4 | Go | 2026-09-20 | 在提交时让 Jev 按自然语言规则审查 Agent 编写代码的门控工具。 |
| [jev-spec](https://github.com/nozomi-koborinai/jev-spec) | ★ 4 | TypeScript | 2026-09-21 | Semantic verification for AI-generated code and specs. |
| [jev-tool-router](https://github.com/jackbarunz/jev-tool-router) | ★ 4 | JavaScript | 2026-09-21 | Jev-powered MCP tool router for Codex. |
| [jev-pref](https://github.com/doeixd/jev-pref) | ★ 4 | JavaScript | 2026-09-22 | 将您的 AGENTS.md 首选项转变为由 Jev 驱动的快速 AI linter。 |
| [jev-oas-sentinel](https://github.com/ShuhanSun/jev-oas-sentinel) | ★ 4 | Python | 2026-09-22 | 通过确定性检查和 TypeSafe JEV System One 语义审查来捕获隐藏在 OpenAPI 散文中的破坏性 API 行为。 |
| [Augustus](https://github.com/24601/Augustus) | ★ 3 | Python | 2026-09-19 | 用于设计 Jev 辅助系统的 Agent 技能，涵盖决策理论、组合模式、问题诊断和验证门控。 |
| [typesafe-cli (geilt)](https://github.com/geilt/typesafe-cli) | ★ 3 | Python | 2026-09-19 | TypeSafe System One（Jev）的 CLI 与 Agent 技能，支持 Choice、Score 和 Noul 类型化判断。 |
| [jev-judgment](https://github.com/HyunjunJeon/jev-judgment) | ★ 3 | Python | 2026-09-19 | Agent 技能：将编程 Agent 的封闭式判断交给 TypeSafe Jev。 |
| [jevex](https://github.com/jvsteiner/jevex) | ★ 3 | Python | 2026-09-19 | 最小化 Agent 循环，由 Jev 控制流程，LangChain 聊天模型生成参数值和最终回复。 |
| [fast-dev-compaction](https://github.com/leonaaardob/fast-dev-compaction) | ★ 3 | TypeScript | 2026-09-19 | Codex 插件，在会话压缩前后按 Jev 指引原样恢复上下文；由 fast-jev-compaction 移植至 Codex 生命周期 hooks。 |
| [pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) | ★ 3 | TypeScript | 2026-09-19 | Pi 编程 Agent 的运行时约束，在有副作用的工具调用执行前，根据用户要求逐项检查；由 TypeSafe Jev 驱动。 |
| [jev-router (prismhq)](https://github.com/prismhq/jev-router) | ★ 3 | Python | 2026-09-19 | 构建在 LiteLLM 之上的开源 LLM 路由器，使用 TypeSafe Jev 选择模型。 |
| [jev-mcp (rashedInt32)](https://github.com/rashedInt32/jev-mcp) | ★ 3 | TypeScript | 2026-09-19 | MCP 服务器，将 TypeSafe Jev 暴露为类型化、校准的判断工具，支持分类、评分、检查和批量提问，并提供 Claude Code 插件。 |
| [open-jev-approvals](https://github.com/alexj11324/open-jev-approvals) | ★ 3 | Go | 2026-09-21 | Jev-reviewed tool-call gate with versioned local policy. |
| [dsh-jev](https://github.com/noetion/dsh-jev) | ★ 3 | TypeScript | 2026-09-22 | DSH 包，注册 jev_ask 以获取 TypeSafe Jev noul、选择和评分答案。 |
| [prompt2jev](https://github.com/sumleo/prompt2jev) | ★ 3 | Python | 2026-09-22 | 将自然语言、LLM 提示或将其运行为 TypeSafe Jev 决策的代码的代理技能和 CLI：键入状态、Choice/Score/Noul 问题和可运行脚本 |
| [jev-mcp-dispatcher](https://github.com/abhishekashokvkumar/jev-mcp-dispatcher) | ★ 3 | Python | 2026-09-22 | 自然语言 MCP 工具调度程序完全由 TypeSafe 的 Jev 提供支持 — 无通用 LLM。在运行时发现简单的 MCP 服务器的工具签名，并使用 Jev 的类型化原语 (Choice/Noul) 来选择正确的工具并直接从句子中提取其参数。审核期间未找到存储库级许可证文件。 |
| [hermes-jev-plugin](https://github.com/ajensenwaud/hermes-jev-plugin) | ★ 3 | Python | 2026-09-22 | Hermes Agent 的 TypeSafe Jev（系统一）决策工具：jev_check / jev_route / jev_score / jev_evaluate |
| [langchain-skill-router](https://github.com/deyna256/langchain-skill-router) | ★ 3 | Python | 2026-09-23 | 面向 LangChain 与 deepagents 的技能路由器；Jev 对已安装的 `SKILL.md` 排序，并判断每轮是否需要加载技能及应加载哪些技能。 |
| [jcm-router](https://github.com/adarshmishra07/jcm-router) | ★ 2 | TypeScript | 2026-09-19 | 本地代理，使用 TypeSafe Jev 为每条消息选择 Claude 模型和推理强度；路由子 Agent，不影响主对话缓存。 |
| [typesafe-mod](https://github.com/BeLazy167/typesafe-mod) | ★ 2 | TypeScript | 2026-09-19 | Claude Code 模组，将决策路由到 TypeSafe Jev：按提示词排序已安装技能，并在置信度足够时回答 Agent 的封闭式问题。 |
| [jev-shield](https://github.com/caiovicentino/jev-shield) | ★ 2 | JavaScript | 2026-09-19 | 由 Jev 驱动的语义 MCP 防火墙，以校准的 System One 验证筛查每个工具调用、结果和说明；报告阻止召回率 94%、零误报，单次检查成本约 0.00002 美元。 |
| [mastra-jev-moderation](https://github.com/CodeAlive-AI/mastra-jev-moderation) | ★ 2 | TypeScript | 2026-09-19 | Mastra 输入处理器，使用 Jev 作出类型化阻止决策并判定内容审核类别。 |
| [tiershift](https://github.com/iamvatsalpatel/tiershift) | ★ 2 | TypeScript | 2026-09-19 | 将每次 LLM 调用路由到能够完成任务的最低成本模型；约 180 毫秒内由 TypeSafe Jev 决策，策略使用 YAML，支持 TypeScript 和 Python。 |
| [skill-router](https://github.com/lomeshdutta/skill-router) | ★ 2 | Python | 2026-09-19 | 使用 Jev 判断 Claude Code 会话需要哪个已安装技能，并通过 skills.sh 发现技能。 |
| [todo-jev](https://github.com/maker-KK/todo-jev) | ★ 2 | Python | 2026-09-19 | 由 TypeSafe Jev（System One）驱动的高速低成本任务分类器与三级路由引擎。 |
| [jev-workbench](https://github.com/molis-ai/jev-workbench) | ★ 2 | TypeScript | 2026-09-19 | 在 TypeSafe Jev 上构建版本化判断函数，并从后端经 HTTP、从编程 Agent 经 MCP 调用同一发布版本；供应商密钥保留在本机。 |
| [typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | ★ 2 | TypeScript | 2026-09-19 | 由 TypeSafe AI（Jev System One）驱动的自动化数据库迁移安全审查器。 |
| [pi-fast-jev-compaction (QuentinDanblon)](https://github.com/QuentinDanblon/pi-fast-jev-compaction) | ★ 2 | TypeScript | 2026-09-20 | Pi 上下文裁剪扩展，用 Jev 删除或截短过期工具调用，并原样保留其余内容。 |
| [jev-system-architect](https://github.com/samtay32/jev-system-architect) | ★ 2 | — | 2026-09-19 | 面向 TypeSafe AI Jev/System One 的系统架构技能，将模糊语义判断拆为小型 Choice、Score 和 Noul 原语。 |
| [jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate) | ★ 2 | JavaScript | 2026-09-19 | 使用 TypeSafe Jev 将 Claude Code 技能清单缩减约 75%，按相关性评分并通过 skillOverrides 隐藏其余技能。 |
| [ailerix](https://github.com/tylerjharden/ailerix) | ★ 2 | TypeScript | 2026-09-19 | 类型安全的模型路由器，由 Jev（System One）将每个请求分配到类型化目录路由。 |
| [typesafe-ai-firewall](https://github.com/AnshChoudhary/typesafe-ai-firewall) | ★ 2 | Python | 2026-09-22 | 用于 AI 代理工具调用 (TypeSafe/Jev) 上的预执行防火墙的影子模式验证工具。实际运行，report.md 中的发现。审核期间未找到存储库级许可证文件。 |
| [jev-mcp (freepik-company)](https://github.com/freepik-company/jev-mcp) | ★ 2 | Go | 2026-09-22 | MCP 服务器通过 OpenRouter 或 TypeSafe 使用 Jev / System One 进行类型化决策 |
| [decision-first](https://github.com/harrymunro/decision-first) | ★ 2 | Python | 2026-09-22 | 代理技能，发现有界判断步骤，首先尝试类型化决策模型（TypeSafe 的 Jev），并记录每次尝试 |
| [jear](https://github.com/iJ03l/jear) | ★ 2 | Rust | 2026-09-22 | 用于 NEAR AI Cloud 推理和 IronClaw 代理的 Jev 路由客户端。 |
| [jev-git](https://github.com/AkashPriyadarshii/jev-git) | ★ 1 | Rust | 2026-09-19 | 亚秒级 pre-commit 和 pre-push 语义门控，使用 Jev 筛查暂存 Diff。 |
| [jev-scout](https://github.com/AkashPriyadarshii/jev-scout) | ★ 1 | Rust | 2026-09-19 | 有依据的 GitHub 与 crates.io 发现 CLI 和 MCP 服务器，使用 Jev 评估架构适配、许可证与维护状态。 |
| [jev-skillful](https://github.com/bestagentkits/jev-skillful) | ★ 1 | TypeScript | 2026-09-19 | 面向编程 Agent 的逐提示能力路由器，用 TypeSafe Jev 将提示词匹配到已安装技能、MCP 服务器、Agent 和命令，并衡量注入是否真正有效。 |
| [jev-triage](https://github.com/cephalization/jev-triage) | ★ 1 | TypeScript | 2026-09-19 | 使用类型化 Jev，并以零同步方式拉取和同步大型仓库以进行 Issue 分诊。 |
| [jev-predict-skill](https://github.com/DanielKillenberger/jev-predict-skill) | ★ 1 | HTML | 2026-09-19 | 无需运行目标技能，即可使用 TypeSafe Jev 预测其下一项封闭式决策。 |
| [stepwarden](https://github.com/getexcited/stepwarden) | ★ 1 | TypeScript | 2026-09-20 | Claude Code 插件，在允许、升级或阻止工具调用前，让 Jev 将其与会话计划对照。 |
| [Antigravity-mcp-semantic-search-with-TypeSafeAi](https://github.com/greenyamao/Antigravity-mcp-semantic-search-with-TypeSafeAi) | ★ 1 | Python | 2026-09-19 | 由 TypeSafe System One 驱动的快速语义代码搜索与 Diff 合理性审计器，面向 Antigravity、Cursor 和 Claude Code 等 AI 编程助手。 |
| [pi-jev](https://github.com/iefnaf/pi-jev) | ★ 1 | TypeScript | 2026-09-20 | 由 Jev 驱动上下文压缩和模型路由的 Pi 扩展套件。 |
| [hunch](https://github.com/Kelbie/hunch) | ★ 1 | Python | 2026-09-19 | 使用 Jev、自然语言规则和可安装 Agent 技能进行语义代码审查。 |
| [limpet](https://github.com/noplan-inc/limpet) | ★ 1 | Python | 2026-09-19 | 阻止编程 Agent 过早结束的 Stop hook，使用自然语言规则并由 Jev 判断。 |
| [ask-jev](https://github.com/omni-/ask-jev) | ★ 1 | PowerShell | 2026-09-19 | 使用 TypeSafe AI 提供的 RLCD 类模型 Jev，独立且低成本地评判 Agent 编程会话。 |
| [jev-flash-router](https://github.com/Ravinder82/jev-flash-router) | ★ 1 | TypeScript | 2026-09-20 | MCP 服务器，使用 Jev 为编程 Agent 路由文件选择、任务路径和测试影响判断。 |
| [omp-typesafe](https://github.com/siddicky/omp-typesafe) | ★ 1 | TypeScript | 2026-09-19 | 为 OMP 编程 Agent 提供 TypeSafe AI（Jev）对抗式审查器和 `typesafe_ask` 工具。 |
| [pi-jev-helm](https://github.com/Z761293629/pi-jev-helm) | ★ 1 | TypeScript | 2026-09-20 | 使用 Jev 分类任务，并将每次 Pi 运行路由到显式配置模型的扩展。 |
| [jev-mcp (BYK)](https://github.com/BYK/jev-mcp) | ★ 1 | TypeScript | 2026-09-22 | TypeSafe 的 Jev 的评估优先 MCP 服务器，这是一个 System One 模型，返回带有概率而不是生成文本的类型判断（noul、选择、分数）。 |
| [askjev (pZacca)](https://github.com/pZacca/askjev) | ★ 1 | TypeScript | 2026-09-22 | Jev 的非官方 MCP 服务器（Typesafe AI） |
| [jev-toolkit](https://github.com/jbt95/jev-toolkit) | ★ 1 | TypeScript | 2026-09-22 | 适用于 TypeSafe/Jev 的 MCP 优先工具包 — System One 决策模型。一台 stdio 服务器 (jev mcp) 为任何支持 MCP 的工具提供服务，并由一个本地事件日志和 Prometheus 影响指标提供支持，您可以将其添加到自己的 Grafana 中。 |
| [jev-skill-router](https://github.com/shimo4228/jev-skill-router) | ★ 1 | Python | 2026-09-22 | Claude Code 插件：询问 TypeSafe Jev 哪个已安装的技能适合每个提示并记录答案（影子优先）。 Claude Code 技能建议手册的工作参考 — 自述文件记录了为什么它不太可能帮助建立一个强大的路由器模型。 |
| [dsh-jev-verify](https://github.com/xienda/dsh-jev-verify) | ★ 1 | JavaScript | 2026-09-22 | Jev (TypeSafe System One) 决策工具 + DeepSeek Harness 的实时验证基准：jev_decision (choice/score/noul) 和 jev_verify，设计诚实。 |
| [jevonian](https://github.com/xinyao27/jevonian) | ★ 1 | TypeScript | 2026-09-22 | 本地模型路由代理，Jev 选择模型路由和推理深度，并判断哪些工具历史可以被压缩。 |
| [jev-routed-agent](https://github.com/liuhongrui087-art/jev-routed-agent) | ★ 1 | Python | 2026-09-23 | 基于 LangChain 与 Flask 的 Agent；Jev 在知识、计算器、天气和闲聊路线中选择，并以本地规则兜底。 |
| [codex-jev-router](https://github.com/suenot/codex-jev-router) | ★ 1 | JavaScript | 2026-09-24 | 便携式 Jev 路由器，用于成本感知的 Codex 子代理模型和推理选择。 |
| [pi-agent-foreman](https://github.com/alexshpunt/pi-agent-foreman) | ★ 0 | TypeScript | 2026-09-19 | 当 Pi Agent 在任务完成前停止时，将其送回继续工作。 |
| [switchboard](https://github.com/aniruddh-krovvidi/switchboard) | ★ 0 | Python | 2026-09-19 | 基于 TypeSafe Jev 的 LLM 网关护栏与模型路由器，附带独立准确率、校准度和延迟评测；使用 Python 标准库。 |
| [typesafe-demo-mcp](https://github.com/bestagentkits/typesafe-demo-mcp) | ★ 0 | TypeScript | 2026-09-19 | 将 TypeSafe System One 判断（Noul、Choice、Score）暴露为 Agent 工具的 MCP 服务器。 |
| [AskJev-MCP](https://github.com/cbruyndoncx/AskJev-MCP) | ★ 0 | JavaScript | 2026-09-20 | 为 Jev Choice、Noul 和 Score 判断提供概率与置信度的 MCP 服务器。 |
| [decide-mcp](https://github.com/dakdevs/decide-mcp) | ★ 0 | TypeScript | 2026-09-19 | 可配置的决策 MCP 服务器，支持 AI SDK、Jev、百分比评分和偏差配置路由。 |
| [pi-jev-router (gloridifice)](https://github.com/gloridifice/pi-jev-router) | ★ 0 | TypeScript | 2026-09-20 | 面向 Pi 编程 Agent 的 Jev 模型路由集成。 |
| [jevkeep](https://github.com/hatt-io/jevkeep) | ★ 0 | TypeScript | 2026-09-20 | Codex 插件，使用 Jev 在压缩摘要旁保留有用的对话原文。 |
| [pi-jev-code](https://github.com/KamilPostrozny/pi-jev-code) | ★ 0 | TypeScript | 2026-09-19 | 单 Agent Pi 编程协处理器，提供 Jev 语义门控、基线到当前状态的 Diff 审查及仅追加式可观测遥测。 |
| [pi-typesafe-jev](https://github.com/legacybridge-tech/pi-typesafe-jev) | ★ 0 | TypeScript | 2026-09-19 | 将 TypeSafe（Jev、System One）判断暴露为五个 Pi 工具，使模型执行狭窄语义判断，同时由代码和用户控制阈值、权重与动作。 |
| [frost](https://github.com/marcus/frost) | ★ 0 | Go | 2026-09-19 | 使用 TypeSafe Jev 的灵活可配置 CLI 模型路由器。 |
| [check-risk](https://github.com/moezubair/check-risk) | ★ 0 | TypeScript | 2026-09-19 | 结合确定性规则和 TypeSafe Jev 评估代码变更风险的 CLI 与 GitHub Action，在合并前推荐检查项和审查者。 |
| [jev-compaction (picaye)](https://github.com/picaye/jev-compaction) | ★ 0 | JavaScript | 2026-09-20 | Hermes 上下文压缩工具，由 Jev 评估工具调用，删除过期内容，并原样保留其余内容。 |
| [jev-plugins](https://github.com/Pinutss/jev-plugins) | ★ 0 | — | 2026-09-20 | 面向 JEV Labs 路由工具的 Cursor 与 Hermes 插件市场。 |
| [jev-builder-loop](https://github.com/rainbowpuffpuff/jev-builder-loop) | ★ 0 | Python | 2026-09-19 | Grok 技能：在构建型 Agent 循环中将 Jev 用作判断传感器，以先验概率乘以观测概率决定下一步动作。 |
| [typesafeai-review](https://github.com/rbalch/typesafeai-review) | ★ 0 | Python | 2026-09-19 | 使用 Typesafe.AI 生成 Diff 审查。 |
| [agent-gate-loop](https://github.com/Ripwords/agent-gate-loop) | ★ 0 | TypeScript | 2026-09-19 | 可复用 GitHub Action：由检查、AI 审查器和 TypeSafe Jev 门控的 Agent 修复循环。 |
| [omp-jevens-classifier](https://github.com/STRML/omp-jevens-classifier) | ★ 0 | TypeScript | 2026-09-19 | 由 Jev 驱动、模型判断的 OMP 权限门控。 |
| [jev-review (thiago-ss)](https://github.com/thiago-ss/jev-review) | ★ 0 | Python | 2026-09-19 | 自主 Jev Pull Request 审查，提供类型化决策、校准审批门控和可信所有者升级机制。 |
| [pi-typesafe](https://github.com/twilwa/pi-typesafe) | ★ 0 | TypeScript | 2026-09-19 | 基于 TypeSafe AI System One API（Jev）的 Pi 编程 Agent 扩展。 |
| [hermes-jev-router](https://github.com/ussyverse/hermes-jev-router) | ★ 0 | Python | 2026-09-19 | 实验性 Hermes 插件：在预算与能力约束下生成 Jev 辅助的模型路由计划；API 访问尚待开放。 |
| [zcode-jev](https://github.com/Zahrannnn/zcode-jev) | ★ 0 | TypeScript | 2026-09-19 | 面向编程 Agent 的类型化判断层，从 PRD 到发布全程设置门控；支持 Jev 且不绑定提供商。 |
| [agent-handoff-gate](https://github.com/zsoXi/agent-handoff-gate) | ★ 0 | Python | 2026-09-19 | 面向证据感知 Agent 交接的实验协议，在结果到达主 Agent 前使用 Jev 辅助审查。 |
| [jev-agent-kit](https://github.com/walidboulanouar/jev-agent-kit) | ★ 0 | JavaScript | 2026-09-22 | jevkit：代理的快速键入决策。 TypeSafe Jev 上的 CLI 和 MCP 工具（route、triage、guard、grep、rank、compact、judge）。零依赖。 |
| [Jev-Checkpoint](https://github.com/ashishakkumar/Jev-Checkpoint) | ★ 0 | TypeScript | 2026-09-22 | 本地 MCP 服务器，使用 TypeSafe Jev 对 AI 代理的下一步进行置信门，路由不确定的决策以继续进行、更深入的审查或人工输入。 |
| [progressgate](https://github.com/AshutoshVJTI/progressgate) | ★ 0 | TypeScript | 2026-09-22 | 检测 AI 代理循环中的语义停滞 |
| [jev-packs](https://github.com/dtduc-git/jev-packs) | ★ 0 | Python | 2026-09-22 | Jev 问题包的证据门控注册 — 精心策划的问题、黄金案例和与 Jev 兼容的决策端点的衡量证据 |
| [JevGuard](https://github.com/Jhonnyr97/JevGuard) | ★ 0 | TypeScript | 2026-09-22 | Claude Code + Codex CLI 插件，通过 System One (Jev) 模型验证代理是否遵循项目规则 |
| [jev-atlas](https://github.com/v60samurai/jev-atlas) | ★ 0 | Python | 2026-09-22 | 绘制 Jev 和 System One 模型在您的项目中实际所属的位置，测试最有力的想法，然后实施它们。克劳德代码和法典的技能。 |
| [jev-retrieval](https://github.com/romeromarcelo/jev-retrieval) | ★ 0 | Rust | 2026-09-24 | 代码和文档搜索 CLI 将 BM25 召回与 Jev 验证和校准重排序相结合。 |

### 浏览器与计算机操作   (75)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [cua](https://github.com/trycua/cua) | ★ 25,790 | HTML | 2026-09-22 | 具有 Jev 配方的计算机使用平台，其中模型选择一个有界候选动作，客户端在执行前对其进行验证。 |
| [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) | ★ 9,291 | Python | 2026-09-19 | Browser Use 的超高速 Agent：Jev 在一次请求中选择操作和 DOM 元素，仅在需要输入文字时调用小型 LLM。 |
| [agent-desktop](https://github.com/lahfir/agent-desktop) | ★ 1,441 | Rust | 2026-09-22 | 具有 Jev 技能的桌面自动化运行时，可从可访问性树候选中选择 UI 操作和目标。 |
| [celesto](https://github.com/CelestoAI/celesto) | ★ 958 | Python | 2026-09-22 | 具有可运行的拉取请求审查实验室的代理计算机平台，Jev 可以在其中判断调查结果是否被引入、支持和可操作。 |
| [reticle](https://github.com/reticlehq/reticle) | ★ 828 | TypeScript | 2026-09-24 | 运行时感知层，为 Web 和桌面代理提供 Jev 风格的机器可读状态。 |
| [surf-cli](https://github.com/nicobailon/surf-cli) | ★ 624 | TypeScript | 2026-09-23 | 可选的 Jev 命令查找、过滤和验证浏览器元素，然后选择接受置信度和写入权限检查的有界操作。 |
| [Jev-cu](https://github.com/Sac-Y/Jev-cu) | ★ 584 | JavaScript | 2026-09-23 | 把 Computer Use 的「下一步点哪里」定位 Jev（TypeSafe System One）：Jev 从界面文字候选中选元素、动作、完成度与风险，Codex Computer Use 负责读取界面执行，本地策略拦截敏感操作。 只发送文字，不截图.. |
| [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | ★ 537 | Python | 2026-09-19 | 单步成本约 0.0002 美元的 macOS 计算机操作方案：OCR 识别屏幕、TypeSafe 分类下一动作并执行点击。 |
| [mobile-jev](https://github.com/droidrun/mobile-jev) | ★ 240 | JavaScript | 2026-09-19 | 面向 Mobilerun 的独立 Android Agent，每项决策均由 Jev 完成，附带实时 React Studio 和 Uber 演示。 |
| [jev-browser-use](https://github.com/wy-coliney/jev-browser-use) | ★ 206 | JavaScript | 2026-09-19 | 速度提升 5–10 倍的浏览器操作方案：Jev 点击，Codex 思考并验证；由 EZCollegeApp 构建。 |
| [jev-browser](https://github.com/jkudish/jev-browser) | ★ 155 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 模型的浏览器操作工具。 |
| [unclutter](https://github.com/kitze/unclutter) | ★ 136 | TypeScript | 2026-09-19 | WXT 浏览器扩展，使用 Jev 和可复用模板规则清除页面干扰内容。 |
| [arc-cua](https://github.com/shhivv/arc-cua) | ★ 128 | Python | 2026-09-23 | Jev 从当前桌面状态暴露的目标和操作中选择下一个 UI 操作。 |
| [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) | ★ 126 | JavaScript | 2026-09-19 | 通过语音控制真实浏览器，Jev 在约 300 毫秒内判断意图与目标，Playwright 随即执行。 |
| [webctl](https://github.com/dorkitude/webctl) | ★ 125 | Go | 2026-09-23 | 智能网络搜索 CLI 代理，由 Jev 支持。节省大量代币。 |
| [fast-browser-use](https://github.com/APUS-AI-Lab/fast-browser-use) | ★ 121 | Python | 2026-09-23 | 一种快速浏览器使用技能，由本地法学硕士通过单令牌反射提供支持。快速、局部优先、零幻觉。 |
| [Jevry](https://github.com/michaelswissa/jevry) | ★ 99 | TypeScript | 2026-09-25 | 由 Jev 选择可执行浏览器操作、独立文本模型负责规划的桌面浏览器。 |
| [jev-browser](https://github.com/openqa-cn/jev-browser) | ★ 94 | TypeScript | 2026-09-24 | 索引浏览器自动化，其中 Jev 选择控件并 Playwright 执行它。 |
| [jev-use](https://github.com/savka777/jev-use) | ★ 92 | Swift | 2026-09-23 | 说出来，你的 Mac 就会做到。 Jev 上的计算机使用线束，可通过辅助功能读取屏幕。速度快，无视觉模型。 |
| [jev-desktop](https://github.com/yikangy873-gif/jev-desktop) | ★ 63 | JavaScript | 2026-09-23 | Codex 计算机使用中的 TypeSafe Jev 操作选择。 |
| [playwright-recast](https://github.com/ThePatriczek/playwright-recast) | ★ 60 | TypeScript | 2026-09-23 | Jev 从渲染的剧作家录音和有界方向候选中选择摄像机移动、强调和计时。 |
| [typesafe-adblock](https://github.com/realZachi/typesafe-adblock) | ★ 58 | JavaScript | 2026-09-19 | 实验性 Chrome 扩展，让 Jev 判断 DOM 元素是否为广告并将其移除；BYOK、无后端，并非完整广告拦截器。 |
| [ghosthands](https://github.com/affirmitv/ghosthands) | ★ 51 | Python | 2026-09-23 | 为代理提供真正的手和眼睛：不可检测的、独立于 DOM 的 GUI 自动化。价值 4 美元的 USB-HID 微控制器用于手部，视觉基础模型用于眼睛，任何法学硕士用于大脑。 |
| [vibecheck](https://github.com/RafalWilinski/vibecheck) | ★ 42 | JavaScript | 2026-09-19 | Chrome 扩展，在发布 X 帖子前使用 TypeSafe Jev 检查内容观感。 |
| [computer-use-cache](https://github.com/rohanarun/computer-use-cache) | ★ 42 | JavaScript | 2026-09-23 | Jev 判断缓存的计算机使用工作流在语义上是否可重用于当前请求。 |
| [jev-cua](https://github.com/ronadin2002/jev-cua) | ★ 34 | Swift | 2026-09-24 | macOS 语音和文本控制，其中 Jev 在观察-执行-验证循环中选择 UI 操作。 |
| [jev-browser-skill](https://github.com/hqman/jev-browser-skill) | ★ 33 | TypeScript | 2026-09-23 | 由 Jev 驱动的独立剧作家 Chromium。编码代理（或您）运行 a. |
| [Jevbridge](https://github.com/gamesonrblx/Jevbridge) | ★ 25 | TypeScript | 2026-09-19 | ACP 与 MCP 适配器，将 TypeSafe Jev 接入任意 LLM，为 Codex、Claude、Grok 和 OpenCode 提供计算机操作与类型化决策。 |
| [ulka](https://github.com/razaanstha/ulka) | ★ 23 | TypeScript | 2026-09-23 | 由 FX、Jev 和 Vercel AI Gateway 提供支持的实验性浏览器代理。带上您自己的 API 密钥来阅读页面并自动执行浏览器任务。 |
| [jev-browser (Ying-Kai-Liao)](https://github.com/Ying-Kai-Liao/jev-browser) | ★ 22 | JavaScript | 2026-09-19 | 由 LLM 规划、Jev 决策的浏览器自动化方案，提供库、CLI 和 MCP 服务器。 |
| [hookmeter-jev](https://github.com/ehui1226/hookmeter-jev) | ★ 21 | HTML | 2026-09-23 | ⚡ 毫秒级 Viral Hook 遥测和社交媒体副驾驶（Chrome 扩展 + Jev 系统 1）。 |
| [jev-mac-voice](https://github.com/brudarko/jev-mac-voice) | ★ 20 | JavaScript | 2026-09-23 | 适用于 macOS 的英语全双工语音控制，具有 OpenAI 实时、本机辅助功能和 Jev。 |
| [jev-for-chrome](https://github.com/chy4pro/jev-for-chrome) | ★ 20 | TypeScript | 2026-09-23 | Chrome 的 Jev：使用 TypeSafe Jev（亚秒级决策模型）驱动您正在查看的选项卡。 browser-use/jev-ultrafast 的社区端口，不隶属于 TypeSafe。 |
| [Jev macOS Loop](https://github.com/jcpsimmons/jev-macos-loop) | ★ 17 | JavaScript | 2026-09-21 | 原生 macOS 自动化循环，由 Jev 根据 OCR、辅助功能和 OmniParser 观察结果选择下一步 GUI 操作。 |
| [x-scanner](https://github.com/oso95/x-scanner) | ★ 15 | TypeScript | 2026-09-21 | Chrome 扩展，由 Jev 用类型化判断给 X 帖子评分和标注，并显示本地实时成本。 |
| [lkclean](https://github.com/stefw/lkclean) | ★ 14 | TypeScript | 2026-09-23 | Chrome 扩展程序，可清理您的 LinkedIn 提要：使用 Jev、TypeSafe AI 的类型分类模型隐藏参与诱饵、自我推销和偏离主题的帖子，并解释每个决定。 |
| [jev-ultrafast-mcp](https://github.com/jiawei686/jev-ultrafast-mcp) | ★ 13 | Python | 2026-09-23 | 将浏览器的工作交给 MCP 服务器，其中决策模型为您的代理驱动页面，因此一个流程只需要一次工具调用，而不是每次点击一次。基于引用的元素表、代码检查断言、零模型宏重播。与您的 Chrome 对话 CDP。 |
| [system1-agents](https://github.com/ThinkFlowLab/system1-agents) | ★ 12 | Python | 2026-09-23 | 系统 1 决策模型（Jev、Laya、Cua-S1）作为代理的大脑：浏览器使用、计算机使用、游戏和机器人。 |
| [jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) | ★ 11 | JavaScript | 2026-09-23 | 使用 Jev 过滤任何实时 Twitch 聊天：自带密钥的 Chrome 扩展程序。 |
| [jev-social](https://github.com/socai-io/jev-social) | ★ 10 | JavaScript | 2026-09-20 | 面向 Instagram、TikTok 和 LinkedIn 的社交研究 Agent：Jev 持续选择下一项具体操作及目标，socai 在本地 Chrome 会话中执行。 |
| [live-jev](https://github.com/vinilana/live-jev) | ★ 10 | JavaScript | 2026-09-19 | 浏览器中的二维自动驾驶模拟，由 TypeSafe Jev 决策模型驱动。 |
| [sift](https://github.com/bohutang/sift) | ★ 9 | JavaScript | 2026-09-21 | Chrome 扩展，由 Jev 给 X 帖子标注内容类型并判断哪些帖子应隐藏。 |
| [xtags](https://github.com/manifoldor/xtags) | ★ 8 | JavaScript | 2026-09-19 | 在 X 时间线上标注每条帖子的行为意图，判断由仅返回概率而不生成文本的 Jev 完成。 |
| [jev-ego](https://github.com/romaluev/jev-ego) | ★ 7 | TypeScript | 2026-09-19 | 面向 ego lite 的 TypeScript 浏览器 Agent，使用 Jev Ultrafast 索引动作、TypeSafe Jev 决策及持久 observe/act CLI，无需 Chrome 或 Playwright。 |
| [jev-browser-bridge](https://github.com/lexmount/jev-browser-bridge) | ★ 7 | Python | 2026-09-25 | CDP 浏览器库，通过批量 Jev Choice 问题选择操作和从 DOM 提取的目标。 |
| [AskJev](https://github.com/ranjan2829/AskJev) | ★ 6 | TypeScript | 2026-09-19 | 适用于任意网站的 Jev 自动驾驶工具，并为不可逆点击提供护栏。 |
| [jev-agent-browser](https://github.com/forvela/jev-agent-browser) | ★ 6 | JavaScript | 2026-09-22 | 浏览器代理集成，Jev 为研究和分类工作流程选择键入的操作。 |
| [fastbrowse](https://github.com/agent-labs-dev/fastbrowse) | ★ 5 | Python | 2026-09-19 | 浏览器 Agent：Jev 选择动作，LLM 阅读并规划，最终答案引用页面证据。 |
| [jev-browser (vinilana)](https://github.com/vinilana/jev-browser) | ★ 4 | TypeScript | 2026-09-19 | 混合浏览器框架：LLM 将目标拆为可验证子目标，Jev 选择动作和 DOM 字段，Playwright 负责执行。 |
| [jev-browse](https://github.com/kyrylosyzonenko/jev-browse) | ★ 3 | JavaScript | 2026-09-19 | 由 Jev 完成所有决策、Vercel agent-browser 执行动作的真实浏览器 Agent，附带基准测试。 |
| [computer_use](https://github.com/paulsmith/computer-use-jev) | ★ 3 | Go | 2026-09-19 | 以 Jev（TypeSafe System One）作为决策器的 macOS 计算机操作方案。 |
| [jev-skip](https://github.com/valentynkit/jev-skip) | ★ 3 | TypeScript | 2026-09-20 | YouTube 扩展，让 Jev 判断每段字幕的赞助内容概率，并在进度条上显示，无需众包数据库。 |
| [playjev](https://github.com/filedcom/playjev) | ★ 3 | TypeScript | 2026-09-21 | Experimental Jev-powered Playwright automation library. |
| [jev-mobile](https://github.com/Friedjof/jev-mobile) | ★ 2 | Python | 2026-09-19 | 结合 TypeSafe Jev 与 Mobile MCP 的高速结构化 Android 控制循环。 |
| [jev-frontend-qa](https://github.com/Nainish-Rai/jev-frontend-qa) | ★ 2 | Python | 2026-09-19 | 基于 Jev Ultrafast 与 Browser Harness、以证据为导向的前端 QA，附带合成 Todo 演示。 |
| [otto](https://github.com/NobleSpartan6/otto) | ★ 2 | TypeScript | 2026-09-19 | 适用于 macOS 和 Windows 的开源原生计算机操作方案，结合 TypeSafe Jev、本地 OCR 和选择性规划。 |
| [jevarena](https://github.com/raihankhan-rk/jevarena) | ★ 2 | TypeScript | 2026-09-20 | 两个 Jev Agent 通过 Browser Use 在纯点击浏览器游戏中对战。 |
| [turbo](https://github.com/sightmap/jev-turbo) | ★ 2 | Go | 2026-09-19 | 由 Jev 驱动的语义浏览器操作工具。 |
| [jev-browser (tontoko)](https://github.com/tontoko/jev-browser) | ★ 2 | JavaScript | 2026-09-19 | 统一的 Jev/Playwright 核心，提供类型化 SDK、持久化 CLI、MCP 服务器、原生浏览器操作和确定性断言。 |
| [jev-shield (vmendes90)](https://github.com/vmendes90/jev-shield) | ★ 2 | TypeScript | 2026-09-19 | 隐私优先的 Chrome 扩展，使用 TypeSafe Jev 按语义阻止原生广告、赞助信息流卡片和视频广告。 |
| [jev-ra](https://github.com/brnyxx/jev-ra) | ★ 2 | Python | 2026-09-22 | 浏览器自动化 MCP 服务器，Jev 在其中为编码代理选择下一个有界浏览器操作。 |
| [barrunto](https://github.com/elpumberto/barrunto) | ★ 1 | TypeScript | 2026-09-19 | 将 TypeSafe Jev 接入 X.com、在浏览过程中分析帖子的 Chrome 扩展。 |
| [almond-fastloop](https://github.com/eriestra/almond-fastloop) | ★ 1 | HTML | 2026-09-19 | Almond 的浏览器计算机操作框架，结合 Chrome DevTools 与 TypeSafe Jev，并使用 Browser Use Olympics 基准测试。 |
| [psearch](https://github.com/komikat/psearch) | ★ 1 | Python | 2026-09-19 | 面向终端与 Agent 的并行网页搜索工具，使用本地 Chromium 和 Jev 引导探索。 |
| [jev-browser-skill](https://github.com/zurfyx/jev-browser-skill) | ★ 1 | JavaScript | 2026-09-22 | Claude Code 和 Codex 浏览器技能要求 Jev 选择下一个浏览器操作。 |
| [jev-browser-pilot](https://github.com/aidil2105/jev-browser-pilot) | ★ 0 | Python | 2026-09-20 | 有边界的浏览器和桌面自动化层：Jev 选择下一步，代码负责感知、执行与验证。 |
| [jev-orb](https://github.com/bottlebrushes/jev-orb) | ★ 0 | Makefile | 2026-09-20 | 结合 Jev 与 Metal Whisper 的按键说话式语音球，用于自主控制浏览器。 |
| [JevTest](https://github.com/CorieW/JevTest) | ★ 0 | TypeScript | 2026-09-19 | 使用 Jev 的有边界探索式浏览器测试，结合确定性断言和可重放证据。 |
| [browser-use-olympics](https://github.com/eriestra/browser-use-olympics) | ★ 0 | HTML | 2026-09-19 | Almond 的 Browser Use Olympics：一个提示、五项任务、统一计时；另含约 200 行、结合 Chrome DevTools 与 Jev 的快速浏览器 Agent。 |
| [jev-browser (KesavanKing)](https://github.com/KesavanKing/jev-browser) | ★ 0 | Python | 2026-09-19 | 本地浏览器自动化 UI，使用 TypeSafe Jev 选择有边界的页面动作，仅由文本模型生成字段值。 |
| [jevlens](https://github.com/knowlet/jevlens) | ★ 0 | JavaScript | 2026-09-20 | 使用 Jev 标注文章以及 X、Threads 帖子的 Chrome 扩展。 |
| [jev-playwright-mcp](https://github.com/krw82/jev-playwright-mcp) | ★ 0 | TypeScript | 2026-09-19 | Jev 增强的 Playwright MCP 代理，提供页面状态分诊、提示词注入防护、按目标裁剪快照和高风险动作门控。 |
| [jev-browser (MahmoudAdelbghany)](https://github.com/MahmoudAdelbghany/jev-browser) | ★ 0 | JavaScript | 2026-09-19 | 由 Jev 驱动的浏览器 MCP，面向 LLM Agent 提供约 300 毫秒决策，循环内不消耗 LLM Token，并附 Playwright MCP 对比基准。 |
| [sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) | ★ 0 | JavaScript | 2026-09-19 | 开源 Chrome 扩展，使用 Jev 过滤 AI 生成文本和广告。 |
| [sift](https://github.com/tylergibbs1/sift) | ★ 0 | TypeScript | 2026-09-19 | Chrome 扩展，使用 TypeSafe Jev 重排 Google 搜索结果并折叠销售页面与 SEO 填充内容。 |

### 应用   (128)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [TradingAgents](https://github.com/TauricResearch/TradingAgents) | ★ 108,478 | Python | 2026-09-25 | 交易研究智能体，可选用 Jev 筛查社交帖子与公司的相关性及情绪。 |
| [QuantDinger](https://github.com/OpenByteInc/QuantDinger) | ★ 12,029 | Python | 2026-09-23 | 开源人工智能交易操作系统，代理交易和氛围交易，与Jev System One集成。研究、构建 Python 策略、回溯测试以及加密货币、股票和外汇的纸面/实时交易。启动您自己的多租户交易 SaaS，具有内置的用户管理、计费、支付和结算功能。 |
| [genoffice](https://github.com/genspark-ai/genoffice) | ★ 7,541 | TypeScript | 2026-09-23 | Jev 为本地搜索召回的前 20 个文件分别计算经过校准的相关性分数，并据此重新排序结果。 |
| [xerj](https://github.com/xerj-org/xerj) | ★ 2,365 | Rust | 2026-09-23 | Jev 对每个检索到的文档是否回答查询进行评分，并根据该相关性对搜索结果重新排名。 |
| [PyGPT](https://github.com/szczyglis-dev/py-gpt) | ★ 1,941 | Python | 2026-09-25 | 桌面 AI 助手，提供 Jev 插件完成类型化分类、路由、验证和评分。 |
| [Paca](https://github.com/Paca-AI/paca) | ★ 1,850 | Go | 2026-09-25 | 项目管理应用，使用 Jev 进行智能体路由、任务字段填充、负责人选择和自动化条件判断。 |
| [jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis) | ★ 1,696 | Kotlin | 2026-09-22 | Android 对话副驾驶，Jev 解释聊天上下文并在用户插入回复之前帮助对候选回复进行排名。 |
| [jev-trader](https://github.com/jarrodwatts/jev-trader) | ★ 1,349 | TypeScript | 2026-09-19 | 在 Monad 每个区块执行一次 AI 交易决策，在 Kuru 的 MON-USDC 市场上运行 Jev。 |
| [jev-chat-windows](https://github.com/jev-chat/jev-chat-windows) | ★ 467 | Python | 2026-09-24 | Windows微信回复助手，使用本地OCR和Jev对意图进行分类，然后呈现三个手动发送回复。 |
| [horosa-skill](https://github.com/Horace-Maxwell/horosa-skill) | ★ 419 | Python | 2026-09-23 | 当显式启用时，Jev 在关键字路由不匹配时选择占星技术并提取用户指定的设置。 |
| [claude-code-trace](https://github.com/delexw/claude-code-trace) | ★ 370 | Rust | 2026-09-23 | Jev 从 Claude Code 会话日志中对代理进度、工具使用、焦点、探索、恢复和令牌效率进行评分。 |
| [llm-debugger-vscode-extension](https://github.com/mohsen1/llm-debugger-vscode-extension) | ★ 359 | TypeScript | 2026-09-23 | 在每次调试器暂停时，Jev 从堆栈、局部变量、附近源、输出和之前的尝试中选择下一个调试操作。 |
| [AIStock](https://github.com/EthanAlgoX/AIStock) | ★ 335 | Python | 2026-09-24 | 使用 Jev 进行结构化市场判断的股票分析应用程序。 |
| [tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | ★ 314 | TypeScript | 2026-09-21 | 税务文档分类器，由 Jev 根据 PDF 提取文本选择 IRS 表格类型和页面类别。 |
| [docjev](https://github.com/jerryjliu/docjev) | ★ 307 | Python | 2026-09-23 | 使用 Jev 的非常快速的文档分类器/分割器。 |
| [jev-chat-jarvis-mac](https://github.com/jev-chat/jev-chat-jarvis-mac) | ★ 248 | Python | 2026-09-23 | Jev 在应用程序呈现回复指导之前，根据意图和风险对传入的微信或 QQ 消息进行分类。 |
| [summarize](https://github.com/martinopiaggi/summarize) | ★ 223 | Python | 2026-09-23 | 可选的 Jev 预过滤器在将所选材料发送到摘要器之前对转录片段进行评分。 |
| [siftrank](https://github.com/noperator/siftrank) | ★ 210 | Go | 2026-09-23 | Jev 将项目与重复批次中的排名提示进行比较，以便 SiftRank 可以生成聚合的相关性顺序。 |
| [notra](https://github.com/usenotra/notra) | ★ 191 | TypeScript | 2026-09-19 | 营销分析平台，通过功能开关将品牌可见度分类器从 LLM 切换为 Jev 布尔决策。 |
| [crush-monitor](https://github.com/FerryCorleone/crush-monitor) | ★ 183 | TypeScript | 2026-09-23 | 好感度监测：使用Jev分析微信聊天的情绪、意图和回复表现。本地部署，使用自己的API Key.. |
| [perch](https://github.com/lakeday-org/perch) | ★ 171 | JavaScript | 2026-09-23 | 使用 Jev 进行语义代码检查。 |
| [OmniStudio](https://github.com/kunpengtalk/OmniStudio) | ★ 164 | TypeScript | 2026-09-23 | OmniStudio 公开 Jev Noul、Choice 和 Score 决策，用于分类、评分、内容防护、检索重新排名和意图路由。 |
| [Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) | ★ 162 | Python | 2026-09-23 | 由 TypeSafe AI 的 System One 模型 (Jev) 提供支持的按需加密市场情报和决策支持终端。 |
| [jev-webmcp-extension](https://github.com/sdras/jev-webmcp-extension) | ★ 104 | JavaScript | 2026-09-23 | 一个小扩展，演示了 Jev x WebMCP 的组合。 |
| [superterminal](https://github.com/sonnylazuardi/superterminal) | ★ 100 | Rust | 2026-09-23 | Jev 根据简单语言查询对命令面板条目进行排名，以便首先显示预期的终端操作。 |
| [formanator](https://github.com/timrogers/formanator) | ★ 98 | Rust | 2026-09-21 | 用于提交 Forma 福利报销的 CLI 与 MCP 服务，可用 Jev 将收据条目分类到相应报销类别。 |
| [332_lab-jev-chat](https://github.com/Liyucheng1997/332_lab-jev-chat) | ★ 94 | Kotlin | 2026-09-23 | Jev Windows 聊天助手 - PC 版微信意图判断和 DeepSeek 建议回复。 |
| [jev-chat](https://github.com/w3cj/jev-chat) | ★ 91 | TypeScript | 2026-09-23 | 使用 Jev 构建的工具调用聊天机器人，无需法学硕士。 |
| [warrenduffer](https://github.com/arimanyus/warrenduffer) | ★ 82 | TypeScript | 2026-09-24 | 日内交易机器人，Jev 对 Nifty 50 名候选者进行排名，确定性代码控制头寸规模和风险。 |
| [jev-voice](https://github.com/kevinbadi/jev-voice) | ★ 80 | Python | 2026-09-23 | 与您的 Mac 对话。 Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation. |
| [changelog.earth](https://github.com/byalex33/changelog.earth) | ★ 76 | JavaScript | 2026-09-23 | 启用后，Jev 对为地球变更日志版本选择的故事执行有限的编辑和标题检查。 |
| [james_library](https://github.com/topherchris420/james_library) | ★ 74 | Rust | 2026-09-24 | 科学代理架构将快速本地判断、概率评估、证据和授权分开。 |
| [jevmeter](https://github.com/ChetasLua/jevmeter) | ★ 70 | Python | 2026-09-19 | 为任意视频叠加实时 Jev 仪表：逐句评分并渲染为 16:9 成片。 |
| [prism-liquidity-agent](https://github.com/irfndi/prism-liquidity-agent) | ★ 69 | TypeScript | 2026-09-22 | Solana 流动性代理具有可选的 Jev 影子判断，用于存款选择、有毒流量和市场制度压力。 |
| [shapeshift](https://github.com/anishfn/shapeshift) | ★ 66 | TypeScript | 2026-09-23 | 一种符合您的意思的输入：一个文本框，当您类型化时会变成正确的 UI。 Powered by TypeSafe Jev, works offline. |
| [QuantStudio](https://github.com/quantskills/QuantStudio) | ★ 58 | JavaScript | 2026-09-23 | Jev 根据已完成的蜡烛图、实时价格、头寸和策略限制来评估市场状态，然后建议观察、开仓或平仓操作以供人工批准。 |
| [JevIntent](https://github.com/Nisaka520/JevIntent) | ★ 52 | Java | 2026-09-24 | 微信插件，使用Jev在本地分析消息意图、情绪和回复姿势。 |
| [Stratum](https://github.com/YEDASAVG/Stratum) | ★ 51 | Rust | 2026-09-23 | AI驱动的日志智能系统 - 使用RAG技术对日志进行语义搜索、异常检测和根本原因分析。使用 Rust、Axum、NATS、ClickHouse 和 Qdrant 构建。 |
| [live-jev (okinaaudio)](https://github.com/okinaaudio/live-jev) | ★ 39 | Python | 2026-09-22 | Ableton Live 控制器，Jev 将简短的自然语言请求映射到有限的音乐制作操作。 |
| [jev-poly-crypto-demo](https://github.com/frankda/jev-poly-crypto-demo) | ★ 37 | TypeScript | 2026-09-24 | 使用 Jev 对市场状态和风险进行分类的加密决策仪表板。 |
| [Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | ★ 36 | Python | 2026-09-19 | 实时 Discord 审核机器人，Jev 并行评估消息与元数据，通过渐进式升级机制识别钓鱼、垃圾信息和社会工程。 |
| [jev-suite](https://github.com/klauswg/jev-suite) | ★ 36 | Java | 2026-09-24 | 四个决策质量应用程序，Jev 回答结构化问题，确定性代码保留最终权威。 |
| [call-coach-ai](https://github.com/ZeroGold/call-coach-ai) | ★ 35 | HTML | 2026-09-22 | 呼叫辅导应用程序，Jev 评估对话上下文以呈现结构化的辅导决策。 |
| [jev-guard](https://github.com/klauswg/jev-guard) | ★ 35 | Java | 2026-09-24 | 交易所存款和取款风险分类网关，由 Jev 分类和确定性代码裁决。 |
| [jev-recall](https://github.com/samdotmak/jev-recall) | ★ 33 | TypeScript | 2026-09-23 | 按相关性而非相似性检索：使用 TypeSafe 的 Jev 过滤 AI 助手的记忆。 |
| [jev-seo](https://github.com/AgriciDaniel/jev-seo) | ★ 31 | Python | 2026-09-23 | 对来自一个主页 URL 的任何网站进行实时 SEO 审核，由 Jev 进行判断。 PDF、XLSX 和 Markdown 报告。 |
| [jev-reviewer](https://github.com/choxos/jev-reviewer) | ★ 30 | JavaScript | 2026-09-21 | 系统综述提取应用，由 Jev 回答结构化审查表，并把审阅者引向原文引用行。 |
| [sharp](https://github.com/tshmieldev/sharp) | ★ 30 | TypeScript | 2026-09-23 | 使用 Jev 或任何 LLM 过滤您的 X.com feed。 |
| [jev-trade](https://github.com/aowang-ai/jev-trade) | ★ 29 | TypeScript | 2026-09-19 | 运行于 Hyperliquid 的实时 Jev 交易工具。 |
| [jevmail](https://github.com/fazlerocks/jevmail) | ★ 27 | TypeScript | 2026-09-21 | 只读 Gmail 分流应用，由 Jev 为每封邮件分配分类、紧急程度和真人撰写判断。 |
| [pi-codemode](https://github.com/boozedog/pi-codemode) | ★ 27 | TypeScript | 2026-09-23 | jev.ask 运行时全局允许沙盒 TypeScript 程序请求校准的 Jev Noul、Choice 和 Score 答案。 |
| [commit-miner](https://github.com/devanshbatham/commit-miner) | ★ 26 | Rust | 2026-09-19 | 使用 Jev 分类 Git Commit Diff 与消息，识别 Bug 修复、安全修复/CWE 和变更类型。 |
| [doc-router](https://github.com/misbahsy/doc-router) | ★ 26 | Rust | 2026-09-22 | 文档 OCR 路由器，Jev 逐页判断现有文本层是否可用或是否需要 OCR。 |
| [SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub) | ★ 26 | Python | 2026-09-23 | 只读交易日志和审查工具：Jev 类型化的判断、代理集成和可复制的财务基准。没有命令，没有建议。 |
| [blink](https://github.com/ellipsis-dev/blink) | ★ 24 | TypeScript | 2026-09-19 | 由 @typesafe-ai Jev 驱动的代码库搜索。 |
| [refgarden](https://github.com/AlbionaHoti/refgarden) | ★ 23 | TypeScript | 2026-09-19 | 面向创作者的空间化参考资料探索器，提供本地 Jev 查询选择、元数据高亮和带来源链接的收藏。 |
| [rikkahub-sillytavern-android](https://github.com/MiaoWuNYA/rikkahub-sillytavern-android) | ★ 21 | Kotlin | 2026-09-23 | RikkaHub Plus 华登版 - Android AI 聊天客户端 & SillyTavern Android 酒馆兼容性。连接API即时聊天：前缀缓存保存token、语义记忆RAG、Jev智能决策、QuickJS插件、语音通话、微信QQ Bot；人物卡、世界书Lorebook、默认、常规、二维码、美化主题均可按照酒馆官方语义一键导入，无需Termux/Node.js。 |
| [jevclip](https://github.com/cclank/jevclip) | ★ 21 | Python | 2026-09-25 | 视频剪辑流水线，由 Jev 判断字幕片段以筛选高亮内容并删去冗余。 |
| [Cheshi](https://github.com/CheshiAI/Cheshi) | ★ 18 | C | 2026-09-23 | Jev 支持的对话记忆：查找过去的会话并重新审视原始来源的决策。 OpenAI Codex 的 macOS 工作区。管理 AI 对话和代理，使用 CodeGraph 探索代码，并在一个应用程序中使用 Git、Ghostty 终端和 Apple Notes。 |
| [pi-dcp](https://github.com/Davidcreador/pi-dcp) | ★ 17 | TypeScript | 2026-09-23 | 实验性 Jev 路径对完整的上下文有效负载进行评分，以便用户可以查看和批准代理仍可用的内容。 |
| [hermes-nerve](https://github.com/keeltrace/hermes-nerve) | ★ 17 | Python | 2026-09-23 | Nerve 是 Hermes 代理的监督神经系统，添加了类型化的 System One 决策、排名、验证、令牌感知监督以及由 TypeSafe Jev 或开源 Laya 提供支持的选择加入工具门。 |
| [jev-yaba-wechat](https://github.com/wuxie888/jev-yaba-wechat) | ★ 17 | Python | 2026-09-23 | 不知道如何回复微信消息？ macOS浮动聊天助手：识别消息意图和沟通风险，GPT生成多种词语，Jev评估候选人，一键填写微信。我帮你想想然后发给你下单.. |
| [jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) | ★ 16 | JavaScript | 2026-09-23 | 由 Jev 提供支持的 Gmail 自托管 AI 电子邮件分类器。创建自定义标签，整理收件箱，并自信地过滤垃圾邮件并控制成本。 |
| [transcript-lens](https://github.com/sensahin/transcript-lens) | ★ 16 | TypeScript | 2026-09-23 | YouTube 翻译 anlamına göre keşfedin。 Türkçe arayüz、Jev 分析、altyazı dışa aktarma ve Vercel kurulum rehberi。 |
| [yanwai](https://github.com/YIRC99/yanwai) | ★ 15 | Kotlin | 2026-09-24 | Android微信模块，使用Jev显示情绪概率、暗示含义和沟通建议。 |
| [hafiza-os](https://github.com/fornhere/hafiza-os) | ★ 14 | Python | 2026-09-23 | Linux、macOS 和 Windows 均适用。 Claude Code、Codex 和反重力适配器；是的，Markdown 格式，可以修改，可以使用 Mem0/Jev。 |
| [jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier) | ★ 14 | Python | 2026-09-23 | 使用 Jev（TypeSafe 的 System One 模型）对收件箱进行分类 — 标记、移动、标记和通知，所有这些均由配置驱动。 |
| [Jev-Trades](https://github.com/zadescoxp/Jev-Trades) | ★ 13 | Python | 2026-09-19 | 使用 TypeSafe AI 首个 System One 模型 Jev 的交易机器人。 |
| [wechat-jev-assistant](https://github.com/yushen100/wechat-jev-assistant) | ★ 13 | Python | 2026-09-24 | Windows微信助手，在Jev对对话进行分类之前读取并编辑对话。 |
| [ad-radar](https://github.com/pengchujin/ad-radar) | ★ 13 | JavaScript | 2026-09-24 | 使用 Jev 识别和折叠社交平台上的广告和选定主题的浏览器扩展。 |
| [jevthoven](https://github.com/cocktailpeanut/jevthoven) | ★ 12 | TypeScript | 2026-09-23 | 由 Jev 提供支持的人工智能音乐（MIDI）发生器。 |
| [Byeori](https://github.com/joonan-lab/byeori) | ★ 11 | Python | 2026-09-25 | 科研知识系统，使用 Jev 筛选可复用知识问题供人工审核。 |
| [jevocks](https://github.com/unicodeveloper/jevocks) | ★ 9 | TypeScript | 2026-09-19 | 使用 Jev 展示日常股票状态。 |
| [jevlogs](https://github.com/reachjalil/jevlogs) | ★ 8 | TypeScript | 2026-09-19 | 面向 OpenTelemetry 的开源 Jev 日志分诊，在昂贵的 LLM 分析前先评估信号。 |
| [jsort](https://github.com/keltokhy/jsort) | ★ 8 | Python | 2026-09-21 | Sorts text by a plain-English criterion using pairwise Jev judgments and a locally fitted scale. |
| [jev-rerank](https://github.com/hev/reranker) | ★ 6 | Python | 2026-09-19 | 将 Jev 用作校准重排序器：单次调用最多处理 30 个文档，并为每个文档返回概率。 |
| [secondlayer](https://github.com/ryanwaits/secondlayer) | ★ 6 | TypeScript | 2026-09-19 | 自托管 Stacks 数据服务，其 Slack 门控和故障分诊路径使用 Jev 决策。 |
| [semdecide](https://github.com/sharziki/semdecide) | ★ 6 | Python | 2026-09-19 | 面向 Unix 管道与 CI 的类型化语义决策工具，由 TypeSafe AI Jev 驱动。 |
| [jev-cli (tumf)](https://github.com/tumf/jev-cli) | ★ 6 | Python | 2026-09-19 | TypeSafe Jev 的小型无依赖 CLI。 |
| [ai-elo-ranker](https://github.com/opaielsheikh/ai-elo-ranker) | ★ 5 | Python | 2026-09-19 | 由 Jev 和瑞士制匹配驱动的高速递归 AI Elo 锦标赛引擎。 |
| [jev-grug](https://github.com/mkotlikov/jev-grug) | ★ 4 | TypeScript | 2026-09-19 | 帮助 Jev 进行自然语言表达的实验项目。 |
| [typesafe-cli (y0usaf)](https://github.com/y0usaf/typesafe-cli) | ★ 4 | TypeScript | 2026-09-19 | 从 Shell 向 Jev 提出类型化问题，以数字而非文本返回 Noul、Choice 和 Score 答案。 |
| [jevsql](https://github.com/EugeneBoondock/jevsql) | ★ 3 | JavaScript | 2026-09-19 | 由 Jev 驱动、支持自然语言谓词的 SQL，可按语义过滤、排序、分类和评分，并提供批处理、缓存与成本保护。 |
| [smart-switch](https://github.com/reycn/smart-switch) | ★ 3 | Swift | 2026-09-19 | 使用前沿 AI 重构的 macOS 窗口切换器，由 TypeSafe Jev 模型预测目标窗口。 |
| [every](https://github.com/sufianetaouil/every) | ★ 3 | Python | 2026-09-19 | 针对代码库中的每个函数提出是非问题，并在数秒内低成本返回排序答案；由 Jev 驱动的“问题式 Grep”。 |
| [jev-resume-disqualifier](https://github.com/AiPersonacademy/jev-resume-disqualifier) | ★ 3 | Python | 2026-09-21 | Recruiting-screening demo combining deterministic checks with Jev judgments. |
| [jselect](https://github.com/keltokhy/jselect) | ★ 3 | Python | 2026-09-21 | Selects source-linked evidence within a token budget using Jev relevance judgments and local diversity selection. |
| [jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification) | ★ 2 | TypeScript | 2026-09-19 | 利用 TypeSafe System One 模型快速、低成本地分类文本型文档。 |
| [typesafe-jev](https://github.com/gtaras7/typesafe-jev) | ★ 2 | TypeScript | 2026-09-19 | 使用 Jev 决策模型筛选简历文件夹，提供类型化判断、可编辑策略和免费重新评分。 |
| [citation-verifier](https://github.com/MarissaFamularo/citation-verifier) | ★ 2 | JavaScript | 2026-09-19 | 检查被引用论文是否支持引用它的句子：Claude 验证引文，Jev 评分，最终由人工决定。 |
| [jev-tree](https://github.com/reachjalil/jev-tree) | ★ 2 | TypeScript | 2026-09-19 | 在分类树上递归执行 Jev Choice，绕过单次最多 255 个选项的限制。 |
| [jevibe-check](https://github.com/sriganesh/jevibe-check) | ★ 2 | JavaScript | 2026-09-19 | 使用 TypeSafe Jev API 为 Bluesky 帖子和草稿实时标注语气。 |
| [jev.nvim](https://github.com/valentynkit/jev.nvim) | ★ 2 | Lua | 2026-09-20 | Neovim 插件，让 Jev 按自然语言问题评估每个函数，并在 quickfix 中按概率排序。 |
| [btc-jev-signal](https://github.com/WebGrga/btc-jev-signal) | ★ 2 | TypeScript | 2026-09-19 | 实验性多时间尺度 BTC 信号生成器，使用 TypeSafe Jev 概率和 Binance 市场数据。 |
| [jlink](https://github.com/keltokhy/jlink) | ★ 2 | Python | 2026-09-21 | Record linkage using Jev pair judgments against a plain-English matching rule, with auditable probabilities. |
| [jevpdf](https://github.com/kylemclaren/jevpdf) | ★ 2 | TypeScript | 2026-09-24 | 使用 Jev Noul 判断来突出显示与自然语言问题匹配的行的 PDF 阅读器。 |
| [JevTicktRouter](https://github.com/GhrezaKh74/JevTicktRouter) | ★ 1 | C# | 2026-09-19 | 基于 .NET 10 与 React 19 的快速结构化 AI 工单分诊应用，使用 TypeSafe Jev。 |
| [Jackalope](https://github.com/Jackalope-Dev/jackalope) | ★ 1 | Rust | 2026-09-19 | 面向 Agent 编程的桌面 GUI，在本地 Agent 和账户间路由任务，由 Jev 为每项任务选择最佳 Agent、执行基础代码审查并提供上下文。 |
| [jev-cli](https://github.com/jtsang4/jev-cli) | ★ 1 | TypeScript | 2026-09-19 | TypeSafe AI Jev 评测模型的 CLI：输入类型化问题，输出结构化 JSON 答案。 |
| [pagegrade](https://github.com/kitze/pagegrade) | ★ 1 | TypeScript | 2026-09-19 | 浏览器扩展，使用 Jev 对页面区块的清晰度、写作质量和站内 SEO 进行评分。 |
| [commentcop](https://github.com/ntedvs/commentcop) | ★ 1 | TypeScript | 2026-09-19 | 使用 Jev 审判代码注释的质量。 |
| [qualm](https://github.com/qddegtya/qualm) | ★ 1 | TypeScript | 2026-09-19 | System One 模型的类型化决策库，将不确定答案与确定答案表示为不同类型，并由编译器强制处理。 |
| [jev-audio-beeper](https://github.com/santos-sanz/jev-audio-beeper) | ★ 1 | TypeScript | 2026-09-19 | 使用 Jev 类型化决策与 ffmpeg 的低延迟音频消音概念验证。 |
| [jev-score](https://github.com/a-Fig/jev-score) | ★ 1 | JavaScript | 2026-09-22 | 由 Jev 支持的本地优先文档评估工作区 |
| [metis](https://github.com/Ayush0054/metis) | ★ 1 | Python | 2026-09-22 | Metis：由 TypeSafe AI Jev 提供支持的自动 GitHub 问题分类。可重用的 GitHub Action。 |
| [tiab-review-plugin](https://github.com/youkiti/tiab-review-plugin) | ★ 1 | TypeScript | 2026-09-22 | 用于系统审查筛选的 Chrome 扩展，其中 Jev 返回每个标准的匹配概率和包含判断。 |
| [triagedy](https://github.com/m0rphtail/triagedy) | ★ 1 | Rust | 2026-09-22 | 安全警报分类过滤器，其中 Jev 或本地模型返回类型化配置，而策略路由保留在代码中。 |
| [Jev Subtitle Translator](https://github.com/GeekLinkDev/jev-subtitle-translator) | ★ 1 | Python | 2026-09-23 | SRT 翻译应用；Jev 的 Noul 检查标记需要人工复核的字幕对，但不改写字幕。 |
| [jevegis](https://github.com/0xArx/jevegis) | ★ 0 | TypeScript | 2026-09-19 | 一次 API 调用为 LLM 应用提供护栏，检测提示词注入、越狱、信息泄露和不安全内容；基于 TypeSafe Jev。 |
| [jev-resume-analyzer](https://github.com/awun8191/jev-resume-analyzer) | ★ 0 | Python | 2026-09-19 | 结合 TypeSafe Jev、React 和 FastAPI 的简历诊断与岗位匹配工具。 |
| [transcript-scorecard](https://github.com/brandonbryant12/transcript-scorecard) | ★ 0 | TypeScript | 2026-09-19 | ACME 实时客服通话评分演示，使用 TypeSafe AI、Effect、SQLite、React、Vite 和 Turborepo。 |
| [emoji-jev](https://github.com/colinmcdermott/emoji-jev) | ★ 0 | TypeScript | 2026-09-19 | 打字速度级别的 Emoji 自动补全，在 Whop 托管的 TanStack Start 应用中使用 TypeSafe Jev。 |
| [s1s](https://github.com/cpaczek/s1s) | ★ 0 | TypeScript | 2026-09-19 | System One Search：结合 TypeSafe 判断和仓库证据导航并追踪代码。 |
| [JevSysUno](https://github.com/Dujaydis/JevSysUno) | ★ 0 | TypeScript | 2026-09-20 | 探索 TypeSafe Jev 作为 System One 决策层的 TypeScript 应用。 |
| [jev (haibt163)](https://github.com/haibt163/jev) | ★ 0 | TypeScript | 2026-09-20 | 围绕 TypeSafe Jev 决策构建的 TypeScript 应用。 |
| [pkg-gate](https://github.com/hemanth/pkg-gate) | ★ 0 | JavaScript | 2026-09-19 | 使用 TypeSafe System One 检查 npm 生命周期脚本的安装前安全门控。 |
| [typesafe-comment](https://github.com/Hexdigest123/typesafe-comment) | ★ 0 | Python | 2026-09-19 | 使用 typesafe.ai 按特定启发式规则评估代码注释的小型 Python 包。 |
| [mimicry](https://github.com/jxucoder/mimicry) | ★ 0 | Python | 2026-09-19 | 通过有边界的 TypeSafe 反馈循环，将 AI 草稿改写为用户自己的表达风格。 |
| [newsscore](https://github.com/mahynotch/newsscore) | ★ 0 | Python | 2026-09-20 | 异步库与 CLI，默认使用 Jev 将一周新闻转为每个股票代码的一项情绪评分。 |
| [draftpulse](https://github.com/pekth/draftpulse) | ★ 0 | TypeScript | 2026-09-19 | 实验性实时 X 草稿传播潜力评分器，由 TypeSafe Jev 驱动。 |
| [jev-trader (renatosousa)](https://github.com/renatosousa/jev-trader) | ★ 0 | Python | 2026-09-20 | 使用 Jev 作出市场判断的交易应用。 |
| [typesafe-triage-guard](https://github.com/shivam2003-dev/typesafe-triage-guard) | ★ 0 | Python | 2026-09-19 | 构建在 TypeSafe Jev 上的三个可组合判断管道：客服工单分诊、可观测性告警分诊和部署风险门控。 |
| [scam-shield](https://github.com/ShupingR/scam-shield) | ★ 0 | TypeScript | 2026-09-19 | 由 TypeSafe Jev 模型驱动的诈骗短信过滤器。 |
| [trading-bot-jev](https://github.com/Spykoninho/trading-bot-jev) | ★ 0 | TypeScript | 2026-09-20 | 使用 Jev 判断新闻的 Binance 测试网交易机器人。 |
| [JevSlop](https://github.com/TKY-27/JevSlop) | ★ 0 | TypeScript | 2026-09-19 | 从八个 Jev 维度评估公开 note.com 文章，并生成可检查的 AI 低质内容评分。 |
| [github-star-organizer-jev](https://github.com/yutkat/github-star-organizer-jev) | ★ 0 | Python | 2026-09-20 | 使用 Jev 分类和整理 GitHub Star。 |
| [jev-the-janitor](https://github.com/kylehovance-ai/jev-the-janitor) | ★ 0 | Python | 2026-09-22 | 由 TypeSafe Jev 提供支持的 Markdown 金库管理员：Jev 对每个注释进行投票，您的代码将其归档，您可以查看低置信度的一堆注释。 |
| [discoprint](https://github.com/lirantal/discoprint) | ★ 0 | JavaScript | 2026-09-22 | 使用 Jev (TypeSafe AI) 按主题、情绪和抒情复杂性对艺术家的唱片进行分类，并将其视为彩色终端仪表板 |

### 游戏与模拟   (70)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [typesafe-mario](https://github.com/fhshaik/typesafe-mario) | ★ 286 | Python | 2026-09-19 | 从结构化模拟器状态出发、使用 TypeSafe Jev 游玩《超级马力欧兄弟》的 Agent。 |
| [quackd](https://github.com/rokbenko/quackd) | ★ 229 | Python | 2026-09-23 | 一个适用于所有机器人的板外 CLI。将它们连接起来，指挥它们，让它们一起工作，每个大脑都有一个法学硕士（Claude、OpenAI、Gemini、Grok，或通过 Ollama 或 vLLM 本地化），还有一个决策法学硕士，可以实现更便宜、更快的步骤（Jev、Laya 和 Kev）。支持 Microduck、Open Duck Mini、LeRobot、XLeRobot、AlohaMini、ToddlerBot、Jetson 或任何 ROS。 |
| [embodied-jev](https://github.com/FBddcz/embodied-jev) | ★ 164 | Python | 2026-09-22 | EmbodiedJev：带有 MiniCPM5-2B、Jev 和兼容模型 API 的 MuJoCo 机器人决策工作台 |
| [laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev) | ★ 89 | Python | 2026-09-23 | Laya 与 Jev：本地 MLX 和托管 AI 决策并排玩 T-Rex，具有实时指标和重播记录。 |
| [jev-drone](https://github.com/RomanSlack/jev-drone) | ★ 77 | Python | 2026-09-19 | MuJoCo 中仅依赖摄像头的自主无人机，控制循环以 2.5Hz 调用 TypeSafe Jev 小型判断模型。 |
| [detroit-ai-player](https://github.com/Baba88611/detroit-ai-player) | ★ 56 | Python | 2026-09-23 | Jev 通过一个类型化的 Choice 问题，在《底特律：变人》的每个决策节点中从可用选项里选择下一步剧情行动。 |
| [jev-libero](https://github.com/Dimweaker/jev-libero) | ★ 43 | Python | 2026-09-21 | LIBERO 机器人控制环境，由 Jev 根据任务状态和物理预览选择细粒度动作。 |
| [jev-robot-control](https://github.com/openroboto-ai/jev-robot-control) | ★ 38 | Python | 2026-09-22 | MuJoCo xArm7 研究中，Jev 根据物理反馈选择运动方向和抓手动作。 |
| [RoboJEV](https://github.com/lykycy123/RoboJEV) | ★ 35 | Python | 2026-09-23 | MuJoCo 中 Franka Panda 的两级 Jev 控制。 |
| [Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy) | ★ 34 | Python | 2026-09-23 | 备受期待的 Jev 开源存储库作为策略，可以一键设置模拟环境。 Astra + Jev 在 RoboTwin 等基准上的评估也将很快发布。 |
| [Jev_Star](https://github.com/sc2musa/Jev_Star) | ★ 33 | Python | 2026-09-24 | 星际争霸代理实验使用 Jev 进行快速战术决策。 |
| [clash-jev](https://github.com/bytelabs-oss/clash-jev) | ★ 26 | Python | 2026-09-23 | 没有经过训练的策略的《皇室战争》机器人：Jev（TypeSafe System One）根据实时游戏状态做出每一个决定。 |
| [PlayJev](https://github.com/OmniJev/PlayJev) | ★ 25 | JavaScript | 2026-09-23 | 🚀🚀 一个类似 0.8B Jev 的多模式模型，直接从原始像素玩 GUI 游戏。 |
| [laya-vs-jev-arena](https://github.com/PromptEngineer48/laya-vs-jev-arena) | ★ 25 | JavaScript | 2026-09-23 | Laya (open source, local) vs TypeSafe Jev (API): two AI models race in Snake and fight in a Mortal-Kombat-style arena.每一个举动都是真正的模型决策。 |
| [robodiag-harness](https://github.com/YueBit/robodiag-harness) | ★ 22 | Python | 2026-09-23 | ROS 2 机器人的人工智能诊断代理 — 基于证据、工具调用、安全门控。 |
| [typesafe-snake](https://github.com/sorrycc/typesafe-snake) | ★ 18 | TypeScript | 2026-09-19 | 由 TypeSafe Jev 自动游玩的贪吃蛇：每个 Tick 执行一次 System One 选择，合法动作和事实由代码生成。 |
| [jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab) | ★ 17 | TypeScript | 2026-09-24 | 使用 Jev 进行无人机群模拟，进行反射决策和避免碰撞。 |
| [tsai-sc](https://github.com/phyous/tsai-sc) | ★ 16 | Python | 2026-09-19 | TypeSafe Jev 通过键盘和鼠标控制原版《星际争霸》共享版，并记录动作概率。 |
| [mario-jev](https://github.com/shantanugoel/mario-jev) | ★ 12 | Python | 2026-09-19 | Python 原型：从结构化 RAM 观测游玩 NES《超级马力欧兄弟》，由 Jev 回答聚焦的移动和跳跃问题。 |
| [JevTown](https://github.com/NevaMind-AI/JevTown) | ★ 12 | TypeScript | 2026-09-24 | 人工智能城镇模拟，其中 Jev 选择角色动作和响应。 |
| [Jev Driving Lab](https://github.com/kavehmz/typesafe-playground) | ★ 10 | JavaScript | 2026-09-19 | 从客服路由到三维驾驶模拟的交互实验：输入结构化传感器状态，输出类型化转向、制动和超车决策。 |
| [heist-one](https://github.com/AbdelStark/heist-one) | ★ 6 | TypeScript | 2026-09-19 | 可观测的浏览器潜行游戏：Jev 作出类型化守卫判断，确定性代码负责世界规则。 |
| [OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | ★ 5 | TypeScript | 2026-09-19 | 一对一 Jev 快速狙击竞技场，使用 Three.js 与 TypeSafe System One。 |
| [jev-doom-agent](https://github.com/lukaske/jev-doom-agent) | ★ 4 | TypeScript | 2026-09-19 | 浏览器原生 Doom Agent 实验，包含结构化空间状态、可组合 AI 控制、实时决策遥测和 Chocolate Doom WebAssembly 运行时。 |
| [jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon) | ★ 3 | Python | 2026-09-19 | 《宝可梦 红》Agent，将结构化游戏状态转为 Jev 决策和经过验证的动作。 |
| [jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm) | ★ 3 | Python | 2026-09-19 | 让模拟 Franka 机械臂执行零样本英文目标，由 Jev 串联硬编码动作原语。 |
| [jev-royal](https://github.com/Amrit-Nigam/jev-royal) | ★ 2 | TypeScript | 2026-09-20 | 由 Jev 驱动的游戏与决策实验。 |
| [hundred](https://github.com/jammaru/jev-lab) | ★ 2 | TypeScript | 2026-09-19 | 100 个 AI NPC 生活在小镇中，Jev 选择下一动作，世界系统书写故事。 |
| [jev-plays-pokemon-red](https://github.com/valentynkit/jev-plays-pokemon-red) | ★ 2 | Python | 2026-09-20 | 基于 PyBoy 的《宝可梦红》项目：Jev 只在分支处选择合法动作，并为每个战斗回合记录以 Brier 分数评估的倒下预测。 |
| [rubikjev](https://github.com/0xtrou/rubikjev) | ★ 1 | TypeScript | 2026-09-19 | 用魔方谜题挑战 Jev 的推理能力。 |
| [robo-harness](https://github.com/grmkris/robo-harness) | ★ 1 | TypeScript | 2026-09-19 | SO-101 机械臂工作台，由 Jev 在预算约束下选择有限关节动作。 |
| [jev2048](https://github.com/KyleKreuter/jev2048) | ★ 1 | TypeScript | 2026-09-19 | 让 Jev（TypeSafe AI）解决 2048。 |
| [tsai-civ2](https://github.com/phyous/tsai-civ2) | ★ 1 | Python | 2026-09-19 | TypeSafe Jev 在浏览器中游玩原版《文明 II》，实时展示动作概率；实验性完整游戏框架。 |
| [jev-gomoku (XieChengYuan)](https://github.com/XieChengYuan/jev-gomoku) | ★ 1 | JavaScript | 2026-09-19 | 弈瞬：双 Jev 五子棋九宫格输入实验台，可逐手查看模型决策，支持真实对局回放与实时对战。 |
| [last-exit](https://github.com/0x963D/last-exit) | ★ 0 | JavaScript | 2026-09-19 | 由 TypeSafe Jev 驱动的赛博朋克边境遭遇游戏：欺骗守卫并检查决策记录。 |
| [jev-pong](https://github.com/ably-labs/jev-pong) | ★ 0 | TypeScript | 2026-09-19 | 每次球移动都由模型决策的 Pong 基准，通过 Vercel AI Gateway 比较 Jev 与 LLM。 |
| [river-run-typesafe](https://github.com/ashaazami/river-run-typesafe) | ★ 0 | Python | 2026-09-19 | 受 Atari《River Raid》启发的 Python 河流射击游戏，由 TypeSafe AI 飞行员游玩。 |
| [river-oaks](https://github.com/BunsDev/river-oaks) | ★ 0 | — | 2026-09-19 | 以休斯敦 River Oaks 为背景、使用 Jev 驱动 NPC 的模拟项目。 |
| [typesafe-minecraft-demo](https://github.com/ellistev/typesafe-minecraft-demo) | ★ 0 | JavaScript | 2026-09-19 | 由 TypeSafe AI 控制的 Minecraft Java 玩家，实时展示决策、搭建加拿大国旗并提供并排仪表板。 |
| [jev.mods](https://github.com/Hardel-DW/jev.mods) | ★ 0 | Java | 2026-09-19 | Minecraft 模组，让 Jev 在没有预设路线的情况下从零尝试通关。 |
| [jev-snake](https://github.com/iammusham/jev-snake) | ★ 0 | Python | 2026-09-19 | 实验性贪吃蛇环境：游戏引擎负责确定性规则，Jev 每个 Tick 根据结构化状态决定移动方向。 |
| [jev-play-ping-pong](https://github.com/Icohen007/jev-play-ping-pong) | ★ 0 | JavaScript | 2026-09-19 | Jev 实时游玩浏览器乒乓球，使用结构化遥测、类型化决策、普通 Chrome 输入和可审计证据。 |
| [jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | ★ 0 | JavaScript | 2026-09-19 | 由 TypeSafe Jev 模型游玩的 Chrome 恐龙游戏。 |
| [roverlab](https://github.com/juancamiloqhz/roverlab) | ★ 0 | TypeScript | 2026-09-19 | 三维行星车沙盒，用于试验 TypeSafe AI 的自主决策。 |
| [jev-bfs](https://github.com/komikat/jev-bfs) | ★ 0 | Python | 2026-09-19 | 维基百科链接竞速，使用 Jev 直接排序并在终端实时展示。 |
| [typesafe-jev-drone-demo](https://github.com/kxzk/typesafe-jev-drone-demo) | ★ 0 | Python | 2026-09-19 | Three.js 无人机模拟器，配有 Python 后端和实时 Jev 导航决策。 |
| [beatjev](https://github.com/lambertsj/beatjev) | ★ 0 | JavaScript | 2026-09-19 | 浏览器游戏：尝试在识别垃圾信息方面击败 Jev。 |
| [jev-tetris](https://github.com/MachineLearning-Nerd/jev-tetris) | ★ 0 | Python | 2026-09-19 | 可视化 TypeSafe 演示，由 Jev 选择经过验证的俄罗斯方块落点。 |
| [typesafe-3d-chess](https://github.com/malDuffin/typesafe-3d-chess) | ★ 0 | TypeScript | 2026-09-19 | 由 TypeSafe Jev 驱动的三维国际象棋，默认 AI 对 AI，也可选择任一方游玩，并提供多种难度。 |
| [f1](https://github.com/MartinPuli/f1) | ★ 0 | JavaScript | 2026-09-20 | JEV Prix 模拟：五名 AI 车手、程序生成赛道、BYOK Jev 和回放保存。 |
| [jev-atari-lab](https://github.com/memorysaver/jev-atari-lab) | ★ 0 | Python | 2026-09-20 | 使用 Jev 结构化决策和值问题的可重放 Atari 实验。 |
| [jev-gomoku](https://github.com/mizchi/jev-gomoku) | ★ 0 | MoonBit | 2026-09-19 | Jev 的 MoonBit 客户端，以及带计时日志的 Jev 对 Jev 五子棋对局。 |
| [naimono-lab](https://github.com/mocchalera/naimono-lab) | ★ 0 | JavaScript | 2026-09-20 | 由 Jev 驱动、供家庭游玩虚构词语的文字游戏。 |
| [beat-jev](https://github.com/ojusave/beat-jev) | ★ 0 | TypeScript | 2026-09-20 | 由 Render Workflows、TypeSafe Jev 和 Render Postgres 驱动的点球游戏。 |
| [pdoom-protocol](https://github.com/onionminionops-beep/pdoom-protocol) | ★ 0 | TypeScript | 2026-09-19 | USER + JEV: P(DOOM) PROTOCOL：TypeSafe Jev 与玩家并肩作战的合作平台射击游戏。 |
| [ps2-ai-agent](https://github.com/opaielsheikh/ps2-ai-agent) | ★ 0 | Python | 2026-09-19 | 由 TypeSafe Jev System One 驱动、带实时视觉遥测 HUD 的 PlayStation 2 自主 AI Agent。 |
| [casse-brique-typesafe](https://github.com/Para-FR/casse-brique-typesafe) | ★ 0 | TypeScript | 2026-09-19 | Next.js 打砖块游戏，挡板由 TypeSafe Jev 实时控制；使用 Claude Code 构建。 |
| [cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) | ★ 0 | JavaScript | 2026-09-19 | 《Cyber-Breach: The Jev Protocol》：由 TypeSafe Jev System One 决策模型驱动的赛博朋克战术竞技游戏。 |
| [JevArena (rolki-png)](https://github.com/rolki-png/JevArena) | ★ 0 | TypeScript | 2026-09-20 | 两个 Jev Agent 通过 Vercel AI Gateway 对战贪吃蛇。 |
| [pong-jev](https://github.com/safzanpirani/pong-jev) | ★ 0 | TypeScript | 2026-09-19 | TypeSafe Jev 游玩 Atari Pong，每帧一个类型化 Choice 问题，不向模型发送坐标。 |
| [jev-games](https://github.com/shantanugoel/jev-games) | ★ 0 | Python | 2026-09-19 | 面向多种游戏和模拟器平台的可视化 Jev 实验室。 |
| [snake-jev](https://github.com/siroccomask/snake-jev) | ★ 0 | Python | 2026-09-19 | 由并行 Jev 评估控制的贪吃蛇，每个游戏 Tick 仅调用一次 API。 |
| [terrarium](https://github.com/TheGali/terrarium) | ★ 0 | JavaScript | 2026-09-19 | 让 TypeSafe System One 模型操控小型生物的沙盒，世界逻辑由代码运行。 |
| [typesafe-chess](https://github.com/TholeG/typesafe-chess) | ★ 0 | JavaScript | 2026-09-19 | 双方均由 TypeSafe Jev 控制的国际象棋，每一步都是类型化 Choice 决策。 |
| [shady-town](https://github.com/tpaulshippy/shady-town) | ★ 0 | Ruby | 2026-09-19 | 适合客厅电视的社交推理派对游戏，由 TypeSafe Jev 主持。 |
| [siege](https://github.com/vnmoorthy/siege) | ★ 0 | TypeScript | 2026-09-19 | SIEGE：200 人对抗一个 Agent；TypeSafe System One 类型化动作门控会从每次突破中学习，并通过 W&B Weave 评测及防守循环强化。 |
| [Agent-JEV-Tetris](https://github.com/Yasserbhb/Agent-JEV-Tetris) | ★ 0 | HTML | 2026-09-19 | 使用新模型 Jev 游玩俄罗斯方块。 |
| [jev-plays-pokemon](https://github.com/zbloss/jev-plays-pokemon) | ★ 0 | Python | 2026-09-20 | 由 Jev 选择动作的宝可梦游戏实验。 |
| [Jev RPS](https://github.com/0xlau/jev-rps) | ★ 0 | JavaScript | 2026-09-23 | 采用承诺—揭示机制的石头剪刀布游戏；Jev 评估玩家行为、预测下一步，并在玩家行动前选定自己的出拳。 |
| [The Chess of Life × Jev](https://github.com/ARCJ137442/jev-life) | ★ 0 | TypeScript | 2026-09-23 | 可编辑规则的生命游戏实验台；Jev 评估合法单元格并选择每次干预，代码负责推进和校验棋盘。 |

### 演示与试验场   (64)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [jev-leftpad](https://github.com/f/jev-leftpad) | ★ 82 | JavaScript | 2026-09-23 | Left-pad strings with TypeSafe AI's Jev.出于原因。 |
| [jev-paint](https://github.com/achimala/jev-paint) | ★ 50 | JavaScript | 2026-09-23 | 使用Jev来创作艺术！ |
| [jeview](https://github.com/andududu/jeview) | ★ 39 | JavaScript | 2026-09-23 | Jev 的非官方本地可视化工具（TypeSafe）：代码进行的每次调用的实时视图。不隶属于 TypeSafe AI。 |
| [jev-explained](https://github.com/davila7/jev-explained) | ★ 27 | TypeScript | 2026-09-23 | Jev 解释。 |
| [Jev-Quantum](https://github.com/karminski/Jev-Quantum) | ★ 27 | Rust | 2026-09-23 | 随机 Jev 兼容基线，为模拟、下限比较和路由器评估发出 Noul、Choice 和 Score 概率。 |
| [is-jeven](https://github.com/wobsoriano/is-jeven) | ★ 27 | JavaScript | 2026-09-23 | 均匀吗？询问Jev。 |
| [jev-design-test](https://github.com/bhaiG-de/jev-design-test) | ★ 22 | TypeScript | 2026-09-23 | Jev shadcn 块生成器。 |
| [killmyidea](https://github.com/monteduro/killmyidea) | ★ 21 | TypeScript | 2026-09-19 | 描述你的创业想法，由 Jev 决定：放弃、修改或发布。 |
| [Pi-Jev-Guide](https://github.com/zszz3/Pi-Jev-Guide) | ★ 20 | TypeScript | 2026-09-23 | Jev 在选定的工作流程阶段检查可配置的 Pi 代理规则的风险、输出编辑、重复失败和缺失验证。 |
| [typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground) | ★ 20 | TypeScript | 2026-09-24 | 社区游乐场，包含可编辑的 Jev 用例、游戏、困境、挑战和 A/B 比较。 |
| [Jev](https://github.com/mayank953/Jev) | ★ 17 | JavaScript | 2026-09-23 | TypeSafe 的 Jev 的六个实时并排演示 — 一个“System One”模型，返回类型化的概率决策（70–500 毫秒，每 1M 输入令牌 0.042 美元，免费输出）而不是生成的文本。 |
| [jev-studio](https://github.com/utk2103/jev-studio) | ★ 15 | Python | 2026-09-23 | 如果您正在尝试 jev，从这里开始会更容易。 |
| [typesafe-ai-playground (BunsDev)](https://github.com/BunsDev/typesafe-ai-playground) | ★ 14 | TypeScript | 2026-09-19 | 社区 TypeSafe AI 游乐场，包含 110 个用例、游戏、两难问题和模型挑战，支持编辑提示词、A/B 对比和移动端界面。 |
| [pix-golpe](https://github.com/sandeco/pix-golpe) | ★ 13 | Python | 2026-09-24 | 分屏演示，其中 Jev 检测 Pix 支付诈骗并追踪欺诈链。 |
| [jevbot](https://github.com/lyramakesmusic/jevbot) | ★ 13 | Python | 2026-09-24 | Discord 机器人演示，让用户可以与 Jev 支持的类型化行为进行对话。 |
| [jev-me](https://github.com/jon-devlapaz/jev-me) | ★ 12 | Python | 2026-09-19 | 以连续追问方式审视创意，由 Jev 负责“拷问”。 |
| [Awesome Jev Use Cases (whyashthakker)](https://github.com/whyashthakker/awesome-jev-use-cases) | ★ 12 | HTML | 2026-09-23 | 50 个可运行的可视化示例，对比 Jev 类型化决策与 OpenAI 结构化输出基线，并明确标注固定样例和方法边界。 |
| [away-together-starter](https://github.com/earlyaidopters/away-together-starter) | ★ 12 | HTML | 2026-09-25 | 受 Jev 启发的旅行决策教程，包含分类器训练；浏览器演示使用预录模型输出。 |
| [Instinct](https://github.com/joevidev/ui-generator-instinct-jev) | ★ 6 | TypeScript | 2026-09-19 | 输入自然语言案例，由 Jev 从固定目录中选择 UI，不生成任何代码或文案。 |
| [jev-autopilot](https://github.com/arielweinberger/jev-autopilot) | ★ 4 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 让无人机在随机城市中从 A 点自主飞到 B 点并避障，单次行程成本约 0.01 美元。 |
| [typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) | ★ 3 | JavaScript | 2026-09-19 | 社区 TypeSafe AI 游乐场，包含 110 个用例、游戏、两难问题和模型挑战，支持编辑提示词、A/B 对比和移动端界面。 |
| [clarity-judge](https://github.com/BunsDev/clarity-judge) | ★ 2 | TypeScript | 2026-09-19 | 由 Jev 驱动的多维写作质量检查器，每个命名检查项独立返回结论与置信度。 |
| [jev-system-one](https://github.com/haseeb-heaven/jev-system-one) | ★ 2 | Python | 2026-09-19 | 精致的 OpenAI + TypeSafe Jev 终端界面，提供答案和透明决策报告。 |
| [Should AI Kill Us All?](https://github.com/hellogumbo/should-ai-kill-us-all) | ★ 2 | JavaScript | 2026-09-19 | 实时判决页面，每十分钟向 Jev 输入当日奇闻、政治和国际新闻，并用三种原语判断 AI 是否应该消灭人类。 |
| [typesafe-arena](https://github.com/DeepBlueDynamics/typesafe-arena) | ★ 1 | Rust | 2026-09-19 | TypeSafe AI Jev 模型的实验游乐场。 |
| [jev-playground (Little-Planet-Labs)](https://github.com/Little-Planet-Labs/jev-playground) | ★ 1 | TypeScript | 2026-09-19 | 用于试验 TypeSafe Jev System One 模型的小型 Next.js 应用。 |
| [typesafe-ai-playground (markjaquith)](https://github.com/markjaquith/typesafe-ai-playground) | ★ 1 | Rust | 2026-09-19 | 用于试验 TypeSafe System One 模型 Jev 的游乐场。 |
| [toolgate](https://github.com/ndolinschi/toolgate) | ★ 1 | TypeScript | 2026-09-19 | Agent 工具/MCP 调用门控，通过 TypeSafe Jev 决定允许、询问人工或拒绝。 |
| [guard-jev](https://github.com/NorbertBodziony/guard-jev) | ★ 1 | TypeScript | 2026-09-19 | 评论审核游乐场：粘贴评论，由 Jev 决定处理方式。 |
| [got-jev](https://github.com/phureewat29/got-jev) | ★ 1 | TypeScript | 2026-09-19 | 通过《权力的游戏》场景演示 TypeSafe Jev 的概念验证。 |
| [gpt-vs-jev](https://github.com/TanayPadar/gpt-vs-jev) | ★ 1 | TypeScript | 2026-09-19 | 在相同输入上比较 GPT 生成语言与 Jev 的结构化 Noul 决策。 |
| [harden-jev-decides](https://github.com/tylerjharden/harden-jev-decides) | ★ 1 | TypeScript | 2026-09-19 | 由 Jev 选择哪个直播创意成为现场 MVP 的 TypeSafe System One 决策面板。 |
| [Jev by Example](https://github.com/ReallyArtificial/jev-by-example) | ★ 1 | JavaScript | 2026-09-23 | 10 个可运行的 Agent 决策示例，覆盖记忆、重试、上下文选择和交接，提供离线固定样例及可选的 Jev 实时调用。 |
| [human-compiler](https://github.com/asfarsadewa/human-compiler) | ★ 0 | TypeScript | 2026-09-19 | 人类语言编译器：粘贴文本即可获得由 TypeSafe Jev 衡量的诊断结果。 |
| [jev-demos](https://github.com/Bud-ro/jev-demos) | ★ 0 | Dart | 2026-09-19 | 用于测试 TypeSafe Jev System One 模型效果的演示集合。 |
| [jev-ad-preflight](https://github.com/cardotrejos/jev-ad-preflight) | ★ 0 | — | 2026-09-19 | TypeSafe/Jev 的公开 X 广告预检演示。 |
| [jev-should-i-apply](https://github.com/cardotrejos/jev-should-i-apply) | ★ 0 | — | 2026-09-19 | TypeSafe/Jev 的公开 X 求职申请判断演示。 |
| [jev-user-jury](https://github.com/cardotrejos/jev-user-jury) | ★ 0 | — | 2026-09-19 | TypeSafe/Jev 的公开 X 用户陪审团演示。 |
| [extremely-specific-council](https://github.com/cbetz/extremely-specific-council) | ★ 0 | TypeScript | 2026-09-19 | 由 12 位毫无资质的成员组成的趣味 TypeSafe AI 委员会，提供动画投票、可检查决策和可分享结论。 |
| [jev-bun1](https://github.com/heiwa4126/jev-bun1) | ★ 0 | TypeScript | 2026-09-19 | 使用 TypeScript SDK 上手 TypeSafe Jev 的第一步示例。 |
| [jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) | ★ 0 | TypeScript | 2026-09-19 | 在数秒内获得对论文的反馈。 |
| [Probably](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) | ★ 0 | TypeScript | 2026-09-19 | 展示 BTC、ETH 和 XRP 实时价格及 TypeSafe“买入或等待”共享决策的演示，不执行真实交易。 |
| [tiny-jev](https://github.com/karimatayuta/tiny-jev) | ★ 0 | HTML | 2026-09-20 | 用于体验 TypeSafe Jev 决策的小型浏览器实验。 |
| [forma-system1-experiment](https://github.com/LamplighterPaul/forma-system1-experiment) | ★ 0 | TypeScript | 2026-09-20 | 设计实验：Jev 在约一秒内选择设计，Luna 只负责撰写文字。 |
| [jev-dev](https://github.com/n-yokomachi/jev-dev) | ★ 0 | TypeScript | 2026-09-19 | 让 Jev 与 LLM 判断同一发言，在单一界面比较情感变化偏差和响应速度。 |
| [Jev Gamecast](https://github.com/narulaskaran/jev-data-questions) | ★ 0 | TypeScript | 2026-09-19 | 以回放为先的 React 应用，针对实时体育数据向 Jev 提出类型化问题。 |
| [cartshield](https://github.com/ndolinschi/cartshield) | ★ 0 | TypeScript | 2026-09-19 | CartShield：使用 TypeSafe Jev 为中小企业结账交易判定欺诈处置方式。 |
| [harnessjudge](https://github.com/ndolinschi/harnessjudge) | ★ 0 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 判断 Agent 步骤应继续、重试、升级还是停止。 |
| [hiresignal](https://github.com/ndolinschi/hiresignal) | ★ 0 | TypeScript | 2026-09-19 | HireSignal：使用 TypeSafe Jev 进行简历首轮匹配和面试筛选。 |
| [jevplay](https://github.com/ndolinschi/jevplay) | ★ 0 | TypeScript | 2026-09-19 | TypeSafe Jev 游乐场，可自定义构建 Choice、Score 和 Noul 并实时查看概率分布。 |
| [lanebreak](https://github.com/ndolinschi/lanebreak) | ★ 0 | TypeScript | 2026-09-19 | LaneBreak：使用 TypeSafe Jev 判断客服工单优先级并路由。 |
| [mcpmatch](https://github.com/ndolinschi/mcpmatch) | ★ 0 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 分两阶段将用户目标匹配到 MCP 目录。 |
| [pulselane](https://github.com/ndolinschi/pulselane) | ★ 0 | TypeScript | 2026-09-19 | PulseLane：使用 TypeSafe Jev 进行诊所分诊决策。 |
| [spendbrake](https://github.com/ndolinschi/spendbrake) | ★ 0 | TypeScript | 2026-09-19 | Agent 预算刹车，通过 TypeSafe Jev 决定继续、降级模型或停止。 |
| [swarmrouter](https://github.com/ndolinschi/swarmrouter) | ★ 0 | TypeScript | 2026-09-19 | 使用 TypeSafe Jev 将任务路由到研究、编程、浏览器、客服或写作 Agent。 |
| [trustgate](https://github.com/ndolinschi/trustgate) | ★ 0 | TypeScript | 2026-09-19 | TrustGate：使用 TypeSafe Jev 为独立媒体提供信任与安全门控。 |
| [typesafe-jev-examples](https://github.com/rajivkuriakose/typesafe-jev-examples) | ★ 0 | Python | 2026-09-19 | Jev 的工单分诊与重排序完整示例，可通过 OpenRouter、样例数据和 Makefile 直接运行。 |
| [Search-Function-Test](https://github.com/Shifros/Search-Function-Test) | ★ 0 | JavaScript | 2026-09-19 | 基于 Jev AI 的搜索功能测试项目，让用户以聊天方式检索拥有数百篇文章的网站并找到相关答案。 |
| [jev-board-lab](https://github.com/WebGrga/jev-board-lab) | ★ 0 | JavaScript | 2026-09-19 | 用于 Jev Board 数据集的交互探索器和 Jev 问题工作区。 |
| [Job Risk Analyzer](https://github.com/WeSecureYou/Jev-test) | ★ 0 | TypeScript | 2026-09-19 | 职业风险分析器：通过 CLI 和 REST API 使用 Jev 评估职业受 AI 裁员影响的程度及韧性。 |
| [typesafe-image-diffusion](https://github.com/Wizhill05/typesafe-image-diffusion) | ★ 0 | HTML | 2026-09-19 | 从分类器生成扩散风格像素画：并行提出 256 个逐像素 Jev 问题并执行多轮细化。 |
| [jev-playground (wustep)](https://github.com/wustep/jev-playground) | ★ 0 | TypeScript | 2026-09-19 | 探索 System One 模型能否指挥音乐：Jev 只用枚举选择方案，代码生成乐谱、音频和 MIDI。 |
| [jev-calculator](https://github.com/pc418/jev-calculator) | ★ 0 | TypeScript | 2026-09-23 | 一种概率计算器，Jev 从 13 个固定选项中一次发出一个答案字符，UI 显示每一步的概率分布。 |
| [Magic Jev Ball (mikecann)](https://github.com/mikecann/magic-jev-ball) | ★ 0 | TypeScript | 2026-09-25 | 运行于 Convex 的 3D 魔法八号球，由 Jev 为二十种经典答案评分并展示概率。 |

### 基准测试与研究   (114)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [NanoJev](https://github.com/TianyuCodings/NanoJev) | ★ 1,074 | Python | 2026-09-19 | 开放的 0.6B 参数 Jev 复刻，支持并行决策、完整概率分布，并提供训练管道、权重、数据集和在线演示。 |
| [jevlike](https://github.com/vinnylarouge/jevlike) | ★ 1,008 | Python | 2026-09-19 | 训练小模型，从动态文本选项列表中单次前向输出每个选项的概率；包含 Doom、国际象棋和 Wikispeedia 演示。 |
| [SREGym](https://github.com/SREGym/SREGym) | ★ 295 | Python | 2026-09-23 | 当启用 Codex 运行时，Jev 会根据提供的证据审核诊断测试和事件解决提交。 |
| [jev-align](https://github.com/sutro-sh/jev-align) | ★ 278 | Python | 2026-09-23 | 使用 Jev 和 GEPA 根据人类反馈构建校准的 AI 功能。 |
| [tasksource](https://github.com/sileod/tasksource) | ★ 197 | Python | 2026-09-23 | Tasksource 将数百个分类数据集重新转换为 Jev 兼容的类型化问题、答案和程序训练示例。 |
| [jev-visual](https://github.com/hr98w/jev-visual) | ★ 150 | Python | 2026-09-19 | Apple Silicon 上用于教学的 Jev 风格视觉推理实验，采用共享上下文、直接候选评分和本地视觉演示。 |
| [Convex Decision Evals](https://github.com/get-convex/convex-evals) | ★ 128 | TypeScript | 2026-09-25 | 以 Convex 四选一问题比较 Jev Choice 答案与大语言模型的基准测试。 |
| [decider](https://github.com/Mapika/decider) | ★ 99 | Python | 2026-09-19 | 从 Qwen3.5-2B 微调的 System One 风格模型，单次完成类型化决策并返回校准概率。 |
| [jev-arena](https://github.com/NanmiCoder/jev-arena) | ★ 96 | JavaScript | 2026-09-23 | Jev模型介绍及实测：使用Choice / Score / Noul将自然语言转换为类型化的判断和概率进行分类、评分和路由；支持与DeepSeek等模型对比评论标记、速度和结果，包括CSV/Excel导入、原速播放和离线报告。 |
| [jev-eval-agent](https://github.com/vinilana/jev-eval-agent) | ★ 95 | HTML | 2026-09-19 | 基于 Vercel eve 的个人助理 Agent，配置 100 个模拟工具，对比由 Jev 和 LLM 选工具时所需步骤。 |
| [reflex](https://github.com/kshetrajna12/reflex) | ★ 79 | Python | 2026-09-19 | 小型开源决策模型：输入状态与类型化问题，输出校准概率；基于 Qwen3.5 复刻 Jev/System One。 |
| [WindTunnel](https://github.com/nekuda-ai/WindTunnel) | ★ 69 | TypeScript | 2026-09-19 | 用于比较浏览器 Agent 接口的 WebMCP 基准，将 Jev 作为被评测配置之一。 |
| [jevbench](https://github.com/fstandhartinger/jevbench) | ★ 67 | Python | 2026-09-22 | JevBench v1 - Jev 级类型化决策模型的基准：智能、便宜、快速、可靠、开放。 |
| [open-jev (daseinlabs)](https://github.com/daseinlabs/open-jev) | ★ 56 | Python | 2026-09-19 | 受 jevlike 启发，在 Apple Silicon 上通过 MLX 使用本地 Gemma 3 4B 单次评分选项，并附 Doom 演示。 |
| [jev-dataops](https://github.com/RenaGao/jev-dataops) | ★ 45 | Python | 2026-09-23 | 一个由 Jev 驱动的开源工作台，用于流数据选择、质量评估、自动 LoRA 训练和保留模型评估。 |
| [jevmlx](https://github.com/bnsd55/jevmlx) | ★ 40 | Python | 2026-09-19 | 让任意 MLX 模型在 Apple Silicon 上执行 Jev 风格并行约束决策，单次前向输出类型化、符合 Schema 的 JSON。 |
| [typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) | ★ 32 | TypeScript | 2026-09-19 | 模拟 TypeSafe AI 结构化输出的 LLM Gateway，相当于一个“仿冒 Jev”。 |
| [jev-calibrate](https://github.com/smkrv/jev-calibrate) | ★ 31 | TypeScript | 2026-09-23 | 根据您自己的标签校准 Jev 问题：调整标记示例的标准，确认保留的集合，获得每个问题的结论。非官方。 |
| [Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev) | ★ 28 | Python | 2026-09-19 | 基于 ModernBERT（151M）的非自回归决策引擎，提供校准不确定性、TypeSafe Jev 基准审计和浏览器 WebGPU 游乐场。 |
| [mini-jev](https://github.com/r-ms/mini-jev) | ★ 24 | Python | 2026-09-19 | 展示冻结 Qwen3-4B 上 Jev 风格类型化决策接口的 Mini-Jev：读取选项字母 Logits 而非生成 JSON，提供预注册实验、结果和教学基准。 |
| [jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas) | ★ 24 | Python | 2026-09-23 | Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文主导的双语repo。 |
| [LitJev](https://github.com/zhengxuyu/litjev) | ★ 21 | Python | 2026-09-19 | Jev 复现方案，无需训练即可将任意 Qwen 模型变为快速决策模型，提供相同 `/v1/systemone` Schema 且不生成答案文本。 |
| [jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop) | ★ 18 | Python | 2026-09-19 | 非官方研究：在 Apple Silicon 笔记本的原生 1.5B–8B 模型上执行 Jev 风格并行类型化决策，附基准、研究笔记和 Hugging Face Space 演示。 |
| [jev-column-race](https://github.com/goodrahstar/jev-column-race) | ★ 16 | JavaScript | 2026-09-19 | Jev 与 Gemini 3.8 Flash 对比：标注 1,000 条应用评论，报告速度快 4.1 倍、成本低 7 倍。 |
| [open-alternative-jev](https://github.com/ikermoel/open-alternative-jev) | ★ 16 | Python | 2026-09-19 | Jev 的开放替代方案，让任意开放权重 LLM 单次前向完成类型化校准决策，支持 Hugging Face、vLLM 和基准测试。 |
| [openjev (zhihz)](https://github.com/zhihz/openjev) | ★ 16 | Python | 2026-09-19 | 根据上下文、问题和候选答案执行本地双语概率决策；受 Jev 启发的独立研究预览。 |
| [jeval](https://github.com/rlaope/jeval) | ★ 16 | Python | 2026-09-23 | 衡量您的 Jev 分类器的置信度的真正价值，并设置错误成本的人工交接线。 |
| [system-one](https://github.com/sgoedecke/system-one) | ★ 14 | Python | 2026-09-19 | 面向开放语言模型、兼容 TypeSafe 的批量单 Token Choice 推理。 |
| [jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark) | ★ 14 | Python | 2026-09-23 | 用于测量 RAG 中 Jev 重新排名质量、延迟和成本的可重复基准。 |
| [system-one-open](https://github.com/mithalouni/system-one-open) | ★ 13 | Python | 2026-09-19 | TypeSafe Jev 的开放复刻，在 Gemma 4 E2B / Gemma 3 270M 上单次前向完成类型化校准决策。 |
| [jevbetter](https://github.com/olanotolu/jevbetter) | ★ 12 | Python | 2026-09-19 | 面向动态文本选项列表的更强单次评分器，采用哈希 n-gram 编码器、对手感知注意力、门控头和温度缩放，并与 jevlike 比较。 |
| [TypeAR](https://github.com/zmtomorrow/TypeAR) | ★ 12 | Python | 2026-09-19 | 受 Jev 启发、面向自回归 LLM 的类型安全单 Token 单决策解码引擎。 |
| [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | ★ 11 | Python | 2026-09-19 | 面向类型化决策模型的概率感知评测，覆盖校准、选择性风险、延迟和可复现基准。 |
| [jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | ★ 11 | Python | 2026-09-19 | 将 Jev 用作评测器的实验。 |
| [Jev_apps](https://github.com/JackZeng/Jev_apps) | ★ 11 | Python | 2026-09-19 | 用中英文介绍 Jev 热门应用、工作原理及各自优缺点。 |
| [dejevu](https://github.com/idovmamane/dejevu) | ★ 10 | Python | 2026-09-24 | 浏览器代理比较，针对 Jev 演示对一目了然的开放模型策略进行基准测试。 |
| [jevify](https://github.com/altryne/jevify) | ★ 9 | Python | 2026-09-19 | Agent 技能，用于发现 TypeSafe Jev 应用机会、设计类型化问题并借鉴近期社区实验。 |
| [openvons](https://github.com/genai-craft/openvons) | ★ 9 | Python | 2026-09-19 | 开放 Jev 风格判断层，以概率回答有限选项，支持文本、图像和日语语音命令。 |
| [jev_stock](https://github.com/sosopop/jev_stock) | ★ 9 | Python | 2026-09-19 | 实验性 Jev 股票框架，根据结构化市场数据预测短期股价方向。 |
| [jevcal](https://github.com/abhixhek/jevcal) | ★ 8 | Python | 2026-09-19 | 用于校准、设定阈值并检测类型化决策模型漂移的工具，以 LLM 教师评估 TypeSafe Jev，避免凭感觉设置置信度阈值。 |
| [jevfire](https://github.com/kikoncuo/jevfire) | ★ 8 | JavaScript | 2026-09-19 | 面向 CUDA LLM、受 Jev 启发的并行决策：一次上下文完成多个判断，提供 vLLM API、游戏 Agent 示例和可复现基准。 |
| [typesafe-local](https://github.com/aabolfazl/typesafe-local) | ★ 6 | Python | 2026-09-19 | 受 TypeSafe AI 启发，让本地 LLM 回答类型化问题并返回校准概率，而非生成文本；无需生成或解析结构化输出，适用于 MLX/Apple Silicon。 |
| [LegalForecastBench](https://github.com/johnhughes3/LegalForecastBench) | ★ 5 | Python | 2026-09-19 | LegalForecast-MTD 法律预测基准 Alpha 版及官方评测工作流。 |
| [jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) | ★ 5 | Python | 2026-09-19 | 针对 Jev 韩语理解和医疗文本能力的可复现早期访问评测，包含运行时间与成本证据。 |
| [jev-lm](https://github.com/y0usaf/jev-lm) | ★ 5 | TypeScript | 2026-09-19 | 输出层采用 Jev 的词级语言模型，包含 n-gram 草稿器、Noul 分块验证和每 Token 比特评测。 |
| [daf-jev](https://github.com/docxology/daf-jev) | ★ 4 | Python | 2026-09-19 | 面向 TypeSafe Jev API 的可组合 Python 工具包，包含问题构建器、置信度门控、评测器、校准、CLI、MCP 服务器和 Agent 技能。 |
| [jev-little-airways](https://github.com/lbotinelly/jev-little-airways) | ★ 4 | HTML | 2026-09-19 | TypeSafe System One 决策模型 Jev 的展示型能力研究。 |
| [jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval) | ★ 4 | Python | 2026-09-19 | 评测 Jev 重排序是否优于向量搜索：在 Agent Skills Hub 目录上使用 9,831 个相关性对和 164 个中英文查询，并测量裁判循环偏差。 |
| [jev-ood-calibration](https://github.com/scienthoon/jev-ood-calibration) | ★ 4 | Python | 2026-09-22 | 在综合支持票和公共分类基准上对 Jev 校准进行可重复评估。 |
| [jev-chat](https://github.com/adhyaay-karnwal/jev-chat) | ★ 3 | Python | 2026-09-19 | 从类型化 Jev 决策构建聊天机器人，通过 System One 概率进行分层推测解码。 |
| [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) | ★ 3 | Rust | 2026-09-19 | 由 TypeSafe Jev 驱动的高吞吐合成与预训练数据集筛选器，以每秒 1,500 行以上的速度流式过滤和评分 Parquet、JSONL 数据。 |
| [jev-harness](https://github.com/AntonioCoppe/jev-harness) | ★ 3 | TypeScript | 2026-09-19 | TypeSafe Jev 决策框架，提供置信度门控、影子模式、配方和评测；同一行过滤任务从 Claude CLI 48.9 秒降至 Jev 1.3 秒。 |
| [openjev (DECRUX9812)](https://github.com/DECRUX9812/openjev) | ★ 3 | Python | 2026-09-20 | 面向招聘信息的开放、本地、零成本 Jev 风格决策层实现。 |
| [jev-behavior-study](https://github.com/RINNECODER/jev-behavior-study) | ★ 3 | Python | 2026-09-19 | 独立 Jev 1.13.0 行为研究，提供报告、受控提示实验、原始结果和离线验证。 |
| [jev-dspy-lab](https://github.com/jmanhype/jev-dspy-lab) | ★ 3 | Python | 2026-09-22 | DSPy 工作流程中 Jev/TypeSafe 决策的可重复校准和选择性风险基准 |
| [system-one-gemma](https://github.com/akash-kamat/system-one-gemma) | ★ 2 | Python | 2026-09-19 | 开源 Jev 风格 System One 决策模型，基于 Gemma 3 270M 与评分头，单次前向完成快速校准决策，不生成文本。 |
| [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | ★ 2 | Python | 2026-09-19 | 评测决策模型能否击败专用重排序器：比较 Jev、Cohere Rerank 4、ZeroEntropy zerank-2 和聊天模型基线，覆盖 14 个数据集及全部原始响应。 |
| [jevgpt](https://github.com/Bewinxed/jevgpt) | ★ 2 | TypeScript | 2026-09-19 | 构建在无法生成文本的 TypeSafe Jev 上、以自回归方式驱动的聊天机器人。 |
| [calibre](https://github.com/FirasSX914/Janus) | ★ 2 | Python | 2026-09-19 | 在 Banking77 上测量校准与基于置信度的路由：每 500 次决策成本 0.103 美元，准确率 80.2%。 |
| [jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) | ★ 2 | Python | 2026-09-19 | 八个 TypeSafe Jev 在机械与电气工程中的最小可运行示例，覆盖 CAD/CAE/CAM 路由、FEM 结果分诊、DFM 筛查、BOM 对齐和防幻觉提取，零依赖。 |
| [jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench) | ★ 2 | Go | 2026-09-19 | Jev 的盲测安全基准，覆盖提示词注入和脆弱代码检测，基于 jev-go。 |
| [jev-research-eval](https://github.com/jgridifier/jev-research-eval) | ★ 2 | HTML | 2026-09-19 | 可复现的 Jev Ultrafast 研究浏览器评测框架与实地笔记，包含质检案例、套件运行器和报告生成器；不构成投资建议。 |
| [trade-jev](https://github.com/justinhe16/trade-jev) | ★ 2 | Python | 2026-09-19 | 在 NQ L10 订单簿数据上回测 Jev 作为买入、卖出或持有交易器的表现。 |
| [mcts-agent](https://github.com/lhemerly/mcts-agent) | ★ 2 | Python | 2026-09-19 | 使用 TypeSafe Jev System One 原语和 Gemini 的判别式蒙特卡洛树搜索。 |
| [jev-gate](https://github.com/MongLong0214/jev-gate) | ★ 2 | TypeScript | 2026-09-19 | 并非每项编程任务都需要最强模型：面向 Claude Code 的实验性 Jev 模型路由，V3 可运行，V4 在任务边界路由。 |
| [jev-exploration](https://github.com/SamuelSacco/jev-exploration) | ★ 2 | Python | 2026-09-19 | Jev 探索记录，包含声明审计、在线演示和可运行代码。 |
| [jev-benchmark](https://github.com/wondertwins/jev-benchmark) | ★ 2 | Python | 2026-09-19 | TypeSafe Jev System One 模型的基准与游乐场，包含国际象棋和语音转文字游戏 NPC 对话对象识别。 |
| [jev-does-not-play-dice](https://github.com/KantaHayashiAI/jev-does-not-play-dice) | ★ 2 | JavaScript | 2026-09-24 | Jev 概率校准、不确定性和预测保存的可重复实验。 |
| [jev-phishing-bench](https://github.com/anisselbd/jev-phishing-bench) | ★ 1 | Python | 2026-09-19 | 在 2,000 封钓鱼邮件上比较 Jev 与 Claude Haiku 4.5 的准确率、校准度、延迟和成本，结果可复现。 |
| [paper-package](https://github.com/CompleteDotTech/paper-package) | ★ 1 | Python | 2026-09-20 | 可复现的 Jev 研究论文、证据与论文材料包。 |
| [decisionbridge](https://github.com/grishahq/decisionbridge) | ★ 1 | HTML | 2026-09-19 | 受 Jev 启发、面向现有 LLM 的决策接口，提供显式选择、评分、校准和审查阈值。 |
| [RISC-jeV](https://github.com/i2cjak/RISC-jeV) | ★ 1 | Python | 2026-09-19 | 将 Jev 强行构造成一颗 RISC-V CPU 的实验。 |
| [jev-freeform](https://github.com/kesku/jev-freeform) | ★ 1 | JavaScript | 2026-09-19 | 完全由 TypeSafe Jev Choice 驱动、可观测的原始字符聊天实验。 |
| [typed-decisions](https://github.com/kotoba-lang/typed-decisions) | ★ 1 | Python | 2026-09-20 | Jev 风格类型化决策模型，测量延迟、准确率、校准度和训练成本。 |
| [jev-synergy-screening](https://github.com/PistachioAIHQ/jev-synergy-screening) | ★ 1 | Python | 2026-09-19 | Jev 与 ASReview SYNERGY 摘要筛选演示，将 Choice/Noul 结果与金标准标签对比。 |
| [qwen-rlcd](https://github.com/shamazharikh/qwen-rlcd) | ★ 1 | Python | 2026-09-19 | 基于 Qwen3.5-0.8B 的 Jev 风格校准决策模型，支持 Choice、Score 和 Noul。 |
| [kyotsu-ai-bench](https://github.com/shibadogcap/kyotsu-ai-bench) | ★ 1 | HTML | 2026-09-19 | 日本 2026 年大学入学共通测试 AI 基准，对比 Jev、Luna-none 和 Luna-low，并提供静态仪表板。 |
| [jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) | ★ 1 | Python | 2026-09-19 | 在 Who&When Pro Agent 失败归因基准的文本子集上，对比 Jev 与强力 LLM。 |
| [jev-routing-experiment](https://github.com/TokenTrim/jev-routing-experiment) | ★ 1 | Python | 2026-09-19 | 在 RouterArena 上评测 TypeSafe Jev 作为低成本 LLM 路由器的表现。 |
| [openjev-experiments](https://github.com/zefir1990/openjev-experiments) | ★ 1 | Python | 2026-09-19 | 在本地模型上试验 openjev 开放 Jev 风格选项 Logit 运行器。 |
| [padflow-jev-evals](https://github.com/zsavage8/padflow-jev-evals) | ★ 1 | Python | 2026-09-19 | 来自 PadFlow 土地开发 SaaS 的类型化决策基准，提供 Schema、匿名标注样本和置信度校准模型运行器。 |
| [stuntdouble](https://github.com/ReallyArtificial/stuntdouble) | ★ 1 | JavaScript | 2026-09-23 | 即插即用的 `/v1/systemone` 影子代理，将请求同时发送给 Jev 与本地决策模型，并记录一致性、校准度、延迟、成本和策略层差异。 |
| [Typesafe_chess_eval](https://github.com/AliceRoselia/Typesafe_chess_eval) | ★ 0 | Python | 2026-09-19 | TypeSafe AI 国际象棋能力评测；结果显示原型表现较弱，且可能未针对游戏进行优化。 |
| [jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | ★ 0 | Jupyter Notebook | 2026-09-19 | 使用 TypeSafe Jev Noul 问题进行零样本垃圾信息过滤，并与 TF-IDF 基线比较。 |
| [jev-shadcn-lint-eval](https://github.com/blas0/jev-shadcn-lint-eval) | ★ 0 | JavaScript | 2026-09-19 | 针对 shadcn-ui/lint 的小型二次评测，使用 Jev 判断 Linter 自身输出。 |
| [system-one-adapter-rust](https://github.com/codeitlikemiley/system-one-adapter-rust) | ★ 0 | Rust | 2026-09-19 | TypeSafe system-one-adapter 的 Rust 移植版，用 LLM 支持 System One 评测。 |
| [jev-deferred-crispification](https://github.com/dnakhoa/jev-deferred-crispification) | ★ 0 | TeX | 2026-09-19 | 立场论文：讨论 TypeSafe Jev 与 System One 决策模型缺失的隐马尔可夫及模糊原语，提出两个引理、延迟清晰化原则和 BSF-S1 架构。 |
| [jev-alpha-bench](https://github.com/Gaurav-Gosain/jev-alpha-bench) | ★ 0 | Go | 2026-09-19 | 测试 Jev 能否从新闻预测股票收益：阅读新闻表现良好，但没有可交易 Alpha；通过三组实验区分阅读与记忆。 |
| [jev-headline-bench](https://github.com/Gaurav-Gosain/jev-headline-bench) | ★ 0 | Go | 2026-09-19 | 测试 Jev 能否选出真实标题 A/B 测试赢家：在 10,984 项 Upworthy 随机实验中准确率 64.5%，差异明显时为 74.7%。 |
| [jev-report](https://github.com/HackSing/jev-report) | ★ 0 | Python | 2026-09-19 | 关于 Jev 的独立中文研究报告，包含 52 页 PDF、50 条中文实测复现包和 143 条可追溯数据表。 |
| [jev-playground (hegargarcia)](https://github.com/hegargarcia/jev-playground) | ★ 0 | TypeScript | 2026-09-19 | 在具有显式状态、合法动作和可量化结果的游戏中，将 Jev 与其他评测模型进行基准比较。 |
| [jev-finance-benchmark](https://github.com/hifizz/jev-finance-benchmark) | ★ 0 | — | 2026-09-19 | typesafe.ai Jev 的金融基准。 |
| [jev-anotacao-sentencas](https://github.com/lab-dados/jev-anotacao-sentencas) | ★ 0 | Python | 2026-09-19 | 在巴西圣保罗州法院判决结构化标注任务上，对比 Jev、Gemini 3.8 Flash 和 GPT-5.6 Luna 的质量、时间与成本。 |
| [jev-vs-luna](https://github.com/mameli/jev-vs-luna) | ★ 0 | Python | 2026-09-20 | 可复现的评论分类对比，测量 Jev 与 Luna 的准确率、延迟和成本。 |
| [jev-lab](https://github.com/Menny1337/jev-lab) | ★ 0 | TypeScript | 2026-09-19 | TypeSafe Jev 的 TypeScript 实验、评测和延迟基准。 |
| [misereru-slide-jev](https://github.com/myokoym/misereru-slide-jev) | ★ 0 | JavaScript | 2026-09-19 | 持续维护的日文 Jev 与 System One 模型研究幻灯片，使用 Markdown 编写。 |
| [shade-arena-jev-monitor](https://github.com/nican2018/shade-arena-jev-monitor) | ★ 0 | Python | 2026-09-19 | 在 SHADE-Arena 中评估 Jev 作为 Agent 破坏行为快速监控器和动作门控的效果，并与 Gemini 2.5 Flash/Pro 比较。 |
| [PocketJev](https://github.com/NullPo-jp/PocketJev) | ★ 0 | Swift | 2026-09-19 | 设备端 iPhone 视觉决策工具，使用 MLX 和 Qwen3-VL 直接选项 Logit。 |
| [jev-jp-address](https://github.com/smasato/jev-jp-address) | ★ 0 | TypeScript | 2026-09-19 | 以日本邮政 KEN_ALL 为主数据，评估通过 AI SDK 调用 Jev 进行日文地址模糊匹配的性能。 |
| [jev-trace-classifier](https://github.com/sypherin/jev-trace-classifier) | ★ 0 | Python | 2026-09-19 | 在 collusion.wiki 语料上应用 Jev Noul 判断，识别页面由 Agent 还是人类创作，并与本地 Qwen3.8-Flash-Next 正面对比。 |
| [jev-secret-detection](https://github.com/teyhouse/jev-secret-detection) | ★ 0 | Python | 2026-09-19 | 测量 TypeSafe RLCD-Jev 模型识别文件片段中真实密钥凭据的能力。 |
| [FinancialPredictionJev](https://github.com/thodoh1/FinancialPredictionJev) | ★ 0 | Python | 2026-09-19 | 测试 Jev 预测金融市场的能力；结果与多数 2026 年 9 月的 LLM 类似，表现并不理想。 |
| [typesafe-oracles](https://github.com/trophee-bot/typesafe-oracles) | ★ 0 | JavaScript | 2026-09-19 | 评估 TypeSafe System One 原语 Choice、Score 和 Noul，研究类型化 Oracle 优于 LLM 调用的场景。 |
| [jev-pick-and-place-study](https://github.com/tryaksh/jev-pick-and-place-study) | ★ 0 | Python | 2026-09-19 | 可复现的小型 MuJoCo 先导研究，对比 Jev、Claude Haiku 和反应式规则在抓取放置任务中的表现。 |
| [thaiexam-jev-charts](https://github.com/vehas/thaiexam-jev-charts) | ★ 0 | HTML | 2026-09-19 | 图表：在泰国标准化考试上评估 TypeSafe Jev，并与其他 110 个模型比较。 |
| [jev-calibration-audit](https://github.com/jujumilk3/jev-calibration-audit) | ★ 0 | Python | 2026-09-22 | 对 TypeSafe AI 的 Jev 决策模型进行独立的仅 API 校准审核 |
| [labs](https://github.com/kiarina/labs) | ★ 0 | Python | 2026-09-22 | 研究工作区包含可重复的 TypeSafe Jev 评估和安全判断实验。 |
| [jev-certify](https://github.com/nikkoxgonzales/jev-certify) | ★ 0 | Python | 2026-09-22 | 研究工具包应用保形风险控制和预测驱动的推理来验证 Jev 路由阈值。 |
| [jevals-data](https://github.com/Jevals/jevals-data) | ★ 0 | — | 2026-09-22 | TypeSafe 的 Jev（系统一模型）与 LLM 的独立基准数据：准确性、校准、成本。板 + 每个决策日志，CC-BY-4.0 |
| [jev-eval](https://github.com/onlyoneaman/jev-eval) | ★ 0 | TypeScript | 2026-09-22 | TypeSafe 的 Jev 与 gpt-5.4-mini 和 gpt-5.6-luna 在四个公共分类集上的对比：案例、每个项目的答案、评分、图表 |
| [jev-evaluation](https://github.com/willkelly/jev-evaluation) | ★ 0 | Python | 2026-09-22 | 对抗性 Jev 评估套件，包含预先注册的预测、请求日志和可重现的实验工件。 |
| [jev-orderby-bench](https://github.com/yodablocks/jev-orderby-bench) | ★ 0 | Python | 2026-09-22 | ORDER BY 是否会以 Jev 概率将行置于合理的顺序中？ TypeSafe AI 的 Jev 的独立排名、校准和不变测量​​：通过了 360 个标记行上的 6 个预先注册的门，在分级产品相关性方面未通过 6 门中的 4 门。 |
| [Jev no ENEM](https://github.com/patryckalves/jev-no-enem) | ★ 0 | Python | 2026-09-23 | 在 182 道有效 ENEM 2025 试题上复现 Jev Choice 决策的评测，附原始结果及准确率、校准和延迟分析。 |
| [jev-skillbench](https://github.com/MohibShaikh/jev-skillbench) | ★ 0 | Python | 2026-09-24 | Jev 的基准，作为 MalSkillBench 上的恶意代理技能检测器，具有验证和升级评估。 |

### 其他列表   (39)

| 项目名 | Stars | 语言 | 收录时间 | 描述 |
|---|---:|---|---|---|
| [awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | ★ 659 | — | 2026-09-23 | 按决策用途组织的 Jev 工具与实践目录，含 152 个链接、收录标准、限制说明和来源标注。 |
| [awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | ★ 641 | Python | 2026-09-20 | 以证据为基础的 Jev 用例、模式、提示词和入门代码。 |
| [awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | ★ 431 | HTML | 2026-09-22 | Awesome Jev：TypeSafe System One 模型的源代码支持现场指南，包含 SDK、现场演示、代理工具和独立评估。 |
| [awesome-jev (yibie)](https://github.com/yibie/awesome-jev) | ★ 411 | Python | 2026-09-19 | 围绕 TypeSafe AI 类型化决策 System One 模型 Jev 构建的公开项目、集成和讨论精选列表。 |
| [jev-skill](https://github.com/wuyoscar/jev-skill) | ★ 384 | Python | 2026-09-22 | Jev 用例、工作流程和代理技能的精彩集合。 |
| [awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | ★ 351 | CSS | 2026-09-19 | TypeSafe、System One 模型和 Jev 的官方资源与社区项目精选列表，并提供 GitHub Pages 站点。 |
| [awesome-jev](https://github.com/cobanov/awesome-jev) | ★ 217 | — | 2026-09-19 | 有来源依据的 Jev 项目精选列表；Jev 是 TypeSafe AI 面向类型化决策的 System One 模型。 |
| [awesome-jev (Amal-David)](https://github.com/Amal-David/awesome-jev) | ★ 176 | Python | 2026-09-24 | 策划的 Jev 演示、项目、SDK、技能、源链接和 X 展示库。 |
| [awesome-jev (kydlikebtc)](https://github.com/kydlikebtc/awesome-jev) | ★ 168 | Python | 2026-09-23 | 按决策模式组织的双语、可机读 Jev 示例目录，包含调用点核验、兼容性说明和 CI 链接检查。 |
| [awesome-jev (fatwang2)](https://github.com/fatwang2/awesome-jev) | ★ 166 | JavaScript | 2026-09-19 | 有来源依据的 Jev 项目目录，提供可复用的 Jev 专用 GitHub 审查工作流。 |
| [awesome-jev-gallery](https://github.com/OmniJev/awesome-jev-gallery) | ★ 159 | JavaScript | 2026-09-22 | 🔥🔥 System One 模型和 Jev 背后的论文、公开复制品和独立评估。 |
| [awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | ★ 131 | JavaScript | 2026-09-19 | Awesome Jev：有来源依据的开源生态雷达、通俗项目发现和 GitHub 自动同步。 |
| [awesome-jev (Promethe-us)](https://github.com/Promethe-us/awesome-jev) | ★ 122 | — | 2026-09-22 | Jev 项目、集成和学习资源的精选索引。 |
| [awesome-jev (kraayenjon)](https://github.com/kraayenjon/awesome-jev) | ★ 98 | — | 2026-09-22 | Jev 用例、项目、SDK 和资源的精选列表。 Jev 是 TypeSafe AI 的 System One 模型，用于在软件中进行快速、类型化的决策——具有校准概率的选择、得分和 Noul。 |
| [awesome-jev (AnotiaWang)](https://github.com/AnotiaWang/awesome-jev) | ★ 87 | — | 2026-09-19 | Jev / TypeSafe System One 应用、库和资源精选列表。 |
| [awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases) | ★ 80 | — | 2026-09-22 | TypeSafe AI Jev 用例的精彩列表：按喜欢排名的 74 个演示、150 多个 GitHub 存储库、限制、成本和 API 示例。 CC0，由 AY Automate 赞助。 |
| [awesome-jev (hellogumbo)](https://github.com/hellogumbo/awesome-jev) | ★ 76 | JavaScript | 2026-09-20 | Jev 与 TypeSafe System One 社区项目目录。 |
| [awesome-jev (AppitStudio)](https://github.com/AppitStudio/awesome-jev) | ★ 73 | Python | 2026-09-22 | 为类型化 AI 决策精心策划的 Jev 资源和可运行示例。 |
| [awesome-jev (OmniJev)](https://github.com/OmniJev/awesome-jev) | ★ 69 | Python | 2026-09-19 | 汇集 System One 模型与 Jev 背后的论文、开放复现和独立评测。 |
| [awesome-jev-zh](https://github.com/yzfly/awesome-jev-zh) | ★ 56 | HTML | 2026-09-22 | Jev / TypeSafe System One中文精选列表：官方资料、SDK、爆款应用、代理工具、开源复现与独立体育，附中文上手指南，每日自动收录GitHub热门项目。 |
| [awesome-jev (BeatAPI)](https://github.com/BeatAPI/awesome-jev) | ★ 38 | JavaScript | 2026-09-22 | 我们只策划具有 100 多个 GitHub star 的经过源码审查的 JEV 相关项目 - 集成、工具、开放模型和实验。现场画廊：beatapi.io/awesome-jev |
| [awesome-jev-typesafe](https://github.com/valentynkit/awesome-jev-typesafe) | ★ 31 | JavaScript | 2026-09-20 | 采用 CC0、通过 awesome-lint 的 Jev 列表，按可安装内容组织，并在开头说明模型限制。 |
| [jev-hub](https://github.com/mizzlelover/jev-hub) | ★ 23 | CSS | 2026-09-22 | JEV HUB·X上关于TypeSafe AI「系统一模型」Jev的长文与演示视频聚合（保留原链与作者）｜谁是专家出品 |
| [jev-radar](https://github.com/everyinfra/jev-radar) | ★ 19 | — | 2026-09-22 | 📡全网最全 · 全球最全面的 Jev（TypeSafe AI System One）生态系统跟踪器 — 220 多个记录案例 · 108 个置信度分级条目 · 每 3 小时验证和重新扫描 · 包含 API 访问指南 |
| [awesome-jev-usecases (anandi1989)](https://github.com/anandi1989/awesome-jev-usecases) | ★ 16 | — | 2026-09-22 | 现实世界 Jev（TypeSafe AI System One）用例的证据支持索引：存储库、模式、基准测试和测量结果 |
| [jev-cookbook](https://github.com/nexibeo/jev-cookbook) | ★ 16 | JavaScript | 2026-09-22 | OpenRouter 上 TypeSafe 的 Jev 决策模型的实用、经过测试的配方：支持分类、数据库索引、文件组织、标记、分类、重复数据删除、PII 检测、提取、搜索重新排名和浏览器代理。 |
| [awesome-jev-usecases (aliaihub)](https://github.com/aliaihub/awesome-jev-usecases) | ★ 15 | — | 2026-09-22 | 使用 Jev（TypeSafe AI 的 System One 模型）进行构建的有证据支持的用例、模式和指南。每项声明都带有标签和来源。 |
| [awesome-jev-live](https://github.com/wh000wh000/awesome-jev-live) | ★ 13 | Python | 2026-09-22 | Awesome Jev — TypeSafe System One 的证据分级索引：SDK、MCP 工具、代理、应用程序和开放模型。 20 种语言，每 2 小时重建一次。 |
| [jev-directory](https://github.com/everyai-com/jev-directory) | ★ 13 | HTML | 2026-09-23 | Jev 功能的可浏览目录 — 50 个可运行目录。 |
| [awesome-jev (tanxarx)](https://github.com/tanxarx/awesome-jev) | ★ 10 | — | 2026-09-23 | 采用 CC0 的 Jev 生态列表，追溯项目原始来源，覆盖开放模型、Agent、研究、应用和批评观点。 |
| [awesome-jev (MrJev)](https://github.com/MrJev/awesome-jev) | ★ 9 | Python | 2026-09-22 | 针对 Jev、TypeSafe AI 的 System One 模型的项目、集成和资源的精选列表。 |
| [awesome-jev (ckaraca)](https://github.com/ckaraca/awesome-jev) | ★ 9 | Python | 2026-09-23 | 采用 CC0 的 Jev 目录，按 SDK、Agent、应用、数据工作流、开放模型和资源整理 98 个仓库链接。 |
| [awesome-jev (jtnkminimal)](https://github.com/jtnkminimal/awesome-jev) | ★ 3 | Python | 2026-09-22 | 使用 Jev（TypeSafe 的 System One 模型）构建的精选项目。 |
| [awesome-jev-use-cases (SeeAPI)](https://github.com/SeeAPI/awesome-jev-use-cases) | ★ 3 | Python | 2026-09-23 | 带来源标注的 Jev 案例集，区分作者报告与独立核验结果，并记录每个案例的限制。 |
| [awesome-jev-verified](https://github.com/punk2898/awesome-jev-verified) | ★ 2 | JavaScript | 2026-09-23 | 采用 CC0 的目录；代码条目链接到固定版本的 Jev 调用点，并按公开核验方法标注声明。 |
| [jevusecases](https://github.com/theSekyi/jevusecases) | ★ 1 | TypeScript | 2026-09-20 | 跟踪人们正在用 Jev 发布的真实产品与实验。 |
| [awesome-jev (sontakey)](https://github.com/sontakey/awesome-jev) | ★ 1 | Python | 2026-09-22 | 非常有用的 TypeSafe AI Jev / System One 项目的非官方列表 |
| [awesome-jev (rhc98)](https://github.com/rhc98/awesome-jev) | ★ 1 | TypeScript | 2026-09-22 | 基于 Jev（TypeSafe AI 的 System One 模型）构建的项目，由 Jev 自己策划。 |
| [Jev-Case](https://github.com/Hiwoniu/Jev-Case) | ★ 0 | TypeScript | 2026-09-20 | 收集全网 Jev 与 System One 优秀案例的目录。 |

### 仓库内代码引用

这些条目指向大型仓库中的子目录或 Pull Request，因此显示项目级 Star 数量会造成误导。

| 项目名 | Stars | 语言 | 描述 |
|---|---:|---|---|
| [agentgateway Jev guardrail example](https://github.com/agentgateway/agentgateway/tree/main/examples/llm-guardrail-jev) | N/A | — | 在 agentgateway 代理中将 Jev 用作 LLM 提示词护栏，并提供追踪和成本记录。 |
| [TrainLCD Jev rerank](https://github.com/TrainLCD/Functions/pull/33) | N/A | — | 为 TrainLCD 公交应用的车站建议重排序加入 Jev 的 Pull Request。 |
| [Milvus Search with Jev](https://github.com/milvus-io/bootcamp/tree/master/bootcamp/RAG/search_with_jev) | N/A | Python | Milvus Bootcamp 的 RAG 示例在 Milvus 检索结果中使用 Jev 进行选择。 |

## Jev 是什么

Jev 接收一个**状态（state）**以及一个或多个类型化**问题（questions）**，返回可被代码直接使用的结构化答案。它不生成自然语言文本。

| 原语 | 适用场景 | 返回内容 |
|---|---|---|
| [`Choice`](https://docs.typesafe.ai/primitives/choice) | 从已知候选项中选择一个 | 所选项、各项概率、置信度 |
| [`Score`](https://docs.typesafe.ai/primitives/score) | 按有序量表对输入评分 | 分数、各等级概率、置信度 |
| [`Noul`](https://docs.typesafe.ai/primitives/noul) | 估计某个陈述为真的概率 | 0 到 1 的概率 |

同一请求中的问题共享相同状态，并彼此独立地求值。复杂决策应拆分为多个窄问题，再由普通代码组合。授权、算术、阈值、副作用和降级行为应继续由代码掌控。

第一次接触 Jev？请先阅读 TypeSafe 官方的[介绍](https://docs.typesafe.ai/introduction)，再查看[原语](https://docs.typesafe.ai/primitives)、[置信度](https://docs.typesafe.ai/confidence)和[模式](https://docs.typesafe.ai/patterns)。

## 为什么建立这份列表

大多数目录只告诉你某个项目使用了 Jev。本列表还会记录：

- **Jev 决定什么**——项目内部实际执行的判断。
- **决策结构**——状态 → 问题 → 答案 → 代码动作。
- **调用点证据**——公开时直接链接到实现位置。
- **复现状态**——是否提供运行手册，以及是否由独立审阅者运行过。
- **指标来源**——官方、作者报告或第三方复现。
- **新鲜度**——最近一次人工审阅日期与当前项目状态。
- **可复用模式**——能够迁移到其他产品的架构。

我们优化的是可检查性和实际价值，而不是列表规模或 GitHub Star 数量。

## 如何阅读条目

```text
项目——Jev 所做的决策。
原语：Choice · 模式：类型化工具分派
证据：调用点已核验 · 维护者运行手册 · 作者报告指标
```

各核验标签描述的是不同事实，并非分数或排名。

| 标签 | 含义 |
|---|---|
| **公开源码** | 仓库公开，且 README 描述了具体的 Jev 工作流。 |
| **调用点已核验** | 维护者已定位公开代码中调用 Jev 并消费其答案的位置。 |
| **仅演示** | 公开演示展示了行为，但尚未找到可检查的调用点。 |
| **README 声明** | 上游项目声称使用 Jev，但调用点尚未核验。 |
| **维护者运行手册** | 上游项目提供安装和运行说明。 |
| **审阅者已复现** | 独立审阅者按文档运行过工作流并记录日期。 |
| **作者报告指标** | 数字来自项目作者，尚未独立复现。 |
| **第三方复现** | 独立公开来源使用有记录的方法重复了测量。 |

## 官方资源

| 资源 | 用途 |
|---|---|
| [TypeSafe AI](https://typesafe.ai/) | 产品概览和访问入口。 |
| [官方文档](https://docs.typesafe.ai/) | 官方概念、API、SDK、模式与实践手册。 |
| [API 参考](https://docs.typesafe.ai/api) | 当前请求与响应协议。 |
| [模型](https://docs.typesafe.ai/models) | 当前别名、版本、价格与限制。 |
| [工作流评测](https://evals.typesafe.ai/) | TypeSafe 发布的工作流评测方法与结果。 |

## 收录标准

被收录的项目必须：

1. 可公开访问和引用。
2. 明确使用 Jev、提供官方 Jev 资源，或记录独立的 Jev 风格实现。
3. 做出一个能够用一句话描述的具体类型化决策。
4. 链接到当前可获得的最强证据。
5. 披露提交者与项目的关系。

项目**不需要**拥有很多 GitHub Star。只要准确说明状态和证据，实验性项目及早期项目同样欢迎。

我们不收录只是与 Jev 相似的通用 AI 项目、没有具体决策的链接集合、无法访问的来源、复制的文档，以及没有可追溯来源的性能声明。

## 提交或贡献

请使用项目提交模板创建 GitHub Issue。

请包含：

- 项目或仓库 URL
- 你与项目的关系
- Jev 所做的决策
- 公开时提供 Jev 调用点 URL
- 使用的一个或多个原语
- 运行手册或演示 URL
- 指标来源和测量方法
- 可选的本地化摘要

没有公开调用点的提交可以进入审阅队列，待实现得到核验后再正式收录。

如需编辑目录数据、核验元数据、翻译或仓库工具，请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。其中包含数据结构、编辑规则、证据要求、本地化流程和验证命令。

## 免责声明

Awesome Jev 是独立社区资源，与 TypeSafe AI 无隶属关系，也未获其背书。TypeSafe、Jev 和 System One 是其各自所有者的名称或标识。

输出符合数据结构并不等于决策正确。请使用自己的数据评估 Jev，依据风险设置阈值，将重要动作置于确定性检查之后，并提供适当的人工兜底机制。

除非文件另有说明，本项目依据 [MIT 许可证](LICENSE)发布。所链接项目仍适用其各自的许可证。

目录最近审阅日期：**2026-09-24**
