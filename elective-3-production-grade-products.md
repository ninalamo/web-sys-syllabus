# Elective 3: Production-Grade Products (Level 2)

## Course Philosophy

Level 2 of the web systems roadmap. Concept-first, stack-agnostic lecture — React + ASP.NET Core Web API as the concrete lab vehicle. Take the foundations from Level 1 and add architecture thinking, production patterns, and engineering discipline.

## Prerequisites

- Elective 2 (recommended but not required)
- OR equivalent knowledge: HTTP, MVC, CRUD, basic server-side programming
- L2 is designed to be standalone with a 1-2 week ramp

## Term Structure

| Term | Weeks | Focus | Weight |
|------|-------|-------|--------|
| Prelim | 1–4 | Modern JS / TypeScript + Dev Tooling | [GREEN] Warmup ramp |
| Midterm | 5–8 | Component Architecture (Vanilla -> React) | [RED] Hardest — full term |
| PreFinals | 9–12 | API as Product + Frontend-Backend Integration | [YELLOW] Medium |
| Finals | 13–16 | Identity & Security + Testing/CI/CD + Capstone | [YELLOW] Medium + project |

## Schedule

- Saturday: 3 hours (lecture + lab, in-depth)
- Weekday: 1 hour online (applied — code review, PR workflow, debugging lab, AI tool workshop)

---

## Prelim — Modern JS / TypeScript + Dev Tooling

**Goal:** Ramp up from basic JavaScript to modern professional TypeScript with a proper toolchain.

### Learning Objectives

- Write idiomatic ES6+ JavaScript (modules, arrow functions, destructuring)
- Use promises and async/await correctly with error handling
- Add TypeScript types to existing JavaScript
- Configure a professional dev environment (Vite, ESLint, Prettier, Git workflow)

### Week 1 — Modern JavaScript Review

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | `let/const`, arrow functions, template literals, destructuring, spread/rest, modules (import/export). | Block scoping, arrow functions' `this` binding, module patterns. |
| **Online (1h)** | Refactor lab | Take ES5 code -> modern ES6+. |

**Deliverable:** Refactored code portfolio

### Week 2 — Async JavaScript Deep-Dive

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Callbacks -> promises -> async/await. `fetch()`, error handling, `Promise.all()`. | Event loop, microtasks, promise chaining, `try/catch` with async. |
| **Online (1h)** | Debugging lab | "Why is this promise not resolving?" — trace async flow. |

**Deliverable:** Async data fetcher with error handling

### Week 3 — TypeScript Essentials

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Types, interfaces, generics basics, `any` vs `unknown`, tooling (tsconfig, build). | `interface`, `type`, generics `<T>`, union types, optional chaining. |
| **Online (1h)** | JS -> TS migration | Add types to existing JS code. |

**Deliverable:** TypeScript-typed project

### Week 4 — Dev Tooling & Workflow

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Node/npm, Vite, ESLint, Prettier, Git branching, PR workflow. | `npm`, `package.json`, `node_modules`, build step, `eslint`, `prettier`. |
| **Online (1h)** | Set up toolchain | Scaffold a Vite project with linting, formatting, CI. |

**Deliverable:** Tooled-up project scaffold with GitHub Actions

---

## Midterm — Component Architecture -> React (The Hard Part)

**Goal:** Understand component thinking by building from vanilla JS to a modern framework.

### Learning Objectives

- Explain the component model: encapsulation, props, state, composition
- Build a component system in vanilla JavaScript
- Convert vanilla components to React
- Fetch data with effects and custom hooks
- Build a multi-page SPA with client-side routing

### Week 5 — Component Thinking in Vanilla JS

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | What IS a component? Encapsulation, props, state, composition. Build a component system in vanilla JS. | Props vs state, composition over inheritance, component lifecycle, re-rendering. |
| **Online (1h)** | Build a component library | Create reusable Button, Card, and Modal components with vanilla JS. |

**Deliverable:** Vanilla JS component library (Button, Card, Modal)

### Week 6 — React Fundamentals

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Why React? Virtual DOM, JSX, functional components, props, `useState`. | JSX transpilation, `useState`, props drilling, one-way data flow, reconciliation. |
| **Online (1h)** | Convert vanilla -> React | Take component library from week 5, rewrite in React. |

**Deliverable:** Same components, now in React

### Week 7 — Effects & Data Fetching

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | `useEffect`, dependency arrays, loading/error states, custom hooks. | `useEffect` cleanup, dependency array, custom hooks (`useFetch`). |
| **Online (1h)** | Debugging lab | Infinite re-render — find and fix useEffect issues. |

**Deliverable:** Data-fetching dashboard with custom hook

### Week 8 — React Router & SPA Concepts

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Client-side routing, nav, URL params, lazy loading, code splitting. | `react-router-dom`, dynamic routing, `lazy()`, `Suspense`. |
| **Online (1h)** | Build a multi-page SPA | 3+ routes with navigation. |

**Deliverable:** Multi-page SPA

---

## PreFinals — API as Product + Frontend-Backend Integration

**Goal:** Design, build, and consume professional-grade APIs.

### Learning Objectives

- Design a RESTful API contract before writing code
- Implement a Web API with ASP.NET Core
- Connect a React frontend to an authenticated API
- Version and document APIs with OpenAPI/Swagger

### Week 9 — API Design Philosophy

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | REST constraints, resource modeling, naming conventions, error contracts. Design API contract BEFORE writing code. | Resources vs endpoints, HTTP method semantics, `4xx` vs `5xx`, consistency. |
| **Online (1h)** | Design an API | Given requirements, write OpenAPI spec first. |

**Deliverable:** OpenAPI spec for a resource API

### Week 10 — ASP.NET Core Web API

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Controllers, `[ApiController]`, attribute routing, content negotiation, `FromBody`/`FromRoute`. Implement the OpenAPI spec. | `[ApiController]`, `[Route]`, `ProducesResponseType`, `ProblemDetails`, Swagger. |
| **Online (1h)** | Implement spec | Build Web API from week 9's spec. |

**Deliverable:** Running Web API with Swagger UI

### Week 11 — Frontend-Backend Integration

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | CORS, consuming auth-protected APIs, token storage, error handling. Connect React to ASP.NET API. | `fetch` with auth headers, CORS, `useContext` for auth state, token refresh. |
| **Online (1h)** | Full-stack integration | Login from React -> call protected API -> display result. |

**Deliverable:** Full-stack app (React + Web API)

### Week 12 — API Versioning & Documentation

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | URL vs header versioning, Swagger/OpenAPI UI, deprecation strategy. | API versioning, deprecation headers, changelog, SDK/client generation. |
| **Online (1h)** | Version an API | Break and fix a contract gracefully. |

**Deliverable:** Versioned API + updated Swagger UI

---

## Finals — Identity & Security + Testing/CI/CD + Capstone

**Goal:** Production skills — secure, test, deploy, and present a full-stack application.

### Learning Objectives

- Implement JWT-based authentication and authorization
- Write unit, integration, and end-to-end tests
- Set up a CI/CD pipeline with GitHub Actions
- Deploy a production-grade full-stack application
- Articulate architecture tradeoffs in an oral defense

### Week 13 — Auth Deep-Dive

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | JWT internals (header, payload, signature), token-based auth, refresh tokens, OAuth2 flow mental model. | JWT, access vs refresh tokens, bearer tokens, OAuth2, OpenID Connect. |
| **Online (1h)** | JWT workshop | Decode tokens, forge tokens, validate signature. |

**Deliverable:** Auth system with JWT (login, protected routes, refresh)

### Week 14 — Testing

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Unit (xUnit), integration (WebApplicationFactory), E2E (Playwright). Testing pyramid. | `Fact`, `Theory`, `WebApplicationFactory`, `Playwright`, code coverage. |
| **Online (1h)** | Add tests | Add unit + integration + 1 E2E test to existing app. |

**Deliverable:** Test suite for capstone application

### Week 15 — CI/CD & Deployment

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | GitHub Actions, build -> test -> deploy pipeline. Deploy to cloud (Azure App Service / Render). | Pipeline stages, secrets, environments, zero-downtime deployment. |
| **Online (1h)** | CI/CD pipeline | Push code -> auto-build -> auto-test -> auto-deploy. |

**Deliverable:** Continuous deployment pipeline

### Week 16 — Capstone Final

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Production-grade full-stack app. Architecture decisions, security posture, test strategy, deployment. | Full product cycle, production mindset, tradeoff articulation. |
| **Online (1h)** | Final presentations | 10-min demo + 5-min Q&A per student. Oral defense of every architectural decision. |

**Deliverable:** Deployed full-stack app + source code + documentation + CI/CD pipeline

---

## AI / Vibe-Coding Integration

| Phase | Policy | Rationale |
|-------|--------|-----------|
| **Prelim (Weeks 1–4)** | Full AI access. Focus: "compare AI-generated TS types with hand-written ones" | Students have L1 foundations. AI as comparison tool, not crutch. |
| **Midterm (Weeks 5–8)** | AI allowed. Mandatory: 1-paragraph README per AI-generated component explaining what it does and what was changed | Build the audit muscle. Students must understand before accepting. |
| **PreFinals (Weeks 9–12)** | AI generates OpenAPI spec -> students review/correct/critique. AI generates client SDK -> students test and find bugs | AI as generator, student as quality gate. |
| **Finals (Weeks 13–16)** | Full AI. Assessment: system behavior, security, performance, and ability to articulate "AI suggested X, but I chose Y because..." | Mirror industry reality. Architects who leverage AI critically. |

### Core Principles

- **Prompt literacy** — teach chain-of-thought, persona prompting, context stuffing
- **Audit the output** — assume AI got something wrong; your job is to find it
- **Explain tradeoffs** — every AI suggestion comes with a decision ("I accepted this because...", "I rejected this and rewrote as...")
- **Ethics & attribution** — document what AI generated vs. what you wrote

---

## Cross-Cutting Practices

| Practice | Integration |
|----------|-------------|
| **Git** | Prelim: PR workflow, code review. Finals: CI/CD pipeline |
| **Kanban** | Every term starts with sprint planning. Week 15: release sprint |
| **Debugging** | Dedicated labs (Weeks 2, 7) + AI-assisted diagnostic culture |
| **Code Review** | PR-based workflow. Week 11 peer review. AI-assisted code review |
| **Deployment** | Week 15 CI/CD. Week 16 production deployment |

## Grading Breakdown (Suggested)

| Component | Weight |
|-----------|--------|
| Weekly deliverables (6) | 25% |
| Midterm project | 20% |
| PreFinals project | 20% |
| Finals capstone | 30% |
| Participation / Code review | 5% |

---

## Roadmap: L1 -> L2 Connection

```
L1 (Elective 2)                        L2 (Elective 3)
-----------------                      -----------------
C# for MVC + HTTP Foundations --------> Modern JS/TypeScript + Tooling
  (request/response, DI, routing)         (async, types, professional toolchain)

ASP.NET Core MVC --------------------> Component Architecture (Vanilla -> React)
  (controllers, views, SSR)               (declarative UI, component model)

Data & Persistence + APIs -----------> API as Product + Integration
  (EF Core, HttpClient, CRUD)             (REST design, OpenAPI, full-stack)

Auth + Security + Capstone ----------> Identity + Testing + CI/CD + Capstone
  (cookie auth, basic security)           (JWT, OAuth2, test pyramid, deploy)
```

**Serial path (recommended):** L1 builds the "ship a feature" muscle. L2 adds "ship reliably in production." L1 projects can serve as case studies for L2 hardening.

**Standalone viability:** L2 can be taken without L1 with a 2-week primer on HTTP, MVC, and CRUD concepts.
