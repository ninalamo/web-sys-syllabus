export default function E3W3ExerStarterTsconfig() {
  const code = `{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "moduleResolution": "bundler",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./"
    },
    "include": ["**/*.ts"],
    "exclude": ["node_modules", "dist"]
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">starter-tsconfig.json</span>
        <span className="code-lang">JSON</span>
      </div>
      <pre className="language-json"><code className="language-json">{code}</code></pre>
    </div>
  )
}
