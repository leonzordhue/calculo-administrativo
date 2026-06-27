# Histórico de versões — Cálculo Administrativo LAADV

Pasta de trabalho local sincronizada com o repositório
[`leonzordhue/calculo-administrativo`](https://github.com/leonzordhue/calculo-administrativo).
Cada versão estável é arquivada em `historico/` como cópia integral do `index.html`.

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
