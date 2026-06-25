# Histórico de versões — Cálculo Administrativo LAADV

Pasta de trabalho local sincronizada com o repositório
[`leonzordhue/calculo-administrativo`](https://github.com/leonzordhue/calculo-administrativo).
Cada versão estável é arquivada em `historico/` como cópia integral do `index.html`.

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
