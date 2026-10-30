const SITE=[
 {k:'inicio',t:'Visão geral',f:'index.html'},
 {k:'manual',t:'Manual',f:'manual.html',sub:[
  {k:'logo',t:'Logo',f:'manual-logo.html'},
  {k:'cor',t:'Cor',f:'manual-cor.html'},
  {k:'letra',t:'Letra',f:'manual-letra.html'},
  {k:'elementos',t:'Elementos',f:'manual-elementos.html',sub:[
   {k:'formas',t:'Formas e abstratos',f:'elementos-formas.html'},
   {k:'desenhos',t:'Desenhos de objetos',f:'elementos-desenhos.html'},
   {k:'rabiscos',t:'Rabiscos e destaques',f:'elementos-rabiscos.html'},
   {k:'alfabeto',t:'Alfabeto',f:'elementos-alfabeto.html'},
   {k:'molduras',t:'Molduras e recortes',f:'elementos-molduras.html'},
   {k:'papel-fita',t:'Papel e fita',f:'elementos-papel-fita.html'},
   {k:'fundos',t:'Fundos de post',f:'elementos-fundos.html'},
   {k:'padroes',t:'Padrões e texturas',f:'elementos-padroes.html'}]},
  {k:'foto',t:'Foto',f:'manual-foto.html'},
  {k:'voz',t:'Voz',f:'manual-voz.html'},
  {k:'layout',t:'Layout',f:'manual-layout.html'},
  {k:'regras',t:'Regras',f:'manual-regras.html'}]},
 {k:'oficina',t:'Oficina',f:'oficina.html',sub:[{k:'kit',t:'Kit de Natal',f:'oficina-kit.html'},{k:'feed',t:'Post de feed',f:'oficina-feed.html'},{k:'stories',t:'Stories e capas',f:'oficina-stories.html'},{k:'colagem',t:'Receitas de colagem',f:'oficina-colagem.html'},{k:'familias',t:'Famílias de layout',f:'oficina-familias.html'},{k:'gerar',t:'Como gerar',f:'oficina-gerar.html'}]},
 {k:'tokens',t:'Tokens e arquivos',f:'tokens.html'}
];
const PAL=Object.entries(TOKENS.cor).map(([k,c])=>[c.nome,c.hex,'--'+k]);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function chrome(){
  const b=document.getElementById('pg').dataset,n1=SITE.find(x=>x.k===b.nav)||SITE[0];
  const n2=(n1.sub||[]).find(x=>x.k===b.sub);
  const link=(x,cur)=>`<a href="${x.f}"${cur?' aria-current="page"':''}>${esc(x.t)}</a>`;
  let h=`<header class="top"><div class="brand"><div class="lg"></div><div><b>A Trama do Rio</b><small>Marca</small></div></div><nav class="n1" aria-label="Áreas">${SITE.map(x=>link(x,x.k===n1.k)).join('')}</nav>`;
  if(n1.sub)h+=`<nav class="n2" aria-label="Manual">${n1.sub.map(x=>link(x,x.k===b.sub)).join('')}</nav>`;
  if(n2&&n2.sub)h+=`<nav class="n3" aria-label="Elementos">${n2.sub.map(x=>link(x,x.k===b.sub2)).join('')}</nav>`;
  h+='</header>';
  document.getElementById('chrome').innerHTML=h;
  document.getElementById('foot').innerHTML='<footer>Esqueleto do site da marca. Conteúdo de exemplo em partes; o que está tracejado ainda vai ser escrito.</footer>';
}

function copy(txt,btn){const done=()=>{const o=btn.textContent;btn.textContent='Copiado';setTimeout(()=>btn.textContent=o,1200)};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done,()=>{window.prompt&&0});else{done()}}

function initTokens(){
  document.getElementById('pal').innerHTML=PAL.map(([n,h,v])=>{const dark=['--vinho','--noite','--cereja'].includes(v);
    return `<div class="pc" style="background:var(${v});color:${dark?'var(--creme)':'var(--noite)'}"><b>${n}</b><code>${h}</code><code>${v}</code><button data-c="${h}">Copiar hex</button></div>`}).join('');
  document.querySelectorAll('#pal button').forEach(b=>b.onclick=()=>copy(b.dataset.c,b));
}

async function initCatalog(slug){
  const root=document.getElementById('cat');
  let data=[];try{const r=await fetch('data/'+slug+'.json');if(r.ok)data=await r.json()}catch(e){}
  if(!data.length){root.innerHTML='<div class="empty"><img src="ob/objeto-gato-vinho-dormindo-colorido.webp" alt="" style="width:130px;height:auto;display:block;margin:0 auto 12px"><b>Ainda dormindo: nenhum arquivo nesta área.</b><br>Quando os arquivos chegarem, eles aparecem aqui em grupos, com busca e filtro.</div>';return}
  const fams=[...new Set(data.map(e=>e.familia))];
  root.innerHTML=`<div class="tools"><input type="search" id="q" placeholder="Buscar pelo nome ou tag" aria-label="Buscar"></div>
  ${data.some(e=>e.tipo==='svg')?'<div class="tools"><span class="lab">Pintar os SVG:</span><div class="sw" id="sw"></div></div>':''}
  <div class="count" id="count" aria-live="polite"></div><div id="fams"></div><div id="sen" style="height:1px"></div>`;
  const famsEl=document.getElementById('fams'),cnt=document.getElementById('count'),q=document.getElementById('q'),sw=document.getElementById('sw');
  let cor=null,vis=[],next=0;
  const tile=e=>{const t=document.createElement('div');t.className='tile';
    if(e.tipo==='svg'){const i=document.createElement('i');i.style.setProperty('--u',`url('${e.arquivo}')`);if(cor)i.style.setProperty('--c',cor);t.appendChild(i)}
    else{const im=document.createElement('img');im.src=e.arquivo;im.alt=e.nome;im.loading='lazy';t.appendChild(im)}
    const s=document.createElement('span');s.textContent=e.nome;s.title=e.nome;t.appendChild(s);return t};
  const addFam=f=>{const items=vis.filter(e=>e.familia===f);if(!items.length)return;
    const s=document.createElement('section');s.className='fam';
    s.innerHTML=`<h2>${esc(f)} <span class="tag">${items.length}</span></h2><p class="uso">${esc((items[0].uso)||'Texto de uso ainda a escrever: para que serve e o que não fazer.')}</p><div class="tiles${root.dataset.largo?' largo':''}"></div>`;
    const g=s.querySelector('.tiles');items.forEach(e=>g.appendChild(tile(e)));famsEl.appendChild(s)};
  const more=()=>{const fl=[...new Set(vis.map(e=>e.familia))];if(next<fl.length){addFam(fl[next]);next++;cnt.textContent='Mostrando '+famsEl.querySelectorAll('.tile').length+' de '+vis.length}};
  const apply=()=>{const t=q.value.trim().toLowerCase();vis=data.filter(e=>!t||(e.nome+' '+(e.tags||[]).join(' ')+' '+e.familia).toLowerCase().includes(t));famsEl.innerHTML='';next=0;
    if(!vis.length){cnt.textContent='Nada encontrado para essa busca.';return}more();fill();};
  if(sw){PAL.filter(p=>!['Creme','Branquinho','Papel'].includes(p[0])).forEach(([n,h])=>{const b=document.createElement('button');b.style.background=h;b.title=n;b.setAttribute('aria-label','Pintar de '+n);b.setAttribute('aria-pressed','false');b.onclick=()=>{cor=cor===h?null:h;[...sw.querySelectorAll('button')].forEach(x=>x.setAttribute('aria-pressed',String(x.title===n&&cor===h)));famsEl.innerHTML='';next=0;more();fill()};sw.appendChild(b)});
    const r=document.createElement('button');r.className='reset';r.textContent='Cor original';r.onclick=()=>{cor=null;[...sw.querySelectorAll('button')].forEach(x=>x.setAttribute('aria-pressed','false'));famsEl.innerHTML='';next=0;more();fill()};sw.appendChild(r)}
  q.oninput=apply;
  const fill=()=>{let g=0;while(next<new Set(vis.map(e=>e.familia)).size&&document.getElementById('sen').getBoundingClientRect().top<innerHeight+400&&g++<30)more()};
  new IntersectionObserver(es=>{if(es[0].isIntersecting)fill()},{rootMargin:'400px'}).observe(document.getElementById('sen'));
  apply();
}

const COR=Object.fromEntries(Object.entries(TOKENS.cor).map(([k,c])=>[k,c.hex]));
const NOME=Object.fromEntries(Object.entries(TOKENS.cor).map(([k,c])=>[k,c.nome.toLowerCase()]));
const V=k=>'var(--'+k+')';
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255).map(v=>v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4));return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const crt=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const COMBOS=[['chiclete','algodao'],['vinho','creme'],['vinho','chiclete'],['vinho','goiaba'],['lima','vinho'],['cereja','creme'],['noite','goiaba'],['vinho','pessego'],['vinho','lima'],['vinho','pervinca'],['creme','cereja'],['algodao','cereja'],['algodao','vinho'],['pessego','vinho'],['pervinca','noite'],['chiclete','noite'],['goiaba','noite'],['branquinho','vinho']];
function initLogo(){
  const el=document.getElementById('combos');if(!el)return;
  const mk=([l,b])=>{const r=crt(COR[l],COR[b]);const tag=r>=4.5?'forte':r>=3?'só logo grande':'decisão de marca';
    return '<div class="cb" style="background:'+V(b)+'"><i class="lgm" style="--c:'+V(l)+'"></i><div class="cap"><span>'+NOME[l]+' sobre '+NOME[b]+'</span><em>'+r.toFixed(1).replace('.',',')+' · '+tag+'</em></div></div>'};
  el.innerHTML=COMBOS.slice(0,6).map(mk).join('');
  const e2=document.getElementById('combos2');if(e2)e2.innerHTML=COMBOS.slice(6).map(mk).join('');
}

const PARES=[['vinho','creme'],['vinho','algodao'],['noite','chiclete'],['vinho','pessego'],['vinho','lima'],['cereja','creme'],['creme','cereja'],['lima','vinho'],['chiclete','noite'],['creme','goiaba']];
function initCor(){
  const el=document.getElementById('pairs');if(!el)return;
  el.innerHTML=PARES.map(([f,b])=>{const r=crt(COR[f],COR[b]);const uso=r>=4.5?'qualquer tamanho':r>=3?'título e detalhe':'só título grande';
    return '<div class="pair" style="background:'+V(b)+';color:'+V(f)+'"><span class="aa">Aa</span><small>'+NOME[f]+(['goiaba','cereja','lima','pervinca'].includes(b)?' na ':' no ')+NOME[b]+'<br><b>'+r.toFixed(1).replace('.',',')+':1 · '+uso+'</b></small></div>'}).join('');
}

function tear(el){const n=26,pts=['0 0','100% 0'];for(let i=n;i>=0;i--){const r=Math.abs(Math.sin((i+3)*12.9898)*43758.5453)%1;pts.push((i/n*100).toFixed(1)+'% '+(100-r*5).toFixed(1)+'%')}el.style.clipPath='polygon('+pts.join(',')+')'}

const ADESIVOS={manual:['o','livros-pilha'],'manual.logo':['o','laco-rosa'],'manual.cor':['o','tigela-laranjas'],'manual.letra':['o','bloco-notas-fita'],'manual.regras':['r','check','--chiclete'],'manual.foto':['o','oculos-gatinho'],'manual.voz':['r','carinha-4','--chiclete'],'manual.layout':['o','poltrona-rosa'],'manual.elementos':['o','caderno-verde-flor'],oficina:['o','xicara-pires'],tokens:['o','luminaria-azul']};
const FAIXA=[['o','xicara-pires',58],['r','estrela-3',34],['o','livros-pilha',56],['r','brilho-1',38],['o','oculos-sol',60],['r','bolinhas-8',30],['o','gato-almofada',60],['r','carinha-2',38],['o','fatia-bolo',54],['r','seta-5',44],['o','fone-ouvido',56],['r','estrela-9',34],['o','cafeteira-italiana',58],['r','brilho-6',38],['o','croissant',58],['r','check',34],['o','laco-rosa',54],['r','estrela-14',34],['o','jarra-flores',58],['r','mais-1',34],['o','luminaria-azul',58],['r','carinha-4',38],['o','taca-suco',58],['r','brilho-3',38]];
const TAM=[36,30,40,32,44,34,38,30,42,34,32,40];const GIRO=[-12,8,-4,14,-9,5,-15,10,-3,12,-7,6];const SOBE=[-4,5,0,-6,3,-2,6,-5,2,-3,4,0];
function initFaixa(){
  document.querySelectorAll('.faixa .trilho').forEach(t=>{
    const seq=FAIXA.map(([tp,k,s],i)=>{const st='--rot:'+GIRO[(i*5)%12]+'deg;--dy:'+SOBE[(i*7)%12]+'px;--t:'+s+'px';
      return tp==='o'?'<img src="ob/objeto-'+k+'-colorido.webp" alt="" style="'+st+'">':'<i class="el" style="--u:url(\'rb/'+k+'.svg\');--c:var(--faixa-rabisco);'+st+'"></i>'}).join('');
    t.innerHTML=seq+seq;
  });
}
function initAdesivo(){
  const pg=document.getElementById('pg');if(!pg)return;const b=pg.dataset;
  const key=b.sub?b.nav+'.'+b.sub:b.nav;const a=ADESIVOS[key];const main=document.querySelector('main');
  if(!a||!main||document.querySelector('.hero'))return;
  main.classList.add('tem-adesivo');
  const conteudo=a[0]==='o'?'<img src="ob/objeto-'+a[1]+'-colorido.webp" alt="">':'<i class="el" style="--u:url(\'rb/'+a[1]+'.svg\');--c:var('+a[2]+')"></i>';
  main.insertAdjacentHTML('afterbegin','<span class="cut adesivo" aria-hidden="true">'+conteudo+'</span>');
}
function ensureCut(){
  if(document.getElementById('cutf'))return;
  document.body.insertAdjacentHTML('beforeend','<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><filter id="cutf" x="-25%" y="-25%" width="150%" height="150%"><feMorphology in="SourceAlpha" operator="dilate" radius="3.2" result="d"/><feFlood flood-color="#fff"/><feComposite in2="d" operator="in" result="w"/><feMerge><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>');
}
function initCopiar(){
  document.querySelectorAll('.copiar').forEach(b=>b.onclick=()=>{
    const a=document.getElementById(b.dataset.a),c=document.getElementById(b.dataset.b);
    const txt=(c?c.textContent+'\n\n':'')+a.textContent;const feito=()=>{const o=b.textContent;b.textContent='Copiado';setTimeout(()=>b.textContent=o,1400)};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(feito,()=>{const r=document.createRange();r.selectNodeContents(a);const s=getSelection();s.removeAllRanges();s.addRange(r)});
    else{const r=document.createRange();r.selectNodeContents(a);const s=getSelection();s.removeAllRanges();s.addRange(r)}
  });
}
function initKit(){
  const c=document.getElementById('cartela');if(!c)return;
  const O=(k,w)=>'<span class="cut"><img src="ob/objeto-'+k+'-colorido.webp" alt="" style="width:'+w+'px;height:auto;display:block"></span>';
  const Rb=(k,col,w)=>'<span class="cut"><i class="el" style="--u:url(\'rb/'+k+'.svg\');--c:'+col+';width:'+w+'px;height:'+w+'px"></i></span>';
  const pill=(t,bg)=>'<div class="pill" style="background:'+bg+'">'+t+'</div>';
  c.innerHTML=[O('livros-pilha',82),pill('só mais um capítulo','var(--lima)'),Rb('estrela-9','var(--chiclete)',62),O('oculos-sol',86),pill('fofoca literária','var(--algodao)'),Rb('carinha-2','var(--goiaba)',64),O('xicara-pires',76),Rb('brilho-3','var(--cereja)',66),pill('migas','var(--pessego)'),O('gato-almofada',86),pill('lê, fofoca e volta amanhã','var(--creme)'),Rb('coroa','var(--vinho)',66)].join('');
}
document.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.style.setProperty('--logo',"url('assets/logo.svg')");
  chrome();
  if(document.getElementById('pal'))initTokens();initLogo();initCor();initKit();initCopiar();ensureCut();initFaixa();initAdesivo();document.querySelectorAll('.rasgado').forEach(tear);document.querySelectorAll('[data-k]:not(#cat *)').forEach(e=>{if(!e.style.getPropertyValue('--u'))e.style.setProperty('--u','url(\'el/'+e.dataset.k+'.svg\')')});
  const c=document.getElementById('cat');if(c)initCatalog(c.dataset.slug);
});
