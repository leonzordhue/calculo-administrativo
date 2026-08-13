# Fontes — Cálculo Administrativo LAADV

Arquivo de **todas as bases legais, valores e índices** usados pelo motor de
cálculo (`index.html`). Cada base abaixo está referenciada no código; este
índice registra o que ela rege, o valor que fixa e onde é usada.

**Status:**
- `verificado` — dado obtido de fonte oficial e conferido 1:1 (arquivo local).
- `referência` — número/valor embutido no código; texto integral da norma
  ainda **a obter** (colocar o PDF em `fontes/leis/`).

Atualizado em 2026-08-13.

---

## 1. Correção monetária e teses gerais (todas as carreiras)

| Base | Rege | Status | Arquivo local |
|---|---|---|---|
| **EC 113/2021** | Índice único de correção (SELIC) + juros de mora sobre créditos da Fazenda Pública | referência | `leis/` (a obter) |
| **SELIC — BCB série SGS 4390** ("Taxa de juros - Selic acumulada no mês, % a.m.") | Fator de correção mês a mês (2019-01 → 2026-07, 91 meses) | **verificado** | `selic/selic-bcb-sgs4390.csv` · `...-raw.json` |
| **STJ Tema 1075** | Tese sobre progressão funcional / diferenças remuneratórias | referência | `leis/` (a obter) |
| **Dec. Federal n.º 20.910/1932** | Prescrição quinquenal (créditos > 5 anos podem estar prescritos) | referência | `leis/` (a obter) |

Fonte SELIC (reprodutível):
`https://api.bcb.gov.br/dados/serie/bcdados.sgs.4390/dados?formato=json`

---

## 2. SEDUC/AM — Magistério (rede estadual)

| Base | Rege | Status |
|---|---|---|
| Lei n.º 3.951/2013 | PCCR magistério; interstício **48 meses** entre referências | referência |
| Lei n.º 4.836/2019 | Reduz interstício para **36 meses**; marco temporal **01/03/2019** | referência |
| Regência de classe | Adicional **+25%** sobre o vencimento | referência |

**Reajustes do valor-base (magistério):**

| Vigência | Valor-base | Norma |
|---|---|---|
| 2019-01-01 | 2.320,10 | Lei n.º 3.951/2013 |
| 2020-01-01 | 2.435,73 | Reajuste 4,73% (data-base 2019) |
| 2022-01-01 | 2.659,57 | Lei n.º 5.770/2022 (9,19%) |
| 2023-03-01 | 2.872,34 | Lei n.º 6.261/2023 (8,0%) |
| 2024-05-01 | 2.984,07 | Data-base 2024 (3,89%) |
| 2025-11-01 | 3.058,58 | Lei n.º 7.836/2025 |

---

## 3. SEDUC/AM — Apoio específico (Nível Superior e Fundamental/Médio)

| Base | Rege | Status |
|---|---|---|
| Lei n.º 3.951/2013 (Anexos IV e V) | Tabelas de apoio; mesmas regras de interstício do magistério | referência |
| Lei n.º 4.836/2019 | Interstício 36m + marco 2019 (aplica ao apoio) | referência |
| Lei n.º 5.770/2022 | Reajuste 9,19% | referência |

**Valores-base:** Apoio Superior — 2.023,48 (2019-03) → 2.209,31 (2022-01).
Apoio Fund./Médio — 1.455,14 (2019-03) → 1.588,74 (2022-01).
Multiplicadores de referência A–E: 1,000 / 1,020 / 1,040 / 1,060 / 1,080.

---

## 4. SEDUC/AM — Administrativo

| Base | Rege | Status |
|---|---|---|
| Lei n.º 4.058/2014 | PCCR Administrativo SEDUC; progressão **bienal** (classes A–H) | referência |

---

## 5. SEMED/AM — Rede municipal (magistério)

| Base | Rege | Status |
|---|---|---|
| Lei Municipal n.º 1.126/2007 | PCCR do magistério municipal | referência |
| Lei Municipal n.º 2.871/2022 | Reajuste 12,47% | referência |
| Lei Municipal n.º 3.056/2023 | Reajuste 4,5% | referência |
| Lei Municipal n.º 3.315/2024 | Reajuste 3,66% | referência |
| Data-base 2025 | Reajuste 5,48% | referência |

**Valores-base:** 1.912,45 (2019-01) → 2.404,94 (2022-04) → 2.513,16 (2023-05) → 2.605,14 (2024-05) → 2.650,29 (2025-06).

> ⚠️ **A conferir:** no `legalMap` do código, a carreira `semed` cita
> "Lei Municipal n.º 4.852/2019" — mas a Lei 4.852/2019 também aparece como
> norma da **PMAM** (estadual). Verificar se há troca de referência.

---

## 6. SEMED/AM — Administrativo

| Base | Rege | Status |
|---|---|---|
| Lei Municipal n.º 1.118/2007 | PCCR Administrativo SEMED; progressão **bienal** (A1–L2, 24 níveis) | referência |

---

## 7. SES/AM — Saúde estadual

| Base | Rege | Status |
|---|---|---|
| Lei n.º 3.469/2009 | PCCR SES/AM; progressão **bienal** (interstício 24 meses) | referência |
| Lei n.º 5.771/2022 | Reajuste 11,0% + complemento 3,77% | referência |
| Lei n.º 908/2023 | Data-base 2023 (4,18%) | referência |
| Lei n.º 7.812/2025 | Reajuste 6,13% | referência |

**Verbas:** GTS, GAA e Quinquênios (5% cada).
**Valores-base:** 4.931,52 (2019) → 6.526,36 (2025-10).

---

## 8. SEMSA — Saúde municipal (Manaus)

| Base | Rege | Status |
|---|---|---|
| Lei n.º 1.222/2008 | PCCR SEMSA/Manaus; progressão bienal | referência |
| Lei Municipal n.º 2.871/2022 | Reajuste 12,47% | referência |
| Lei Municipal n.º 3.056/2023 | Reajuste 4,5% | referência |
| Lei Municipal n.º 3.315/2024 | Reajuste 3,66% | referência |

**Valores-base:** 6.208,65 (2019) → 7.779,44 (2025-06).

---

## 9. PMAM — Polícia Militar

| Base | Rege | Status |
|---|---|---|
| Lei n.º 3.725/2012 | Estrutura de carreira PMAM | referência |
| Lei n.º 4.618/2018 | Reestruturação | referência |
| Lei n.º 4.852/2019 | Reajuste +5% | referência |
| Lei n.º 5.771/2022 | Reajuste 11,0% | referência |
| Lei n.º 7.812/2025 | Reajuste 6,13% | referência |

**Adicional:** G.T. (gratificação).
**Valores-base:** 11.500,00 (2016) → 18.488,65 (2025-10).

---

## 10. PCAM — Polícia Civil

| Base | Rege | Status |
|---|---|---|
| Lei n.º 2.875/2004 | Estrutura anterior PCAM | referência |
| Lei n.º 4.059/2014 | PCCR PCAM | referência |
| Lei n.º 5.771/2022 | Reajuste 11,0% | referência |
| Lei n.º 7.812/2025 | Reajuste 6,13% | referência |

**Adicional:** GEP (+100%).
**Valores-base:** 16.000,00 (2019-05) → 20.401,24 (2025-10).

---

## Pendências de verificação (gate DMOB — valores nunca genéricos)

1. Obter os PDFs das leis marcadas `referência` e colocá-los em `fontes/leis/`
   (nomear `lei-NNNN-AAAA.pdf`).
2. Conferir cada **valor-base** e **percentual de reajuste** contra o texto
   oficial da norma (hoje estão embutidos no código sem PDF de lastro).
3. Resolver a divergência da Lei 4.852/2019 (SEMED × PMAM) no item 5.
