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
