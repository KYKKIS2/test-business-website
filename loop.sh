#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PROMPT_FILE="PROMPT.md"
PROGRESS_FILE="progress.txt"
COMPLETION_TAG="<promise>LOOP_COMPLETE</promise>"
MAX_ITERATIONS="${MAX_ITERATIONS:-10}"
SLEEP_SECS="${SLEEP_SECS:-2}"
MODEL="${OPENCODE_MODEL:-${MODEL:-zai-coding-plan/glm-4.7}}"

# Validate MAX_ITERATIONS: allow -1 (infinite) or >= 1.
if ! [[ "$MAX_ITERATIONS" =~ ^-?[0-9]+$ ]]; then
  echo "Warning: Invalid MAX_ITERATIONS '$MAX_ITERATIONS'. Use -1 for infinite or a positive integer (>= 1)." >&2
  exit 1
fi
if [[ "$MAX_ITERATIONS" -eq 0 || "$MAX_ITERATIONS" -lt -1 ]]; then
  echo "Warning: Invalid MAX_ITERATIONS '$MAX_ITERATIONS'. Use -1 for infinite or a positive integer (>= 1)." >&2
  exit 1
fi

# Isolate OpenCode state under the loop directory unless the user already set it.
if [[ -z "${OPENCODE_TEST_HOME:-}" ]]; then
  export OPENCODE_TEST_HOME="$ROOT_DIR/.opencode-home"
fi

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Missing $PROMPT_FILE" >&2
  exit 1
fi

if ! command -v opencode >/dev/null 2>&1; then
  echo "opencode CLI not found in PATH" >&2
  exit 1
fi

iter=0
while :; do
  iter=$((iter + 1))
  echo ""
  echo "====================================================================="
  echo "== Ralph loop iteration $iter =="
  echo "====================================================================="
  echo ""

  # Pipe PROMPT.md into stdin so the prompt is included in the message body.
  cat "$PROMPT_FILE" | opencode run --model "$MODEL" "Read and follow the prompt below."

  if [[ -f "$PROGRESS_FILE" ]] && grep -qF "$COMPLETION_TAG" "$PROGRESS_FILE"; then
    echo ""
    echo "---------------------------------------------------------------------"
    echo "Completion promise found in $PROGRESS_FILE. Exiting."
    echo "---------------------------------------------------------------------"
    echo ""
    break
  fi

  if [[ "$MAX_ITERATIONS" -ne -1 ]] && [[ "$iter" -ge "$MAX_ITERATIONS" ]]; then
    echo ""
    echo "---------------------------------------------------------------------"
    echo "Max iterations reached ($MAX_ITERATIONS)."
    echo "---------------------------------------------------------------------"
    echo ""
    break
  fi

  sleep "$SLEEP_SECS"
done
