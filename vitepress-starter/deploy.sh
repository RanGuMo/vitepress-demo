#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# RanGuMo/vitepress-demo 替换为自己的用户名和对应的仓库名
# 意思为将构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~(确保gh-pages分支存在)
git push -f  https://github.com/RanGuMo/vitepress-demo.git HEAD:gh-pages



