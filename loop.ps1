param(
  [int]$MaxIterations = 10,
  [int]$SleepSecs = 2,
  [string]$Model = "zai-coding-plan/glm-4.7"
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$promptFile = "PROMPT.md"
$progressFile = "progress.txt"
$completionTag = "<promise>LOOP_COMPLETE</promise>"

# Validate MaxIterations: allow -1 (infinite) or >= 1.
if ($MaxIterations -eq 0 -or $MaxIterations -lt -1) {
  Write-Warning "Invalid MaxIterations '$MaxIterations'. Use -1 for infinite or a positive integer (>= 1)."
  exit 1
}

# Isolate OpenCode state under the loop directory unless the user already set it.
if (-not $env:OPENCODE_TEST_HOME) {
  $env:OPENCODE_TEST_HOME = Join-Path $root ".opencode-home"
}

# Allow env override for model.
if ($env:OPENCODE_MODEL) {
  $Model = $env:OPENCODE_MODEL
}
if (-not (Test-Path $promptFile)) {
  Write-Error "Missing $promptFile"
  exit 1
}

if (-not (Get-Command opencode -ErrorAction SilentlyContinue)) {
  Write-Error "opencode CLI not found in PATH"
  exit 1
}

$iter = 0
while ($true) {
  $iter++
  Write-Host ""
  Write-Host "====================================================================="
  Write-Host "== Ralph loop iteration $iter =="
  Write-Host "====================================================================="
  Write-Host ""

  # Pipe PROMPT.md into stdin so the prompt is included in the message body.
  Get-Content -Path $promptFile -Raw | opencode run --model $Model "Read and follow the prompt below."

  if (Test-Path $progressFile) {
    $content = Get-Content -Path $progressFile -Raw
    if ($content -like "*$completionTag*") {
      Write-Host ""
      Write-Host "---------------------------------------------------------------------"
      Write-Host "Completion promise found in $progressFile. Exiting."
      Write-Host "---------------------------------------------------------------------"
      Write-Host ""
      break
    }
  }

  if ($MaxIterations -ne -1 -and $iter -ge $MaxIterations) {
    Write-Host ""
    Write-Host "---------------------------------------------------------------------"
    Write-Host "Max iterations reached ($MaxIterations)."
    Write-Host "---------------------------------------------------------------------"
    Write-Host ""
    break
  }

  Start-Sleep -Seconds $SleepSecs
}
