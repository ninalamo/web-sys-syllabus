# Elective 2: Building Web Products (Level 1)

## Course Philosophy

Concept-first, stack-agnostic lecture — ASP.NET Core as the concrete lab vehicle.
Build real things. Uncover concepts as-needed. Learn by shipping.

## Prerequisites

- Basic HTML, CSS, JavaScript (not expert)
- VB.NET background (OOP concepts familiar, syntax translation needed)
- No prior web framework experience required

## Term Structure

| Term | Weeks | Focus | Weight |
|------|-------|-------|--------|
| Prelim | 1–4 | C# for MVC + Web Foundations | [GREEN] Familiar (VB->C# translation) |
| Midterm | 5–8 | ASP.NET Core MVC — the hard part | [RED] Hardest — full term |
| PreFinals | 9–12 | Data & Persistence + Consuming APIs | [YELLOW] Medium |
| Finals | 13–16 | User Interaction + Security + Capstone | [YELLOW] Lighter + Integration |

## Schedule

- Saturday: 3 hours (lecture + lab, in-depth)
- Weekday: 1 hour online (applied — code review, debugging lab, standup, AI tool demo)

---

## Prelim — C# for MVC + Web Foundations

**Goal:** Translate VB.NET knowledge to C#, understand the web request lifecycle.

### Learning Objectives

- Write C# using idiomatic syntax (not VB translated literally)
- Use constructors, interfaces, and dependency injection
- Explain the HTTP request-response cycle
- Identify HTTP methods, status codes, and headers using browser DevTools
- Trace a request through the MVC pipeline

### Week 1 — C# Translation Bootcamp

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | C# syntax from VB | Types, properties, methods, classes, `var`, string interpolation, LINQ. Live code: convert a VB WinForms class to C# console app. |
| **Online (1h)** | C# katas | 5 small exercises converting VB patterns to C# idioms. |

**Deliverable:** C# console app portfolio (FizzBuzz, calculator, etc.)

**AI policy:** No AI code gen. AI allowed for syntax explanation only.

### Week 2 — Interfaces & DI Mental Model

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | What is a contract? Why controllers shouldn't create their own services. Console app with manual DI. | Interface segregation, constructor injection, IoC container concept. |
| **Online (1h)** | DI playground | Inject different implementations of `INotificationService` (Email, SMS, Console). |

**Deliverable:** DI demo console app

### Week 3 — HTTP & The Web

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Request/response lifecycle, URL structure, HTTP methods, status codes, headers, statelessness. DevTools network tab deep-dive. | GET/POST/PUT/DELETE, status codes (200, 301, 401, 403, 500), caching headers. |
| **Online (1h)** | Trace a real website | Map every request from browsing to a page loading. Identify methods, statuses, timing. |

**Deliverable:** HTTP trace report

### Week 4 — MVC Big Picture

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Request -> route -> controller -> model -> view -> response. Scaffold empty ASP.NET Core MVC project, walk through every file. | `Program.cs`, routing, `Controller`, `View`, `Model`, `cshtml`. |
| **Online (1h)** | Hello MVC | Add a controller, view, model. Show the pipeline live. |

**Deliverable:** Hello MVC running locally

---

## Midterm — ASP.NET Core MVC (The Hard Part)

**Goal:** Build multi-page SSR apps with routing, controllers, views, and real data flow.

### Learning Objectives

- Define routes using convention and attribute routing
- Return different action result types (View, Redirect, Json, StatusCode)
- Build consistent UI with layouts, partial views, and tag helpers
- Bind form data to C# models with validation

### Week 5 — Routing Deep-Dive

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Convention vs attribute routing, route parameters, route constraints. Build a multi-page site with navigation. | `{controller}/{action}/{id}`, `[Route]`, optional params, `LinkGenerator`. |
| **Online (1h)** | Debugging lab | "Why is this route not matching?" — diagnose routing issues. |

**Deliverable:** Multi-page site with 3+ routes

### Week 6 — Controllers & Action Results

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | `IActionResult`, `View()`, `Redirect()`, `Json()`, `Content()`, `StatusCode()`. Returning different response types. | Action methods, model binding (primitive), `[FromRoute]`, `[FromQuery]`. |
| **Online (1h)** | Code review | Examine a controller and identify every type of action result. |

**Deliverable:** Controller portfolio with 5+ action result types

### Week 7 — Views & Layouts

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Razor syntax, Layout pages, Partial Views, View Components, Tag Helpers. | `@`, `@model`, `Layout`, `RenderBody()`, `PartialAsync`, `ViewComponent`. |
| **Online (1h)** | Refactor to Layout | Take raw HTML pages and create a shared layout. |

**Deliverable:** Consistent themed site with layout

### Week 8 — Model Binding & Validation

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Form -> C# object automatically. `[Bind]`, `[ValidateAntiForgeryToken]`, data annotations. | `[Required]`, `[StringLength]`, `[EmailAddress]`, `ModelState.IsValid`, client-side validation. |
| **Online (1h)** | Build a contact form | Form posts -> validated -> display result or errors. |

**Deliverable:** Working contact form with validation

---

## PreFinals — Data & Persistence + Consuming APIs

**Goal:** Store and retrieve data, talk to external services.

### Learning Objectives

- Define DbContext and entities for an application
- Create and apply database migrations
- Query data using LINQ with relationships
- Use IHttpClientFactory to consume external APIs
- Handle loading, error, and empty states

### Week 9 — EF Core Fundamentals

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | DbContext, DbSet, migrations, CRUD. From "just SQL" to ORM mental model. | `Add-Migration`, `Update-Database`, LINQ queries. |
| **Online (1h)** | Reverse engineer | Existing DB -> EF models. Compare hand-written SQL vs LINQ. |

**Deliverable:** First migration + seed data

### Week 10 — Relationships & Data Display

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Navigation properties, eager/lazy loading, `Include()`, `ToListAsync()`. Display related data in views. | `.Include()`, `.ThenInclude()`, navigation properties, foreign keys, `async`. |
| **Online (1h)** | Debugging lab | N+1 query problem — identify, fix, measure performance difference. |

**Deliverable:** Data-driven page with related data

### Week 11 — Consuming APIs with HttpClient

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | `IHttpClientFactory`, JSON serialization, error handling. Fetch data from a public API and display. | `GetFromJsonAsync`, serialization, try-catch, null checks. |
| **Online (1h)** | API scavenger hunt | Find, call, display data from 3 different public APIs. |

**Deliverable:** API dashboard (weather + news + GitHub stats)

### Week 12 — Mini-Capstone Checkpoint

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Integrate DB + external API into one app. Student choice (task manager with weather? blog with GitHub stats?). | Integration patterns, separation of concerns, Service layer. |
| **Online (1h)** | Peer review | Present architecture diagram, get feedback. |

**Deliverable:** Running integrated app

---

## Finals — User Interaction + Security + Capstone

**Goal:** Polish, secure, deploy, and present.

### Learning Objectives

- Implement cookie-based authentication with ASP.NET Core Identity
- Identify and prevent XSS, CSRF, and SQL injection
- Plan and execute a full-stack web project independently
- Deploy a web application to a cloud platform

### Week 13 — Authentication & Authorization

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Cookie auth, `[Authorize]`, roles, register/login/logout. ASP.NET Core Identity scaffold. | Identity, `SignInManager`, `UserManager`, `[Authorize]`, roles. |
| **Online (1h)** | Add auth | Take previous app, add login, protect routes. |

**Deliverable:** App with login gate

### Week 14 — Security Fundamentals

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | XSS (Razor auto-encodes), SQL injection (EF prevents), CSRF (antiforgery token), HTTPS. OWASP quick tour. | Auto-encoding, `[ValidateAntiForgeryToken]`, parameterized queries, CSP headers. |
| **Online (1h)** | Security audit lab | Given a vulnerable app, find and fix 5 security flaws. |

**Deliverable:** Security audit report

### Week 15 — Capstone Sprint

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Build complete web app from scratch. User stories -> schema -> routes -> UI -> auth. | Kanban board, feature branches, daily commits. |
| **Online (1h)** | Sprint review | Demo progress, get feedback, adjust scope. |

**Deliverable:** Capstone sprint delivery

### Week 16 — Capstone Final

| | Topic | Details |
|---|---|---|
| **Sat (3h)** | Polish, deploy, final testing. Deployment to Render/Railway/Azure. | Full product cycle, environment config, deployment pipeline. |
| **Online (1h)** | Final presentations | 10-min demo + 5-min Q&A per student. Oral defense of architecture decisions. |

**Deliverable:** Deployed capstone + source code + presentation

---

## AI / Vibe-Coding Integration

| Phase | Policy | Rationale |
|-------|--------|-----------|
| **Prelim (Weeks 1–4)** | No AI code gen. AI for explanation and debugging help only. | Build foundational mental models. Students must type every line. |
| **Midterm (Weeks 5–8)** | AI as debugging tutor. "Why is this not working?" style queries. | Learn to diagnose problems before learning to generate solutions. |
| **PreFinals (Weeks 9–12)** | AI as pair programmer. Students must comment every AI-generated line explaining what it does. | Transition period. Students learn to evaluate AI output. |
| **Finals (Weeks 13–16)** | Full AI allowed. Submission includes: prompt log + code review of AI output + oral defense. | Mirror industry reality. Students act as architects/reviewers. |

### Core Principles

- **Read before you generate** — understand manually written code before using AI
- **Assume the AI got something wrong; find it** — audit mentality
- **Prompt literacy** — teach prompt patterns as a meta-skill
- **Attribution** — document what AI generated vs. what you wrote

---

## Cross-Cutting Practices

| Practice | Integration |
|----------|-------------|
| **Git** | Week 1: init/commit/push. Week 8: branching. Finals: feature branches |
| **Kanban** | Introduced Midterm week 1. PreFinals: sprint planning. Finals: full sprint |
| **Debugging** | Dedicated lab each term (Weeks 5, 10) + online sessions |
| **Code Review** | Week 12 peer review. Finals PR-based workflow |
| **Deployment** | Week 16 cloud deployment (Render / Railway / Azure) |

## Grading Breakdown (Suggested)

| Component | Weight |
|-----------|--------|
| Weekly deliverables (6) | 30% |
| Midterm project | 20% |
| PreFinals checkpoint | 20% |
| Finals capstone | 30% |
