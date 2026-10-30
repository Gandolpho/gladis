// Servidor local do gerador de textura: serve a página e os SVGs, recebe PNG/WebP por POST e grava em disco.
const http=require('http'),fs=require('fs'),path=require('path');
const [,, elDir, outDir, pageDir, port]=process.argv;
const T={'.html':'text/html;charset=utf-8','.svg':'image/svg+xml','.js':'text/javascript','.json':'application/json'};
http.createServer((q,r)=>{
  const u=new URL(q.url,'http://x');const p=decodeURIComponent(u.pathname);
  if(q.method==='POST'&&p==='/save'){
    const rel=u.searchParams.get('path');if(!rel||rel.includes('..')){r.writeHead(400);r.end('bad');return}
    const dest=path.join(outDir,rel);fs.mkdirSync(path.dirname(dest),{recursive:true});
    const ch=[];q.on('data',d=>ch.push(d));q.on('end',()=>{fs.writeFileSync(dest,Buffer.concat(ch));r.writeHead(200);r.end('ok')});return}
  if(p==='/list'){const l=fs.readdirSync(elDir).filter(f=>/\.svg$/i.test(f));r.writeHead(200,{'Content-Type':'application/json'});r.end(JSON.stringify(l));return}
  let f=p.startsWith('/el/')?path.join(elDir,p.slice(4)):path.join(pageDir,p==='/'?'tex.html':p.slice(1));
  fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end();return}r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});r.end(d)});
}).listen(+port);
