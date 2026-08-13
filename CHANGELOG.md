# Histórico de versões — Cálculo Administrativo LAADV

Pasta de trabalho local sincronizada com o repositório
[`leonzordhue/calculo-administrativo`](https://github.com/leonzordhue/calculo-administrativo).
Cada versão estável é arquivada em `historico/` como cópia integral do `index.html`.

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
