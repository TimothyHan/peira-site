// Korean content for /ko. Mirrors the English data files' shapes exactly, so the section
// components take a locale and nothing else changes.
//
// Register: 합니다체, terse and technical — the same voice as the English copy, which states
// evidence rather than selling. Command names, flags, verdicts (pass | fail | error), and
// artifact paths stay in English: they are what you actually type and read on screen.

import type { TermLine } from "./hero";
import type { Stat } from "./stats";
import type { LoopStage, ParadigmRow } from "./loop";
import type { WalkStep } from "./walkthrough";
import type { TriageKind } from "./features";
import type { CliCommand, DocStep, RefGroup } from "./docs";
import { url, type NavItem } from "./site";

export const heroKo = {
  // The only eyebrow on the Korean side that is prose rather than a literal command, flag,
  // or evidence-log line — so it is the only one that translates.
  eyebrow: "peira · AI 네이티브 API 테스팅",
  // Explicit split: keep-all still breaks after "테스트", giving "당신의 테스트 / 계획이" and
  // splitting the noun phrase. The 어절 rhythm wants 당신의 / 테스트 계획이.
  headlineClaimLines: ["당신의", "테스트 계획이"],
  headlineTested: "컴파일됩니다.",
  headlineQuiet: "실행은 결정론적 러너가 합니다.",
  installCommand: "npm install -g peira",
  honesty: ["API 키 불필요", "가입 불필요", "런타임 LLM 호출 0", "MIT"],
  secondaryCta: { label: "GitHub에서 보기", href: "https://github.com/TimothyHan/peira" },
} as const;

export const heroLedeKo = {
  before: "인텐트 컴파일러, 결정론적 러너, 실패 트리아지, 증거 원장을 하나의 CLI로 제공합니다. ",
  middle: " 과 ",
  after: " 을 어떤 REST API에도 실행하세요 — 설정은 URL 하나로 충분합니다.",
} as const;

export const statsKo: readonly Stat[] = [
  {
    value: "0",
    label: "런타임 LLM 호출",
    detail: "CI에 API 키도, 세션도 필요 없습니다 — 머지를 막는 것은 종료 코드입니다",
    featured: true,
  },
  {
    value: "27/27",
    label: "레거시 명세 재표현",
    detail: "실제 서비스의 손으로 쓴 스위트를 다섯 개 프리미티브로 — 이스케이프 해치 0, sleep 0",
  },
  {
    value: "3",
    label: "드러난 불일치",
    detail: "레거시 테스트 계획을 그대로 컴파일하자 인텐트와 구현의 간극이 드러났습니다 — 그중 하나는 아무도 테스트한 적이 없었습니다",
  },
  {
    value: "5/5",
    label: "외부 API, 첫 시도",
    detail: "공개된 서드파티 API를 대상으로 컴파일했습니다; 베드 설정은 URL 한 줄이었습니다",
  },
  {
    value: "87.9%",
    label: "트리아지 일치율",
    detail: "사전 등록된 33개 동작 변화에 대한 bug/drift 판정; 스키마 거부와 인젝션은 0건",
  },
  {
    value: "254",
    label: "도구 자체의 테스트",
    detail: "실제로 배포되는 컴파일 산출물을 대상으로 실행 — 엄격한 TypeScript, CI는 Linux와 Windows",
  },
  {
    value: "57ms",
    label: "첫 판정까지",
    detail: "부팅, 전체 스위트 로드와 검증, 실제 요청 발행, 결과 보고까지 — 트랜스파일 파이프라인도, JVM도, 브라우저도 없습니다",
  },
  {
    value: "0.17ms",
    label: "케이스당 도구 오버헤드",
    detail: "주장이 아니라 측정값입니다 (npm run bench) — 기다리게 되는 것은 러너가 아니라 당신의 서비스입니다",
  },
] as const;

export const loopStagesKo: readonly LoopStage[] = [
  {
    num: "01",
    title: "인텐트 작성",
    body: "마크다운 테스트 계획입니다. ## 섹션 하나가 약속 하나이고, 안정적인 id로 태깅됩니다.",
    actor: "human",
    actorLabel: "사람",
  },
  {
    num: "02",
    title: "컴파일",
    body: "섹션은 당신의 Claude 세션을 통해 JSON 케이스가 됩니다. 결정론적 게이트가 형식이 어긋난 것을 거부하고, 계보는 기계적으로 각인됩니다.",
    actor: "llm",
    actorLabel: "LLM · 게이트 통과",
  },
  {
    num: "03",
    title: "실행",
    body: "LLM 호출 0. 시드 기반이라 재현되고, 결정성을 잃지 않으면서 병렬로 실행됩니다. 판정은 pass | fail | error — 단정 실패와 인프라 실패를 결코 뒤섞지 않습니다.",
    actor: "deterministic",
    actorLabel: "결정론적",
  },
  {
    num: "04",
    title: "트리아지",
    body: "실패는 bug, drift, flake로 분류되어 증거와 함께 돌아옵니다. 제안일 뿐입니다: 판단은 사람이 하고, 무엇도 스스로 적용되지 않습니다.",
    actor: "llm",
    actorLabel: "LLM 제안 · 사람 결정",
  },
  {
    num: "05",
    title: "기록",
    body: "판단이 끝난 실행은 증거 원장에 남습니다. 인텐트 섹션은 실행을 거듭하며 신뢰를 얻거나 — 사유가 그대로 인용된 채 잃습니다.",
    actor: "deterministic",
    actorLabel: "결정론적",
  },
] as const;

export const paradigmKo: readonly ParadigmRow[] = [
  { before: "사람이 테스트 코드를 손으로 씁니다", after: "사람은 인텐트를 씁니다 — 평범한 마크다운, 섹션 하나에 약속 하나" },
  { before: "테스트 코드가 명세에서 소리 없이 멀어집니다", after: "케이스가 계보를 지니고, 낡은 것은 표시되어 재컴파일됩니다" },
  { before: "sleep과 재시도, 그리고 미덥지 않은 green", after: "시드 기반의 결정론적 판정 — 어떤 실패든 그대로 재현됩니다" },
  { before: "빨간 빌드는 원인부터 뒤져야 하는 일거리입니다", after: "실패가 bug | drift | flake로 분류되어 증거와 함께 돌아옵니다" },
] as const;

export const walkthroughKo: readonly WalkStep[] = [
  {
    key: "write",
    tab: "01 작성",
    stage: "01",
    title: "약속을 서술합니다 — 평범한 문장으로",
    narration:
      "당신의 일은 문장을 쓰는 것뿐입니다. 태그는 기계적인 작업입니다: 에이전트가 붙여 주고(드롭인 에이전트 지침에 들어 있습니다), peira adopt가 기존 문서에 붙여 주며, 태그가 없어도 동작합니다 — id는 제목에서 파생되기 때문입니다. 태그는 문장을 고쳐 써도 계보가 살아남게 할 뿐입니다.",
    actor: "human",
    actorLabel: "사람 · 태그는 에이전트가",
    artifactLabel: "intent/orders.md",
    artifact: `## Cancelling a shipped order                   ← 당신
<!-- peira: id=order-cancel-shipped kind=ac -->  ← 에이전트
Cancelling an order that has already shipped     ← 당신
is refused with 409, and the order stays SHIPPED.`,
  },
  {
    key: "compile",
    tab: "02 컴파일",
    stage: "02",
    title: "AI가 케이스로 컴파일합니다",
    narration:
      "당신의 Claude 세션이 제안하고, 결정론적 스키마 게이트가 판정합니다. 계보는 기계적으로 각인되며 — 모델의 말을 믿지 않습니다 — 케이스는 여느 코드 리뷰처럼 diff로 검토합니다.",
    actor: "llm",
    actorLabel: "LLM · 게이트 통과",
    artifactLabel: "cases/CASE-order-cancel-shipped-001.json",
    artifact: `{
  "id": "CASE-order-cancel-shipped-001",
  "from": { "intent": "order-cancel-shipped",
            "hash": "6da1a5fc7ff5" },
  "setup": [
    { "request": { "method": "post", "route": "/orders",
                   "auth": "$users.alice",
                   "body": { "note": "x {{unique.nonce}}" } },
      "capture": { "orderId": "body.id" } },
    { "request": { "method": "post",
                   "route": "/orders/$orderId/ship",
                   "auth": "$users.alice" } }
  ],
  "test": {
    "request": { "method": "post",
                 "route": "/orders/$orderId/cancel",
                 "auth": "$users.alice" },
    "expect": { "status": 409,
                "body": { "status": "SHIPPED" } }
  }
}`,
  },
  {
    key: "run",
    tab: "03 실행",
    stage: "03",
    title: "러너가 실행합니다 — LLM 호출 0",
    narration:
      "결정론적입니다: 같은 시드 + 같은 서비스 상태 → 같은 판정. 모든 요청과 응답이 증거 로그에 남으므로, 아래 diff는 실제 HTTP 교환이 뒷받침합니다.",
    actor: "deterministic",
    actorLabel: "결정론적",
    artifactLabel: "peira run",
    artifact: `$ peira run cases --bed bed.json --seed 42 --evidence run.jsonl
PASS  CASE-order-create-001
FAIL  CASE-order-cancel-shipped-001 — test: assertion failed
        status: expected 409, got 200 (status mismatch)
        body.status: expected "SHIPPED", got "CANCELLED"
seed 42 | 25 pass, 1 fail, 0 error`,
  },
  {
    key: "triage",
    tab: "04 트리아지",
    stage: "04",
    title: "트리아지가 답의 초안을 씁니다",
    narration:
      "실패는 bug, drift, flake로 분류되어 돌아옵니다 — 인텐트 문장을 기준으로 판단하고, 증거를 함께 붙입니다. 제안일 뿐, 도구가 무언가를 적용하는 일은 없습니다.",
    actor: "llm",
    actorLabel: "LLM 제안",
    artifactLabel: "peira triage",
    artifact: `$ peira triage --evidence run.jsonl --intent intent
BUG   CASE-order-cancel-shipped-001
      이미 배송된 주문을 서비스가 취소했습니다.
      인텐트는 409와 SHIPPED 종료 상태를 명시합니다

finding: expected "409, order stays SHIPPED"
         actual   "200, order became CANCELLED"

proposals (nothing applied): run-triage.json`,
  },
  {
    key: "decide",
    tab: "05 결정",
    stage: "05",
    title: "당신이 결정합니다 — 판단 한 문장",
    narration:
      "당신이 버그로 등록합니다. 실행은 증거 원장에 기록되고, 해당 섹션은 applied로 남습니다 — 위반을 잡아내는 제 몫을 했기 때문입니다. 신뢰는 손이 아니라 실행이 만듭니다.",
    actor: "human",
    actorLabel: "사람",
    artifactLabel: "peira evidence",
    artifact: `당신: "이건 버그입니다. 등록하고 실행을 기록하세요."

$ peira evidence --evidence run.jsonl \\
    --triage run-triage.json --intent intent
ledger run run-seed-42-a41f2c:
  1 section(s) applied, 0 contradicted
  outcome DONE_WITH_CONCERNS`,
  },
  {
    key: "change",
    tab: "Δ 변경",
    stage: "Δ",
    title: "여섯 달 뒤, API가 바뀝니다",
    narration:
      "여기가 유지보수의 이야기입니다. 문장 하나를 고치면 stale 표시가 영향받은 케이스를 정확히 지목하고, 명령 하나가 그것들을 재생성해 검토에 올립니다. 테스트 코드를 뒤질 일이 없습니다 — 계획이 곧 프로그램이기 때문입니다.",
    actor: "human",
    actorLabel: "사람 + 도구",
    artifactLabel: "변경의 처음부터 끝까지",
    artifact: `# intent/orders.md의 문장 하나를 고칩니다:
- …is refused with 409, and the order stays SHIPPED.
+ …is refused with 422, and the order stays SHIPPED.

$ peira validate cases --bed bed.json --intent intent
warn  CASE-order-cancel-shipped-001 is STALE —
      intent "order-cancel-shipped" is now 91c02be411aa,
      case was compiled from 6da1a5fc7ff5

$ peira compile intent --out cases --bed bed.json \\
    --section order-cancel-shipped
compiled 1 case(s) from 1 section(s) → cases`,
  },
] as const;

export const tallyKo = {
  writeLabel: "당신이 쓰는 것",
  write: `## Cancelling a shipped order
Cancelling an order that has already shipped
is refused with 409, and the order stays SHIPPED.`,
  writeNote: "…작성 표면은 이것이 전부입니다 — 태깅은 에이전트가 처리합니다.",
  getLabel: "당신이 얻는 것",
  gets: [
    "실행 가능하고 검토 가능한 케이스 — 레퍼런스 베드에서 16개 섹션이 26개 케이스가 되었습니다",
    "모든 인바리언트 섹션마다 실행할 때마다 새로 생성되는 시드 기반 프로브 5개",
    "필요할 때마다 다시 만드는 Given/When/Then 문서와 시각적 HTML 실행 리포트",
    "이 섹션이 실행을 거듭하며 applied를 쌓아 가는 신뢰 원장",
  ],
} as const;

export const triageKindsKo: readonly TriageKind[] = [
  {
    chip: "bug",
    title: "서비스가 약속을 어겼습니다",
    body: "관찰된 동작이 인텐트의 요구와 모순됩니다. 기대와 관찰이 담긴 finding으로 돌아오며, 그대로 등록할 수 있습니다.",
  },
  {
    chip: "drift",
    title: "약속이 움직였습니다",
    body: "케이스의 표현은 위반되었지만 인텐트의 실제 요구는 여전히 유효합니다. 가장 작은 인텐트 수준 diff로 돌아오고 — 승인하거나 거절하는 것은 당신입니다.",
  },
  {
    chip: "flake",
    title: "증거가 부족합니다",
    body: "비결정성을 시사하는 실패 양상입니다. 재실행 처방으로 돌아오며 — 시드가 함께 오므로 재현은 정확합니다.",
  },
] as const;

export const ledgerCopyKo = {
  eyebrow: "case-verdict → applied | contradicted",
  heading: "증거 원장",
  body: "판단이 끝난 실행은 peira evidence로 기록하고, 현황은 peira trust로 읽습니다. 통과한 섹션은 applied를 남기고 — 트리아지된 버그도 마찬가지입니다. 위반을 잡아내는 제 몫을 했기 때문입니다. 판단이 끝난 drift는 사유가 그대로 인용된 채 contradicted를 남기고, 판단되지 않은 잡음은 아무것도 남기지 않습니다.",
} as const;

export const ctaCloseKo = {
  eyebrow: "run-start",
  heading: "증거를 컴파일하세요.",
  body: "Node ≥ 18. 서드파티 의존성 없음. 실행·검증·리포트는 모델을 전혀 건드리지 않습니다 — 컴파일과 트리아지만 당신의 Claude 세션에서 동작합니다.",
  honesty:
    "v0.2입니다. 단일 AUT, REST 전용. UI 테스트, 부하 테스트, 목킹, 컨트랙트 브로커링은 명시적인 비목표입니다.",
} as const;

export const navKo: readonly NavItem[] = [
  { label: "동작 원리", href: url("/ko/#loop") },
  { label: "측정값", href: url("/ko/#measured") },
  { label: "증거", href: url("/ko/#evidence") },
  { label: "문서", href: url("/ko/docs") },
  { label: "GitHub", href: "https://github.com/TimothyHan/peira", external: true },
];

export const footerKo = {
  tagline: "AI-네이티브 API 테스팅 도구",
  builtWith: "인텐트 컴파일러 · 결정론적 러너 · 증거 원장",
} as const;

// ── /ko/docs ────────────────────────────────────────────────────────────────

export const gettingStartedKo: readonly DocStep[] = [
  {
    num: "00",
    title: "설치",
    body: "Node ≥ 18, 퍼스트파티 의존성 하나 — 신뢰 경로에 서드파티 코드가 없습니다. 실행, 검증, 리포트는 그 외에 아무것도 필요하지 않습니다. 오직 작성 계열 명령(compile, adopt)과 오프라인 triage만 모델을 사용하며, 이들은 당신이 이미 로그인한 Claude Code CLI 세션으로 넘깁니다: 발급할 API 키도, CI에 넣을 것도 없습니다.",
    code: "npm install -g peira",
    codeLang: "bash",
  },
  {
    num: "01",
    title: "스캐폴딩 — peira init",
    body: "명령 하나로 프로젝트가 준비됩니다: bed.json, 예시 인텐트 한 쌍(인수 조건 하나, 인바리언트 하나), 빈 cases/, 그리고 AGENTS.md — Claude·Cursor·Copilot 계열 에이전트가 함께 읽는 크로스툴 규약이며, Claude Code를 위한 한 줄짜리 CLAUDE.md 임포트가 딸려 옵니다. 신뢰 경로의 다른 모든 것처럼 결정론적이고 LLM을 쓰지 않습니다. 프롬프트를 묻지 않으므로 에이전트가 대신 실행할 수 있고, 기존 파일을 덮어쓰지 않습니다 — 파일마다 created 또는 kept를 보고합니다.",
    code: `peira init          # bed.json, intent/example.md, AGENTS.md (+ CLAUDE.md import), cases/
peira init --ci     # …여기에 LLM을 쓰지 않는 GitHub Actions 워크플로까지`,
    codeLang: "bash",
    note: "이후 두 단계는 이것으로 줄어듭니다: bed.json이 당신의 서비스를 가리키게 하고, 예시 인텐트를 실제 약속으로 바꾸는 것 — 또는 서비스가 무엇을 약속하는지 에이전트에게 말하면 됩니다. AGENTS.md가 에이전트에게 맥락을 줍니다.",
  },
  {
    num: "02",
    title: "서비스를 서술합니다 — bed.json",
    body: "베드 설정은 Peira가 당신의 서비스에 대해 배우는 유일한 곳입니다. baseUrl을 제외하면 모두 선택 사항입니다: users는 케이스가 $users.alice로 참조하는 이름 붙은 주체입니다(자격 증명은 케이스에 들어가지 않습니다); reset은 매 실행 전에 당신의 서비스가 가진 상태 초기화 엔드포인트를 한 번 호출합니다; drain은 비동기 작업이 끝났는지 묻는 방법을 러너에게 알려 주어, 한 케이스의 잔여물이 다음 케이스의 타이밍을 오염시키지 못하게 합니다; timeouts는 느린 환경의 지연 허용치를 선언합니다(상한일 뿐이며, 걸리면 fail이 아니라 error 판정입니다); service는 테스트 대상 앱을 peira run이 어떻게 띄울지 알려 줍니다 — 이미 응답 중인 baseUrl은 그대로 재사용하고, Peira가 띄운 서버는 실행이 끝날 때 프로세스 그룹째 정리합니다.",
    code: `{
  "baseUrl": "http://localhost:8080",
  "users": { "alice": { "username": "alice", "password": "test-pw" } },
  "reset": { "method": "post", "url": "/test/reset" },
  "drain": { "route": "/orders/status", "idParam": "id",
             "statusPath": "body.state", "terminal": ["SHIPPED", "CANCELLED"] },
  "service": { "command": "npm run dev", "cwd": "../orders-service" }
}`,
    codeLang: "json",
    note: "환경마다 베드 파일을 하나씩 두세요(bed.json, bed.ci.json): 같은 케이스, 다른 대상.",
  },
  {
    num: "03",
    title: "인텐트 작성 — intent/*.md",
    body: "인텐트는 사람이 소유하는 유일한 진실의 출처입니다: 평범한 마크다운이고, ## 섹션 하나가 인수 조건 또는 인바리언트 하나입니다. 태그는 선택이지만 권장합니다 — id는 영구적인 계보 앵커여서, 태그가 붙은 섹션은 문장을 자유롭게 고쳐 써도 케이스가 미아가 되지 않습니다. kind=invariant 섹션은 템플릿으로 컴파일되어 실행할 때마다 새 시드 프로브를 생성합니다. 파일은 엔드포인트가 아니라 능력 단위로 나누세요: 모든 것의 단위는 섹션입니다.",
    code: `## Creating an order
<!-- peira: id=order-create kind=ac -->
POST /orders with a valid payment method returns 201 with the new order's id.

## Order isolation
<!-- peira: id=order-isolation kind=invariant -->
For all orders o, for all users u ≠ owner(o): GET /orders/{o} as u → 403.`,
    codeLang: "markdown",
    note: "이미 정리되지 않은 테스트 계획이 있나요? peira adopt가 한 번만 재구조화하고 — 결코 다시 쓰지 않습니다 — 내용 보존 리포트를 출력합니다. 검토하고 커밋하면, 그때부터 그것은 당신의 문서입니다.",
  },
  {
    num: "04",
    title: "컴파일",
    body: "당신의 Claude 세션에서 동작합니다. 모든 후보 케이스는 손으로 쓴 케이스와 똑같은 스키마 게이트를 통과하고, 계보는 기계적으로 각인되며, 컴파일 매니페스트가 모든 섹션을 설명합니다(컴파일됨 / 사유와 함께 건너뜀 / 거부됨). 생성된 케이스는 diff로 검토하세요 — 그 검토가 신뢰 모델이 서 있는 사람의 확인 지점입니다.",
    code: `peira compile intent --out cases --bed bed.json
peira compile intent --dry-run    # 리포트만, 아무것도 쓰지 않음`,
    codeLang: "bash",
    note: "--dry-run은 당신의 문서에 대한 피드백 루프입니다: 몇 개 섹션이 컴파일되었는지, 그리고 어떤 섹션이 왜 건너뛰어졌는지(\"검증 가능한 동작을 진술하지 않음; 라우트도 상태 코드도 명시하지 않음\") 또는 어떤 후보가 왜 거부되었는지 알려 줍니다. 건너뜀은 도구의 실패가 아니라 당신의 인텐트에 대한 메모입니다.",
  },
  {
    num: "05",
    title: "로컬 실행 — 그리고 루프 닫기",
    body: "판정은 pass | fail | error입니다 — 단정 실패와 인프라 실패를 결코 뒤섞지 않습니다. 시드는 항상 출력됩니다: 어떤 실패든 같은 시드와 같은 서비스 상태에서 그대로 재현됩니다. 첫 실행은 대개 진짜 버그와 낡은 인텐트를 동시에 드러냅니다 — 그것이 요점입니다.",
    code: `peira run cases --bed bed.json --seed 42 --evidence run.jsonl
peira run cases --bed bed.json --seed 42 --only CASE-order-cancel-001   # 실패한 케이스 하나만 재실행
peira run cases --bed bed.json --parallel 8   # 워커 풀; 판정과 증거 순서는 순차 실행과 동일
peira run cases --bed bed.json --intent intent --watch   # 변경 시 재실행, 계보 기반
peira triage --evidence run.jsonl --intent intent   # bug | drift | flake 제안; 적용은 하지 않음
# 당신이 판단합니다: 서비스를 고치거나, 인텐트를 고치거나…
peira validate cases --bed bed.json --intent intent # stale 표시가 영향받은 케이스를 지목
peira compile intent --out cases --bed bed.json --section <changed-section>`,
    codeLang: "bash",
    note: "watch 모드는 임포트 그래프가 아니라 계보로 변경을 해석합니다: 케이스를 고치면 정확히 그 케이스만 재실행되고, 인텐트를 고치면 stale 여부를 다시 확인해 영향받은 케이스를 지목합니다 — 재컴파일은 저장 훅이 아니라 당신의 결정입니다. 읽을 수 있는 문서는 언제든 공유하세요: peira render cases --intent intent --evidence run.jsonl (Given/When/Then 또는 완전한 HTML 실행 리포트; 단방향 산출물이니 고치지 말고 다시 만드세요).",
  },
  {
    num: "06",
    title: "CI — LLM 호출 0",
    body: "intent/, cases/, 베드 설정을 커밋하세요. CI에는 키도 세션도 필요 없습니다. 머지를 막는 것은 종료 코드이고, --junit은 표준 JUnit XML을 씁니다(pass/fail/error가 testcase/failure/error로 대응됩니다). 그래서 어떤 CI 리포트 UI든 래퍼 스크립트 없이 실행 결과를 그려 줍니다. CI가 빨개지면 증거 아티팩트를 받아 로컬에서 트리아지하세요 — 판단은 파이프라인의 봇이 아니라 사람의 몫입니다.",
    code: `# .github/workflows/api-tests.yml
- run: npm ci
- run: docker compose up -d orders-service
- run: npx peira validate cases --bed bed.ci.json --intent intent
- run: npx peira run cases --bed bed.ci.json --seed \${{ github.run_id }} --evidence run.jsonl --junit junit.xml
- if: always()
  uses: actions/upload-artifact@v4
  with: { name: evidence, path: run.jsonl }`,
    codeLang: "yaml",
    note: "그다음 판단이 끝난 실행을 기록하세요: peira evidence --evidence run.jsonl --triage run-triage.json --intent intent. 통과한 섹션은 applied를, 판단된 drift는 사유가 그대로 인용된 채 contradicted를 남깁니다. 현황은 peira trust로 봅니다. 신뢰는 손이 아니라 실행이 만듭니다.",
  },
] as const;

export const cliCommandsKo: readonly CliCommand[] = [
  { name: "init", synopsis: "peira init [dir] [--ci]", description: "프로젝트 스캐폴딩: bed.json, 예시 인텐트, AGENTS.md 에이전트 지침(+ CLAUDE.md 임포트), cases/. --ci는 LLM을 쓰지 않는 GitHub Actions 워크플로를 추가합니다. 결정론적이고, 묻지 않으며, 덮어쓰지 않습니다." },
  { name: "validate", synopsis: "peira validate [casesDir] [--bed <path>] [--intent <dir>]", description: "모든 케이스에 대한 스키마 + 정적 검사. --intent를 주면 낡은 케이스를 표시하고 인텐트 구조를 린트합니다." },
  { name: "run", synopsis: "peira run [casesDir] --bed <path> [--seed <n>] [--evidence <path>] [--only <id>]… [--grep <substr>] [--parallel <n>] [--junit <path>] [--shard <i>/<n>] [--watch]", description: "결정론적 러너입니다. LLM 호출 0; 시드 기반이라 재현되며, 자격 증명은 기록 시점에 가려진 채 증거 JSONL로 남습니다. --only/--grep은 지정한 케이스만 재실행하고, --parallel은 판정과 증거 순서가 순차 실행과 동일한 워커 풀을 돌리며, --junit은 CI 표준 XML을 냅니다. --shard는 서로 겹치지 않는 결정론적 조각으로 머신을 나누고, --watch는 계보 기반으로 변경 시 재실행합니다." },
  { name: "compile", synopsis: "peira compile [intentDir] --out <dir> [--bed <path>] [--section <id>]… [--dry-run]", description: "인텐트 섹션을 당신의 Claude 세션을 통해 스키마 게이트를 통과한 JSON 케이스로 만듭니다. --section은 지정한 섹션만 재컴파일하고 매니페스트를 병합합니다. --dry-run은 아무것도 쓰지 않고 보고합니다: 인텐트가 얼마나 컴파일되는지, 그리고 어떤 섹션이 왜 건너뛰어지거나 거부되었는지." },
  { name: "stats", synopsis: "peira stats [casesDir] [--openapi <spec.json>]", description: "DSL 커버리지와 반복되는 이스케이프 해치 형태 — 컴파일러가 증거와 함께 어떤 프리미티브가 빠졌는지 말해 주는 창구입니다. --openapi를 주면 API 표면 대비 엔드포인트 커버리지를 냅니다: 어떤 엔드포인트에 케이스가 없는지. 스펙은 여전히 선택 사항이며, 제출할 때만 리포트가 생깁니다." },
  { name: "triage", synopsis: "peira triage --evidence <run.jsonl> --intent <dir>", description: "오프라인 실패 분류: 인텐트 문장을 기준으로 판단한 bug | drift | flake. 제안일 뿐이며, 무엇도 적용되지 않습니다." },
  { name: "evidence", synopsis: "peira evidence --evidence <run.jsonl> [--triage <file>] --intent <dir>", description: "판단이 끝난 실행을 증거 원장에 기록합니다(휴대 가능한 JSONL 내보내기 포함). 섹션은 실행마다 applied 또는 contradicted를 얻습니다." },
  { name: "trust", synopsis: "peira trust", description: "원장 현황 — 인텐트 섹션별 applied, contradicted, 실행 횟수, 마지막 applied 시점." },
  { name: "render", synopsis: "peira render [casesDir] [--evidence <run.jsonl>] [--format md|html]", description: "단방향으로 읽을 수 있는 문서: Given/When/Then 마크다운, 또는 실패 시 관찰된 교환까지 담은 자체 완결형 HTML 실행 리포트." },
  { name: "adopt", synopsis: "peira adopt <messy.md> --out <intent/name.md>", description: "일회성 작성 보조: 임의의 문서를 태그가 붙은 인텐트로 재구조화하고 내용 보존 리포트를 냅니다. 검토도 소유도 당신의 몫입니다." },
] as const;

export const referenceLedeKo =
  "프로그래밍 가능한 표면 전체를 한 페이지에 담았습니다 — DSL이 의도적으로 닫혀 있기에 유한합니다. 여기 없는 것은 스키마 게이트가 거부하며, 어휘는 확장 훅이 아니라 개정을 통해서만(stats 텔레메트리를 근거로) 자랍니다.";

export const referenceKo: readonly RefGroup[] = [
  {
    id: "ref-case",
    title: "케이스",
    intro: "JSON 파일 하나입니다. id, from, test는 필수입니다.",
    entries: [
      { term: "id", note: "CASE-<kebab-slug> — 케이스 집합 안에서 유일해야 하며, 중복은 거부됩니다." },
      { term: "from", note: "계보 {intent, hash}: 어떤 섹션이 어떤 내용 해시일 때 이 케이스를 만들었는지. 기계적으로 각인되며 모델의 말을 믿지 않습니다. 해시가 어긋나면 케이스는 stale로 표시됩니다. 템플릿에서 생성된 인스턴스는 {template, seed, instance}를 더합니다." },
      { term: "setup", note: "선택적인 스텝 배열 — 요청 스텝 또는 레지스트리 스텝 호출 — 을 순서대로 실행합니다." },
      { term: "test", note: "정확히 하나의 요청 스텝이며, 검증하려는 주장이 여기 있습니다." },
      { term: "teardown", note: "{\"drain\": true} — 판정 후, 캡처된 모든 id를 베드의 drain 프로브로, 그것을 캡처한 자격 증명으로 종료 상태까지 폴링합니다." },
    ],
  },
  {
    id: "ref-request",
    title: "요청 스텝",
    entries: [
      { term: "request", note: "method(get | post | put | delete | patch), route(/로 시작), 선택적 query와 body. auth는 세 가지 형태입니다: \"$users.<alias>\"(베드 주체), 부정 인증 테스트를 위한 리터럴 {username, password}, 또는 익명을 뜻하는 생략." },
      { term: "capture", note: "별칭 → status, body, headers를 루트로 하는 점 표기 응답 경로(body.id, headers.location). 응답에 없는 경로는 그 경로를 지목하며 케이스를 실패시킵니다." },
      { term: "pollUntil", note: "expect 블록이 일치할 때까지 요청을 다시 보냅니다 — 고정된 100ms 간격, timeoutMs 상한(기본 10초 또는 베드의 pollUntilMs). 수렴하지 않으면 fail입니다. 거부되는 sleep을 대신하는 선언적 수단입니다." },
    ],
  },
  {
    id: "ref-expect",
    title: "expect — 오라클",
    intro: "Jest toMatchObject와 동일한 부분 일치: 객체는 모든 깊이에서 부분집합으로, 배열은 길이가 같은 상태에서 인덱스별로, 원시값은 엄격하게 비교합니다.",
    entries: [
      { term: "status", note: "정확한 상태 코드." },
      { term: "headers", note: "이름 대소문자를 구분하지 않고(RFC 9110) 응답 헤더를 검사합니다. 값은 리터럴 문자열 또는 매처이며, 그 외는 거부됩니다. 없는 헤더는 이름이 붙은 diff가 됩니다." },
      { term: "body", note: "JSON 본문에 대한 부분 일치." },
      { term: "bodySchema", note: "본문 전체가 만족해야 하는 JSON 스키마 부분집합(type, required, properties, additionalProperties, enum, items, pattern, anyOf) — \"모든 원소가 X 형태\"류의 주장에 씁니다." },
      { term: "{\"$any\": …}", note: "매처: 존재하며 \"string\" | \"number\" | \"boolean\" 타입일 것." },
      { term: "{\"$contains\": …}", note: "매처: 해당 부분 문자열을 포함하는 문자열 — content-type을 위한 매처입니다." },
      { term: "null", note: "매처: 존재하며 정확히 null. 매처는 단독으로 쓰이며 body, pollUntil.until, 헤더 값에서 동작합니다. 사용자 정의 매처는 설계상 없습니다 — 어휘는 개정을 통해 자랍니다." },
    ],
  },
  {
    id: "ref-interpolation",
    title: "보간",
    entries: [
      { term: "\"$alias\"", note: "문자열 전체가 참조이면 캡처된 값으로, 타입을 보존한 채 치환됩니다." },
      { term: "{{alias}}", note: "임의의 문자열 안, 임의의 깊이에서 String(value)로 끼워집니다. {{{{는 리터럴 {{를 뜻합니다." },
      { term: "unique.<key>", note: "시드에서 파생된 판별자: hash(seed, caseId, key). 같은 시드 → 같은 값이며, 픽스처 파일이 필요 없습니다." },
      { term: "$users.<alias>", note: "베드 주체 — 요청의 auth 자리에서만 유효하며, 데이터에 끼워지지 않습니다." },
    ],
  },
  {
    id: "ref-bed",
    title: "베드 — bed.json",
    intro: "Peira가 당신의 서비스에 대해 배우는 유일한 곳입니다. baseUrl 외에는 모두 선택 사항입니다.",
    entries: [
      { term: "baseUrl", note: "서비스가 응답하는 주소이며, 호출마다 --base-url로 덮어쓸 수 있습니다." },
      { term: "users", note: "기본 인증을 위한 이름 붙은 주체 — 케이스는 $users.alice라고만 쓰고 자격 증명을 담지 않습니다." },
      { term: "reset", note: "{url, method?} — 매 실행 전 상태 초기화 호출 한 번." },
      { term: "drain", note: "{route, idParam, statusPath, terminal[]} — 비동기 작업이 끝났는지 묻는 방법이며, teardown.drain의 동력입니다." },
      { term: "timeouts", note: "지연 허용 상한 {requestMs?, pollUntilMs?, drainMs?, stepMs?}. 걸리면 fail이 아니라 error이며, 폴링 간격은 결정성을 위해 고정입니다." },
      { term: "service", note: "{command, cwd?, readyMs?, reuse?} — peira run이 테스트 대상 앱을 띄우는 방법입니다. reuse(기본값)는 이미 응답 중인 baseUrl을 그대로 쓰고 죽이지 않습니다. Peira가 띄운 서버는 실행이 끝날 때 프로세스 그룹째 정리됩니다." },
    ],
  },
  {
    id: "ref-verdicts",
    title: "판정, 종료 코드, 증거",
    entries: [
      { term: "pass | fail | error", note: "fail은 단정이 성립하지 않은 것이고, error는 단정을 판단하기 전에 인프라가 실패한 것입니다. 결코 뒤섞이지 않으며 — --junit은 이를 testcase/failure/error로 손실 없이 대응시킵니다." },
      { term: "종료 코드", note: "0 전부 통과 · 1 fail/error 발생(또는 케이스 집합이 거부됨, 또는 서비스가 응답하지 않음) · 2 사용법 오류." },
      { term: "run.jsonl", note: "한 줄에 이벤트 하나인 추가 전용 JSONL: run-start, minted, case-start, http(모든 교환의 요청·응답·elapsedMs), step, case-verdict, drain-*, run-end(counts, wallMs, httpMs). 트리아지도, 원장도, 리포트도 이것을 읽습니다 — 연동 지점입니다." },
      { term: "가림 처리", note: "Authorization, Cookie, Set-Cookie 값은 기록 시점에 [REDACTED:<sha256-prefix>]로 저장됩니다 — 이벤트 간 동일성은 남고, 비밀은 로그에 남지 않습니다." },
    ],
  },
  {
    id: "ref-escape-hatch",
    title: "이스케이프 해치와 템플릿",
    entries: [
      { term: "steps", note: "타입이 있는 계약을 가진 생성된 절차입니다: {id, reads[], produces[], code}. setup에서만 {\"step\": \"STEP-…\", \"bind\": {…}}로 호출되며 — 호출은 구조적으로 expect나 capture를 가질 수 없습니다. 주장은 선언적인 곳에 남습니다. 모든 사용은 DSL에 어떤 프리미티브가 빠졌는지 묻는 텔레메트리입니다." },
      { term: "holes", note: "인바리언트 템플릿은 타입이 있는 구멍을 선언합니다 — principal(선택적으로 다른 구멍과 distinctFrom), expression({{holes.x.code}} / {{holes.x.result}}), unique — 그리고 실행마다 시드 기반 케이스 5개를 생성합니다. (template, seed, instance)로 언제든 정확히 재현됩니다." },
    ],
  },
] as const;

export const docsPageKo = {
  eyebrow: "docs · zero → ci",
  title: "개발자 문서",
  lede: "0에서 초록 파이프라인까지의 여정, 에이전트로 구동하는 법 — Peira를 쓰는 기본 방식입니다 —, 전체 CLI, 그리고 컴파일된 케이스의 실제 모습. 아래 모든 것은 실제입니다: 명령도, 플래그도, 출력 형태도 마케팅이 아니라 도구에서 나왔습니다.",
  navLabels: { gettingStarted: "시작하기", agents: "에이전트와 함께", cli: "CLI 레퍼런스", anatomy: "케이스 해부", reference: "레퍼런스" },
  gettingStartedTitle: "시작하기",
  agentsTitle: "에이전트로 Peira 쓰기",
  agentsLede:
    "Peira를 쓰는 기본 방식입니다. 설계부터 에이전트 친화적입니다: 작성 계열 표면은 이미 당신의 Claude 세션에서 돌고, 결정론적 러너야말로 에이전트 주도 테스트를 신뢰할 수 있게 만드는 것입니다. 실제로는 인텐트의 언어로 에이전트와 대화하면 — 에이전트가 계획을 고치고, 컴파일하고, 실행하고, 리포트를 만들고, 당신의 판단을 위해 트리아지 초안을 씁니다.",
  agentsLoopTitle: "대화로 보는 루프",
  agentsInstructionsTitle: "드롭인 에이전트 지침",
  agentsInstructionsLede:
    "peira init이 이것을 AGENTS.md로 만들어 줍니다 — Claude, Cursor, Copilot 계열 에이전트가 함께 읽는 크로스툴 규약이며, Claude Code를 위한 CLAUDE.md 임포트가 딸려 옵니다 — 그러면 위 워크플로가 그대로 동작합니다:",
  agentsGuaranteesTitle: "에이전트에게 맡겨도 안전한 이유",
  cliTitle: "CLI 레퍼런스",
  cliLede: "명령 열 개. 모델을 건드리는 것은 compile, triage, adopt뿐이며 — 당신의 세션에서 돌고, CI에서는 결코 돌지 않습니다.",
  cliFooter: "전체 플래그 목록: peira help",
  anatomyTitle: "케이스 해부",
  anatomyLede:
    "케이스는 JSON입니다: 선택적인 setup 스텝들, test 스텝 하나, 선택적인 teardown. 다섯 개 프리미티브가 손으로 쓴 스위트에 필요한 것을 감당합니다 — 실제 레거시 스위트를 이스케이프 해치 없이 27/27 재표현했습니다.",
  anatomyFooter:
    "케이스는 다시 만들 수 있는 산출물입니다 — 손으로 고쳐 어긋나게 두지 마세요. 인텐트를 바꾸고, 섹션을 재컴파일하고, diff를 검토하세요. 그것이 규율의 전부입니다.",
  referenceTitle: "레퍼런스",
  referenceFooter: "기준: schema/case.schema.json · 전체 문서: 저장소의 docs/REFERENCE.md",
} as const;

export const agentGuaranteesKo: readonly { title: string; body: string }[] = [
  {
    title: "러너는 설득되지 않습니다",
    body: "판정은 결정론적입니다 — (케이스, 시드, 서비스 상태)의 함수입니다. 런타임에 LLM이 없다는 것은 에이전트가 빨간 실행을 초록으로 구슬릴 수 없다는 뜻입니다. 할 수 있는 일은 서비스를 고치거나, 당신이 승인할 인텐트 변경을 제안하는 것뿐입니다.",
  },
  {
    title: "게이트는 거부할 뿐, 고치지 않습니다",
    body: "모델이 내놓는 모든 것 — 컴파일된 케이스, 트리아지 제안, 채택된 인텐트 — 은 결정론적 스키마 게이트를 지납니다. 형식이 어긋난 출력은 사유와 함께 거부되며, 조용히 교정되지 않습니다.",
  },
  {
    title: "스스로 적용되는 것은 없습니다",
    body: "트리아지는 bug | drift | flake를 제안하고, 판단은 사람이 합니다. 인텐트는 당신의 것이고, 케이스는 다시 만들 수 있는 산출물이며, 증거 원장은 무엇이 결정되었는지 사유를 그대로 인용해 기록합니다.",
  },
  {
    title: "당신의 세션에서 돕니다",
    body: "compile, triage, adopt는 당신이 이미 로그인한 Claude Code CLI로 넘깁니다 — 에이전트가 사는 바로 그 세션입니다. 발급할 API 키도, 따로 지킬 것도 없습니다.",
  },
] as const;

export const agentLoopKo = [
  { speaker: "you" as const, text: "커버리지를 추가해 줘: 이미 배송된 주문의 취소는 거부되어야 해." },
  {
    speaker: "agent" as const,
    text: "intent/orders.md에 태그된 섹션을 추가하고, 그 섹션만 컴파일한 뒤 스위트를 실행했습니다:",
    runs: [
      "peira compile intent --out cases --bed bed.json --section order-cancel-shipped",
      "peira run cases --bed bed.json --evidence run.jsonl",
    ],
  },
  {
    speaker: "agent" as const,
    text: "실패 1건 — 인텐트는 409를 요구하는데 서비스는 200을 반환합니다. 트리아지는 요청/응답 증거를 붙여 BUG로 제안합니다. 리포트를 첨부합니다. 버그로 등록할까요, 아니면 인텐트를 바꿔야 할까요?",
    runs: [
      "peira triage --evidence run.jsonl --intent intent",
      "peira render cases --intent intent --evidence run.jsonl --format html --out report.html",
    ],
  },
  { speaker: "you" as const, text: "버그야. 등록하고 실행을 기록해 줘." },
  {
    speaker: "agent" as const,
    text: "등록했습니다. 실행은 증거 원장에 기록되었고, 해당 섹션은 applied로 남았습니다(위반을 잡아내는 제 몫을 했습니다).",
    runs: ["peira evidence --evidence run.jsonl --triage run-triage.json --intent intent"],
  },
] as const;

export const heroTerminalKo: TermLine[] = [
  { kind: "cmd", text: "peira compile intent --out cases --bed bed.json" },
  { kind: "dim", text: "compiling status-visibility …" },
  { kind: "out", text: "compiled 26 case(s) from 16 section(s) → cases" },
  { kind: "cmd", text: "peira run cases --bed bed.json --seed 42" },
  { kind: "pass", text: "PASS  CASE-submit-accepted-001" },
  { kind: "pass", text: "PASS  CASE-status-visible-001" },
  { kind: "fail", text: "FAIL  CASE-result-isolation-001 — assertion failed" },
  { kind: "dim", text: "        status: expected 404, got 200" },
  { kind: "out", text: "seed 42 | 25 pass, 1 fail, 0 error" },
  { kind: "cmd", text: "peira triage --evidence run.jsonl --intent intent" },
  { kind: "bug", text: "BUG   CASE-result-isolation-001 — 다른 사용자가 제출자의" },
  { kind: "bug", text: "      결과를 읽을 수 있습니다; 인텐트가 정확히 이를 명시합니다" },
  { kind: "dim", text: "proposals (nothing applied): run-triage.json" },
];

// The three feature deep-dives' headings and ledes (inline in features.tsx for English).
export const featureCopyKo = {
  render: {
    eyebrow: "peira render",
    headClaim: "읽을 수 있는 산출물",
    headQuiet: "",
    lede: "케이스는 부분 일치 의미론을 가진 JSON입니다. 명령 하나면 같은 케이스가 Given/When/Then이 되거나 — 실패마다 관찰된 요청/응답 로그가 붙은 완전한 시각적 HTML 실행 리포트가 됩니다.",
  },
  seed: {
    eyebrow: "--seed 42",
    headClaim: "시드 기반 테스트 데이터",
    headQuiet: "",
    lede: "시드는 그 실행의 재생 번호입니다. 모든 “랜덤” 값은 hash(seed, case id, key)입니다 — 순수 함수이고, 저장되는 것은 없습니다. 같은 시드, 같은 서비스 상태 → 같은 판정. 어떤 실패든 그대로 재현됩니다.",
  },
  triage: {
    eyebrow: "peira triage",
    headClaim: "실패 트리아지",
    headQuiet: "",
    lede: "인프라 오류는 모델이 보기 전에 걸러집니다 — 닿지 않는 환경을 제품 버그로 오독하는 일이 구조적으로 불가능합니다. 남은 것은 케이스가 아니라 인텐트 문장을 기준으로 판단됩니다.",
  },
} as const;
