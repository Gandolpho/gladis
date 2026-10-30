// Gera o site a partir de src/ para site/. Uso: node src/gen.js <pasta 4 Site da marca> <pasta 3 Núcleo da marca>
const fs=require('fs'),path=require('path');
const [base,nucleo]=process.argv.slice(2);
const out=path.join(base,'site');
fs.rmSync(out,{recursive:true,force:true});
['el','assets','data'].forEach(d=>fs.mkdirSync(path.join(out,d),{recursive:true}));
fs.copyFileSync(path.join(base,'src','site.css'),path.join(out,'site.css'));
const T=require('./tokens-build.js')(base,out);
fs.copyFileSync(path.join(base,'src','site.js'),path.join(out,'site.js'));
fs.copyFileSync(path.join(nucleo,'assets','logo-trama.svg'),path.join(out,'assets','logo.svg'));
fs.copyFileSync(path.join(base,'exemplos','amigo-oculto.webp'),path.join(out,'assets','amigo-oculto.webp'));

// catálogo de formas (SVG)
const FAM={Abstrato:'Formas abstratas',Flor:'Flores',Folha:'Folhas',Lua:'Luas e arcos',Arco:'Luas e arcos',Dots:'Pontos e pétalas',Rabisco:'Rabiscos',Retangulo:'Retângulos e fitas'};
const ORDEM=['Formas abstratas','Flores','Folhas','Luas e arcos','Pontos e pétalas','Rabiscos','Retângulos e fitas'];
const kebab=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,'-');
const src=path.join(nucleo,'Elementos');
const formas=fs.readdirSync(src).filter(f=>/\.svg$/i.test(f)).map(f=>{
  const nome=f.replace(/\.svg$/i,'');const k=nome.split(' ')[0];const fam=FAM[k]||'Outros';
  const arq='el/'+kebab(nome)+'.svg';fs.copyFileSync(path.join(src,f),path.join(out,arq));
  return {nome,arquivo:arq,tipo:'svg',familia:fam,tags:[fam.toLowerCase(),k.toLowerCase()]}});
formas.sort((a,b)=>ORDEM.indexOf(a.familia)-ORDEM.indexOf(b.familia)||a.nome.localeCompare(b.nome,'pt',{numeric:true}));
const USO={'Formas abstratas':'Blocos de cor para compor fundos e cantos. Uma cor por forma.','Flores':'Acentos e adesivos. Combinam com papel e fita.','Folhas':'Cantos de composição e respiro.','Luas e arcos':'Molduras abertas e fundos de seção.','Pontos e pétalas':'Textura leve sobre bloco de cor.','Rabiscos':'Linhas de destaque e separadores.','Retângulos e fitas':'Fitas e etiquetas de texto.'};
formas.forEach(e=>e.uso=USO[e.familia]);
fs.writeFileSync(path.join(out,'data','formas.json'),JSON.stringify(formas));
const TONS=[['chiclete','chiclete'],['goiaba','goiaba'],['algodao','algodão-doce'],['pessego','pêssego'],['pervinca','pervinca']];
fs.mkdirSync(path.join(out,'tx'),{recursive:true});
const thDir=path.join(base,'textura-thumbs');
if(fs.existsSync(thDir))fs.readdirSync(thDir).filter(f=>/^grao-/.test(f)).forEach(f=>fs.copyFileSync(path.join(thDir,f),path.join(out,'tx',f)));
const OVL=[['grao-papel-leve','Grão de papel leve','Por cima da arte inteira, sobre fundo claro. É o de uso corrente.'],['grao-papel-marcado','Grão de papel marcado','Mais visível, para fundo liso grande. Use com a transparência baixa.'],['grao-claro','Grão claro','Para fundo escuro, como o vinho e o vinho noite.']];
fs.writeFileSync(path.join(out,'data','padroes.json'),JSON.stringify(OVL.map(([k,n,u])=>({nome:n,arquivo:'tx/'+k+'.webp',tipo:'png',familia:'Sobreposições de textura',tags:['grão','papel','textura','sobreposição'],uso:'PNG 1080 × 1350 transparente. '+u}))));
['alfabeto','molduras','papel-fita'].forEach(s=>fs.writeFileSync(path.join(out,'data',s+'.json'),'[]'));
// desenhos de objetos (recortes da folha 1, miniaturas em objetos-thumbs/)
const OB={'livros-pilha':['Pilha de livros','Livros e leitura'],'caderno-verde-flor':['Caderno verde com flor','Livros e leitura'],'livro-aberto-flor':['Livro aberto com flor','Livros e leitura'],'livro-aberto-verde':['Livro aberto, capa verde','Livros e leitura'],'planta-livros-estante':['Planta e livros em pé','Livros e leitura'],'bloco-notas':['Bloco de notas','Livros e leitura'],'xicara-sobre-livros':['Xícara sobre livros','Livros e leitura'],
'xicara-pires':['Xícara com pires','Mesa e café'],'cafeteira-italiana':['Cafeteira italiana','Mesa e café'],'croissant':['Croissant','Mesa e café'],'fatia-bolo':['Fatia de bolo','Mesa e café'],'taca-suco':['Taça','Mesa e café'],'tigela-laranjas':['Tigela de laranjas','Mesa e café'],'limoes':['Limões','Mesa e café'],
'jarra-flores':['Jarra de flores','Flores e plantas'],'ramo-azul':['Ramo azul','Flores e plantas'],'flor-rosa-haste':['Flor rosa com haste','Flores e plantas'],'flor-azul-haste':['Flor azul com haste','Flores e plantas'],'flor-laranja-ramo':['Ramo de flor laranja','Flores e plantas'],'flor-rosa-ramo':['Ramo de flor rosa','Flores e plantas'],'vasinho-flores-azuis':['Vasinho de flores azuis','Flores e plantas'],'flor-azul-solta':['Flor azul solta','Flores e plantas'],'ramo-azul-pequeno':['Ramo azul pequeno','Flores e plantas'],'flor-rosa-solta':['Flor rosa solta','Flores e plantas'],
'oculos-sol':['Óculos de sol','Casa e conforto'],'ecobag-xadrez':['Ecobag xadrez','Casa e conforto'],'gato-almofada':['Gato na almofada','Casa e conforto'],'fone-ouvido':['Fone de ouvido','Casa e conforto'],'poltrona-manta':['Poltrona com manta','Casa e conforto'],
"manta-xadrez-rosa":["Manta xadrez rosa","Casa e conforto"],"livro-aberto-rosa":["Livro aberto, capa rosa","Livros e leitura"],"luminaria-azul":["Luminária azul","Casa e conforto"],"xicara-flores-sobre-livros":["Xícara de flores sobre livros","Livros e leitura"],"poltrona-rosa":["Poltrona rosa","Casa e conforto"],"ramo-flor-azul-folhas":["Ramo de flor azul com folhas","Flores e plantas"],"bloco-notas-fita":["Bloco de notas com fita","Livros e leitura"],"gato-vinho-dormindo":["Gato vinho dormindo","Casa e conforto"],"vaso-xadrez-flores":["Vaso xadrez com flores","Flores e plantas"],"vaso-flor-rosa-manchas":["Vaso com flor rosa","Flores e plantas"],"flor-rosa-folhas":["Flor rosa com folhas","Flores e plantas"],"ramo-laranjas":["Ramo de laranjas","Mesa e café"],"ecobag-ondas":["Ecobag de ondas","Casa e conforto"],"livro-aberto-marcador":["Livro aberto com marcador","Livros e leitura"],"oculos-gatinho":["Óculos gatinho","Casa e conforto"],"caneca-rosa":["Caneca rosa","Mesa e café"],"ramo-flor-coral":["Ramo de flor coral","Flores e plantas"],"laco-rosa":["Laço rosa","Casa e conforto"],"pilha-quatro-livros":["Pilha de quatro livros","Livros e leitura"]};
const obDir=path.join(base,'objetos-thumbs');const objetos=[];
if(fs.existsSync(obDir)){fs.mkdirSync(path.join(out,'ob'),{recursive:true});
 const ORD=['Livros e leitura','Mesa e café','Flores e plantas','Casa e conforto'];
 Object.entries(OB).sort((a,b)=>ORD.indexOf(a[1][1])-ORD.indexOf(b[1][1])).forEach(([k,[nome,fam]])=>{const f='objeto-'+k+'-colorido.webp';if(!fs.existsSync(path.join(obDir,f)))return;fs.copyFileSync(path.join(obDir,f),path.join(out,'ob',f));
  objetos.push({nome,arquivo:'ob/'+f,tipo:'png',familia:fam,tags:[fam.toLowerCase(),nome.toLowerCase(),'objeto','desenho'],uso:'Desenho colorido, cor fixa (não recolore). Sobre fundo claro ou de cor lisa, em tamanho pequeno ou médio.'})})}
fs.writeFileSync(path.join(out,'data','desenhos.json'),JSON.stringify(objetos));

// fundos de post (arquivos em fundos/, usados direto)
const FD=[['xadrez-pervinca-creme','Xadrez pervinca e creme','Xadrez','pervinca'],['xadrez-pessego-creme','Xadrez pêssego e creme','Xadrez','pêssego'],['xadrez-vinho-algodao','Xadrez vinho e algodão-doce','Xadrez','vinho'],['xadrez-goiaba-creme','Xadrez goiaba e creme','Xadrez','goiaba'],['xadrez-chiclete-algodao','Xadrez chiclete e algodão-doce','Xadrez','chiclete'],['listra-fina-cereja-algodao','Listra fina cereja sobre algodão-doce','Listras','cereja'],['listra-fina-cereja-creme','Listra fina cereja sobre creme','Listras','cereja'],['listra-larga-pervinca-creme','Listra larga pervinca e creme','Listras','pervinca']];
const fdDir=path.join(base,'fundos');const fundos=[];
if(fs.existsSync(fdDir)){fs.mkdirSync(path.join(out,'fd'),{recursive:true});
 FD.forEach(([k,nome,fam,cor])=>{const f='fundo-'+k+'.webp';if(!fs.existsSync(path.join(fdDir,f)))return;fs.copyFileSync(path.join(fdDir,f),path.join(out,'fd',f));
  fundos.push({nome,arquivo:'fd/'+f,tipo:'png',familia:fam,tags:[fam.toLowerCase(),cor,'fundo','padrão'],uso:(fam==='Xadrez'?'Quadrado de 1254 × 1254 px.':'Retangular de 1536 × 1024 px.')+' Fundo de post, desenhado à mão. Use sozinho ou com um papel por cima do conteúdo; evite texto direto sobre o padrão.'})})}
fs.writeFileSync(path.join(out,'data','fundos.json'),JSON.stringify(fundos));

// rabiscos e destaques de caderno (SVG de uma cor, recolorível)
const RBD=path.join(nucleo,'Rabiscos de caderno');const rabiscos=[];
if(fs.existsSync(RBD)){fs.mkdirSync(path.join(out,'rb'),{recursive:true});
 const FAMR={Seta:'Setas',Traco:'Sublinhados e traços',Destaque:'Destaques',Brilho:'Brilhos e raios',Estrela:'Estrelas e faíscas',Bolinhas:'Bolinhas e pontilhados',Carinha:'Carinhas'};
 const ORDR=['Setas','Sublinhados e traços','Destaques','Brilhos e raios','Estrelas e faíscas','Bolinhas e pontilhados','Carinhas','Símbolos'];
 const ACE={Traco:'Traço',Balao:'Balão'};
 fs.readdirSync(RBD).filter(f=>/.svg$/i.test(f)).forEach(f=>{const nome0=f.replace(/.svg$/i,'');const k=nome0.split(' ')[0];const fam=FAMR[k]||'Símbolos';const nome=nome0.split(' ').map((w,i)=>i===0?(ACE[w]||w):w).join(' ');
  const arq='rb/'+kebab(nome0)+'.svg';fs.copyFileSync(path.join(RBD,f),path.join(out,arq));
  rabiscos.push({nome,arquivo:arq,tipo:'svg',familia:fam,tags:[fam.toLowerCase(),nome.toLowerCase(),'rabisco','caderno','scrapbook']})});
 rabiscos.sort((a,b)=>ORDR.indexOf(a.familia)-ORDR.indexOf(b.familia)||a.nome.localeCompare(b.nome,'pt',{numeric:true}));
 const USOR={'Setas':'Para apontar para a informação importante.','Sublinhados e traços':'Para sublinhar uma palavra ou separar um trecho.','Destaques':'Caixa, círculo e colchetes para cercar uma informação.','Brilhos e raios':'Riscos que fazem algo parecer brilhar.','Estrelas e faíscas':'Estrelinhas e faíscas desenhadas à mão.','Bolinhas e pontilhados':'Confete, pontos e linhas pontilhadas.','Carinhas':'Carinhas desenhadas, para um toque de humor.','Símbolos':'Mais, x, check, nuvem, coroa, olho, raio e balão.'};
 rabiscos.forEach(e=>e.uso=(USOR[e.familia]||'')+' Uma cor só: pinte com a paleta e use pouco, em um ou dois por peça.')}
fs.writeFileSync(path.join(out,'data','rabiscos.json'),JSON.stringify(rabiscos));


const FONTS='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?'+T.marca.google.base+'&display=swap" rel="stylesheet">';
const FONTS_LETRA='<link href="https://fonts.googleapis.com/css2?'+T.marca.google.letra+'&display=swap" rel="stylesheet">';
const stub=(t,itens,orig)=>`<div class="stub"><h3>${t}</h3><ul>${itens.map(i=>`<li>${i}</li>`).join('')}</ul>${orig?`<div class="origin">${orig}</div>`:''}</div>`;
const CARDOB={'manual-logo.html':['o','laco-rosa'],'manual-cor.html':['o','tigela-laranjas'],'manual-letra.html':['o','bloco-notas-fita'],'manual-elementos.html':['o','caderno-verde-flor'],'manual-foto.html':['o','oculos-gatinho'],'manual-voz.html':['r','carinha-4','--vinho'],'manual-layout.html':['o','poltrona-rosa'],'manual-regras.html':['r','check','--vinho'],
 'oficina-kit.html':['o','ecobag-ondas'],'oficina-feed.html':['o','caneca-rosa'],'oficina-stories.html':['o','fone-ouvido'],'oficina-colagem.html':['o','livro-aberto-marcador'],'oficina-familias.html':['o','pilha-quatro-livros'],'oficina-gerar.html':['o','luminaria-azul'],
 'elementos-desenhos.html':['o','xicara-pires'],'elementos-rabiscos.html':['r','estrela-9','--vinho'],'elementos-papel-fita.html':['o','bloco-notas-fita']};
const card=(href,t,p,tag)=>{const o=CARDOB[href];const ic=o?(o[0]==='o'?'<span class="cut cardobj"><img src="ob/objeto-'+o[1]+'-colorido.webp" alt=""></span>':'<span class="cut cardobj"><i class="el" style="--u:url(\'rb/'+o[1]+'.svg\');--c:var('+o[2]+')"></i></span>'):'';return `<a class="card${o?' com-obj':''}" href="${href}">${ic}<h3>${t} ${tag||''}</h3><p>${p}</p></a>`};
const tg=(c,t)=>`<span class="tag ${c}">${t}</span>`;
const strip=(arr)=>`<div class="strip">${arr.map(([f,c])=>`<i style="--u:url('el/${f}.svg');--c:var(${c})"></i>`).join('')}</div>`;
const LOGOS=['--chiclete','--cereja','--goiaba','--pessego','--algodao','--lima','--pervinca','--vinho'];
const logoStrip=`<div class="strip">${LOGOS.map(c=>`<i class="lgo" style="--c:var(${c})"></i>`).join('')}</div>`;

const SW=[
 ['chiclete','noite','Cor principal e de destaque: o logo principal, selos, palavras e blocos pontuais. Referências 07 e 12.',true],
 ['goiaba','vinho','Coral de apoio. Blocos e acentos. Referências 07 e 08.'],
 ['cereja','creme','Cor de destaque. Logo e palavras de destaque sobre fundo claro.'],
 ['algodao','vinho','Rosa claro. Fundo suave, listra fina, painéis, respiro.'],
 ['pessego','vinho','Pastel quente entre o rosa e o coral. Fundo suave.'],
 ['salvia','vinho','Verde acinzentado e suave. Só fundo, para sair do rosa.'],
 ['ceu','vinho','Azul claro e limpo. Só fundo, para sair do rosa.'],
 ['manteiga','vinho','Amarelo claro e quente. Só fundo, para sair do rosa.'],
 ['creme','vinho','Fundo e papel. Nunca branco puro.',false,true],
 ['branquinho','vinho','Branco com um fio de azul. Fundo claro, mais leve que o creme.',false,true],
 ['papel','vinho','Fundo do site. Um branco quente de papel, mais calmo que o creme.',false,true],
 ['vinho','creme','Todo o texto e o logo de uso corrente. Referência 12.'],
 ['noite','creme','Segundo fundo escuro, para uso pontual.'],
 ['lima','vinho','Confete e fita. Pouco.'],
 ['pervinca','vinho','O frio que equilibra. Confete e detalhe.']];
const PROP=[['papel',10],['creme',14],['branquinho',5],['algodao',7],['pessego',6],['salvia',6],['ceu',6],['manteiga',6],['chiclete',12],['goiaba',7],['vinho',9],['cereja',3],['lima',4],['pervinca',5]];
const divXadrez=()=>'<div class="divisoria xadrez-f" aria-hidden="true"></div>';
const divFormas=()=>'<div class="divisoria formas" aria-hidden="true">'+[['estrela-9',1],['brilho-3',2],['bolinhas-8',3],['traco-12',1],['seta-5',2],['mais-1',3],['carinha-2',1]].map(([k,n])=>'<i class="el" style="--u:url(\'rb/'+k+'.svg\');--c:var(--divisoria-'+n+')"></i>').join('')+'</div>';
const PROPOSTA=`<span class="tag receber">Proposta</span>`;
const BLOCO=fmt=>`Crie uma arte ${fmt} para o clube de leitura A Trama do Rio.

Estilo: colagem e mix media com cara digital. Fundo liso na cor [COR DO FUNDO], com grão de papel. Formas orgânicas grandes e texturizadas, cortadas pela borda da arte, sem cara de adesivo. Papel rasgado e fita. Rabiscos curtos desenhados à mão. Menos elementos do que a vontade: no máximo duas formas grandes, um papel com fita e poucos rabiscos.

Cores (use só estas, com estes códigos): papel #FDFBF4, creme #FFF4E0, algodão-doce #FFC2E2, pêssego #FFB59E, sálvia #CADDBF, céu #BCDFF2, manteiga #FFE8A3, goiaba #FF6B4A, chiclete #F2609F, cereja #C63236, vinho #5A1830, lima #CFDD5A, pervinca #8FA6F2. O fundo é exatamente a cor [COR DO FUNDO] (código incluído), lisa, sem trocar por outra. Se o fundo não for rosa, nenhum rosa vira fundo; o chiclete entra só como destaque pequeno (selo, palavra, bloco). Texto em vinho, nunca em preto.

Letras, uma de cada função: título gordo estilo slab (como Alfa Slab One) em vinho; frase curta em script fino (como Pinyon Script) em cereja; apoio escrito à mão (como Reenie Beanie); informação em sans simples (como Quicksand).

O logo "A Trama do Rio" aparece pequeno, centralizado embaixo, em vinho. Sem pessoas, sem corações, sem estrelas. Escreva exatamente os textos abaixo, sem mudar nenhuma letra.`;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const zn=(rot,l,t,w,h,cls)=>`<span class="zn ${cls}" style="left:${l}%;top:${t}%;width:${w}%;height:${h}%">${rot}</span>`;
const tela=(ratio,zs,livres,bg)=>`<div class="tela" style="aspect-ratio:${ratio}${bg?';background:'+bg:''}">${livres?'<div class="livre topo">livre</div><div class="livre base">livre</div>':''}${zs.map(z=>zn(...z)).join('')}</div>`;
let recN=0;
const receita=(titulo,quando,mock,camadas,textos,prompt,fmt)=>{const id='pr'+(++recN);return `<article class="rec"><div class="rec-mock">${mock}</div><div class="rec-txt"><h3>${titulo}</h3><p>${quando}</p><h4>Camadas, de baixo para cima</h4><ol>${camadas.map(c=>'<li>'+c+'</li>').join('')}</ol><h4>Textos</h4><ul>${textos.map(c=>'<li>'+c+'</li>').join('')}</ul><details class="mais"><summary>Ver o prompt para o ChatGPT</summary><pre class="prompt" id="${id}">${esc(prompt)}</pre><pre class="prompt" id="${id}b" hidden>${esc(BLOCO(fmt))}</pre><button class="btn copiar" type="button" data-a="${id}" data-b="${id}b">Copiar bloco e receita</button></details></div></article>`};
const FEED='de feed do Instagram em formato 4:5 (1080 × 1350 px)';
const STORY='de stories do Instagram em formato vertical 9:16 (1080 × 1920 px), deixando livres cerca de 250 px no topo e 340 px na base';
const receitasFeed=[
 receita('Aviso com ação e data','Para pedir algo e marcar um prazo: amigo oculto, inscrição, votação.',
  tela('4/5',[['rótulo',24,6,52,7,'zl'],['título no papel',10,17,80,33,'zp'],['ação',8,54,84,18,'zv'],['data e detalhe',8,74,84,12,'zc']]),
  ['Fundo de papel com grão, mais uma ou duas formas grandes e texturizadas.','Rótulo curto numa fita lima, no alto.','Painel de papel rasgado, com fita, para o título e a frase em script.','Bloco vinho com a ação, e uma seta lima apontando.','Bloco pêssego com a data e o detalhe.','Logo pequeno, centralizado embaixo.'],
  ['Rótulo: duas ou três palavras em caixa alta.','Script: uma frase de uma linha.','Título: uma ou duas palavras.','Apoio à mão: uma pergunta.','Ação: uma frase. Data e detalhe: uma linha.'],
  'Texto da arte:\nRótulo na fita lima: "[RÓTULO]"\nFrase em script cereja: "[FRASE CURTA]"\nTítulo gigante em vinho: "[TÍTULO]"\nApoio à mão em cereja, com sublinhado rosa: "[PERGUNTA]"\nBloco vinho, letra clara: "[AÇÃO]"\nBloco pêssego: "[DATA]" e "[DETALHE]"\n\nComposição: o título num papel rasgado com fita, levemente inclinado. Formas grandes texturizadas em coral e rosa, cortadas pelo canto. Uma seta lima aponta para a ação.',FEED),
 receita('Livro do mês','Para anunciar a leitura do mês. A cor do fundo vem da capa do livro.',
  tela('4/5',[['rótulo',8,6,40,7,'zl'],['capa do livro',8,18,44,52,'zf'],['título',56,18,38,22,'zp'],['autora',56,42,38,10,'zc'],['frase à mão',56,55,38,15,'zr'],['data do encontro',8,76,84,12,'zv']]),
  ['Fundo na cor da capa, escolhida dentro da paleta e em tom calmo (papel, creme, sálvia, céu, manteiga ou pêssego; rosa só se a capa for rosa).','Uma forma grande e texturizada atrás da capa, em tom sobre tom.','A capa do livro numa polaroid ou janela.','Papel com o título e o nome da autora.','Bloco vinho com a data do encontro.','Logo pequeno embaixo.'],
  ['Rótulo: "LIVRO DO MÊS".','Título: o nome do livro.','Autora: uma linha.','Frase à mão: uma impressão curta.','Data: dia, hora e lugar.'],
  'Texto da arte:\nRótulo na fita: "LIVRO DO MÊS"\nTítulo em vinho: "[NOME DO LIVRO]"\nAutora: "[NOME]"\nFrase à mão: "[FRASE CURTA]"\nBloco vinho, letra clara: "[DIA, HORA E LUGAR]"\n\nComposição: a capa do livro em polaroid levemente inclinada, à esquerda. Fundo na cor mais próxima da capa, em tom calmo. Uma forma grande texturizada atrás, em tom sobre tom. Deixe um espaço reservado para a capa.',FEED),
 receita('Convite de encontro','Para chamar para um encontro: piquenique, casa de alguém, leitura.',
  tela('4/5',[['rótulo',24,6,52,7,'zl'],['foto em polaroid',10,17,46,44,'zf'],['título',50,22,42,24,'zp'],['apoio à mão',50,50,42,12,'zr'],['quando e onde',8,68,84,18,'zv']]),
  ['Fundo calmo com uma forma grande texturizada cortada pela borda.','Foto do último encontro numa polaroid, com fita.','Papel com o título do encontro.','Bloco vinho com dia, hora e lugar.','Logo pequeno embaixo.'],
  ['Rótulo: "TEM TRAMA NO AR" ou parecido.','Título: "ENCONTRO DE [MÊS]".','Apoio à mão: um pedido simples, como "leva o livro!".','Quando e onde: dia, hora e lugar logo no começo.'],
  'Texto da arte:\nRótulo na fita lima: "[RÓTULO]"\nTítulo em vinho: "ENCONTRO DE [MÊS]"\nApoio à mão em cereja: "[PEDIDO SIMPLES]"\nBloco vinho, letra clara: "[DIA, HORA E LUGAR]"\n\nComposição: uma polaroid levemente inclinada, com fita, no lado esquerdo. Deixe o espaço da foto reservado. Forma grande texturizada em pêssego atrás.',FEED)
];
const receitasStories=[
 receita('Enquete','Para perguntar algo ao clube. A pergunta fica no papel e as respostas em blocos.',
  tela('9/16',[['rótulo',22,17,56,5,'zl'],['pergunta no papel',10,25,80,22,'zp'],['opção A',10,51,80,9,'zv'],['opção B',10,63,80,9,'zc']],true),
  ['Fundo de papel com grão e uma forma grande cortada pela borda.','Rótulo numa fita lima.','Papel rasgado com a pergunta.','Dois blocos lisos com as opções (a enquete do app fica por cima deles).','Logo pequeno, acima da área livre da base.'],
  ['Rótulo: duas palavras.','Pergunta: uma linha, em título e script.','Opções: no máximo quatro palavras cada.'],
  'Texto da arte:\nRótulo na fita lima: "[RÓTULO]"\nPergunta em vinho, com uma palavra em script cereja: "[PERGUNTA]"\nBloco vinho, letra clara: "[OPÇÃO A]"\nBloco pêssego: "[OPÇÃO B]"\n\nComposição: o papel rasgado com a pergunta no terço de cima. Deixe o topo e a base livres para a interface do stories, sem texto nem elementos importantes.',STORY),
 receita('Aviso rápido','Para um recado curto: mudança de lugar, lembrete, prazo.',
  tela('9/16',[['título',12,26,76,24,'zp'],['informação',12,54,76,14,'zv'],['apoio à mão',12,71,76,8,'zr']],true),
  ['Fundo calmo, com uma forma grande texturizada.','Papel rasgado com o título.','Bloco vinho com a informação.','Apoio à mão.','Logo pequeno, acima da área livre da base.'],
  ['Título: uma ou duas palavras.','Informação: dia, hora e lugar.','Apoio à mão: um pedido.'],
  'Texto da arte:\nTítulo em vinho no papel: "[TÍTULO]"\nBloco vinho, letra clara: "[INFORMAÇÃO]"\nApoio à mão em cereja: "[PEDIDO]"\n\nComposição: calma, com muito espaço. Deixe o topo e a base livres para a interface do stories.',STORY)
];

const P=[];
const page=(f,title,nav,sub,sub2,body,extra='')=>P.push({f,title,nav,sub,sub2,body,extra});

page('index.html','Site da marca Trama','inicio','','',`
<section class="hero bleed" aria-label="Abertura"><div class="hero-in">
 <div class="hero-card"><svg class="clipe" viewBox="0 0 40 110" height="74" aria-hidden="true"><path d="M12 72V24a10 10 0 0 1 20 0v60a14 14 0 0 1-28 0V32" fill="none" style="stroke:var(--ouro)" stroke-width="4.5" stroke-linecap="round"/></svg>
  <div class="rotulo">Site da marca</div><h1>A Trama do Rio, do jeito que a gente quer.</h1><p class="lead">Clube de leitura nascido no Rio em 2024, só de mulheres desde 2026. O livro é o ponto de partida; a amizade é o centro.</p></div>
 <div class="hero-logo-wrap"><div class="hero-logo"><i class="lgm"></i></div></div>
</div></section>
<div class="faixa bleed" aria-hidden="true"><div class="trilho"></div></div>

<h2>Conceito</h2>
<div class="frase"><span class="sc">barulhenta e bagunçada por fora, organizada por baixo</span><small>Frase de trabalho, para você ajustar.</small></div>
<p>O nome carrega três sentidos ao mesmo tempo, e a marca pode brincar com os três:</p>
<div class="grid">
<div class="card"><h3>Trama de história</h3><p>Construir uma narrativa e entrelaçar pontos de vista.</p></div>
<div class="card"><h3>Trama de tecido</h3><p>Linhas independentes que se juntam e viram uma coisa só, como as histórias de cada integrante.</p></div>
<div class="card"><h3>Tramar</h3><p>Aprontar, planejar coisa engraçada. O humor e a fofoca do grupo.</p></div>
</div>
<details class="mais"><summary>Ver como a Trama é e como fala</summary>
<div class="grid">
<div class="rb pode"><h3>A Trama é</h3><ul><li>Barulhenta, bagunçada e organizada (o caos organizado).</li><li>Acolhedora, fofoqueira, irônica, sentimental.</li><li>Descolada e ousada.</li><li>Literária e leve.</li></ul></div>
<div class="rb nao"><h3>A Trama não é</h3><ul><li>Séria, certinha ou elitista.</li><li>Infantil, nem estilo de livraria infantil.</li><li>Minimalista nem comercial.</li><li>Corporativa. Também não é &ldquo;menininha&rdquo;.</li></ul></div>
<div class="card"><h3>Como fala</h3><p>Divertida e acessível, sem academicismo. Acolhedora, espontânea, coloquial, com humor e referências do grupo. Informal, mas com os avisos sempre claros.</p></div>
</div>
<p class="origin"><b>Versatilidade (recomendação):</b> a marca é fofa em alguns momentos e elegante em outros. Por isso há um eixo fixo (logo, letras, família de formas, cores, voz) e dois modos que mudam por peça sem virar outra marca: o barulhento, para o livro do mês e as redes, e o calmo, para avisos formais e parcerias. Detalhes na aba <a href="manual-layout.html">Layout</a>.</p>
</details>

<h2>Estética</h2>
<p class="lead">Fundo calmo, cor lisa com grão de papel, letra gorda, formas soltas e o rosa como destaque.</p>
<div class="grid g2">
<div class="card"><h3>Cor</h3><div class="prop" style="height:30px;margin:8px 0"><div style="width:12%;background:var(--papel)"></div><div style="width:20%;background:var(--creme)"></div><div style="width:6%;background:var(--branquinho)"></div><div style="width:13%;background:var(--algodao)"></div><div style="width:8%;background:var(--pessego)"></div><div style="width:14%;background:var(--chiclete)"></div><div style="width:7%;background:var(--goiaba)"></div><div style="width:9%;background:var(--vinho)"></div><div style="width:3%;background:var(--cereja)"></div><div style="width:4%;background:var(--lima)"></div><div style="width:4%;background:var(--pervinca)"></div></div><p>O chiclete é o destaque; o fundo costuma ser calmo. <a href="manual-cor.html">Ver a cor</a></p></div>
<div class="card"><h3>Letra</h3><p style="font-family:var(--fonte-alfa-slab-one);font-size:24px;color:var(--fg);margin:4px 0 0">Leitura do mês</p><p style="font-family:var(--fonte-pinyon-script);font-size:30px;color:var(--link);margin:0;line-height:1.1">setembro</p><p>Título gordo, script e mão. <a href="manual-letra.html">Ver a letra</a></p></div>
<div class="card"><h3>Padrão</h3><div class="xadrez" style="--p1:var(--chiclete);--p2:var(--algodao);--ps:28px;height:52px;border-radius:8px;margin:8px 0"></div><p>Xadrez, listra e bolinha, ou fundo liso com grão. <a href="manual-elementos.html">Ver os elementos</a></p></div>
<div class="card clara"><h3>Logo</h3><div class="logos4"><div class="lt" style="background:var(--algodao)"><i class="lgm" style="--c:var(--chiclete)"></i></div><div class="lt" style="background:var(--pessego)"><i class="lgm" style="--c:var(--vinho)"></i></div><div class="lt" style="background:var(--vinho)"><i class="lgm" style="--c:var(--lima)"></i></div><div class="lt" style="background:var(--cereja)"><i class="lgm" style="--c:var(--creme)"></i></div></div><p>Dinâmico: uma tinta por vez. <a href="manual-logo.html">Ver o logo</a></p></div>
</div>

${divFormas()}
<h2>Colagem e mix-media</h2>
<p class="lead">A parte mais barulhenta da marca: camadas de fundo, papel, foto, fita e formas soltas. Mas nem toda peça precisa disso.</p>
<div class="duo">
<figure class="comp">
<div class="frame grao" style="background:url(fd/fundo-xadrez-chiclete-algodao.webp) center/cover">
 <span class="cut abs" style="left:-6px;bottom:64px;transform:rotate(-7deg);z-index:5"><img src="ob/objeto-xicara-flores-sobre-livros-colorido.webp" alt="" style="width:112px;height:auto;display:block"></span>
 <i class="el abs" style="--u:url('rb/estrela-9.svg');--c:var(--vinho);width:34px;height:34px;left:150px;bottom:56px;transform:rotate(-8deg)"></i>
 <i class="el abs" data-k="folha-4" style="--c:var(--vinho);width:104px;height:74px;right:-18px;bottom:-12px"></i>
 <div class="fita abs" style="left:112px;top:14px;transform:rotate(7deg)"></div>
 <div class="papel rasgado abs" style="left:20px;top:30px;width:186px;transform:rotate(-2deg)">
  <svg class="clipe" viewBox="0 0 40 110" height="58"><path d="M12 72V24a10 10 0 0 1 20 0v60a14 14 0 0 1-28 0V32" fill="none" style="stroke:var(--ouro)" stroke-width="4.5" stroke-linecap="round"/></svg>
  <b class="t1">Leitura do mês</b><span class="sc1" style="position:relative;align-self:flex-start">setembro<i class="el" style="--u:url('rb/traco-12.svg');--c:var(--chiclete);position:absolute;left:0;bottom:-8px;width:100%;height:14px"></i></span><span class="tx">Encontro no sábado, no parque.</span><span class="mao">leva o livro!</span>
 </div>
 <div class="polaroid abs" style="right:12px;top:176px;transform:rotate(5deg)"><div>sua foto</div><span>migas</span></div>
 <i class="el abs" style="--u:url('rb/brilho-3.svg');--c:var(--vinho);width:56px;height:56px;right:6px;top:124px;z-index:5"></i>
</div>
<figcaption><b>Colagem.</b> Fundo xadrez desenhado, papel rasgado com clipe e fita, foto em polaroid, uma figurinha, forma e rabiscos. A foto é um espaço reservado.</figcaption>
</figure>
<figure class="comp">
<div class="frame grao" style="background:var(--goiaba);display:grid;place-items:center;align-content:center;gap:18px;text-align:center">
 <i class="lgm" style="--c:var(--vinho);width:140px;height:140px;display:block"></i>
 <b style="font:400 30px/1.05 var(--titulo);color:var(--vinho)">só mais<br>um capítulo</b>
</div>
<figcaption><b>Limpa.</b> Uma cor com grão, o logo e um título. Para avisos e momentos de silêncio.</figcaption>
</figure>
</div>
<p class="origin">Exemplo ilustrativo. Os textos são de teste. Quando os PNGs de papel, fita e molduras chegarem, esta composição é refeita com eles.</p>

${divXadrez()}
<h2>Exemplos aplicados</h2>
<div class="grid">
${stub('Kit de Natal',['Ecobag, 3 marca-páginas, cartela de adesivos e caneca.'],'Vem da página v3, seção 6. Os testes completos ficam na Oficina.')}
<figure class="comp ex"><img src="assets/amigo-oculto.webp" alt="Arte de feed 4:5 do amigo oculto do clube: fundo de papel com formas grandes e texturizadas, painel de papel rasgado com o título AMIGO OCULTO, blocos de cor com a ação e a data, e o logo discreto embaixo." width="340"><figcaption><b>Post de feed.</b> Amigo oculto do clube, feito no ChatGPT com o sistema da marca. <a href="oficina-feed.html">Ver a anatomia</a>.</figcaption></figure>
</div>

<h2>Referências</h2>
${stub('As quatro que mandam',['07 Book Babes, 08 Templates book club, 09 Daisy Made, 12 Daze Social.','Para a versão de portfólio, trocar por moodboard próprio.'],'Vem da página v3, seção 1. Uso interno.')}
`);

page('manual.html','Manual · site da marca','manual','','',`
<h1>Manual da marca</h1><p class="lead">As decisões, uma por assunto. Cada página diz o que é, como usar, o que pode e o que não pode.</p>
<div class="grid">
${card('manual-logo.html','Logo','Versão principal, cores e tamanho mínimo.',tg('pronto','pronto'))}
${card('manual-cor.html','Cor','Paleta, pares de contraste e proporção.',tg('pronto','pronto'))}
${card('manual-letra.html','Letra','Quatro vozes e a regra de uma letra por voz.',tg('pronto','pronto'))}
${card('manual-elementos.html','Elementos','Formas, desenhos, rabiscos, alfabeto, molduras, papel, fundos e padrões.',tg('pronto','parcial'))}
${card('manual-foto.html','Foto','Como a foto entra, o que fotografar e o consentimento.',tg('receber','proposta'))}
${card('manual-voz.html','Voz','Como a Trama fala, com exemplos.',tg('receber','proposta'))}
${card('manual-layout.html','Layout','Camadas, formatos, hierarquia e os dois modos.',tg('receber','proposta'))}
${card('manual-regras.html','Regras','Sempre e nunca, todas juntas.',tg('pronto','pronto'))}
</div>`);

page('manual-logo.html','Logo · site da marca','manual','logo','',`
<h1>Logo</h1>
<p class="lead">O logo fica e só muda de cor: uma tinta por vez, como carimbo. O &ldquo;do&rdquo; é vazado e mostra o fundo.</p>
<h2>Qual cor usar</h2>
<div class="grid2">
<div class="card"><h3>Chiclete</h3><p>A principal. Nos elementos principais da marca, sobre algodão-doce. O contraste é baixo (2,0), uma escolha de marca que só vale com o logo grande.</p></div>
<div class="card"><h3>Vinho</h3><p>O do dia a dia. Lê bem em quase todo fundo claro ou vivo.</p></div>
<div class="card"><h3>Cereja</h3><p>A cor de destaque. Funciona sobre creme, branquinho e algodão-doce.</p></div>
<div class="card"><h3>Goiaba, lima e as outras</h3><p>Entram quando o fundo deixar. Sobre vinho ou vinho noite, qualquer cor clara ou viva funciona.</p></div>
</div>
<h2>Combinações com contraste</h2>
<p class="lead" style="margin-bottom:6px">Cada quadro mostra a cor do logo sobre uma cor de fundo. O número é o contraste entre as duas (fórmula WCAG): quanto mais alto, mais fácil de ler em tamanho pequeno.</p>
<div class="combos" id="combos"></div>
<details class="mais"><summary>Ver as outras 12 combinações</summary><div class="combos" id="combos2"></div></details>
<p class="origin"><b>Como ler:</b> 4,5 ou mais é seguro em qualquer tamanho. De 3 a 4,5, só com o logo grande. Abaixo de 3 é escolha de marca, como o chiclete sobre algodão-doce, e só funciona com o logo grande e sem texto pequeno por perto.</p>
<h2>Pode e não pode</h2>
<div class="grid2">
<div class="rb pode"><h3>Pode</h3><ul><li>Uma tinta só em cada uso.</li><li>Chiclete sobre algodão-doce como versão principal.</li><li>Vinho no dia a dia.</li><li>Cereja como destaque, sobre creme, branquinho ou algodão-doce.</li><li>Cores claras ou vivas sobre vinho e vinho noite.</li></ul></div>
<div class="rb nao"><h3>Não pode</h3><ul><li>Mexer no desenho do logo.</li><li>Logo em cor viva sobre outra cor viva. Só sobre vinho ou vinho noite. A exceção é o chiclete sobre algodão-doce.</li><li>Cereja sobre chiclete, goiaba, vinho ou pervinca (contraste entre 1,8 e 2,4).</li><li>Usar a versão colorida antiga ou as estrelinhas.</li><li>Duas cores no mesmo logo.</li></ul></div>
</div>
<h2>Tamanho mínimo</h2>
${stub('A decidir',['Marca-páginas, adesivo, ecobag e caneca precisam de um tamanho mínimo cada.','Quando definido, entra aqui com um exemplo em tamanho real.'],'Pendente. Depende de um teste de impressão em casa.')}
<h2>Arquivos</h2>
<p>O logo existe em vetor (SVG), uma versão por cor: chiclete, cereja, goiaba, pêssego, algodão-doce, creme, branquinho, vinho, vinho noite, lima e pervinca. Servem para a Cricut e para o Canva.</p>
<p><a class="btn" aria-disabled="true" role="link" tabindex="-1">Pasta do Drive: em breve</a></p>`);
page('manual-cor.html','Cor · site da marca','manual','cor','',`
<h1>Cor</h1><p class="lead">O chiclete é a cor principal e o destaque. O fundo costuma ser mais calmo. Texto nunca em preto: é vinho.</p>
<div class="swg">${SW.map(([k,fg,papel,dom,borda])=>`<div class="swc${dom?' dom':''}" style="background:var(--${k});color:var(--${fg})${borda?';box-shadow:inset 0 0 0 2px var(--tinta-14)':''}"><b>${T.marca.cor[k].nome}</b><code>${T.marca.cor[k].hex}</code><small>${papel}</small></div>`).join('')}</div>
<h2>Proporção por peça</h2>
<div class="prop" role="img" aria-label="Proporção sugerida: papel 10%, creme 14%, branquinho 5%, algodão-doce 7%, pêssego 6%, sálvia 6%, céu 6%, manteiga 6%, chiclete 12%, goiaba 7%, vinho 9%, cereja 3%, lima 4%, pervinca 5%">${PROP.map(([k,w])=>`<div style="width:${w}%;background:var(--${k})"></div>`).join('')}</div>
<p class="origin">Fundos claros e pastéis ocupam a maior parte, e os pastéis não são só rosa: tem sálvia, céu e manteiga. O chiclete e o coral entram como destaque, o vinho no texto, a lima e a pervinca só de confete. Um fundo forte (chiclete ou goiaba) é bem-vindo em algumas peças, mas não é a regra.</p>
<div class="card"><h3>Rodízio de fundos</h3><p>A cor do fundo é escolhida a cada arte, nunca deixada para a ferramenta decidir. Olhe os três últimos posts e escolha uma cor de outro grupo: <b>neutros</b> (papel, creme, branquinho), <b>verdes</b> (sálvia, lima), <b>azuis</b> (céu, pervinca), <b>amarelos e quentes</b> (manteiga, pêssego, goiaba), <b>escuros</b> (vinho) e <b>rosas</b> (algodão-doce, chiclete). Fundo rosa no máximo 1 a cada 4 posts, e nunca dois seguidos. Liso com grão de papel vale; textura não precisa em toda arte.</p></div>
<h2>Pares de contraste</h2>
<details class="mais"><summary>Ver os 10 pares de contraste</summary><p class="resp">Texto sobre fundo, com o contraste calculado. Abaixo de 4,5, o par só serve para título grande ou detalhe.</p><div class="pairs" id="pairs"></div></details>
<h2>Pode e não pode</h2>
<div class="grid2">
<div class="rb pode"><h3>Pode</h3><ul><li>Texto em vinho. Texto pequeno sobre chiclete em vinho noite, que passa de 5:1.</li><li>Chiclete como cor principal e de destaque, com a goiaba de apoio.</li><li>Fundos calmos (papel, creme, branquinho, sálvia, céu, manteiga, pêssego) ocupando a maior parte da peça.</li><li>Texto pequeno só sobre creme, algodão-doce, pêssego, lima, sálvia, céu ou manteiga.</li><li>Cereja em palavras de destaque (script, nota à mão) sobre fundo claro.</li><li>Bloco de cor da peça liso com grão de papel. Fundo de página em creme ou branquinho pode ser liso.</li></ul></div>
<div class="rb nao"><h3>Não pode</h3><ul><li>Texto em preto.</li><li>Rosa (chiclete ou algodão-doce) como fundo de toda peça, ou em dois posts seguidos. Ele é destaque, não regra de fundo.</li><li>Deixar a ferramenta escolher o fundo. A cor vem sempre no prompt.</li><li>Creme sobre goiaba ou chiclete em texto pequeno.</li><li>Bloco de cor da peça liso sem grão, nem branco puro.</li><li>Preto, azul, amarelo ou vermelho do estilo antigo.</li><li>Cereja sobre chiclete, goiaba, vinho ou pervinca em texto.</li></ul></div>
</div>
<p class="origin">Os valores para copiar estão em <a href="tokens.html">Tokens e arquivos</a>.</p>`);
page('manual-letra.html','Letra · site da marca','manual','letra','',`
<h1>Letra</h1>
<p class="lead">Quatro vozes: título, script, texto e mão. Cada voz tem mais de uma opção, mas <b>cada peça usa só uma letra por voz</b>. Se o título é Young Serif, não entra Shrikhand na mesma arte.</p>
<div class="vt">Título <small>escolha uma por peça</small></div>
<div class="vgrid">
<div class="vcard" style="background:var(--soft)"><div class="nm">Alfa Slab One</div><div class="sp" style="font-family:var(--fonte-alfa-slab-one);font-size:32px">Leitura do mês</div><p>Slab pesada e firme. Funciona melhor em caixa alta.</p></div>
<div class="vcard" style="background:var(--soft)"><div class="nm">Young Serif</div><div class="sp" style="font-family:var(--fonte-young-serif);font-size:32px">Leitura do mês</div><p>Calma e editorial. É a que dá o lado literário.</p></div>
<div class="vcard" style="background:var(--soft)"><div class="nm">Dela Gothic One</div><div class="sp" style="font-family:var(--fonte-dela-gothic-one);font-size:26px">Leitura do mês</div><p>Atitude em caixa alta, para poucas palavras.</p></div>
<div class="vcard" style="background:var(--soft)"><div class="nm">Shrikhand</div><div class="sp" style="font-family:var(--fonte-shrikhand);font-size:32px">Leitura do mês</div><p>Itálica fluida dos anos 70. Uma ou duas palavras.</p></div>
</div>
<div class="vt">Script <small>uma por peça, em uma ou duas palavras</small></div>
<div class="vgrid">
<div class="vcard" style="background:var(--card)"><div class="nm">Pinyon Script</div><div class="sp" style="font-family:var(--fonte-pinyon-script);font-size:48px;color:var(--link)">setembro</div><p>Formal e fina. Precisa de tamanho grande.</p></div>
<div class="vcard" style="background:var(--card)"><div class="nm">Yesteryear</div><div class="sp" style="font-family:var(--fonte-yesteryear);font-size:44px;color:var(--link)">setembro</div><p>Retrô e gorda, com mais humor. Combina com Shrikhand ou slab.</p></div>
</div>
<div class="vt">Texto <small>uma só</small></div>
<div class="vgrid">
<div class="vcard" style="background:var(--card)"><div class="nm">Quicksand</div><div style="font-weight:500;font-size:16px">Encontro no sábado, no parque. <b style="font-weight:700">Leve o livro</b> e a opinião.</div><p>Todo texto corrido, legenda e informação. Regular 500, negrito 700 para uma palavra.</p></div>
</div>
<div class="vt">Mão <small>uma por peça, em um elemento só</small></div>
<div class="vgrid">
<div class="vcard" style="background:var(--soft)"><div class="nm">Reenie Beanie</div><div class="sp" style="font-family:var(--fonte-reenie-beanie);font-size:38px;line-height:1.05">migas, cap. 12 me quebrou</div><p>Rabisco fino e rápido. Precisa de tamanho grande.</p></div>
<div class="vcard" style="background:var(--soft)"><div class="nm">Delicious Handrawn</div><div class="sp" style="font-family:var(--fonte-delicious-handrawn);font-size:32px;line-height:1.1">migas, cap. 12 me quebrou</div><p>Traço desenhado, com peso médio. Combina com doodles.</p></div>
</div>
<h2>A regra, num exemplo</h2>
<div class="grid2">
<div class="rb pode"><h3>Certo: uma letra por voz</h3><div class="mini"><div style="font-family:var(--fonte-pinyon-script);font-size:30px;color:var(--cereja);line-height:1">setembro</div><div style="font-family:var(--fonte-young-serif);font-size:28px;line-height:1.05">Leitura do mês</div><div style="font-weight:500;font-size:14px">Encontro no sábado, no parque.</div><div style="font-family:var(--fonte-reenie-beanie);font-size:26px;color:var(--cereja)">leva o livro!</div></div><p style="font-size:13.5px;margin-top:10px">Young Serif, Pinyon Script, Quicksand e Reenie Beanie: uma de cada voz.</p></div>
<div class="rb nao"><h3>Errado: duas letras de título</h3><div class="mini"><div style="font-family:var(--fonte-pinyon-script);font-size:30px;color:var(--cereja);line-height:1">setembro</div><div style="font-family:var(--fonte-young-serif);font-size:28px;line-height:1.05">Leitura do mês</div><div style="font-family:var(--fonte-shrikhand);font-size:20px;line-height:1.1;color:var(--cereja)">Encontro no sábado</div><div style="font-weight:500;font-size:14px">no parque.</div></div><p style="font-size:13.5px;margin-top:10px">Young Serif e Shrikhand juntas: a mesma voz (título) com duas letras na mesma arte.</p></div>
</div>
<h2>Pode e não pode</h2>
<div class="grid2">
<div class="rb pode"><h3>Pode</h3><ul><li>Título curto, numa das letras de título.</li><li>Script em uma ou duas palavras.</li><li>Quicksand em todo texto corrido.</li><li>Letra de mão em um elemento só.</li></ul></div>
<div class="rb nao"><h3>Não pode</h3><ul><li>Duas letras da mesma voz na mesma peça.</li><li>Script em frase inteira.</li><li>Fonte manuscrita em bloco de texto.</li></ul></div>
</div>
<h2>Na prática ${PROPOSTA}</h2>
<p class="lead" style="margin-bottom:var(--espaco-grade)">O título padrão é a <b>Alfa Slab One</b>: é a letra que aparece quando ninguém escolheu outra. As outras três continuam disponíveis, uma por peça.</p>
<div class="grid2">
<div class="rb pode" style="background:var(--creme)"><h3>Receita barulhenta</h3><div class="mini"><div style="font-family:var(--script);font-size:32px;color:var(--cereja);line-height:1">setembro</div><div style="font-family:var(--titulo);font-size:28px;line-height:1.05">Leitura do mês</div><div style="font-family:var(--corpo);font-size:14px">Encontro no sábado, no parque.</div><div style="font-family:var(--mao);font-size:26px;color:var(--cereja)">leva o livro!</div></div><p style="font-size:13.5px;margin-top:10px">Alfa Slab One, Pinyon Script, Quicksand e Reenie Beanie. Para o livro do mês e as redes.</p></div>
<div class="rb pode" style="background:var(--creme)"><h3>Receita calma</h3><div class="mini"><div style="font-family:var(--fonte-young-serif);font-size:28px;line-height:1.05">Encontro de outubro</div><div style="font-family:var(--corpo);font-size:14px">Sábado, 15h, no parque. Confirme presença até quinta.</div></div><p style="font-size:13.5px;margin-top:10px">Young Serif e Quicksand, sem script nem mão. Para avisos formais e parcerias.</p></div>
</div>
<h3 style="margin:26px 0 8px;font-size:15px">Tamanho mínimo por voz, num feed de 1080 px</h3>
<div class="grid">
<div class="card"><h3>Título</h3><p>72 px ou mais.</p></div>
<div class="card"><h3>Script</h3><p>72 px ou mais. Fino demais abaixo disso.</p></div>
<div class="card"><h3>Texto</h3><p>36 px ou mais, para ler no celular.</p></div>
<div class="card"><h3>Mão</h3><p>56 px ou mais. É fina e precisa de tamanho.</p></div>
</div>
<p class="origin">Valores de partida. Falta testar no celular e na impressão em casa.</p>
<h2>No Canva Pro</h2>
<p>Todas as letras são do Google Fonts e precisam funcionar no Canva Pro. Se alguma não aparecer no Canva da equipe, dá para enviar o arquivo da fonte no Pro, o que é permitido para fontes livres.</p>
${stub('A conferir',['Ver no Canva se aparecem as nove: Alfa Slab One, Young Serif, Dela Gothic One, Shrikhand, Pinyon Script, Yesteryear, Quicksand, Reenie Beanie e Delicious Handrawn.','Ver o que acontece no CapCut.'],'Pendente. Quando conferido, esta caixa vira um aviso de pronto.')}`,
FONTS_LETRA);
const ph=(t='foto')=>`<div class="ph">${t}</div>`;

page('manual-foto.html','Foto · site da marca','manual','foto','',`
<h1>Foto</h1>
<p class="lead">Foto real, com cara de quem estava lá, sempre dentro de uma colagem ou de um bloco de cor. Nada de foto de banco de imagem.</p>
<h2>Quatro jeitos de a foto entrar ${PROPOSTA}</h2>
<div class="grid g2">
<div class="card"><h3>Bloco de foto e de cor</h3><div class="mk mk-bloco"><div class="ph">foto</div><div class="cor">só mais um capítulo</div></div><p>A foto alterna com um bloco liso e uma frase curta. É o jeito mais simples, e o que as meninas fazem no Canva sem esforço.</p></div>
<div class="card"><h3>Polaroid</h3><div class="mk mk-pol"><div class="pol"><div class="ph">foto</div><span>migas</span></div></div><p>Foto com borda branca e legenda à mão, levemente inclinada. Fica bem sobre papel e fita.</p></div>
<div class="card"><h3>Janela</h3><div class="mk mk-jan"><div class="ph arco">foto</div></div><p>A foto num recorte de forma (arco, gota, flor) sobre uma cor. Dá a cara de colagem digital.</p></div>
<div class="card"><h3>Recorte com adesivos</h3><div class="mk mk-rec"><i class="el" data-k="flor-6" style="--c:var(--goiaba);width:64px;height:64px;left:6px;top:4px"></i><span class="cut" style="position:absolute;right:20px;top:10px"><div class="ph blob">foto</div></span><i class="el" data-k="lua" style="--c:var(--pervinca);width:50px;height:44px;right:6px;bottom:8px"></i></div><p>Pessoa ou objeto recortado, com borda branca, e adesivos em volta. O removedor de fundo do Canva Pro faz o recorte.</p></div>
</div>
<h2>O que fotografar ${PROPOSTA}</h2>
<div class="grid">
<div class="card"><h3>Livros</h3><p>Capa, pilha, livro aberto, marcador no meio. É o assunto do clube.</p></div>
<div class="card"><h3>Mãos e detalhes</h3><p>Mão segurando o livro, café, caderno, anotação à mão.</p></div>
<div class="card"><h3>Ambientes</h3><p>O piquenique, a casa de alguém, a mesa do encontro. Foto cheia de coisa, como nas referências.</p></div>
</div>
<h2>Fotos de pessoas</h2>
<div class="rb pode"><h3>Regra de consentimento</h3><ul><li>Rosto de integrante só entra em peça com a autorização dela.</li><li>Sem autorização, a peça usa livro, mão ou ambiente.</li><li>Quem pedir para sair de uma foto sai, em qualquer peça.</li><li>Rosto aparece em polaroid, janela ou recorte, nunca como fundo de tudo.</li></ul></div>
<p class="origin">Falta decidir como a autorização é guardada. Uma sugestão simples: a mensagem da integrante no grupo, com a data.</p>
<h2>Tratamento e tamanho ${PROPOSTA}</h2>
<div class="grid2">
<div class="rb pode"><h3>Pode</h3><ul><li>Ajuste leve de brilho e contraste.</li><li>Foto com grão de papel por cima, junto com o resto da colagem.</li><li>Foto com no mínimo 1080 px no lado maior.</li></ul></div>
<div class="rb nao"><h3>Não pode</h3><ul><li>Filtro forte, preto e branco ou cor que não existe na cena.</li><li>Foto de banco de imagem.</li><li>Foto esticada, pequena demais ou com marca d'água.</li></ul></div>
</div>
${stub('A fazer',['Reunir fotos reais para testar polaroid e janela.','Combinar quem tira as fotos nos encontros e onde elas ficam.','Guardar as autorizações.'],'Depende de você.')}`);

page('manual-voz.html','Voz · site da marca','manual','voz','',`
<h1>Voz</h1>
<p class="lead">A Trama fala como amiga carioca: divertida, acolhedora, direta e sem academicismo. O Rio aparece no jeito de falar, não no desenho.</p>
<h2>Quatro traços</h2>
<div class="grid">
<div class="card"><h3>Divertida e acessível</h3><p>Sem academicismo e sem elitismo. Ninguém precisa provar repertório.</p></div>
<div class="card"><h3>Acolhedora</h3><p>Convida a participar. Quem chega é bem-vinda.</p></div>
<div class="card"><h3>Espontânea</h3><p>Coloquial, com humor e referências do grupo.</p></div>
<div class="card"><h3>Informal, mas organizada</h3><p>Aviso e regra sempre claros: dia, hora e lugar logo no começo.</p></div>
</div>
<h2>Na prática ${PROPOSTA}</h2>
<p class="lead" style="margin-bottom:var(--espaco-grade)">Exemplos para você reagir. Os textos são de teste.</p>
<div class="grid2">
<div class="rb pode diz"><h3>Diz assim</h3><ul><li>&ldquo;Sábado, no parque. Leva o livro e a opinião.&rdquo;</li><li>&ldquo;O livro de setembro chegou. Prepara o coração e a fofoca.&rdquo;</li><li>&ldquo;Spoiler só com aviso, combinado?&rdquo;</li></ul></div>
<div class="rb nao naodiz"><h3>Não diz assim</h3><ul><li>&ldquo;Informamos que o encontro será realizado no próximo sábado.&rdquo;</li><li>&ldquo;A obra do mês convida a uma reflexão sobre a condição humana.&rdquo;</li><li>&ldquo;Participe do nosso clube exclusivo de leitura.&rdquo;</li></ul></div>
</div>
<h2>Regras de escrita</h2>
<div class="grid2">
<div class="rb pode"><h3>Sempre</h3><ul><li>Frase curta. Título de uma linha.</li><li>Dia, hora e lugar no começo do aviso.</li><li>Spoiler só com aviso.</li><li>Humor do grupo, sem obrigação de uma piada por peça.</li></ul></div>
<div class="rb nao"><h3>Nunca</h3><ul><li>Texto formal, de comunicado.</li><li>Tom de crítica literária ou de quem sabe mais.</li><li>Tom meigo demais ou infantil.</li></ul></div>
</div>
<h2>A decidir</h2>
${stub('Pendências da voz',['Bordão oficial. Hoje há três em teste: &ldquo;Caos literário carioca&rdquo;, &ldquo;Entre livros, fofocas e escolhas difíceis&rdquo; e &ldquo;Ler nunca foi tão bagunçado (e divertido)&rdquo;.','Hashtag oficial. Não existe nenhuma.','Uso de emojis.','Como falar com quem lê: &ldquo;você&rdquo;, &ldquo;vocês&rdquo; ou &ldquo;gente&rdquo;.'],'Nenhum foi adotado ainda.')}`);

page('manual-layout.html','Layout · site da marca','manual','layout','',`
<h1>Layout</h1>
<p class="lead">Cheio, mas com estrutura por baixo. A grade, a hierarquia e poucas famílias de forma seguram a bagunça.</p>
<p>Os sete modelos de post (colagem, tipográfico, grid, foto, papelaria, minimalista e livro do mês) estão em <a href="oficina-familias.html">Famílias de layout</a>, na Oficina.</p>
<h2>Duas camadas</h2>
<div class="grid2">
<div class="card"><h3>Camada travada</h3><p>Estrutura, letras, paleta e logo. Vêm prontas no template e não se mexem.</p></div>
<div class="card"><h3>Camada solta</h3><p>Adesivos, recortes, balões e fita. As meninas movem à vontade, sem quebrar a peça.</p></div>
</div>
<h2>Formatos ${PROPOSTA}</h2>
<p class="lead" style="margin-bottom:var(--espaco-grade)">As áreas tracejadas são a margem segura. Os valores são pontos de partida, para testar no celular.</p>
<div class="fmts">
<figure class="fmt"><div class="tela" style="aspect-ratio:4/5"><div class="seguro"></div><span class="z z1">rótulo</span><span class="z z2">título e foto</span><span class="z z3">texto curto</span><span class="z lg">logo</span></div><figcaption><b>Feed 4:5</b><br>1080 × 1350 px. Margem de 72 px.</figcaption></figure>
<figure class="fmt"><div class="tela" style="aspect-ratio:9/16"><div class="livre topo">livre</div><div class="livre base">livre</div><span class="z z2" style="top:34%">título</span><span class="z z3" style="bottom:26%">texto curto</span></div><figcaption><b>Stories 9:16</b><br>1080 × 1920 px. Deixe livres cerca de 250 px no topo e 340 px na base, onde fica a interface.</figcaption></figure>
<figure class="fmt wide"><div class="carr"><div class="tela mini" style="aspect-ratio:4/5"><span class="z z2">capa</span></div><div class="tela mini" style="aspect-ratio:4/5"><span class="z z2">interna</span></div><div class="tela mini" style="aspect-ratio:4/5"><span class="z z2">convite</span></div></div><figcaption><b>Carrossel</b><br>Cada página é um 4:5. Capa com o título, páginas internas com o mesmo fundo e a mesma grade, e uma página final de convite.</figcaption></figure>
</div>
<h2>Hierarquia ${PROPOSTA}</h2>
<div class="grid">
<div class="card"><h3>Um título</h3><p>Curto, em uma das letras de título. É a primeira coisa que se lê.</p></div>
<div class="card"><h3>Um apoio</h3><p>Script ou mão, em uma ou duas palavras. É o toque de humor.</p></div>
<div class="card"><h3>Uma informação</h3><p>Texto corrido em Quicksand, curto. Dia, hora e lugar primeiro.</p></div>
</div>
<p class="origin">Alinhe o texto a uma só borda por peça. O logo fica discreto no canto, e o tamanho dele ainda está por definir na aba Logo.</p>
<h2>Livro do mês</h2>
${stub('A cor vem da capa',['O fundo usa a cor mais próxima da capa do livro dentro da paleta.','O vinho e o creme ficam fixos nas peças, para ligar um mês ao outro.'],'Decidido na dinâmica &ldquo;Isso ou aquilo&rdquo;. A receita e o prompt estão na <a href="oficina-familias.html#familia-07">família 07</a>.')}
<h2>Dois modos ${PROPOSTA}</h2>
<p class="lead" style="margin-bottom:var(--espaco-grade)">Recomendação, não obrigação: a mesma marca em dois volumes.</p>
<div class="grid2">
<div class="card"><h3>Barulhento</h3><p>Colagem: padrão de fundo, papel, foto, fita e formas. Para o livro do mês e as redes.</p></div>
<div class="card"><h3>Calmo</h3><p>Uma cor com grão, o logo e um título, com muito espaço. Para avisos formais e parcerias.</p></div>
</div>
<p class="origin">Os dois exemplos lado a lado estão na <a href="index.html">Visão geral</a>.</p>
<h2>Pode e não pode</h2>
<div class="grid2">
<div class="rb pode"><h3>Pode</h3><ul><li>Mexer na camada solta.</li><li>Poucos elementos inclinados, e pouco.</li><li>Trocar o modo conforme a peça.</li></ul></div>
<div class="rb nao"><h3>Não pode</h3><ul><li>Mexer na camada travada.</li><li>Texto dentro das áreas livres do stories.</li><li>Mais de duas famílias de desenho na mesma peça.</li></ul></div>
</div>`);

page('manual-regras.html','Regras · site da marca','manual','regras','',`
<h1>Regras</h1><p class="lead">Poucas, para não travar. É a lista curta do que sempre vale e do que nunca se faz, reunida das outras abas. Cada grupo aponta para a página onde a regra é explicada.</p>
${[
 ['Logo','manual-logo.html',['Uma tinta só em cada uso: chiclete nos elementos principais, vinho no dia a dia, outras cores quando o fundo deixar.'],['Mexer no desenho do logo.','Logo em cor viva sobre outra cor viva. Só sobre vinho ou vinho noite. A exceção é o chiclete sobre algodão-doce.','Cereja sobre chiclete, goiaba, vinho ou pervinca.']],
 ['Cor','manual-cor.html',['Texto em vinho. Nunca preto.','Texto pequeno sobre chiclete em vinho noite, que passa de 5:1.','Texto pequeno só sobre creme, algodão-doce, pêssego, lima, sálvia, céu ou manteiga.','Chiclete como cor principal e de destaque; fundos calmos ocupam a maior parte da peça.','Cereja como destaque em palavras (script, nota à mão) sobre fundo claro.'],['Creme sobre goiaba ou chiclete em texto pequeno.','Preto, azul, amarelo ou vermelho do estilo antigo.','Rosa forte como fundo de toda peça.','Bloco de cor da peça liso sem grão, nem branco puro. Fundo de página em creme ou branquinho pode ser liso.']],
 ['Letra','manual-letra.html',['Título curto, numa das letras de título.','Uma letra por voz em cada peça: título, script, texto e mão.'],['Duas letras da mesma voz na mesma peça.','Script em frase inteira, ou fonte manuscrita em bloco.']],
 ['Foto','manual-foto.html',['Foto real, dentro de uma colagem ou de um bloco de cor.','Rosto de integrante só com a autorização dela.'],['Foto de banco de imagem.','Filtro forte ou foto esticada.']],
 ['Voz','manual-voz.html',['Frase curta, título de uma linha.','Dia, hora e lugar no começo do aviso.','Spoiler só com aviso.'],['Texto formal, de comunicado.','Tom de crítica literária.']],
 ['Layout','manual-layout.html',['Mexer só na camada solta (adesivos, recortes, balões).','Deixar livres as áreas da interface do stories.'],['Mexer na camada travada (estrutura, letra, paleta, logo).']],
 ['Elementos e peças','manual-elementos.html',['Um padrão por peça, ou fundo liso com grão.','Menos elementos que vontade de pôr. Nem toda peça leva elementos.','Elemento grande, cortado pela borda ou em tom sobre tom vale mais que muitos pequenos.'],['Mais de duas famílias de desenho na mesma peça.']]
].map(([t,href,ok,no])=>`<h2>${t} <a class="ver" href="${href}">ver a aba</a></h2><div class="grid2"><div class="rb pode"><h3>Sempre</h3><ul>${ok.map(i=>`<li>${i}</li>`).join('')}</ul></div><div class="rb nao"><h3>Nunca</h3><ul>${no.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>`).join('')}`);

page('manual-elementos.html','Elementos · site da marca','manual','elementos','',`
<h1>Elementos</h1><p class="lead">Tudo o que se usa para montar uma peça. Aqui se vê e se aprende a usar; o arquivo vem da pasta de entrega.</p>
<div class="grid">
${card('elementos-formas.html','Formas e abstratos','SVG, troca de cor.',tg('pronto',formas.length+' prontos'))}
${card('elementos-desenhos.html','Desenhos de objetos','Livro, xícara, óculos, flores e mais.',tg('pronto','48 desenhos'))}
${card('elementos-rabiscos.html','Rabiscos e destaques','Setas, brilhos, estrelas, sublinhados e carinhas, em uma cor só.',tg('pronto',rabiscos.length+' prontos'))}
${card('elementos-alfabeto.html','Alfabeto','Letras recortadas de revista, para montar palavras.',tg('receber','a receber'))}
${card('elementos-molduras.html','Molduras e recortes','Polaroids, janelas, recortes.',tg('receber','a receber'))}
${card('elementos-papel-fita.html','Papel e fita','Recortes de papel, fita, clipe.',tg('receber','a receber'))}
${card('elementos-fundos.html','Fundos de post','Xadrez e listras desenhados à mão, para base dos posts.',tg('pronto','8 fundos'))}
${card('elementos-padroes.html','Padrões e texturas','Xadrez, listra, bolinha, papel.',tg('pronto','3 sobreposições'))}
</div>
<h2>Como usar os elementos</h2>
<p class="lead" style="margin-bottom:var(--espaco-grade)">Os elementos são uma caixa de ferramentas, não uma lista de coisas a pôr. Nem toda peça leva elementos, e quando leva, raramente leva todos. Seis jeitos de usar:</p>
<div class="grid g2">
<div class="card"><h3>Grande ao fundo</h3><div class="uso" style="background:var(--creme)"><i class="el abs" data-k="flor-6" style="--c:var(--algodao);width:230px;height:230px;left:-40px;top:-60px"></i><i class="el abs" data-k="folha-2" style="--c:var(--pessego);width:170px;height:140px;right:-30px;bottom:-30px"></i><span class="t2">Leitura do mês</span></div><p>Uma forma enorme, cortada pela borda, quase uma padronagem. Com grão de papel por cima, como na arte do amigo oculto (aba Oficina). Dá textura sem virar figurinha.</p></div>
<div class="card"><h3>Tom sobre tom</h3><div class="uso" style="background:var(--algodao)"><i class="el abs" data-k="abstrato-5" style="--c:var(--pessego);width:150px;height:110px;left:10px;top:20px"></i><i class="el abs" data-k="arco-1" style="--c:var(--pessego);width:110px;height:90px;right:14px;bottom:10px"></i><span class="t2">sábado, no parque</span></div><p>O elemento numa cor vizinha do fundo. Aparece sem pesar, e o texto continua mandando.</p></div>
<div class="card"><h3>Um só, pontual</h3><div class="uso" style="background:var(--papel)"><i class="el abs" data-k="flor-2" style="--c:var(--chiclete);width:56px;height:56px;right:18px;top:16px"></i><span class="t2">só mais um capítulo</span></div><p>Um ou dois elementos pequenos, como um toque. O resto da peça fica calmo.</p></div>
<div class="card"><h3>Figurinha</h3><div class="uso" style="background:var(--creme)"><span class="cut" style="position:absolute;left:30px;top:30px"><img src="ob/objeto-xicara-pires-colorido.webp" alt="" style="width:96px;height:auto;display:block"></span><span class="t2">do Rio</span></div><p>Desenho ou elemento recortado com borda branca, como um adesivo. É um dos usos, e só às vezes.</p></div>
<div class="card"><h3>Rabisco de destaque</h3><div class="uso" style="background:var(--papel)"><i class="el abs" style="--u:url('rb/estrela-9.svg');--c:var(--chiclete);width:34px;height:34px;left:40px;top:28px"></i><i class="el abs" style="--u:url('rb/seta-4.svg');--c:var(--vinho);width:64px;height:40px;right:28px;top:22px"></i><span class="t2">leva o livro!</span><i class="el abs" style="--u:url('rb/traco-12.svg');--c:var(--cereja);width:150px;height:14px;left:calc(50% - 75px);top:92px"></i></div><p>Seta, sublinhado, brilho ou estrelinha, em uma cor só, para chamar o olho para uma informação. Um ou dois por peça, como caneta de caderno.</p></div>
<div class="card"><h3>Fundo de verdade</h3><div class="uso" style="background:url(fd/fundo-listra-larga-pervinca-creme.webp) center/cover"><span class="t2" style="background:var(--creme);padding:8px 14px">Na nossa estante</span></div><p>Xadrez ou listra desenhados à mão. O texto vai sobre um papel, nunca direto no padrão.</p></div>
</div>`);
page('elementos-formas.html','Formas e abstratos · site da marca','manual','elementos','formas',`
<h1>Formas e abstratos</h1><p class="lead">Formas lisas em vetor, de uma cor só. Qualquer uma pode ser pintada com uma cor da paleta.</p>
<div id="cat" data-slug="formas"></div>`);
const EXTRA={
 textura:'<div class="grid"><div class="card"><h3>Grande ao fundo</h3><p>Use uma forma texturizada grande, cortada pela borda. Quase uma padronagem.</p></div><div class="card"><h3>Tom sobre tom</h3><p>Escolha o tom vizinho do fundo (pêssego sobre algodão-doce, por exemplo).</p></div><div class="card"><h3>Peso do arquivo</h3><p>Cada PNG tem cerca de 400 KB. Aqui aparecem só as miniaturas.</p></div></div><p class="origin" style="margin-bottom:var(--espaco-grade)">Para refazer os arquivos ou gerar em outro tom, é só rodar o gerador de textura, que fica na pasta do projeto.</p>',
 padroes:'<div class="grid"><div class="card"><h3>Como usar</h3><p>Ponha a sobreposição por cima da arte inteira, como a última camada, e baixe a transparência até a textura aparecer sem sujar a cor.</p></div><div class="card"><h3>Qual escolher</h3><p>O leve é o de uso corrente. O marcado serve a fundo liso grande. O claro é para fundo escuro.</p></div></div><p class="origin" style="margin-bottom:var(--espaco-grade)">Valores de transparência a testar no Canva. Uma sugestão de partida: de 40% a 70%.</p>'
};
const SUBS={rabiscos:['Rabiscos e destaques','Riscos de caderno e de scrapbook, em uma cor só: setas, sublinhados, brilhos, estrelinhas, bolinhas, carinhas e pequenos símbolos. SVG, para pintar com a paleta.'],alfabeto:['Alfabeto','Letras e sinais recortados, como de revista, para montar palavras e títulos na colagem. PNG com cor fixa, cada letra em vários papéis.'],molduras:['Molduras e recortes','Polaroids, janelas e recortes onde a foto entra.'],'papel-fita':['Papel e fita','Papel rasgado, fita, clipe, etiqueta.'],fundos:['Fundos de post','Xadrez e listras desenhados à mão, em várias cores, como base para os posts.'],padroes:['Padrões e texturas','Sobreposições de grão e fibra de papel, para pôr por cima da arte. Os padrões de fundo (xadrez, listra, bolinha) entram depois.'],desenhos:['Desenhos de objetos','Desenhos coloridos de objetos do mundo do clube: livros, mesa e café, flores e plantas, casa e conforto. PNG com cor fixa.']};
Object.entries(SUBS).forEach(([k,[t,d]])=>page('elementos-'+k+'.html',t+' · site da marca','manual','elementos',k,`<h1>${t}</h1><p class="lead">${d}</p>${(EXTRA[k]||'')}<div id="cat" data-slug="${k}"${(k==='textura'||k==='padroes'||k==='desenhos'||k==='fundos')?' data-largo="1"':''}></div>`));

// ---- Famílias de layout e Como gerar ----
const CORPOF=`Tom: criativo, irreverente e próximo; contemporâneo e editorial, sem parecer infantil, romântico demais ou corporativo.

Cores (use só estas, com estes códigos): papel #FDFBF4, creme #FFF4E0, branquinho #F6F8FF, algodão-doce #FFC2E2, pêssego #FFB59E, sálvia #CADDBF, céu #BCDFF2, manteiga #FFE8A3, goiaba #FF6B4A, chiclete #F2609F, cereja #C63236, vinho #5A1830, vinho noite #3A1220, lima #CFDD5A, pervinca #8FA6F2. Use de 3 a 5 por peça: uma dominante, uma ou duas de apoio e um acento. O fundo é sempre a cor que eu indicar em [COR DO FUNDO], lisa; nunca escolha o fundo por conta própria e nunca use rosa como fundo se eu não pedir. O rosa chiclete é destaque e não precisa ser a cor dominante. Lima e pervinca só em pequenas doses. Texto em vinho (ou creme sobre fundo escuro), nunca preto. Garanta contraste para leitura.

Letras, uma de cada função: título em slab pesado (como Alfa Slab One); frase curta em script fino (como Pinyon Script), só como acento; apoio escrito à mão (como Reenie Beanie); informação em sans simples (como Quicksand). Não misture outras fontes decorativas.

Elementos: formas orgânicas e geométricas simples, rabiscos curtos, papel rasgado, fita, etiquetas, listras e xadrez, com textura discreta de papel e de impressão. Não precisam aparecer todos, e nenhum entra só para preencher espaço. Sem corações e sem estrelas de ícone.

Fotografia: se houver foto anexada, preserve a imagem real, sem alterar rostos nem corpos. Se não houver, deixe o espaço reservado e nunca crie pessoas.

Logo: não invente. Reserve uma área pequena embaixo para o logo "A Trama do Rio". Entregue só a arte final, ocupando toda a imagem, sem celular nem mockup. Escreva exatamente os textos pedidos, sem mudar nenhuma letra.`;
const BASEF=fmt=>`Crie uma arte ${fmt} para o clube de leitura A Trama do Rio, um clube do livro de mulheres adultas.\n\n`+CORPOF;
const INSTRUCOES=`Você me ajuda a criar artes para o Instagram do clube de leitura A Trama do Rio, um clube do livro de mulheres adultas. Siga sempre estas regras.\n\n`+CORPOF+`\n\nFormatos: feed 4:5 (1080 × 1350 px); stories 9:16 (1080 × 1920 px), com cerca de 250 px livres no topo e 340 px na base. Quando eu colar uma direção de família de layout (01 a 07), siga só aquela direção e os textos que eu passar.`;
const fam=(n,nome,dens,usar,caminho,mock,comp,textos,prompt)=>{const id='fm'+n;return `<article class="rec" id="familia-${n}"><div class="rec-mock">${mock}</div><div class="rec-txt"><h3>${n} · ${nome}</h3><p><span class="tag">${dens}</span> ${usar}</p><h4>Melhor caminho</h4><p>${caminho}</p><h4>Composição</h4><ul>${comp.map(c=>'<li>'+c+'</li>').join('')}</ul><h4>Textos</h4><ul>${textos.map(c=>'<li>'+c+'</li>').join('')}</ul><details class="mais"><summary>Ver o prompt para o ChatGPT</summary><pre class="prompt" id="${id}">${esc(prompt)}</pre><pre class="prompt" id="${id}b" hidden>${esc(BASEF(FEED))}</pre><button class="btn copiar" type="button" data-a="${id}" data-b="${id}b">Copiar bloco e família</button></details></div></article>`};
const FAMILIAS=[
 fam('01','Colagem maximalista','Alta densidade','Retrospectivas, encontros, eventos e posts com muitas fotos e informações.',
  'ChatGPT, para a textura e a montagem. As fotos reais entram melhor no Canva, por cima.',
  tela('4/5',[['título',6,5,62,18,'zv'],['foto',6,27,40,30,'zf'],['foto',50,22,42,26,'zf'],['foto',28,52,40,24,'zf'],['subtítulo',50,64,44,10,'zp'],['rabiscos',72,80,22,8,'zl']]),
  ['Base em papel ou creme, com grão.','Três fotos recortadas e sobrepostas, em ângulos levemente diferentes, com borda de papel rasgado e fita.','Blocos de cor lisos em chiclete, goiaba e vinho, com borda imperfeita, atrás e entre as fotos.','Poucos rabiscos e uma ou duas figurinhas pequenas, em dois agrupamentos (um no título, outro nas fotos).','Hierarquia: título, fotos, informações.'],
  ['Título: curto, gigante, em slab vinho.','Subtítulo: uma linha em sans.'],
  `Direção: família 01, colagem maximalista (alta densidade). Página de revista independente, inspirada em zines e scrapbooks contemporâneos.

Texto da arte:
Título gigante em slab vinho: "[TÍTULO]"
Subtítulo em sans: "[SUBTÍTULO]"
Uma palavra do título destacada com rabisco ou sublinhado em chiclete.

Composição: base em papel ou creme com grão. Três fotos recortadas e sobrepostas, em ângulos levemente diferentes, com bordas de papel rasgado e fita; deixe os três espaços reservados. Blocos de cor lisos em chiclete, goiaba e vinho, com bordas imperfeitas, atrás e entre as fotos. Poucos rabiscos e uma ou duas figurinhas pequenas, em agrupamentos intencionais, nunca espalhados. Contraste forte de escala entre o título e o resto. Três níveis de profundidade, como se fosse montada à mão. Hierarquia clara: título, fotos, informações.

Exemplo de texto: título "Nosso último encontro"; subtítulo "Entre livros, conversas e boas histórias".`),
 fam('02','Editorial tipográfico','Alta densidade','Anúncios importantes, campanhas, eventos e posts de impacto.',
  'Claude, porque o texto sai exato e a letra é a do manual. Canva também serve.',
  tela('4/5',[['linha 1',6,6,88,20,'zv'],['linha 2',6,28,88,24,'zp'],['linha 3',6,54,88,20,'zv'],['mensagem',6,78,56,8,'zl'],['complemento',6,88,60,6,'zr']]),
  ['Fundo em goiaba, creme ou vinho, o que der mais impacto e leitura. Texto em vinho, ou creme sobre vinho.','Título muito grande, em duas ou três linhas, com quebras expressivas, ocupando boa parte da arte.','Slab pesado com sans, e um detalhe em letra de mão.','Um ou dois blocos de cor contrastante.','Rabisco discreto sublinhando uma palavra. Sem foto e sem ilustração.'],
  ['Título: em caixa alta, 2 a 3 palavras.','Mensagem: uma frase curta.','Complemento: uma linha.'],
  `Direção: família 02, editorial tipográfico (alta densidade). A tipografia é o principal elemento visual, com a força de um pôster cultural contemporâneo, adulto e memorável. Sem fotografias e sem ilustrações complexas.

Texto da arte:
Título em slab pesado, enorme, quebrado em duas ou três linhas: "[TÍTULO EM CAIXA ALTA]"
Mensagem em sans: "[MENSAGEM]"
Complemento em letra de mão: "[COMPLEMENTO]"

Composição: escolha o fundo de maior impacto e leitura entre goiaba (texto vinho), creme (texto vinho, com blocos goiaba) e vinho (texto creme). A tipografia ocupa grande parte da área. Variação ousada de escala e de alinhamento. Um ou dois blocos de cor contrastante. Um rabisco discreto enfatizando a palavra mais importante.

Exemplo de texto: título "TEM TRAMA NO AR"; mensagem "Vem novidade por aí!"; complemento "Fique de olho nas próximas histórias."`),
 fam('03','Grid informativo','Média densidade','Avisos, regras, datas, cronogramas e votações do clube.',
  'Claude ou Canva: muita informação pede texto exato. O ChatGPT erra letra em blocos pequenos.',
  tela('4/5',[['título',6,6,60,14,'zv'],['data',6,23,54,26,'zc'],['hora',60,23,34,26,'zr'],['local',6,52,40,22,'zp'],['aviso',48,52,46,22,'zv']]),
  ['Base em creme ou papel.','Cards de tamanhos diferentes em vinho, pêssego, goiaba e algodão-doce, com hierarquia por proporção e alinhamento.','Etiquetas pequenas, divisórias e linhas.','Rabiscos só onde a informação é importante. Sem ícone genérico em cada item.','Leitura natural: título, depois o resto.'],
  ['Título: uma linha.','Informações: data, hora, local, aviso, cada uma em seu card.'],
  `Direção: família 03, grid informativo (média densidade). Grid editorial modular e assimétrico, informativo mas expressivo e divertido.

Texto da arte:
Título em slab vinho: "[TÍTULO]"
Cards, um para cada item (data em destaque, o resto menor):
"[ITEM 1]"
"[ITEM 2]"
"[ITEM 3]"
"[ITEM 4]"

Composição: base em creme ou papel. Cards em vinho, pêssego, goiaba e algodão-doce, todos de tamanhos diferentes, criando hierarquia por proporção e alinhamento. Pequenas etiquetas, divisórias e linhas finas. Rabiscos só para destacar informação importante. Não use ícones genéricos para representar cada informação. A leitura vai do título para as informações secundárias.

Exemplo de texto: título "Próximo encontro"; itens "Domingo, 01 de novembro", "Às 15h", "Local a confirmar", "Não esqueça seu livro!"`),
 fam('04','Fotografia editorial','Média densidade','Fotos de encontros, livros, bastidores e integrantes.',
  'Canva: a foto real entra no lugar certo e o texto fica exato. No ChatGPT, só com a foto anexada.',
  tela('4/5',[['foto',0,0,100,68,'zf'],['título',6,72,60,14,'zp'],['complemento',6,88,50,7,'zc'],['selo',72,74,22,14,'zl']]),
  ['Foto principal ocupando de 60% a 75% da arte, sem texto sobre rostos.','Uma área de texto bem definida, em papel ou bloco de cor.','Uma moldura ou recorte de papel, e uma etiqueta ou selo.','Poucos rabiscos. Combinação de creme, vinho, chiclete e pêssego.'],
  ['Título: uma frase curta em slab.','Complemento: uma linha em sans.'],
  `Direção: família 04, fotografia editorial (média densidade). A foto é a protagonista, com espontaneidade e proximidade, como um editorial cultural.

Texto da arte:
Título em slab vinho: "[TÍTULO]"
Complemento em sans: "[COMPLEMENTO]"

Composição: a fotografia principal ocupa de 60% a 75% da arte. Se houver foto anexada, use-a sem alterar rostos, corpos nem cores; se não houver, deixe o espaço reservado e não crie rostos nem integrantes. Uma área de texto bem definida, em papel ou bloco de cor. Uma moldura ou recorte de papel e uma etiqueta ou selo. Poucos rabiscos. Não cubra rostos nem partes importantes da foto. Cores: creme, vinho, chiclete e pêssego.

Exemplo de texto: título "Entre páginas e encontros"; complemento "Momentos da nossa última reunião".`),
 fam('05','Papelaria e padrões','Baixa a média densidade','Listas, curiosidades, recomendações, enquetes e conteúdos recorrentes.',
  'Claude, para estruturas de padrão limpas. ChatGPT, se quiser a superfície mais granulada.',
  tela('4/5',[['papel central',12,14,76,72,'zp'],['título',18,20,64,14,'zr'],['capa',18,40,18,26,'zf'],['capa',41,40,18,26,'zf'],['capa',64,40,18,26,'zf']],false,'url(fd/fundo-listra-fina-cereja-algodao.webp) center/cover'),
  ['Escolha uma só estrutura: fundo listrado com papel central; xadrez com etiqueta; folha de caderno; bilhete com fita; ou papel recortado sobre cor.','Padrão com contraste moderado, que não compete com o conteúdo.','Algodão-doce, creme, vinho e goiaba, com textura sutil de papel.','Pouquíssimos adesivos.'],
  ['Título: uma linha.','Mensagem: uma linha.','Espaços para itens, como as capas de livros.'],
  `Direção: família 05, papelaria e padrões (baixa a média densidade). Papelaria editorial contemporânea, com acabamento sofisticado e personalidade autoral.

Texto da arte:
Título em slab vinho: "[TÍTULO]"
Mensagem em sans: "[MENSAGEM]"
Espaços reservados para [NÚMERO] itens (por exemplo, capas de livros), para serem preenchidos depois.

Composição: escolha apenas UMA estrutura: fundo listrado com uma área central de papel; xadrez com etiqueta sobreposta; folha de caderno; bilhete preso por fita adesiva; ou papel recortado sobre superfície colorida. Padrão de contraste moderado, que não compete com o conteúdo. Combinações de algodão-doce, creme, vinho e goiaba. Papel levemente granulado e pequenas imperfeições de impressão. Evite excesso de adesivos e de elementos decorativos.

Exemplo de texto: título "Na nossa estante"; mensagem "3 livros que queremos ler"; três espaços de capas.`),
 fam('06','Minimalista expressivo','Baixa densidade','Frases, capas, citações e posts que criam respiro no feed.',
  'Claude: poucas peças, letra exata, resultado limpo. É a família ideal para eu gerar aqui.',
  tela('4/5',[['forma',55,10,36,26,'zc'],['frase',12,52,60,16,'zp'],['assinatura',12,88,30,4,'zr']]),
  ['Fundo liso em papel, creme, sálvia, céu ou manteiga (algodão-doce só de vez em quando).','Duas ou três cores só.','Uma forma gráfica marcante, de preferência com textura.','Muito espaço livre, alinhamento preciso, e contraste entre escala grande e detalhe pequeno.','Sem colagem, cards nem excesso de rabisco.'],
  ['Frase: curta, em slab ou script, grande.','Assinatura: pequena, em sans.'],
  `Direção: família 06, minimalista expressivo (baixa densidade). Pôster tipográfico contemporâneo, simples, marcante e sofisticado, com bastante espaço livre.

Texto da arte:
Frase principal grande, em slab vinho ou script cereja: "[FRASE]"
Assinatura discreta em sans: "A Trama do Rio"

Composição: fundo liso na cor [COR DO FUNDO] (papel, creme, sálvia, céu ou manteiga). Apenas duas ou três cores da paleta. Uma forma gráfica marcante e texturizada. Frase centralizada ou posicionada de forma assimétrica, deixando muito espaço livre. Alinhamentos precisos e contraste entre escala grande e detalhes pequenos. Sem colagem, sem cards, sem excesso de rabiscos. A personalidade vem da tipografia e da composição.

Exemplo de texto: frase "Só mais um capítulo."; assinatura "A Trama do Rio".`),
 fam('07','Livro do mês','Média densidade','O anúncio da leitura do mês. A cor do fundo vem da capa do livro.',
  'Canva, para pôr a capa real. Para gerar o fundo e a composição, ChatGPT. A capa nunca é gerada por IA.',
  tela('4/5',[['rótulo',8,6,40,7,'zl'],['capa do livro',8,18,44,52,'zf'],['título',56,18,38,22,'zp'],['autora',56,42,38,10,'zc'],['frase à mão',56,55,38,15,'zr'],['data do encontro',8,76,84,12,'zv']]),
  ['Fundo calmo, na cor mais próxima da capa, dentro da paleta.','Uma forma grande e texturizada atrás da capa, em tom sobre tom.','Capa do livro em polaroid ou janela, levemente inclinada.','Papel com título e autora; bloco vinho com a data do encontro.'],
  ['Rótulo: "LIVRO DO MÊS".','Título e autora.','Frase à mão: uma impressão curta.','Data: dia, hora e lugar.'],
  `Direção: família 07, livro do mês (média densidade). Anúncio da leitura do mês, com a capa do livro como protagonista.

Texto da arte:
Rótulo na fita lima: "LIVRO DO MÊS"
Título em slab vinho: "[NOME DO LIVRO]"
Autora em sans: "[NOME]"
Frase à mão em cereja: "[FRASE CURTA]"
Bloco vinho, letra clara: "[DIA, HORA E LUGAR]"

Composição: deixe um espaço reservado para a capa do livro, em polaroid ou janela, levemente inclinada, à esquerda; não crie nem redesenhe a capa. Fundo liso na cor mais próxima da capa, dentro da paleta: [COR DO FUNDO]. Uma forma grande e texturizada atrás, em tom sobre tom. Papel com título e autora ao lado. Bloco vinho com a data embaixo.`)
];
page('oficina-familias.html','Famílias de layout · site da marca','oficina','familias','',`
<h1>Famílias de layout ${PROPOSTA}</h1>
<p class="lead">Sete jeitos de montar um post, todos dentro da mesma identidade. Não são estilos soltos: o que muda é a densidade, o esquema e a cor dominante. O que não muda são as letras, a paleta, o logo e o grão.</p>
${divXadrez()}
<h2>Ritmo do feed</h2>
<p>Alta (01, 02), média (03, 04, 07) e baixa (05, 06). A regra simples: nunca duas altas seguidas, e um post calmo a cada dois cheios.</p>
<h2>As famílias</h2>
${FAMILIAS.join('')}
<h2>O que padronizar e o que varia</h2>
<ul>
<li><b>Fixo:</b> as quatro letras, uma por função; a paleta; o texto em vinho; o logo pequeno e no mesmo canto; o grão por cima.</li>
<li><b>Varia:</b> a família; a cor dominante (não repetir a mesma em dois posts seguidos); ter foto ou não; a densidade.</li>
<li><b>Evitar:</b> mais de cinco cores; o mesmo esquema duas vezes seguidas; texto sobre rosto; elemento sem função.</li>
</ul>
<p class="origin">Os módulos nasceram de uma sugestão do ChatGPT, reescrita com as regras da marca: as quatro letras com nome, os códigos das cores, sem corações e sem estrelas de ícone. Decisão em aberto: estrelas feitas à mão entram ou não.</p>
<h2>Avaliar o conjunto</h2>
<p>Depois de gerar várias peças, reúna todas numa conversa e cole este pedido. Ele serve de revisão crítica do feed.</p>
<pre class="prompt" id="av1">Analise estas propostas de posts para o Instagram de A Trama do Rio como um sistema de identidade visual, não como peças isoladas.
Considere a paleta oficial da marca e as referências criativas fornecidas.
Avalie:
1. Se as peças parecem pertencer à mesma marca.
2. Se existe variedade suficiente de layouts e composições.
3. Se alguma combinação de cores aparece excessivamente.
4. Se os estilos tipográficos mantêm consistência.
5. Se os elementos gráficos recorrentes ajudam a construir reconhecimento.
6. Se o feed alterna adequadamente composições densas e minimalistas.
7. Se há excesso de decoração ou problemas de legibilidade.
8. Quais elementos deveriam ser padronizados e quais deveriam continuar variáveis.

Seja crítico. Não presuma que as propostas estão boas.
Identifique problemas concretos e proponha ajustes específicos para cada modelo.
Ao final, recomende um pequeno conjunto de regras visuais que permita criar novos posts sem perder a consistência da marca.</pre>
<button class="btn copiar" type="button" data-a="av1">Copiar pedido de avaliação</button>
`);
page('oficina-gerar.html','Como gerar · site da marca','oficina','gerar','',`
<h1>Como gerar as artes ${PROPOSTA}</h1>
<p class="lead">Três caminhos, uma fonte só. A fonte é o bloco da marca, as famílias de layout e os arquivos do kit. Cada ferramenta usa isso de um jeito.</p>
${divXadrez()}
<h2>Qual caminho para qual peça</h2>
<div class="grid" style="margin-top:14px">
<div class="card"><h3>Claude</h3><p>Para o simples e exato: letra do manual, cor com código, logo e textura certos. Serve para as famílias 02, 03, 05 e 06. Não faz colagem pintada nem foto trabalhada.</p></div>
<div class="card"><h3>ChatGPT</h3><p>Para o refinado: textura, colagem e composição mais livre. Serve para 01, 05 e 07. Erra letra e logo, então confira cada geração.</p></div>
<div class="card"><h3>Canva</h3><p>Para a personalização e a foto real: serve para 04 e 07, e para o texto exato por cima do que o ChatGPT gerou.</p></div>
</div>
<h2>No ChatGPT: montar o Projeto</h2>
<p>O ChatGPT não guarda as diretrizes sozinho. O jeito é um <b>Projeto</b> com instruções e arquivos fixos (ou um GPT personalizado). Confira no seu plano o que está disponível.</p>
<ol>
<li>Crie um projeto chamado "A Trama do Rio".</li>
<li>Nas instruções do projeto, cole o texto abaixo.</li>
<li>Anexe os arquivos: o logo em vinho, três ou quatro elementos com textura, o grão de papel leve e a arte do amigo oculto, como exemplo de estilo.</li>
<li>Em cada conversa nova, dentro do projeto, cole só a direção da família (a página <a href="oficina-familias.html">Famílias de layout</a>) com os textos no lugar dos colchetes e a cor do fundo no lugar de [COR DO FUNDO], escolhida pelo rodízio de fundos (veja os três últimos posts no calendário).</li>
<li>Se o texto ou o logo vierem errados, peça a arte com os espaços vazios e ponha o texto exato no Canva.</li>
</ol>
<pre class="prompt" id="inst1">${esc(INSTRUCOES)}</pre>
<button class="btn copiar" type="button" data-a="inst1">Copiar instruções do projeto</button>
<p class="origin">Sem Projeto, use o botão "Copiar bloco e família" de cada família: ele cola o bloco da marca e a direção juntos.</p>
<h2>No Claude</h2>
<p>Você pede aqui, no chat, dizendo a família e o texto. Eu monto a arte com as letras, as cores e o logo da marca e salvo o PNG na pasta de entrega. O site não entrega arquivo para baixar, então a saída sempre é a pasta.</p>
<h2>No Canva</h2>
<ol>
<li>Brand Kit: as doze cores com código, as letras da marca e os logos.</li>
<li>Subir os elementos com textura e o grão de papel.</li>
<li>Um modelo por família, com as áreas de foto e de texto já marcadas.</li>
<li>Testar cada modelo com uma tarefa real, sem ajuda.</li>
</ol>
<p class="origin">O Canva ainda não está conectado a esta conversa. Quando estiver, dá para eu montar os modelos por lá.</p>
`);

page('oficina.html','Oficina · site da marca','oficina','','',`
<h1>Oficina</h1><p class="lead">Receitas prontas por peça: como juntar cor, letra, logo e elementos para cada coisa que a gente faz. O manual diz o que cada decisão é; aqui se vê funcionando.</p>
${divXadrez()}
<div class="grid" style="margin-top:22px">
${card('oficina-kit.html','Kit de Natal','Ecobag, 3 marca-páginas, cartela de adesivos e caneca.',tg('pronto','6 testes'))}
${card('manual-logo.html','Combinações de cor do logo','18 combinações com contraste, na aba Logo do Manual.',tg('pronto','no manual'))}
${card('oficina-feed.html','Post de feed','Exemplo real e três receitas com prompt.',tg('pronto','3 receitas'))}
${card('oficina-stories.html','Stories e capas','Enquete e aviso rápido, em 9:16.',tg('pronto','2 receitas'))}
${card('oficina-colagem.html','Receitas de colagem','As seis camadas, na ordem certa.',tg('pronto','receita'))}
${card('oficina-familias.html','Famílias de layout','Sete jeitos de montar um post, com prompt para cada um.',tg('receber','proposta'))}
${card('oficina-gerar.html','Como gerar as artes','Claude, ChatGPT e Canva: qual usar e como montar o Projeto.',tg('receber','proposta'))}
</div>`);

page('oficina-kit.html','Kit de Natal · site da marca','oficina','kit','',`
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><filter id="cutf" x="-25%" y="-25%" width="150%" height="150%"><feMorphology in="SourceAlpha" operator="dilate" radius="3.2" result="d"/><feFlood flood-color="var(--branco)"/><feComposite in2="d" operator="in" result="w"/><feMerge><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>
<h1>Kit de Natal</h1>
<p class="lead">Seis amostras para ver se a base se segura nos objetos. Pensadas para imprimir em casa: nada de fundo cheio onde a impressora doméstica não alcança (ecobag), e fundo cheio onde o papel aguenta (marca-páginas e adesivo). Os textos são de exemplo, e as amostras ainda não são arte final.</p>
<div class="apps">
 <div class="app"><div class="ecobag"><div class="alca"></div><div class="corpo">
  <i class="el abs" data-k="flor-6" style="--c:var(--cereja);width:96px;height:96px;top:-22px;right:-24px"></i>
  <i class="el abs" data-k="dots-2" style="--c:var(--cereja);width:44px;height:50px;left:10px;bottom:8px"></i>
  <i class="el abs" data-k="rabisco-6" style="--c:var(--cereja);width:96px;height:30px;right:14px;bottom:14px"></i>
  <i class="lgm" style="--c:var(--cereja);width:148px;height:148px;position:relative;z-index:1"></i>
  <div class="frase2" style="color:var(--cereja);position:relative;z-index:1">lê, fofoca<br>e volta amanhã</div></div></div>
  <small>Ecobag cru · estêncil em uma cor (cereja), com logo e elementos</small></div>
 <div class="app"><div class="mp xadrez grao" style="--p1:var(--chiclete);--p2:var(--algodao);--ps:38px">
  <div class="fita" style="top:14px;left:14px;transform:rotate(-8deg);z-index:7"></div>
  <div class="papel rasgado" style="position:relative;width:92px;padding:16px 8px 20px;transform:rotate(-2deg);z-index:6"><b class="t1" style="font-size:22px">Já<br>volto!</b><span class="sc1" style="font-size:23px">cap. 12</span></div>
  <span class="cut" style="position:relative;z-index:6"><i class="el" data-k="flor-3" style="--c:var(--lima);width:60px;height:60px"></i></span></div>
  <small>Marca-páginas A · padrão, papel, fita e flor</small></div>
 <div class="app"><div class="mp grao" style="background:var(--goiaba)">
  <i class="el abs" data-k="arco-3" style="--c:var(--pessego);width:150px;height:96px;left:-18px;bottom:-18px;z-index:0"></i>
  <i class="el abs" data-k="dots-7" style="--c:var(--creme);width:46px;height:56px;right:8px;top:10px;z-index:0"></i>
  <i class="lgm" style="--c:var(--vinho);width:92px;height:92px;position:relative;z-index:1"></i>
  <div class="tt" style="margin-top:78px;position:relative;z-index:1">só mais<br>um<br>capítulo</div></div>
  <small>Marca-páginas B · bloco de cor, título e arco</small></div>
 <div class="app"><div class="mp grao" style="background:var(--creme)">
  <i class="el abs" data-k="flor-6" style="--c:var(--goiaba);width:116px;height:116px;left:-34px;top:-30px;z-index:0"></i>
  <i class="el abs" data-k="folha-2" style="--c:var(--chiclete);width:128px;height:106px;right:-32px;bottom:-22px;z-index:0"></i>
  <div class="tt" style="font-size:30px;position:relative;z-index:1;margin-top:40px">leia<br>livros</div>
  <div class="sc2" style="position:relative;z-index:1">sempre</div></div>
  <small>Marca-páginas C · creme com flor e folha</small></div>
 <div class="app"><div class="cartela" id="cartela"></div><small>Cartela de adesivos · desenhos, rabiscos e frases, cada um com borda branca de corte</small></div>
 <div class="app"><div class="caneca xadrez grao" style="--p1:var(--algodao);--p2:var(--chiclete);--ps:34px">
  <div style="background:var(--creme);border-radius:50%;padding:8px;display:grid;place-items:center"><i class="lgm" style="--c:var(--vinho);width:104px;height:104px"></i></div>
  <div style="background:var(--creme);padding:12px 18px 14px;transform:rotate(-2deg)"><div class="tt" style="font-size:25px">café, livro<br>e fofoca</div></div>
  <span class="cut"><i class="el" data-k="flor-6" style="--c:var(--goiaba);width:62px;height:62px"></i></span></div>
  <small>Caneca · faixa para estampar em volta (gráfica)</small></div>
</div>
<p class="origin">Medidas, sangria, cores máximas e método de impressão e corte de cada peça estão na <a href="https://claude.ai/artifact/DSMVBeDYZEz8LnNQy4MEiN">ficha por item do kit</a>.</p>`);

const OFI={};
page('oficina-feed.html','Post de feed · site da marca','oficina','feed','',`
<h1>Post de feed</h1>
<p class="lead">Um exemplo real do sistema funcionando: o aviso do amigo oculto do clube, num feed 4:5.</p>
<div class="exemplo">
<figure class="comp"><img src="assets/amigo-oculto.webp" alt="Arte de feed 4:5 do amigo oculto do clube: fundo de papel com formas grandes e texturizadas, painel de papel rasgado com o título AMIGO OCULTO, blocos de cor com a ação e a data, e o logo discreto embaixo." width="380"><figcaption>Feito no ChatGPT, com o sistema da marca. Os textos são da comunicação real do clube.</figcaption></figure>
<div>
<h2 style="margin-top:0">O que está funcionando</h2>
<div class="grid1">
<div class="card"><h3>Fundo calmo, formas grandes</h3><p>Papel claro com grão. As formas (coral, rosa, azul, bege) são enormes, cortadas pela borda e com textura. Não têm cara de adesivo e quase viram padronagem.</p></div>
<div class="card"><h3>Painel de papel e fita</h3><p>O título mora num papel rasgado, levemente inclinado, com fita. É a camada de colagem.</p></div>
<div class="card"><h3>As quatro vozes, uma de cada</h3><p>Script em cereja no alto, título gordo e enorme em vinho, apoio escrito à mão, texto de informação em letra simples.</p></div>
<div class="card"><h3>Blocos chapados com a informação</h3><p>A ação num bloco vinho e a data num bloco pêssego. Cor lisa, cantos retos, e uma seta lima que aponta para a ação.</p></div>
<div class="card"><h3>Rabiscos e logo discreto</h3><p>Traços curtos de movimento em volta dos textos, e o logo pequeno, centralizado embaixo.</p></div>
</div>
</div>
</div>
<h2>A receita</h2>
<div class="grid">
<div class="card"><h3>1. Fundo</h3><p>Papel claro com grão, mais uma ou duas formas grandes e texturizadas.</p></div>
<div class="card"><h3>2. Título</h3><p>Num papel rasgado com fita, em letra de título e script de acento.</p></div>
<div class="card"><h3>3. Informação</h3><p>Em blocos chapados, do mais importante (ação) para o menos (data e detalhe).</p></div>
</div>
<h2>Pontos de atenção</h2>
<div class="rb nao"><h3>A conferir</h3><ul><li>A arte é gerada por IA. A cada geração, conferir o texto letra por letra e a forma do logo.</li><li>As letras parecem as do manual, mas o gerador não garante que sejam exatamente elas. Para o arquivo final, refazer o texto no Canva com a letra certa.</li><li>A textura vem do gerador. No Canva, ela se refaz com elementos grandes e um grão de papel por cima.</li><li>Termos de uso comercial das imagens geradas ainda por conferir.</li></ul></div>
<h2>Receitas prontas ${PROPOSTA}</h2>
<p class="lead" style="margin-bottom:var(--espaco-grade)">Três jeitos de montar um post de feed a partir dessa arte. Cada um tem as camadas, os textos e um prompt pronto para o ChatGPT.</p>
${receitasFeed.join('')}
<p class="origin">Os prompts começam pelo mesmo bloco da marca (cores, letras e regras) e acrescentam a receita. O botão copia os dois juntos. Revise sempre o texto e o logo no resultado.</p>
`);
page('oficina-stories.html','Stories e capas · site da marca','oficina','stories','',`
<h1>Stories e capas</h1>
<p class="lead">Receitas para o formato vertical 9:16. Deixe livres cerca de 250 px no topo e 340 px na base, onde fica a interface do app.</p>
<h2>Receitas prontas ${PROPOSTA}</h2>
${receitasStories.join('')}
<p class="origin">Os valores das áreas livres são de referência e precisam ser conferidos no app. Os prompts usam o mesmo bloco da marca da página Post de feed.</p>
`);
page('oficina-colagem.html','Receitas de colagem · site da marca','oficina','colagem','',`
<h1>Receitas de colagem</h1>
<p class="lead">A colagem se monta em camadas, sempre na mesma ordem. Nem toda peça usa todas, e muitas usam só três.</p>
<h2>Camadas, de baixo para cima</h2>
<div class="camadas">
<div class="cam c1"><b>1. Fundo</b><span>Papel claro, creme ou pastel, com grão.</span></div>
<div class="cam c2"><b>2. Forma grande</b><span>Texturizada, cortada pela borda, em tom sobre tom ou em destaque.</span></div>
<div class="cam c3"><b>3. Papel e fita</b><span>Papel rasgado, levemente inclinado, com fita. É onde o texto mora.</span></div>
<div class="cam c4"><b>4. Foto</b><span>Polaroid, janela ou recorte, quando houver foto.</span></div>
<div class="cam c5"><b>5. Rabiscos e figurinha</b><span>Poucos traços curtos e, às vezes, uma figurinha com borda branca.</span></div>
<div class="cam c6"><b>6. Grão por cima</b><span>A sobreposição de grão de papel, como última camada, com transparência baixa.</span></div>
</div>
<p class="origin">As sobreposições de grão estão em <a href="elementos-padroes.html">Padrões e texturas</a>. Um exemplo completo está na página <a href="oficina-feed.html">Post de feed</a>.</p>
<h2>Modo calmo</h2>
<p>Quando a peça pede silêncio (aviso formal, parceria), ficam só as camadas 1 e 3, e o grão por cima.</p>
`);
Object.entries(OFI).forEach(([k,[t,d,o]])=>page('oficina-'+k+'.html',t+' · site da marca','oficina',k,'',`<h1>${t}</h1><p class="lead">${d}</p>${stub('A desenhar',['Uma receita com fundo, letra, logo e elementos, e o que pode variar.'],o)}`));

page('tokens.html','Tokens e arquivos · site da marca','tokens','','',`
<h1>Tokens e arquivos</h1><p class="lead">Valores para copiar e o caminho para pegar os arquivos.</p>
<h2>Cores</h2><div class="pal" id="pal"></div>
<h2>Letras</h2>
<div class="grid">
<div class="card"><h3>Título</h3><p style="font-family:var(--fonte-alfa-slab-one);font-size:22px;color:var(--fg)">Alfa Slab One</p><p>Também: Young Serif, Dela Gothic One, Shrikhand. Uma por peça.</p></div>
<div class="card"><h3>Script</h3><p style="font-family:var(--fonte-pinyon-script);font-size:28px;color:var(--fg)">Pinyon Script</p><p>Também: Yesteryear.</p></div>
<div class="card"><h3>Texto</h3><p style="font-weight:700;font-size:18px;color:var(--fg)">Quicksand</p><p>Regular 500, negrito 700.</p></div>
<div class="card"><h3>Mão</h3><p>Reenie Beanie ou Delicious Handrawn.</p></div>
</div>
${divXadrez()}
<h2>Baixar arquivos</h2>
<div class="stub"><h3>Pasta de entrega no Drive</h3><p>O site mostra e explica. Os arquivos para baixar ficam numa pasta do Drive da equipe, que ainda não foi criada.</p><p><a class="btn" aria-disabled="true" role="link" tabindex="-1">Pasta do Drive: em breve</a></p>
<ul><li>Logo em SVG, uma versão por cor.</li><li>Elementos SVG e PNG, por tipo.</li><li>Fundos de post e molduras.</li></ul></div>`);

P.forEach(p=>{
  const inner=`<div class="wrap"><div id="pg" data-nav="${p.nav}" data-sub="${p.sub}" data-sub2="${p.sub2}"><div id="chrome"></div><main>${p.body}</main><div id="foot"></div></div></div><script src="tokens.js"></script><script src="site.js"></script>`;
  const html=p.f==='index.html'
   ?`<title>${p.title}</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n${FONTS}\n<link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="site.css">\n${inner}`
   :`<!doctype html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${p.title}</title>${FONTS}${p.extra}<link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="site.css"></head><body>${inner}</body></html>`;
  fs.writeFileSync(path.join(out,p.f),html);
});
console.log(P.length+' páginas, '+formas.length+' formas');
