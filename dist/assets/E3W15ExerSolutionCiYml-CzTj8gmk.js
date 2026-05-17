import{j as e}from"./index-ChWpJeR-.js";function t(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-ci-yml"}),e.jsx("span",{className:"code-lang",children:"YAML"})]}),e.jsx("pre",{className:"language-yaml",children:e.jsx("code",{className:"language-yaml",children:`# Week 15: CI/CD — Solution (ci.yml)

name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  ci-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0'

      - name: Restore dependencies
        run: dotnet restore

      - name: Build
        run: dotnet build --no-restore

      - name: Test
        run: dotnet test --no-build --verbosity normal

  ci-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build
`})})]})}export{t as default};
