export default function E3W15ExerSolutionCiYml() {
  const code = `# Week 15: CI/CD — Solution (ci.yml)

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
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-ci-yml</span>
        <span className="code-lang">YAML</span>
      </div>
      <pre className="language-yaml"><code className="language-yaml">{code}</code></pre>
    </div>
  )
}
