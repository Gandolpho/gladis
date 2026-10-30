param(
    [string]$Ate = (Get-Date -Format 'yyyy-MM-dd'),
    [switch]$SemData
)
# Lista as tarefas abertas do GLADIS, uma linha por tarefa.
# Por padrao mostra as com fazer_em ate a data (hoje). -SemData inclui as sem data.
# Uso: powershell -NoProfile -File tarefas-abertas.ps1 [-Ate 2026-10-21] [-SemData]
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$raiz = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$pasta = Get-ChildItem -LiteralPath $raiz -Directory -Filter '02 *' | Select-Object -First 1
if (-not $pasta) { Write-Output 'Pasta de tarefas nao encontrada.'; exit 1 }

$linhas = foreach ($f in Get-ChildItem -LiteralPath $pasta.FullName -Filter '*.md' -File) {
    $txt = Get-Content -LiteralPath $f.FullName -Encoding UTF8
    if ($txt.Count -lt 2 -or $txt[0].Trim() -ne '---') { continue }
    $p = @{}
    for ($i = 1; $i -lt $txt.Count; $i++) {
        if ($txt[$i].Trim() -eq '---') { break }
        if ($txt[$i] -match '^([a-z_]+):\s*(.*)$') { $p[$Matches[1]] = $Matches[2].Trim().Trim('"') }
    }
    if ($p['feita'] -eq 'true') { continue }
    $data = $p['fazer_em']
    if ($data) { if ($data -gt $Ate) { continue } }
    elseif (-not $SemData) { continue }
    $marca = @()
    if ($p['principal'] -eq 'true') { $marca += 'PRINCIPAL' }
    if ($p['urgente'] -eq 'true') { $marca += 'urgente' }
    if ($p['fazendo'] -eq 'true') { $marca += 'fazendo' }
    $partes = @($f.BaseName, $p['categoria'], $(if ($data) { $data } else { 'sem data' }))
    if ($p['prazo']) { $partes += ('prazo ' + $p['prazo']) }
    if ($marca) { $partes += ($marca -join ',') }
    if ($p['primeiro_passo']) { $partes += ('1o passo: ' + $p['primeiro_passo']) }
    $partes -join ' | '
}
if ($linhas) { $linhas | Sort-Object } else { Write-Output 'Nenhuma tarefa aberta.' }
