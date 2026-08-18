# Histórico de versões — Cálculo Administrativo LAADV

Pasta de trabalho local sincronizada com o repositório
[`leonzordhue/calculo-administrativo`](https://github.com/leonzordhue/calculo-administrativo).
Cada versão estável é arquivada em `historico/` como cópia integral do `index.html`.

---

## v1.14 — 2026-08-18 — Arquivo de auditoria: PDFs no projeto + download na bibliografia

**Arquivo:** `historico/v1.14-bibliografia-download.html`

- **Todas as normas em PDF arquivadas no projeto** (`fontes/leis/`) — cópia oficial
  de cada lei que embasa os cálculos, para que a base normativa não dependa de
  portal de terceiros (rastro de auditoria).
- A **Bibliografia** agora oferece, ao lado de cada norma, o link **"⬇ Baixar cópia
  arquivada (PDF)"** (servido pelo próprio site) além da fonte oficial.
- SES: correção do rótulo 908/2023 → Data-Base 2023 (v1.13-b já no ar).
- Pendência: 3 leis-estrutura (PMAM 3.725/2012, PCAM 2.875/2004 e 4.059/2014)
  aguardam cópia — ALEAM bloqueando por captcha; as leis de reajuste (valor) já
  estão todas arquivadas.

## v1.13 — 2026-08-17 — Bibliografia de fontes legais + auditoria de citações

**Arquivo:** `historico/v1.13-bibliografia.html`

Novo botão **"📚 Bibliografia · Fontes Legais"** no rodapé: gera um documento
imprimível com TODAS as normas que embasam os cálculos (40 referências), o uso
de cada uma e o **link oficial verificado** (SAPL/CMM, SAPL/ALEAM, Planalto,
BCB, STJ). Todos os links conferidos HTTP 200 em 2026-08-17.

**Auditoria de fontes (1ª rodada) — correções aplicadas:**
- Magistério municipal: o app citava Leis **2.871/2022, 3.056/2023, 3.315/2024**
  como reajustes da educação. Na base oficial da CMM essas leis tratam de
  proteção animal, inscrição de PcD e contratação — nada de salário. Corrigido
  para **2.905/2022, 3.088/2023, 3.342/2024** (reajustes reais da educação),
  em todas as ocorrências (tabela, legalMap, laudo de auditoria).
- Box "Fundamento Jurídico" do magistério exibia leis da PMAM/segurança
  (4.852/2019, 5.771/2022). Corrigido para a cadeia municipal do magistério.
- Magistério 2026: "PL 506/2026" → **Lei 3.661/2026** (sancionada).

**Divergências sinalizadas (não alteradas — aguardam decisão):**
- SEMSA reutiliza os números/percentuais da educação; cadeia real da saúde é
  3.339/2024, 3.513/2025, 3.665/2026. Recomenda-se reconstruir a tabela.
- SES: Lei 908/2023 não localizada na base SAPL da ALEAM.

## v1.12 — 2026-08-17 — Remove alertas automáticos que poluíam o laudo/PDF

Removidos os avisos automáticos "Data de Posse possivelmente incorreta" e
"Referência Atual possivelmente incorreta" (SEDUC/SEMED). Eram diagnósticos
internos que apareciam no PDF e confundiam o cliente — não têm valor para ele
e o cálculo não depende deles. Demais alertas (prescrição etc.) mantidos.

## v1.11 — 2026-08-17 — Magistério SEMED: tabelas até 2021 (prescrição quinquenal)

**Arquivo:** `historico/v1.11-magisterio-2021.html`

Resolve o feedback da cliente: o magistério travava o início do retroativo em **05/2023**,
mas a prescrição quinquenal vai até ~2021. Faltavam as tabelas oficiais anteriores.

- **Cadeia rastreada por revogação no SAPL/CMM** (cada lei revoga a anterior):
  PL 506/2026 → Lei 3.516/2025 → Lei 3.342/2024 → **Lei 3.088/2023** (Art. 6 revoga a
  **Lei 2.905/2022**) → **Lei 2.804/2021** (Art. cita/revoga anexo dela).
- **3 vigências novas**, extraídas 1:1 (pdfplumber) e cross-validadas pelos %s:
  - **Lei 2.804/2021** — duas vigências: **01/01/2021** e **01/05/2021 (+8,8962%)**.
  - **Lei 2.905/2022** — **01/05/2022 (+12,47%)**.
  - Encadeamento confere: 1.913,06 (01/2021) → 2.083,25 (05/2021) → 2.343,03 (05/2022)
    → 2.448,47 (05/2023) → … → 2.788,81 (06/2026).
- **Ressalva documentada:** a linha **Padrão 9 do 20h de 05/2021** não é extraível do PDF
  (corta na quebra de página em todas as impressões); foi derivada do **40h oficial da mesma
  vigência ÷ 2** (P1–P8 oficiais 1:1). Afeta só servidores no padrão 9 (24+ anos) com
  retroativo em 2021, com incerteza de ±1 centavo em ~3 células. Método por % foi descartado
  (não reproduzia P1–P8 exatamente).
- **Trava** rebaixada de 05/2023 → **01/2021** (`vigenciaMin`), com mensagem atualizada.
  O motor já escolhe a tabela vigente por competência — agora cobre 01/2021 → hoje.

Fontes em `fontes/leis/`: `lei-2804-2021-magisterio.pdf`, `lei-2905-2022-magisterio.pdf`.

---

## v1.10 — 2026-08-14 — Magistério SEMED: tabelas históricas (retroativo pré-06/2026)

**Arquivo:** `historico/v1.10-magisterio-historico.html`

Resolve o feedback da cliente ("só deixa começar o retroativo em 06/2026"). A trava
existia porque só havia a tabela de 06/2026; retroativo trabalhista vai até 5 anos
atrás (prescrição quinquenal), então travar em 06/2026 inutilizava o cálculo.

- **Tabelas históricas oficiais** do magistério (Padrão 1–9 × Referência A–G, 20h/40h),
  extraídas 1:1 e cross-validadas pelos %s de reajuste:
  - **Lei 3.088/2023** (vig. 01/05/2023, +4,5%)
  - **Lei 3.342/2024** (vig. 01/06/2024, ~+3,69%)
  - **Lei 3.516/2025** (vig. 01/06/2025, +5,48%)
  - **PL 506/2026** (vig. 01/06/2026, +4,14%)
  - Cadeia rastreada por revogação no SAPL/CMM (PL 506 revoga 3.516 → 3.342).
- **Motor vigência-aware:** `calcVencimentoEduc` (SEMED) escolhe a tabela vigente em
  cada competência (como `getValorBase`); a coluna "Lei" do laudo mostra o reajuste
  correto por mês. Auditoria de extração pegou e corrigiu uma corrupção no 40h/2023
  (P2/P3 vinham de outra tabela) antes de entrar no código.
- **Trava** rebaixada de 06/2026 para **05/2023** (menor vigência carregada), com
  mensagem clara. Retroativo de 05/2023 até hoje agora calcula corretamente.
- Pendente (mesma técnica): tabelas históricas de SEMSA e SEMED-administrativo, e
  magistério pré-05/2023 (2021/2022) se algum caso alcançar.

Fontes em `fontes/leis/`: `lei-3088-2023-magisterio.pdf`, `lei-3342-2024-magisterio.pdf`,
`lei-3516-2025-magisterio.pdf`.

---

## v1.9 — 2026-08-13 — SEMSA: refinamentos + `.nojekyll` (destrava Pages)

**Arquivo:** `historico/v1.9-semsa-refino.html`

Fecha 3 pontas da SEMSA e corrige a causa real da "não aparição" na cliente.

- **Deploy destravado:** adicionado **`.nojekyll`** na raiz. O build do GitHub Pages
  falhava desde v1.6 (Jekyll engasgando nos `.md` de `fontes/`) — por isso nada desde
  o magistério (v1.5) chegava ao site. `.nojekyll` faz o Pages servir os arquivos direto.
- **Rótulos de Classe (A–H):** agora com a escolaridade exata da **Lei 1.222/2008,
  Art. 3, XII** (A=fundamental incompleto … H=superior+doutorado). Confirma Auxiliar
  de Serviços = Classe A.
- **Laudo:** as colunas de referência do grid SEMSA passam a exibir **"Padrão N · Cl. X"**
  (antes saía o número solto "6", que parecia letra de referência); 13º/férias ajustados
  para extrair o padrão do rótulo.
- **Gate de deploy (fora do repo, em `~/.claude/auditoria/verificar_deploy.py`):** novo
  verificador que só declara PUBLICADO após o build do Pages concluir com success **e** o
  marcador aparecer no HTML ao vivo. Criado porque a auditoria de conteúdo passava mas a
  entrega estava quebrada no deploy.

---

## v1.8 — 2026-08-13 — Auditoria da v1.7 (SEMSA) + trava de data faltante

Auditoria do grid SEMSA (v1.7). **Dados e mecânica aprovados:** as 144 células
(Classe A–H × Padrão 1–18) conferem **1:1 com o PDF oficial** da Lei 3.665/2026
(0 ausentes); interstício de 24m confirmado na Lei 1.222/2008 (Art. 37/38 —
"a cada dois anos"; o trecho "X padrões para tempo > Y" é enquadramento inicial
de 2008, transitório, não a progressão contínua). Função isolada, `_appendExtras`
usado corretamente, sem regressões, sem erros de JS.

**Correção aplicada — 1 achado:** faltava a **trava de data** no grid SEMSA.
Como o grid usa valores só de 2026 (vig. 01/06/2026, sem histórico), um retroativo
anterior a 06/2026 aplicava valores de 2026 a competências antigas → resultado
inflado silenciosamente (reproduzido: período de 2022 calculava com valores de
2026). Adicionado em `_coletarSEMSA`, para `usaGrid`:
`if (startDate < new Date(2026,5,1)) throw ...` (mensagem citando a Lei 3.665/2026).

> ⚠️ **PADRÃO RECORRENTE (para o outro agente):** esta é a **terceira vez** que um
> grid de tabela única de 2026 sobe **sem a trava de início ≥ 06/2026** — ocorreu
> no SEMED docente (v1.5), no SEMED administrativo (corrigido na v1.6) e agora no
> SEMSA (v1.7). **Regra fixa:** todo grid cujo valor é de uma única vigência
> (sem tabela histórica por data) DEVE bloquear `startDate` anterior à vigência,
> senão o retroativo antigo sai inflado. Incluir essa trava por padrão em qualquer
> nova carreira/grid de valor único.

---

## v1.7 — 2026-08-13 — SEMSA: grid Classe × Padrão (Assistente/Especialista em Saúde)

**Arquivo:** `historico/v1.7-semsa-grid-anexo2.html`

Adiciona à SEMSA o **grid Classe (A–H) × Padrão (1–18)** do Anexo II (Assistente/
Especialista em Saúde), para os cargos **não-Médico** (Nível I/II/III). O Médico
permanece no modelo anterior (tabela própria, fora do escopo desta rodada).

- **Fonte primária verificada (cadeia rastreada no SAPL/CMM):** a tabela vigente é a
  **Lei n.º 3.665, de 11/06/2026** (reajuste **4,14%**, data-base **01/06/2026**), que
  revoga a Lei 3.513/2025, que revogou a 3.339/2024. A base legal/mecânica é a
  **Lei n.º 1.222/2008**. Valores **extraídos 1:1 do PDF oficial** (pdfplumber).
- **Auditoria decisiva:** a tabela que a cliente enviou era o **Anexo II de 2018**
  (P1/Classe A = 907,00) — 8 anos desatualizada. O vigente é **2.673,34** (~2,9×).
  Usar a foto teria subestimado grosseiramente o cálculo.
- **Mecânica (Lei 1.222/2008):** Classe = escolaridade (estática; A–D básico, E–H
  superior; Auxiliar de Serviços = Classe A). Padrão progride por Progressão a cada
  **2 anos / 24m** (Art. 32 §2).
- **Formulário SEMSA:** seletores **Classe**, **Padrão Atual** e **Padrão Ingresso**
  para não-Médico (toggle por nível); campos de referência A1–E2 preservados para o
  Médico. **Motor:** novo `_gerarSEMSAGrid` (valor absoluto do grid; Padrão progride
  24m; Classe estática); Médico segue em `gerarDemonstrativoSEMSA`.

Fontes primárias em `fontes/leis/`: `lei-3665-2026-semsa.pdf`, `lei-1222-2008-semsa.pdf`,
`semsa-1222-3665.md` (dossiê com a tabela vigente completa).

---

## v1.6 — 2026-08-13 — Auditoria completa + reconstrução do SEMED Administrativo

**Arquivo:** `historico/v1.6-auditoria-semed-admin.html`

Rodada de auditoria 100% (motor, tabelas, código, UX) com correções aplicadas e
verificadas, culminando na **reconstrução do SEMED Administrativo** contra a
fonte oficial.

### Auditoria — 13 correções aplicadas e testadas

- **SELIC/data:** data-fim padrão passou a usar hora **local** (não `toISOString`
  UTC) — corrige o bug que rejeitava o cálculo como "data futura" à noite (UTC-4).
- **XSS:** preview ao vivo e log do "Cadastrar" passam por `escHtml`.
- **Marco temporal SEDUC:** `new Date(2019,2,1)` + `>=` — resultado não depende
  mais do fuso do navegador (caso de referência 2001→Ref G/2023 preservado).
- **Datas:** bloqueio de posse/ingresso futuro nas 5 áreas.
- **SEMED docente:** trava de início ≥ 06/2026 (grid oficial não tem histórico);
  coluna "Lei" mostra a fonte real (PL 506/2026) em vez da lei histórica.
- **UX/texto:** painel SEMED e `AREA_CONFIG` corrigidos (mecânica e lei certas);
  `m-ref` com opção "Selecione…"; contraste `--gray-mid` dentro do WCAG AA;
  GAA admin 0% respeitado.
- **Verificados sem alteração:** SELIC 91 meses (1:1 BCB); grid magistério
  **126/126 células 1:1 com o PL 506/2026 oficial** (a "anomalia" P9/RefB é da
  própria norma — Anexos I-A/I-B arredondados independentemente).

### SEMED Administrativo — reconstruído (Lei n.º 1.624/2011)

O modelo anterior estava **estruturalmente errado** (referências A1–L2 ×
multiplicador sobre a tabela do **magistério**, interstício 24m). O correto,
conforme a **Lei n.º 1.624/2011** (PCCR Administrativo da Educação):

- **4 tabelas por cargo/escolaridade** (Anexos I-C a I-F): grid **Padrão (1–13)
  × Classe**. Padrão sobe por **tempo** (interstício **36m**); Classe é fixa
  (titulação). Classes por cargo: I-C A–G, I-D B–G, I-E C–G, I-F D–G.
- **Valores oficiais** do **DOM ed. 6329 (11/06/2026)**, vig. 01/06/2026 (+4,14%).
  Extraídos por reconhecimento das bordas do PDF (`pdfplumber`) e **verificados
  1:1: 126/126 células**, passo de padrão exatamente 5%. Nada estimado.
- **Formulário:** novos campos (cargo/nível → tabela, classe, padrão atual/ingresso),
  toggle e população dinâmica de classes. Trava início ≥ 06/2026.
- **Motor:** `calcVencimentoEduc` ganha ramo de grid administrativo por cargo;
  `calcularProgressoesEduc` usa 36m para SEMED_ADMIN; `refList` = padrões 1–13.

Fontes primárias arquivadas em `fontes/leis/`: `dom6329-semed-2026.pdf`,
`lei-1624-2011.pdf`, `pl506-2026.pdf`, `lei-1126-2007.pdf` e resumos `.md`.

---

## v1.5 — 2026-08-13 — Magistério SEMED: grid Padrão × Referência + jornada

**Arquivo:** `historico/v1.5-magisterio-semed-grid.html`

Reestrutura o **Docente SEMED (Lei n.º 1.126/2007, PCCR Magistério de Manaus)** do
modelo antigo (eixo único A1–D1, valores desatualizados) para a **estrutura oficial**:

- **Grid Padrão (1–9) × Referência (A–G)**, jornadas **20h** (Anexo I-A) e **40h**
  (Anexo I-B), com **valores absolutos** oficiais.
- **Fonte primária verificada:** PL 506/2026 (CMM) — reajuste **4,14%**, vigência
  **01/06/2026**. Transcrição auditada **126/126 células** contra o processo
  legislativo (zero divergência). Auditoria pegou a foto do cliente com
  P1/RefA(20h)=2.788,63; o oficial é **2.788,81** — usado o oficial.
- **Mecânica legal (Lei 1.126/2007):** Referência progride por **Progressão**
  (interstício 3 anos / 36m, Art. 49); **Padrão** evolui por **Promoção**
  (Art. 56, ≥6 anos + título/desempenho) — ato não automático, portanto
  **informado pelo usuário** (estático, como a "classe" do SEDUC), não projetado.
- **Formulário:** novos campos **Padrão Atual** e **Jornada**; referências docente
  passam a A–G. Categoria Administrativo (Lei 1.118/2007) inalterada.
- **Motor:** `calcVencimentoEduc` ganha ramo de grid absoluto por jornada;
  `gerarDemonstrativoEduc`/`_coletarEduc` threadam padrão e jornada.

Dossiê de fontes e base legal em `fontes/leis/magisterio-semed-1126.md`.

---

## v1.4 — 2026-08-13 — Auditoria do Cálculo (laudo PDF) + arquivo de fontes

**Arquivo:** `historico/v1.4-auditoria-calculo.html`

### Botão "🔍 Auditoria do Cálculo"

Novo botão na tela de resultados (ao lado de "Exportar PDF"). Gera um
**laudo autônomo e imprimível** (`gerarAuditoria`) que expõe toda a memória
de cálculo para conferência:

1. **Identificação** — servidor, matrícula, cargo e todos os parâmetros de
   entrada efetivamente usados (classe/nível, localidade, regência, GTS/GAA,
   quinquênios, G.T./GEP conforme a carreira).
2. **Fundamentação legal** — normas da carreira, STJ Tema 1075, EC 113/2021,
   prescrição quinquenal; e a lista das **leis efetivamente incidentes** em
   cada competência (extraídas das linhas do demonstrativo).
3. **Metodologia passo a passo** — como as progressões são contadas
   (interstício e marco temporal por carreira), como o vencimento devido é
   montado, cálculo da diferença, 13º/férias e a **fórmula da correção SELIC**.
4. **Demonstrativo competência a competência** — tabela completa com fator
   SELIC por mês.
5. **Síntese** — totais nominal e corrigido.

Detalhes técnicos:
- O resultado do último cálculo é guardado em `window._ultimoResultado`
  (setado em `renderizarResultados`) e consumido pelo laudo.
- O laudo abre em nova janela como HTML autônomo (CSS embutido) e chama
  `window.print()` — sem dependência de CDN/npm, coerente com GitHub Pages.
- **Correção de bug latente:** a string `</script>` embutida no template do
  laudo foi escapada (`<\/scr…ipt>`); sem isso o parser HTML fecharia o bloco
  de script da própria página. Validado no Chromium (Playwright): página sem
  erros de JS e laudo gerado com escape XSS dos dados do servidor.

### Pasta `fontes/`

Arquivo das bases usadas para construir a plataforma:
- `fontes/README.md` — índice de **todas** as leis e valores-base por carreira,
  com status `verificado` / `referência` e onde cada um é usado.
- `fontes/selic/` — série SELIC oficial do BCB (SGS 4390) em CSV e JSON cru,
  fonte primária da correção.
- `fontes/leis/` — destino dos PDFs das normas (a obter; ver README).

---

## v1.3 — 2026-08-13 — SELIC verificada contra o BCB + acesso público

**Arquivo:** `historico/v1.3-selic-oficial-bcb.html`
**Alterações:** `SELIC_MENSAL` substituída integralmente; comentário-fonte reescrito.

### Correção da tabela SELIC (crítico — afetava valores entregues)

`SELIC_MENSAL` foi conferida 1:1 contra a série oficial do BCB
**SGS 4390 — "Taxa de juros - Selic acumulada no mês (% a.m.)"**, a base da
correção da EC 113/2021.

Resultado da conferência:

- **61 dos 87 meses divergiam** da série oficial. Divergências de até
  **+0,30 p.p./mês** (ex.: 2024-11 estava 0,0109 vs. 0,0079 oficial), que
  compõem no fator acumulado e inflavam/deflavam os totais corrigidos.
- O bloco **2024–2025 estava com valores padronizados** (alternância
  0,0116/0,0112), sem correspondência com a série real — efetivamente
  estimados, não verificados.
- **4 meses faltavam** (2026-04 a 2026-07): a correção parava em março/2026
  e qualquer competência posterior ficava sub-corrigida.

Toda a tabela foi regravada com os valores oficiais e estendida até
**2026-07** (91 meses, 2019-01 → 2026-07). Fonte e data da verificação
ficam no comentário acima da constante. A função `fatorSelicAcumulado`
não mudou: já ignora meses ainda não publicados via `|| 0` (o mês corrente
só entra quando o BCB fecha a série).

**Rotina de manutenção:** a cada mês, acrescentar a competência nova puxando
a série 4390 do BCB (`api.bcb.gov.br/dados/serie/bcdados.sgs.4390/dados?formato=json`).

### Acesso público (decisão registrada)

O gate de autenticação Firebase descrito nas v1.2/v1.2.1 foi **removido** no
commit `91675cc` (2026-07-30). **É intencional:** a ferramenta é usada por
poucas pessoas e roda pública em GitHub Pages, sem login. As camadas de
segurança descritas na v1.2 (domínios autorizados, signup bloqueado, rate
limiting) **não se aplicam mais**. Restou apenas a integração opcional com
Google Apps Script (`salvarSheets`) para persistência em planilha.

---

## v1.2.1 — 2026-06-27 — Bootstrap do administrador

**Arquivo:** `historico/v1.2.1-admin-bootstrap.html`
**Alteração:** UID do primeiro administrador incluído em `ADMIN_UIDS`.

Após v1.2 subir com `ADMIN_UIDS = []`, o administrador entrou pela primeira
vez, criou a senha definitiva e recebeu o UID pela tela de bootstrap.
Este patch registra esse UID no array, habilitando o botão "Admin" no
badge superior e liberando o painel de convite de usuários. A partir daqui
novos advogados são cadastrados diretamente pela interface, sem
intervenção de código.

---

## v1.2 — 2026-06-27 — Sistema de login com Firebase Authentication

**Arquivo:** `historico/v1.2-login-firebase.html`
**Alteração:** novo bloco `<style>` (~110 linhas), HTML do overlay/badge/admin
(~120 linhas) e `<script type="module">` ao final (~280 linhas).

### Por que

A plataforma é hospedada publicamente em GitHub Pages. Sem controle de
acesso, qualquer pessoa com o link usa a ferramenta. Foi adotado um portão
de autenticação para restringir o uso aos advogados autorizados pelo
escritório, sem alterar a arquitetura estática (sem backend, sem build).

### Como funciona

- **SDK:** Firebase v10.13.0 carregado direto via CDN como ES module — não
  exige `npm`/bundler, segue compatível com GitHub Pages.
- **Provedor:** `firebase/auth` apenas. Sem Firestore, sem Hosting, sem
  Functions.
- **Gate:** `onAuthStateChanged` controla um overlay full-screen com
  `z-index: 99999` que cobre todo o conteúdo da calculadora até a sessão
  ser validada.
- **Estados da tela de auth:** `loading` → `login` → `change` (primeiro
  login força criação de senha definitiva) → `bootstrap` (exibe o UID
  para liberação administrativa) → entra na plataforma.
- **Cadastro:** signup público desativado. O administrador convida cada
  usuário pelo painel; o Firebase envia e-mail automático para definição
  de senha. **Nenhuma senha trafega pelo painel ou pelo código.**
- **App secundário:** o convite usa uma segunda instância
  (`initializeApp(firebaseConfig, "AdminInvite")`) para que o
  `createUserWithEmailAndPassword` não deslogue o administrador.
- **Esqueci minha senha:** disponível na tela de login e no painel admin
  para reenvio. Fluxo padrão `sendPasswordResetEmail`.
- **Identificação de admin:** lista hardcoded de UIDs do Firebase (não
  e-mails). UIDs são identificadores opacos — não revelam o nome do
  titular.

### Segurança

| Camada | Onde |
|---|---|
| Domínios autorizados | Firebase Console → Authentication → Configurações → `leonzordhue.github.io` |
| Signup público bloqueado | Apenas o painel admin chama `createUserWithEmailAndPassword` |
| Rate limiting | Nativo do Firebase Auth contra brute-force |
| Senhas nunca expostas | Firebase armazena com hash; o painel gera senha aleatória interna descartável e força reset imediato por e-mail |
| Exclusão de contas | Apenas via Console (não exposta no painel) |

### Bootstrap (primeira execução do admin)

`ADMIN_UIDS` inicia vazio neste deploy. O primeiro acesso do administrador
mostra a tela "bootstrap" com o UID gerado pelo Firebase. Esse UID é
adicionado ao array `ADMIN_UIDS` em commit subsequente, liberando o botão
"Admin" no badge superior.

### Custo

R$ 0/mês no plano Spark (gratuito) — limite de 50.000 autenticações/mês
folgado para o uso do escritório.

---

## v1.1 — 2026-06-25 — Fix marco temporal SEDUC (Lei 4.836/2019)

**Arquivo:** `historico/v1.1-fix-marco-seduc.html`
**Função alterada:** `calcularProgressoesEduc` (linhas ~1896–1908)

### Bug relatado

Identificado em 23/06/2026 por usuária da plataforma (advogada) ao calcular
diferenças salariais de uma servidora docente da SEDUC. Resumo do caso:

> Docente SEDUC, ingresso em 2001. Em março de 2023 já deveria estar
> contando como Ref. G, mas o sistema só promovia a G em março de 2024.

### Diagnóstico

A Lei n.º 3.951/2013 previa interstício de **48 meses (4 anos)** entre
referências do magistério. A Lei n.º 4.836/2019 reduziu para
**36 meses (3 anos)**, com marco temporal em **01/03/2019**.

A lógica anterior verificava o **início** do interstício:

```js
meses = cursor < cfg.marco ? 48 : 36;
```

Isso fazia com que o interstício iniciado em **01/03/2017** (E→F) usasse
ainda 48 meses, projetando F somente em 01/03/2021 e, em cadeia,
G somente em 01/03/2024.

A interpretação correta — confirmada pela tabela oficial enviada pela SEDUC,
em que F começa em 01/03/2020 (3 anos após E) e G em 01/03/2023 — é
que a lei nova **alcança interstícios em curso**: se a progressão sob a regra
antiga recairia após o marco, ela é antecipada para 36 meses.

### Fix aplicado

```js
const proximaSeAntigo = new Date(cursor.getFullYear(),
                                 cursor.getMonth() + cfg.intersticioAntigo, 1);
meses = proximaSeAntigo > cfg.marco ? cfg.intersticioNovo
                                    : cfg.intersticioAntigo;
```

### Validação manual

Caso de referência — docente SEDUC, ingresso 01/03/2001, Ref. A:

| iter | cursor     | meses | próxima    | progCount | ref |
|------|------------|-------|------------|-----------|-----|
| 1    | 01/03/2001 | 48    | 01/03/2005 | 1         | B   |
| 2    | 01/03/2005 | 48    | 01/03/2009 | 2         | C   |
| 3    | 01/03/2009 | 48    | 01/03/2013 | 3         | D   |
| 4    | 01/03/2013 | 48    | 01/03/2017 | 4         | E   |
| 5    | 01/03/2017 | **36**| **01/03/2020** | 5     | **F** |
| 6    | 01/03/2020 | 36    | **01/03/2023** | 6     | **G** |

Bate 1:1 com a tabela oficial SEDUC fornecida.

### Escopo

- Atinge: `SEDUC` (docente), `SEDUC_APOIO_SUPERIOR`, `SEDUC_APOIO_FUNDAMENTAL`.
- Não atinge: SEDUC_ADMIN / SEMED_ADMIN (interstício único 24m, sem marco).
- Não atinge: SEMED, SES, SEMSA, PM, PC (sem marco temporal).

---

## v1.0 — baseline GitHub (clone original)

**Arquivo:** `historico/v1.0-github-original.html`
**Commit base:** clone HEAD de `leonzordhue/calculo-administrativo` em 25/06/2026.
