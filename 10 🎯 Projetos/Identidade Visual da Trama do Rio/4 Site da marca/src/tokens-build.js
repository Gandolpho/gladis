// Lê tokens.json e escreve site/tokens.css e site/tokens.js. Devolve os tokens para o gerador de páginas.
const fs=require('fs'),path=require('path');
module.exports=function(base,out){
  const T=JSON.parse(fs.readFileSync(path.join(base,'src','tokens.json'),'utf8')),M=T.marca,P=T.papeis;
  const pre=(o,p)=>Object.fromEntries(Object.entries(o).map(([k,v])=>[p+k,v]));
  const decl=o=>Object.entries(o).map(([k,v])=>'--'+k+':'+v).join(';');
  const cor=Object.fromEntries(Object.entries(M.cor).map(([k,c])=>[k,c.hex]));
  const brand=[cor,M.apoio,M.transparencias,pre(M.fontes,'fonte-'),pre(M.raios,'raio-'),M.espacos];
  const css='/* Gerado de src/tokens.json. Nao editar a mao. */\n'
   +':root{'+brand.map(decl).join(';')+';'+decl(P.fixos)+';'+decl(P.claro)+'}\n'
   +':root{color-scheme:light}\n';
  fs.writeFileSync(path.join(out,'tokens.css'),css);
  fs.writeFileSync(path.join(out,'tokens.js'),'const TOKENS='+JSON.stringify({cor:M.cor,apoio:M.apoio,fontes:M.fontes})+';\n');
  return T;
};
