# SEMED Administrativo — estrutura e tabela oficial vigente

**Fonte primária:** Diário Oficial de Manaus (DOM), Edição 6329, 11/06/2026,
p. 4 — Anexo I, "Tabelas de Vencimentos, vigência a partir de 01/06/2026 (4,14%)".
PDF arquivado: `dom6329-semed-2026.pdf`. Base legal: Lei n.º 1.624/2011
(PCCR Administrativo da Educação), alterada pela Lei n.º 1.737/2013.

## Mecânica oficial (Lei 1.624/2011, verificada)

- **Padrão** (vertical): progride por **tempo de serviço**, interstício de
  **36 meses** (Art. 49/56). Faixas: (1) 0–3 anos, (2) 3–6, (3) 6–9, (4) 9–12,
  (5) 12–15, (6) 15–18, (7) 18–21, (8) 21–24, (9) 24–27, (10) 27–30,
  (11) 30–33, (12) 33–36, (13) 36–39. → **13 padrões**.
- **Classe** (horizontal): por **escolaridade/titulação** (A–G), promoção.
- Tabela Financeira = grid **Padrão × Classe**, valores absolutos.

> O código atual (`REGRAS.SEMED_ADMIN`) está estruturalmente errado: usa
> referências A1–L2 × base×multiplicador da tabela do **magistério** (1.126/2007)
> e interstício de **24m**. O correto são as 4 tabelas abaixo, Padrão×Classe,
> interstício **36m**, valores próprios do administrativo.

## As 4 tabelas oficiais (por cargo/escolaridade)

Valores absolutos (R$), vigência 01/06/2026. Padrão nas linhas (1–13), Classe nas colunas.

### Anexo I-C — Nível Fundamental Incompleto (quadro suplementar)
Cargos: Auxiliar de Serviços Gerais, Bombeiro Hidráulico, Marceneiro, Motorista de Autos, Pedreiro, Pintor, Vigia. **Classes A–G.**
Cantos: P1 = A 2.760,01 … G 8.241,33 | P13 = A 4.956,57 … G 14.800,25.

### Anexo I-D — Nível Fundamental Completo / Auxiliar Municipal
Cargos: Auxiliar Municipal, Digitador, Telefonista. **Classes B–G.**
Cantos: P1 = B 3.312,01 … G 8.241,33 | P13 = B 5.947,89 … G 14.800,25.

### Anexo I-E — Nível Médio / Técnico Municipal
Cargos: Desenhista, Técnico Agrícola, Técnico em Contabilidade, Técnico em Edificações. **Classes C–G.**
Cantos: P1 = C 4.102,37 … G 8.506,68 | P13 = C 7.367,28 … G 15.276,77.

### Anexo I-F — Analista Municipal (nível superior)
**Classes D–G.**
Cantos: P1 = D 5.520,01 … G 9.538,58 | P13 = D 9.913,14 … G 17.129,91.

> Valores completos (13×N células por tabela) no PDF arquivado. Transcrever
> célula a célula na implementação, conferindo contra o PDF (não estimar).

## Reajustes recentes (para histórico, se necessário)
- 4,14% — vig. 01/06/2026 (DOM 6329 / PL 506/2026)
- 5,48% — data-base 2024/2025
- 4,5% — Lei n.º 3.088/2023
- 12,47% — 2022
- Lei n.º 2.804/2021, Lei n.º 3.516/2025 (revogada em parte pela de 2026)
