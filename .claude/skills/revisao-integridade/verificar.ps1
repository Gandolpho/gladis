# Revisao de integridade do GLADIS (somente leitura: nao altera nenhum arquivo)
# Uso: powershell -NoProfile -ExecutionPolicy Bypass -File verificar.ps1 -Cofre "C:\...\Cofre Claude" [-CaminhosAntigos "regex1","regex2"]
# Mantido em ASCII de proposito: o Windows PowerShell 5.1 le scripts sem BOM como ANSI.
param(
  [Parameter(Mandatory=$true)][string]$Cofre,
  [string[]]$CaminhosAntigos = @()
)
$ErrorActionPreference = 'SilentlyContinue'
$utf8 = [Text.Encoding]::UTF8
$sb = (Get-ChildItem $Cofre -Directory | Where-Object { $_.Name -eq 'GLADIS' } | Select-Object -First 1).FullName
if (-not $sb) { "ERRO: pasta GLADIS nao encontrada em $Cofre"; exit 1 }

$all = Get-ChildItem $Cofre -Recurse -File -Force | Where-Object { $_.FullName -notmatch '\\\.obsidian\\|\\\.claude\\|\\\.trash\\' }
$md  = $all | Where-Object { $_.Extension -eq '.md' }
$names = @{}
foreach ($f in $all) { $names[$f.BaseName.ToLower()] = 1; $names[$f.Name.ToLower()] = 1 }
function Rel($p) { $p.Substring($Cofre.Length) }

"=== 1. LINKS QUEBRADOS (cofre inteiro) ==="
$n = 0; $q = 0
foreach ($f in $md) {
  $t = [IO.File]::ReadAllText($f.FullName, $utf8)
  $t = [regex]::Replace($t, '(?s)```.*?```', '')
  $t = [regex]::Replace($t, '`[^`\n]*`', '')
  foreach ($m in [regex]::Matches($t, '!?\[\[([^\]]+)\]\]')) {
    $n++
    $alvo = $m.Groups[1].Value.Split('|')[0].Split('#')[0].Trim()
    if ($alvo -eq '') { continue }
    $folha = ($alvo -split '/')[-1].ToLower()
    if (-not $names.ContainsKey($folha)) { $q++; "{0}  ->  [[{1}]]" -f (Rel $f.FullName), $alvo }
  }
}
"(verificados: $n | quebrados: $q)"

"=== 2. NOMES REPETIDOS (.md) ==="
# Nomes que se repetem por convencao (um por projeto ou por skill)
$ignorar = @('claude','readme','tasks','ux-synthesis','skill')
$md | Group-Object { $_.BaseName.ToLower() } | Where-Object { $_.Count -gt 1 -and $ignorar -notcontains $_.Name } |
  ForEach-Object { $_.Name + ': ' + (($_.Group | ForEach-Object { Rel $_.FullName }) -join ' | ') }

"=== 3. CAMINHOS ANTIGOS ==="
if ($CaminhosAntigos.Count -eq 0) { "(nenhum padrao informado)" } else {
  foreach ($f in ($all | Where-Object { $_.FullName -like "$sb*" -and $_.Extension -in '.md','.base' -and $_.FullName -notmatch '\\Hist.rico\\|\\CHANGELOG\.md$' })) {
    $t = [IO.File]::ReadAllText($f.FullName, $utf8)
    foreach ($padrao in $CaminhosAntigos) { if ($t -match $padrao) { "{0}  contem  {1}" -f (Rel $f.FullName), $padrao } }
  }
}

"=== 4. FRONTMATTER (GLADIS, fora de subsistemas) ==="
foreach ($f in ($md | Where-Object { $_.FullName -like "$sb*" -and $_.FullName -notmatch '\\Career_OS\\' })) {
  $t = [IO.File]::ReadAllText($f.FullName, $utf8)
  if ($t -notmatch '^---\r?\n') { continue }
  $fm = [regex]::Match($t, '(?s)^---\r?\n(.*?)\r?\n---').Groups[1].Value
  if (-not $fm) { "sem fechamento: " + (Rel $f.FullName); continue }
  foreach ($linha in ($fm -split '\r?\n')) {
    if ($linha -match '^\s*$' -or $linha -match '^\s+-') { continue }
    if ($linha -notmatch '^[\w\.\-]+:') { "linha estranha em {0}: {1}" -f (Rel $f.FullName), $linha; continue }
    $val = ($linha -split ':',2)[1].Trim()
    if ($val -match ': |#' -and $val -notmatch '^["''\[]') { "precisa de aspas em {0}: {1}" -f (Rel $f.FullName), $linha }
  }
}

"=== 5. NOTAS DE ENTRADA DE PROJETO ==="
foreach ($f in ($md | Where-Object { $_.FullName -like "$sb*" -and $_.FullName -notmatch 'Templates\\|\\Career_OS\\' })) {
  $t = [IO.File]::ReadAllText($f.FullName, $utf8)
  if ($t -match '(?m)^tipo:\s*projeto') {
    $st = [regex]::Match($t, '(?m)^status:\s*(.*)$').Groups[1].Value.Trim()
    $pa = [regex]::Match($t, '(?m)^proxima_acao:\s*(.*)$').Groups[1].Value.Trim()
    $ok = @('ativo','pausado','aguardando') -contains $st -or $st -like 'conclu*'
    "{0} | status={1}{2} | proxima_acao={3}" -f (Rel $f.FullName), $st, $(if ($ok) {''} else {' (INVALIDO)'}), $(if ($pa) {'ok'} else {'VAZIA'})
  }
}

"=== 6. FILTROS DO BASES (pastas citadas existem?) ==="
foreach ($f in ($all | Where-Object { $_.Extension -eq '.base' })) {
  $t = [IO.File]::ReadAllText($f.FullName, $utf8)
  foreach ($m in [regex]::Matches($t, 'inFolder\("([^"]+)"\)')) {
    $pasta = Join-Path $Cofre ($m.Groups[1].Value -replace '/','\')
    if (-not (Test-Path $pasta)) { "{0}: pasta nao existe -> {1}" -f (Rel $f.FullName), $m.Groups[1].Value }
  }
}

"=== 7. RESUMO DA ESTRUTURA ==="
Get-ChildItem $sb -Directory -Force | ForEach-Object { "{0}  ({1} arquivos)" -f $_.Name, (Get-ChildItem $_.FullName -Recurse -File -Force | Measure-Object).Count }
