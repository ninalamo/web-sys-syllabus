# Restructure Plan: web-sys Split into Week Files

## 1. Target Folder Structure

```
web-sys/
+-- elective-2/                          <- New folder
|   +-- index.md                         <- Mother file
|   +-- week-01-csharp-translation-bootcamp.md
|   +-- week-02-interfaces-and-di-mental-model.md
|   +-- week-03-http-and-the-web.md
|   +-- week-04-mvc-big-picture.md
|   +-- week-05-routing-deep-dive.md
|   +-- week-06-controllers-and-action-results.md
|   +-- week-07-views-and-layouts.md
|   +-- week-08-model-binding-and-validation.md
|   +-- week-09-ef-core-fundamentals.md
|   +-- week-10-relationships-and-data-display.md
|   +-- week-11-consuming-apis-with-httpclient.md
|   +-- week-12-mini-capstone-checkpoint.md
|   +-- week-13-authentication-and-authorization.md
|   +-- week-14-security-fundamentals.md
|   +-- week-15-capstone-sprint.md
|   +-- week-16-capstone-final-deploy-and-present.md
+-- elective-3/                          <- New folder
|   +-- index.md                         <- Mother file
|   +-- week-01-modern-javascript-review.md
|   +-- week-02-async-javascript-deep-dive.md
|   +-- week-03-typescript-essentials.md
|   +-- week-04-dev-tooling-and-workflow.md
|   +-- week-05-component-thinking-in-vanilla-js.md
|   +-- week-06-react-fundamentals.md
|   +-- week-07-effects-and-data-fetching.md
|   +-- week-08-react-router-and-spa-concepts.md
|   +-- week-09-api-design-philosophy.md
|   +-- week-10-aspnet-core-web-api.md
|   +-- week-11-frontend-backend-integration.md
|   +-- week-12-api-versioning-and-documentation.md
|   +-- week-13-auth-deep-dive.md
|   +-- week-14-testing.md
|   +-- week-15-ci-cd-and-deployment.md
|   +-- week-16-capstone-final.md
+-- elective-2-building-web-products.md  <- Keep original
+-- elective-2-discussions.md            <- Keep original
+-- elective-3-production-grade-products.md <- Keep original
+-- elective-3-discussions.md            <- Keep original
+-- teaching-script-format.md           <- Keep original
```

## 2. File Naming — All 16 Weeks

### Elective 2 (source: `elective-2-discussions.md`)

| # | Week Title | Filename | Start Line |
|---|-----------|----------|-----------|
| 01 | C# Translation Bootcamp | `week-01-csharp-translation-bootcamp.md` | 9 |
| 02 | Interfaces & DI Mental Model | `week-02-interfaces-and-di-mental-model.md` | 239 |
| 03 | HTTP & The Web | `week-03-http-and-the-web.md` | 444 |
| 04 | MVC Big Picture | `week-04-mvc-big-picture.md` | 665 |
| 05 | Routing Deep-Dive | `week-05-routing-deep-dive.md` | 882 |
| 06 | Controllers & Action Results | `week-06-controllers-and-action-results.md` | 1101 |
| 07 | Views & Layouts | `week-07-views-and-layouts.md` | 1314 |
| 08 | Model Binding & Validation | `week-08-model-binding-and-validation.md` | 1524 |
| 09 | EF Core Fundamentals | `week-09-ef-core-fundamentals.md` | 1740 |
| 10 | Relationships & Data Display | `week-10-relationships-and-data-display.md` | 1966 |
| 11 | Consuming APIs with HttpClient | `week-11-consuming-apis-with-httpclient.md` | 2194 |
| 12 | Mini-Capstone Checkpoint | `week-12-mini-capstone-checkpoint.md` | 2418 |
| 13 | Authentication & Authorization | `week-13-authentication-and-authorization.md` | 2652 |
| 14 | Security Fundamentals | `week-14-security-fundamentals.md` | 2873 |
| 15 | Capstone Sprint | `week-15-capstone-sprint.md` | 3105 |
| 16 | Capstone Final — Deploy & Present | `week-16-capstone-final-deploy-and-present.md` | 3329 |

### Elective 3 (source: `elective-3-discussions.md`)

| # | Week Title | Filename | Start Line |
|---|-----------|----------|-----------|
| 01 | Modern JavaScript Review | `week-01-modern-javascript-review.md` | 5 |
| 02 | Async JavaScript Deep-Dive | `week-02-async-javascript-deep-dive.md` | 216 |
| 03 | TypeScript Essentials | `week-03-typescript-essentials.md` | 437 |
| 04 | Dev Tooling & Workflow | `week-04-dev-tooling-and-workflow.md` | 646 |
| 05 | Component Thinking in Vanilla JS | `week-05-component-thinking-in-vanilla-js.md` | 859 |
| 06 | React Fundamentals | `week-06-react-fundamentals.md` | 1076 |
| 07 | Effects & Data Fetching | `week-07-effects-and-data-fetching.md` | 1297 |
| 08 | React Router & SPA Concepts | `week-08-react-router-and-spa-concepts.md` | 1518 |
| 09 | API Design Philosophy | `week-09-api-design-philosophy.md` | 1742 |
| 10 | ASP.NET Core Web API | `week-10-aspnet-core-web-api.md` | 1962 |
| 11 | Frontend-Backend Integration | `week-11-frontend-backend-integration.md` | 2186 |
| 12 | API Versioning & Documentation | `week-12-api-versioning-and-documentation.md` | 2410 |
| 13 | Auth Deep-Dive | `week-13-auth-deep-dive.md` | 2632 |
| 14 | Testing | `week-14-testing.md` | 2852 |
| 15 | CI/CD & Deployment | `week-15-ci-cd-and-deployment.md` | 3071 |
| 16 | Capstone Final | `week-16-capstone-final.md` | 3290 |

## 3. Mother File (index.md) Content Template

### `elective-2/index.md`

```markdown
# Elective 2: Building Web Products — Full Lesson Content

> **Course:** C# for ASP.NET Core MVC — from VB.NET foundations to shipping a full-stack web product.

## Term-by-Term Summary

| Term | Weeks | Focus | Weight |
|------|-------|-------|--------|
| [Prelim — C# for MVC + Web Foundations](#prelim) | 1–4 | C# for MVC + Web Foundations | [GREEN] Familiar (VB->C# translation) |
| [Midterm — ASP.NET Core MVC](#midterm) | 5–8 | ASP.NET Core MVC — the hard part | [RED] Hardest |
| [PreFinals — Data & Persistence + Consuming APIs](#prefinals) | 9–12 | Data & Persistence + Consuming APIs | [YELLOW] Medium |
| [Finals — User Interaction + Security + Capstone](#finals) | 13–16 | User Interaction + Security + Capstone | [YELLOW] Lighter + Integration |

---

## Prelim — C# for MVC + Web Foundations
**Goal:** Translate VB.NET knowledge to C#, understand the web request lifecycle.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 1: C# Translation Bootcamp](week-01-csharp-translation-bootcamp.md) | C# syntax from VB | Types, properties, methods, classes, `var`, string interpolation, LINQ |
| [Week 2: Interfaces & DI Mental Model](week-02-interfaces-and-di-mental-model.md) | Interfaces, DI | Contract-based design, constructor injection, IoC container |
| [Week 3: HTTP & The Web](week-03-http-and-the-web.md) | Request/response lifecycle | HTTP methods, status codes, headers, statelessness |
| [Week 4: MVC Big Picture](week-04-mvc-big-picture.md) | MVC architecture | Routing, controllers, views, models, `cshtml` |

## Midterm — ASP.NET Core MVC (The Hard Part)
**Goal:** Build multi-page SSR apps with routing, controllers, views, and real data flow.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 5: Routing Deep-Dive](week-05-routing-deep-dive.md) | Routing | Convention vs attribute routing, route parameters, constraints |
| [Week 6: Controllers & Action Results](week-06-controllers-and-action-results.md) | Action results | `IActionResult`, `View()`, `Redirect()`, `Json()`, `StatusCode()` |
| [Week 7: Views & Layouts](week-07-views-and-layouts.md) | Razor views | Layout pages, Partial Views, View Components, Tag Helpers |
| [Week 8: Model Binding & Validation](week-08-model-binding-and-validation.md) | Forms & validation | Data annotations, `ModelState.IsValid`, anti-forgery |

## PreFinals — Data & Persistence + Consuming APIs
**Goal:** Store and retrieve data, talk to external services.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 9: EF Core Fundamentals](week-09-ef-core-fundamentals.md) | ORM | DbContext, DbSet, migrations, CRUD with LINQ |
| [Week 10: Relationships & Data Display](week-10-relationships-and-data-display.md) | Related data | Navigation properties, eager/lazy loading, `Include()` |
| [Week 11: Consuming APIs with HttpClient](week-11-consuming-apis-with-httpclient.md) | External APIs | `IHttpClientFactory`, JSON serialization, error handling |
| [Week 12: Mini-Capstone Checkpoint](week-12-mini-capstone-checkpoint.md) | Integration project | DB + API integration, service layer |

## Finals — User Interaction + Security + Capstone
**Goal:** Polish, secure, deploy, and present.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 13: Authentication & Authorization](week-13-authentication-and-authorization.md) | Auth | Cookie auth, `[Authorize]`, roles, Identity scaffold |
| [Week 14: Security Fundamentals](week-14-security-fundamentals.md) | Security | XSS, SQL injection, CSRF, HTTPS, OWASP |
| [Week 15: Capstone Sprint](week-15-capstone-sprint.md) | Build sprint | User stories, schema, routes, UI, auth |
| [Week 16: Capstone Final — Deploy & Present](week-16-capstone-final-deploy-and-present.md) | Ship | Deployment, polish, final presentations |

---

*Source: [elective-2-discussions.md](../elective-2-discussions.md) (full original)*
```

### `elective-3/index.md`

```markdown
# Elective 3: Production-Grade Products — Full Lesson Content

> **Course:** React + ASP.NET Core Web API — from modern JavaScript to shipping a production-grade full-stack application.

## Term-by-Term Summary

| Term | Weeks | Focus | Weight |
|------|-------|-------|--------|
| [Prelim — Modern JS / TypeScript + Dev Tooling](#prelim) | 1–4 | Modern JS / TypeScript + Dev Tooling | [GREEN] Warmup ramp |
| [Midterm — Component Architecture (Vanilla -> React)](#midterm) | 5–8 | Component Architecture (Vanilla -> React) | [RED] Hardest |
| [PreFinals — API as Product + Frontend-Backend Integration](#prefinals) | 9–12 | API as Product + Frontend-Backend Integration | [YELLOW] Medium |
| [Finals — Identity & Security + Testing/CI/CD + Capstone](#finals) | 13–16 | Identity & Security + Testing/CI/CD + Capstone | [YELLOW] Medium + project |

---

## Prelim — Modern JS / TypeScript + Dev Tooling
**Goal:** Ramp up from basic JavaScript to modern professional TypeScript with a proper toolchain.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 1: Modern JavaScript Review](week-01-modern-javascript-review.md) | ES6+ | `let/const`, arrow functions, destructuring, modules |
| [Week 2: Async JavaScript Deep-Dive](week-02-async-javascript-deep-dive.md) | Async | Promises, async/await, `fetch()`, error handling |
| [Week 3: TypeScript Essentials](week-03-typescript-essentials.md) | Types | Interfaces, generics, `any` vs `unknown`, tooling |
| [Week 4: Dev Tooling & Workflow](week-04-dev-tooling-and-workflow.md) | Toolchain | Vite, ESLint, Prettier, Git branching, PR workflow |

## Midterm — Component Architecture (Vanilla -> React)
**Goal:** Understand component thinking by building from vanilla JS to a modern framework.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 5: Component Thinking in Vanilla JS](week-05-component-thinking-in-vanilla-js.md) | Components | Encapsulation, props, state, composition |
| [Week 6: React Fundamentals](week-06-react-fundamentals.md) | React basics | JSX, functional components, props, `useState` |
| [Week 7: Effects & Data Fetching](week-07-effects-and-data-fetching.md) | Side effects | `useEffect`, dependency arrays, custom hooks |
| [Week 8: React Router & SPA Concepts](week-08-react-router-and-spa-concepts.md) | SPA routing | Client-side routing, lazy loading, code splitting |

## PreFinals — API as Product + Frontend-Backend Integration
**Goal:** Design, build, and consume professional-grade APIs.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 9: API Design Philosophy](week-09-api-design-philosophy.md) | REST design | Resource modeling, naming conventions, error contracts |
| [Week 10: ASP.NET Core Web API](week-10-aspnet-core-web-api.md) | Web API | `[ApiController]`, content negotiation, Swagger |
| [Week 11: Frontend-Backend Integration](week-11-frontend-backend-integration.md) | Full-stack | CORS, auth headers, token storage, `useContext` |
| [Week 12: API Versioning & Documentation](week-12-api-versioning-and-documentation.md) | API lifecycle | Versioning strategies, Swagger/OpenAPI, deprecation |

## Finals — Identity & Security + Testing/CI/CD + Capstone
**Goal:** Production skills — secure, test, deploy, and present a full-stack application.

| Week | Topic | Key Concepts |
|------|-------|-------------|
| [Week 13: Auth Deep-Dive](week-13-auth-deep-dive.md) | Auth | JWT, refresh tokens, OAuth2 flow, OpenID Connect |
| [Week 14: Testing](week-14-testing.md) | Testing | Unit (xUnit), integration (WebApplicationFactory), E2E (Playwright) |
| [Week 15: CI/CD & Deployment](week-15-ci-cd-and-deployment.md) | DevOps | GitHub Actions, build -> test -> deploy pipeline |
| [Week 16: Capstone Final](week-16-capstone-final.md) | Ship | Production-grade full-stack app, oral defense |

---

*Source: [elective-3-discussions.md](../elective-3-discussions.md) (full original)*
```

## 4. Extraction Approach

### Tool: Use a Python script (or PowerShell script)

**Recommended approach:** Write a Python script at `D:\loa\web-sys\split-weeks.py` that:

1. Reads the source file line by line
2. Detects week boundaries via regex: `^## Week \d+:`
3. Extracts the week title from the heading
4. Derives the filename using the kebab-case conversion rules
5. Writes each week's content (from its heading to the next week heading or end of file) to the appropriate file

### Week boundary identification

- **Start of a week:** Line matching `^## Week \d+:`
- **End of a week:** Next `^## Week \d+:` line, OR next `^## TERM \d+:` line (E2 only), OR end of file
- **Week title:** Extract text after `## Week N: ` (e.g., `C# Translation Bootcamp`)
- **Content to include:** Everything from the `## Week N:` heading line up to (but not including) the next week heading

### Kebab-case conversion rules

```
Input: "C# Translation Bootcamp"
-> lowercase: "c# translation bootcamp"
-> replace # with sharp: "csharp translation bootcamp"
-> replace spaces/special with hyphens: "csharp-translation-bootcamp"
-> remove non-alphanumeric (keep a-z, 0-9, hyphens): "csharp-translation-bootcamp"
-> collapse multiple hyphens -> single hyphen
-> trim leading/trailing hyphens
-> prefix with "week-NN-"
```

**Edge cases to handle:**
- `&` -> `and` (e.g., "HTTP & The Web" -> "http-and-the-web")
- `#` -> `sharp` (e.g., "C#" -> "csharp") 
- `/` -> hyphen (e.g., "CI/CD & Deployment" -> "ci-cd-and-deployment")
- `—` / `--` -> hyphen (e.g., "Capstone Final — Deploy & Present" -> "capstone-final-deploy-and-present")
- Non-alphanumeric characters -> remove or convert
- Collapse consecutive hyphens

### Term headings (E2 discussions only)

The `elective-2-discussions.md` file has `## TERM N: TITLE` lines that serve as section breaks. These should **not** be extracted into week files. They exist only in the original. The mother file's term breakdown is sufficient.

### Appendix sections

Both files have trailing appendices (AI Integration Guide, cross-cutting practices, etc.) after Week 16. These appendices should **not** be extracted into week files. Only the 16 week sections should be extracted. The content after the last `## Week 16:` heading is the appendix.

### Validation after split

- Count: exactly 16 files per folder (totalling 32 week files + 2 index files)
- Each file should start with `## Week N:` (the heading)
- Each file should end with a `---` separator before the footer (or E2's security checklist)
- Verify no week file is empty
- Verify original discussion files are unchanged

## 5. Execution Order

1. Create `elective-2/` and `elective-3/` directories
2. Run split script to generate all 32 week files
3. Verify week file count and content
4. Create `elective-2/index.md` and `elective-3/index.md`
5. Validate that original files are untouched
6. Clean up the script

## 6. Weekly File Footer

Each week file should end with a return-to-index link:

```markdown
---

*Source: [elective-2-discussions.md](../elective-2-discussions.md) — [Back to index](index.md)*
```

(For E3, use `elective-3-discussions.md` as the source.)
