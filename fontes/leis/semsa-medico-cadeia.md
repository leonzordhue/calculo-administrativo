# SEMSA — Médico (Especialista em Saúde – Médico, Lei 1.223/2008)

Rastreamento e extração para reconstruir a grade do Médico no motor (substituindo
os valores fabricados 6.208→7.779 do modelo single-column A1–E2, que **não
correspondiam a nenhuma tabela oficial**).

## Cadeia legislativa completa (verificada 1:1 no texto de cada lei)

Cada lei é reajuste percentual da anterior e **republica** as Tabelas Financeiras.
Base do Médico: **Lei 1.223/2008** (Grupo II / Anexo II). PDFs arquivados nesta pasta.

| Vigência | Lei | Reajuste | Incide sobre | Nº CMM (id) |
|---|---|---|---|---|
| 2019 → 12/2021 | 2.449/2019 | base do período | 1.223/2008 (alt. 2.449/2019) | — |
| 01/2022 | 2.819/2021 | +10,051% | tabelas de 2.449/2019 | 3? |
| 07/2022 e 11/2022 | 2.931/2022 | +6,73% e +5% | tabelas de 2.819/2021 | 6778 |
| 08/2023 | 3.119/2023 | +4,5% | Grupos III/IV da 2.931/2022 | — |
| 04/2024 | 3.326/2024 | +1,79% | Grupos I/II da 3.119/2023 | 7440 |
| 06/2024 | 3.339/2024 | +1,58% | Grupos I/II da 3.326/2024 | 7461 |
| 06/2025 | 3.513/2025 | +5,48% | Grupos I/II da 3.339/2024 | 8006 |
| 06/2026 | 3.665/2026 | +4,14% | Grupos I/II da 3.513/2025 | 9405 |

Prescrição quinquenal (hoje 17/08/2026) → precisa cobrir a partir de **08/2021**,
que cai na vigência da 2.449/2019 (válida até 12/2021).

## Estrutura da tabela do Médico

Não é single-column. É **grade Padrão (INICIAL, 1–18) × Classe (I, II, III, IV)**,
por categoria: **efetivo 20h**, **clínico geral 40h**, **estratégia saúde da família**,
**prorrogação 24h**, **celetistas**, e grupos por especialidade. Cada Classe é uma
escada própria; as Classes II/III/IV são a mesma escada entrando em padrões mais altos.

## Médico efetivo 20h — Classe I (INICIAL, P1…P18) — VALIDADO 1:1 (2024–2026)

Encadeamento confere ao centavo com os percentuais acima.

- **3.326/2024** (04/2024): 9096.46, 10744.68, 10959.55, 11178.76, 11402.35, 11630.39, 11863.00, 12100.25, 12342.28, 12589.10, 12840.89, 13097.71, 13359.62, 13626.86, 13899.39, 14177.37, 14460.91, 14750.12, 15045.12
- **3.339/2024** (06/2024, +1,58%): 9240.19, 10914.44, 11132.71, 11355.39, 11582.51, 11814.15, 12050.44, 12291.43, 12537.29, 12788.01, 13043.78, 13304.65, 13570.70, 13842.17, 14119.00, 14401.37, 14689.39, 14983.18, 15282.83
- **3.513/2025** (06/2025, +5,48%): 9746.55, 11512.55, 11742.78, 11977.67, 12217.23, 12461.57, 12710.80, 12965.00, 13224.33, 13488.79, 13758.58, 14033.74, 14314.37, 14600.72, 14892.72, 15190.57, 15494.37, 15804.26, 16120.33
- **3.665/2026** (06/2026, +4,14%, VIGENTE): 10150.06, 11989.17, 12228.93, 12473.55, 12723.02, 12977.48, 13237.03, 13501.75, 13771.82, 14047.23, 14328.19, 14614.74, 14906.98, 15205.19, 15509.28, 15819.46, 16135.84, 16458.56, 16787.71

Classes II/III/IV das 4 vigências extraídas 1:1 e monotônicas (validação cruzada:
Classe II começa onde a I está ~4 padrões acima; IV ~ +6).

## PENDÊNCIA (a completar antes de ligar no motor)

- **2019–2023 (2.449, 2.819, 2.931, 3.119)**: os PDFs renderizam **embaralhados**
  no pdftotext (rótulos de classe fora de lugar; colisão de valores com a tabela
  do Assistente — ex.: 9.013,56 aparece nas duas). Precisam de leitura/transcrição
  cuidadosa (pdfplumber por coordenada ou leitura da imagem da página), conferindo
  o encadeamento percentual contra a base 2024.
- Demais categorias (clínico 40h, ESF, 24h, celetista, especialidades): mesmo método.

## Método de extração validado

pdftotext -layout + clusterização das posições-x dos valores em 4 colunas
(robusto a variação de cabeçalho). Script em `semsa_extrair_medico.py`.
Regra de ouro: só entra valor cujo encadeamento percentual fecha com a lei.
