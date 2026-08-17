import re,subprocess,os,unicodedata
def asc(s): return ''.join(c for c in unicodedata.normalize('NFKD',s) if ord(c)<128)
def layout(pdf):
    return subprocess.run(['pdftotext','-layout',pdf,'-'],capture_output=True,text=True,encoding='utf-8',errors='replace').stdout

def region(txt,jornada):
    lines=txt.split('\n'); A=[asc(l).upper() for l in lines]
    JORN='VINTE HORAS' if jornada=='20' else 'QUARENTA HORAS'
    # início: header de classes com contexto médico+efetivo+jornada acima
    start=None
    for j in range(len(lines)):
        if 'CLASSE' in A[j] or (re.search(r'\bI\b',lines[j]) and 'IV' in lines[j]):
            ctx=' '.join(A[max(0,j-14):j+1])
            if 'EFETIVO' in ctx and JORN in ctx and 'DICO' in ctx:
                start=j;break
    if start is None: return None
    # fim: próxima seção
    end=len(lines)
    for k in range(start+1,len(lines)):
        if any(t in A[k] for t in ['GRUPO','ESTRAT','CLINIC','PRORROG','CELETIS','SUBSIDIO DOS','TABELA FINANCEIRA 2','TABELA 1','TABELA 2']) and k>start+3:
            end=k;break
    return lines[start:end]

def extrai(reg):
    # coleta (x, valor) de todas as linhas de dados; clusteriza x em até 4 colunas
    pts=[]
    for l in reg:
        for vm in re.finditer(r'\d{1,3}(?:\.\d{3})*,\d{2}', l):
            pts.append((vm.start(), float(vm.group().replace('.','').replace(',','.')), l))
    if not pts: return None
    xs=sorted(set(p[0] for p in pts))
    # clusteriza por gaps > 6
    cols=[]; cur=[xs[0]]
    for x in xs[1:]:
        if x-cur[-1]<=6: cur.append(x)
        else: cols.append(cur); cur=[x]
    cols.append(cur)
    centers=[sum(c)/len(c) for c in cols]
    # bounds
    bounds=[]
    for i,ce in enumerate(centers):
        lo=-1 if i==0 else (centers[i-1]+ce)/2
        hi=1e9 if i==len(centers)-1 else (centers[i+1]+ce)/2
        bounds.append((lo,hi))
    lad=[[] for _ in centers]
    for x,v,l in pts:
        for i,(lo,hi) in enumerate(bounds):
            if lo<=x<hi: lad[i].append(v);break
    return lad,centers

leis=[('2449','2019'),('2819','2021'),('2931','2022'),('3119','2023'),('3326','2024'),('3339','2024'),('3513','2025'),('3665','2026')]
for num,ano in leis:
    pdf=f"lei-{num}-{ano}-semsa.pdf"
    if not os.path.exists(pdf): continue
    reg=region(layout(pdf),'20')
    if not reg: print(f"{num}/{ano}: regiao 20h nao achada");continue
    r=extrai(reg)
    if not r: print(f"{num}/{ano}: sem valores");continue
    lad,centers=r
    desc=" | ".join(f"col{i}({len(c)}v ini={c[0] if c else '-'})" for i,c in enumerate(lad))
    print(f"{num}/{ano} 20h: {len(lad)}cols :: {desc}")
