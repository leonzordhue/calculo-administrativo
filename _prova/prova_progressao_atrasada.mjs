/* Caso Esther (24/09/2026): retroativo de 49 meses devolvia 9.
   Causa: o motor presumia que as progressoes ate a referencia do contracheque
   sairam na data legal, zerando todo mes anterior ao ultimo degrau.
   Prova: com a data da concessao informada, os meses voltam. */
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(W,'index.html'),'utf8');
const ini = html.indexOf('<script>');
const motor = html.slice(html.indexOf('>',ini)+1, html.indexOf('</'+'script>', ini));
const ctx = { console, Date, Math, JSON, parseFloat, parseInt, isNaN, Number, String, Array, Object, RegExp, Intl };
ctx.window = ctx; ctx.globalThis = ctx;
ctx.document = { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
                 addEventListener: () => {}, createElement: () => ({ style:{}, classList:{add(){},remove(){}} }) };
ctx.localStorage = { getItem: () => null, setItem(){}, removeItem(){} };
ctx.fetch = () => Promise.reject(new Error('sem rede'));
vm.createContext(ctx);
vm.runInContext(motor, ctx, { filename: 'motor.js' });
const d = s => { const [a,b,c] = s.split('-').map(Number); return new Date(a, b-1, c); };

const base = { area:'seduc', nome:'T', matricula:'0', cargo:'PROFESSOR', classe:'3ª',
               posseDate:d('2015-02-15'), startDate:d('2021-02-15'), endDate:d('2025-12-15'),
               incluirExtras:false, municipio:'Manaus', pctLocalidade:0,
               incluirRegencia:true, categoria:'docente' };
const roda = o => ctx.gerarDemonstrativoEduc({ ...base, ...o });
const prim = r => (r.rows.find(x=>x.tipo==='normal')||{}).competencia || '-';

let falhas = [];
const eq = (rot, got, esp) => { const ok = got === esp;
  console.log(`  ${ok?'ok  ':'FALHA'} ${rot}: ${got}${ok?'':' (esperado '+esp+')'}`);
  if (!ok) falhas.push(rot); };

console.log('1) contracheque C, sem data da concessao — comportamento antigo, preservado');
{ const r = roda({ refInicial:'A', refAtual:'C' });
  eq('meses analisados', r.nMeses, 11);
  eq('1a competencia', prim(r), 'FEV/2025');
  eq('avisa os meses zerados', r.alertaMesesZerados, true);
  eq('quantos meses zerados', r.mesesDescartados, 48); }

console.log('\n2) contracheque C concedido so em 10/2025 (atraso real) — o que a cliente espera');
{ const r = roda({ refInicial:'A', refAtual:'C', refAtualDesde:d('2025-10-01') });
  eq('meses analisados', r.nMeses, 59);
  eq('1a competencia', prim(r), 'FEV/2021');
  eq('nao avisa (data informada)', r.alertaMesesZerados, false); }

console.log('\n3) contracheque C concedido em 02/2022 — modelo literal de dois degraus');
// Com a data informada o motor para de adivinhar: paga refInicial ate a concessao e
// refAtual depois. Entao FEV/2021..JAN/2022 tem devida B contra A pago (12 meses, que
// sao devidos mesmo) e FEV/2025..DEZ/2025 tem devida D contra C pago (11 meses).
// LIMITE conhecido: so dois degraus sao representaveis. Servidor que recebeu A->B->C em
// datas diferentes, todas em dia, nao tem como ser descrito aqui; nesse caso a data fica
// em branco e vale a presuncao antiga.
{ const r = roda({ refInicial:'A', refAtual:'C', refAtualDesde:d('2022-02-01') });
  eq('meses analisados', r.nMeses, 23);
  eq('1a competencia', prim(r), 'FEV/2021'); }

console.log('\n4) contracheque igual ao ingresso (A) — nada muda, nunca houve concessao');
{ const r = roda({ refInicial:'A', refAtual:'A' });
  eq('meses analisados', r.nMeses, 59);
  eq('1a competencia', prim(r), 'FEV/2021');
  eq('nao avisa', r.alertaMesesZerados, false); }

console.log('\n5) o total cresce quando os meses voltam, e a devida final nao muda');
{ const a = roda({ refInicial:'A', refAtual:'C' });
  const b = roda({ refInicial:'A', refAtual:'C', refAtualDesde:d('2025-10-01') });
  eq('devida final igual', a.refDevida === b.refDevida, true);
  eq('total maior com a data', b.totalDiff > a.totalDiff, true);
  console.log(`       antigo R$ ${a.totalDiff.toFixed(2)}  ->  com a data R$ ${b.totalDiff.toFixed(2)}`); }

console.log(falhas.length ? `\nFALHOU: ${falhas.join(' | ')}` : '\nTUDO OK');
process.exit(falhas.length ? 1 : 0);
