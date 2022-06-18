#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m "Deploying"
git push -f git@github.com:nyarehd/Vue_app_with_api.git master:gh-pages
cd -
ss