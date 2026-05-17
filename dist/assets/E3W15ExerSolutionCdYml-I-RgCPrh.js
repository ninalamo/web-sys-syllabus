import{j as e}from"./index-6VvVNkbu.js";function a(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-cd-yml"}),e.jsx("span",{className:"code-lang",children:"YAML"})]}),e.jsx("pre",{className:"language-yaml",children:e.jsx("code",{className:"language-yaml",children:`# Week 15: CI/CD — Solution (cd.yml)

name: CD

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    needs: [ci-backend, ci-frontend]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0'

      - name: Publish
        run: dotnet publish -c Release -o ./publish

      - name: Deploy to Azure
        uses: azure/webapps-deploy@v2
        with:
          app-name: \${{ secrets.AZURE_APP_NAME }}
          publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: ./publish

  deploy-frontend:
    needs: [ci-backend, ci-frontend]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
`})})]})}export{a as default};
