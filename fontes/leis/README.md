# fontes/leis — textos integrais das normas

Coloque aqui os PDFs / textos oficiais das leis catalogadas em `../README.md`.

Convenção de nome: `lei-NNNN-AAAA.pdf` (estadual) ou
`lei-mun-NNNN-AAAA.pdf` (municipal). Ex.: `lei-4836-2019.pdf`,
`lei-mun-1118-2007.pdf`, `ec-113-2021.pdf`, `stj-tema-1075.pdf`.

Enquanto o PDF não estiver aqui, a base fica com status `referência` no índice
(número embutido no código, sem lastro documental local).

## Fontes oficiais já arquivadas (verificadas)

- `pl506-2026.pdf` + `pl506-2026.md` — **PL 506/2026 (CMM)**, reajuste 4,14% do
  magistério SEMED, vig. 01/06/2026. Fonte: SAPL/CMM. **Grid Padrão×Referência
  (20h/40h) do código verificado 1:1 contra este PDF em 2026-08-13: 126/126
  células conferem.** Os Anexos I-A e I-B são arredondados independentemente
  (o 20h nem sempre é metade exata do 40h — ex.: P9/RefB) — comportamento da
  norma, não erro.
- `lei-1126-2007.pdf` — **Lei n.º 1.126/2007**, PCCS do Magistério SEMED
  (mecânica de progressão: referência 36m / padrão por promoção).

## SEMED Administrativo — RESOLVIDO (v1.6)

Diagnóstico do A4: o `SEMED_ADMIN` usava a tabela do **magistério** (1.126/2007)
× multiplicador A1–L2 × 24m — estruturalmente errado. Reconstruído com a fonte
oficial: **Lei n.º 1.624/2011** + tabela vigente do **DOM 6329 (11/06/2026)**,
grid Padrão(1–13, 36m) × Classe por cargo (Anexos I-C a I-F), verificado 1:1
(126/126 células). Ver `semed-administrativo-dom6329.md` e `dom6329-semed-2026.pdf`.

> Nota: a antiga `TABELAS_SALARIAIS.SEMED` (valores 2019–2025) permanece no
> código apenas como fallback do magistério docente (guarda de nulo/rótulo) e
> **não alimenta mais nenhum cálculo** — o docente usa o grid PL 506/2026 e o
> administrativo usa o grid Lei 1.624/2011. Pode ser removida numa limpeza futura.
