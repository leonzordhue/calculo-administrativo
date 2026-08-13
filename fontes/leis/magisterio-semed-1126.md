# Dossiê verificado — Magistério SEMED/Manaus (implementação calculadora)

Fontes primárias:
- Lei n.º 1.126/2007 (PCCS Magistério Manaus) — texto SAPL/CMM (pdftotext, legível).
- PL 506/2026 (CMM) — reajuste 4,14%, vigência 01/06/2026, tabelas Anexo I-A/I-B.

## Base legal da progressão (Lei 1.126/2007, com alterações)

- **Referência** (Art. 3, XI): letras horizontais (A–G). Evolui por Progressão ou Progressão por Titularidade.
- **Padrão** (Art. 3, XII): algarismos verticais (1–9). Evolui por Promoção.
- **Progressão** (Art. 3 XV-a; Art. 49): +1 referência, no mesmo padrão. Interstício **3 anos** de efetivo exercício na referência + média ≥75% nas 3 últimas avaliações. → **referência = 36 meses**.
- **Progressão por Titularidade** (Art. 3 XV-b; Art. 51–53): +referência(s) por conclusão de curso (graduação/pós). **Independe de interstício** (Art. 53). Máx. 1/ano ou 24 meses entre uma e outra (Art. 54).
- **Promoção** (Art. 3 XV-c; Art. 56): +1 padrão, na mesma referência. Interstício **mínimo 6 anos** no padrão. → **padrão = 72 meses**.
- **Art. 46**: progressão precede promoção; vedado progressão E promoção no mesmo ano.
- **§5º (redação Lei 1.202/2007)**: ao chegar à última referência do padrão, passa ao padrão seguinte, atribuídas as referências restantes. (acoplamento de overflow)
- Investidura: referência e padrão iniciais da tabela (Art. 28 §1).

## Reajuste vigente
- 4,14% (PL 506/2026), vigência **01/06/2026**. Base: inflação abr/2025–mar/2026.

## Anexo I-A — 20 HORAS (linha=Padrão, coluna=Referência A..G) — OFICIAL
| Padrão | A | B | C | D | E | F | G |
|--|--|--|--|--|--|--|--|
| 1 | 2.788,81 | 2.854,88 | 2.940,53 | 3.028,74 | 3.119,60 | 3.213,19 | 3.309,56 |
| 2 | 3.408,87 | 3.511,15 | 3.616,48 | 3.724,94 | 3.836,74 | 3.951,81 | 4.070,35 |
| 3 | 4.192,50 | 4.318,27 | 4.447,80 | 4.581,26 | 4.718,68 | 4.860,26 | 5.006,05 |
| 4 | 5.156,23 | 5.310,96 | 5.470,26 | 5.634,35 | 5.803,40 | 5.977,51 | 6.156,81 |
| 5 | 6.341,55 | 6.531,82 | 6.727,71 | 6.929,56 | 7.137,49 | 7.351,58 | 7.572,12 |
| 6 | 7.799,28 | 8.033,25 | 8.274,25 | 8.522,45 | 8.778,12 | 9.041,50 | 9.312,78 |
| 7 | 9.592,12 | 9.879,89 | 10.176,28 | 10.481,56 | 10.796,03 | 11.119,89 | 11.453,50 |
| 8 | 11.797,11 | 12.150,98 | 12.515,52 | 12.891,01 | 13.277,71 | 13.676,07 | 14.086,36 |
| 9 | 14.508,95 | 14.944,21 | 15.392,51 | 15.854,31 | 16.329,96 | 16.819,84 | 17.324,47 |

## Anexo I-B — 40 HORAS — OFICIAL
| Padrão | A | B | C | D | E | F | G |
|--|--|--|--|--|--|--|--|
| 1 | 5.577,63 | 5.709,76 | 5.881,08 | 6.057,49 | 6.239,21 | 6.426,34 | 6.619,13 |
| 2 | 6.817,75 | 7.022,29 | 7.232,96 | 7.449,90 | 7.673,51 | 7.903,63 | 8.140,69 |
| 3 | 8.385,01 | 8.636,53 | 8.895,59 | 9.162,51 | 9.437,34 | 9.720,52 | 10.012,10 |
| 4 | 10.312,45 | 10.621,91 | 10.940,54 | 11.268,69 | 11.606,78 | 11.955,04 | 12.313,60 |
| 5 | 12.683,06 | 13.063,62 | 13.455,41 | 13.859,12 | 14.274,97 | 14.703,18 | 15.144,23 |
| 6 | 15.598,56 | 16.066,50 | 16.548,52 | 17.044,91 | 17.556,25 | 18.082,99 | 18.625,54 |
| 7 | 19.184,20 | 19.759,77 | 20.352,56 | 20.963,14 | 21.592,04 | 22.239,80 | 22.907,01 |
| 8 | 23.594,22 | 24.301,98 | 25.031,07 | 25.782,02 | 26.555,41 | 27.352,15 | 28.172,74 |
| 9 | 29.017,93 | 29.887,89 | 30.785,00 | 31.708,62 | 32.659,94 | 33.639,70 | 34.648,95 |

Nota de auditoria: foto do cliente trazia Padrão1/RefA (20h)=2.788,63; oficial=2.788,81 (metade exata do 40h 5.577,63). Usar oficial.
