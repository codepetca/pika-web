#!/usr/bin/env bash
set -euo pipefail

pnpm dev 2>&1 | while IFS= read -r line; do
  echo "$line"

  if [[ -z "${OPENED_URL:-}" ]] && [[ "$line" =~ (https?://(localhost|127\.0\.0\.1):[0-9]+) ]]; then
    OPENED_URL="${BASH_REMATCH[1]}"
    open "$OPENED_URL" >/dev/null 2>&1 || true
  fi
done
