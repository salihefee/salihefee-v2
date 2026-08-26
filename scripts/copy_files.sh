#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
deploy_dir="/var/www/html"

cd "$project_dir"
npm run build

sudo mkdir -p "$deploy_dir"
sudo rm -rf \
  "$deploy_dir/_next" \
  "$deploy_dir/index.html" \
  "$deploy_dir/404.html" \
  "$deploy_dir/s.png"
sudo cp -a "$project_dir/out/." "$deploy_dir/"

echo "Static Next.js files copied to $deploy_dir"
