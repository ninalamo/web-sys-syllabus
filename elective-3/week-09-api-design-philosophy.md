## Week 9: API Design Philosophy

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + REST Constraint Diagram |
| Code Walkthrough | 30 min | Live Spec Writing (OpenAPI YAML) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 9 strategy):** This is the pivot week — students switch from frontend consumers to backend designers. The biggest mental shift: "APIs are products, not implementation details." Emphasize API-first design: contract before code. The restaurant menu analogy is essential — reference it every time you introduce a new concept. Don't let students skip to coding; the OpenAPI spec IS the work this week.

### 1. The Hook

> [SPEAK] **Script:** "You know how Twitter's API changed and thousands of third-party apps broke overnight? Or how Instagram's API has strict rate limits that made developers scream? APIs are products, and bad API design is like a restaurant with no menu — customers don't know what's available, the kitchen doesn't know what to make, and everyone leaves frustrated. You're about to learn how to design APIs that other developers (including your future self) actually want to use."

> [SLIDE] **Slide:** Title: "APIs Are Products, Not Afterthoughts"  
> Left: Twitter API v1 -> v2 migration chaos (broken apps, angry devs). Right: Stripe's API docs (clean, consistent, beloved). Subtitle: "The difference is design philosophy."

> [TIP] **Teaching Tip:** This hook creates stakes — students realize their future APIs could break real products. Make it personal: "Raise your hand if you've ever used an API with terrible documentation."

> [ENGAGE] **Gen-Z:** "Bad API design is like a GCash transfer with no confirmation screen. You send the money, but you have no idea if it went through, how much the fee was, or where to check the receipt. Good APIs tell you exactly what happened."  
> **-> Phone moment:** "Open any app that uses a public API — maybe a weather app or a crypto tracker. Notice how it loads data smoothly? That's good API design working behind the scenes."

> [LOST] **If they're lost:** "Don't worry if you've never designed an API before. You've been USING them your whole life. This week, you learn how they're built from the consumer's perspective first."

---

### 2. The Analogy

> [SPEAK] **Script:** "Designing an API is like designing a restaurant menu. The menu (API contract) tells customers (frontend developers) exactly what they can order (endpoints), how to order it (HTTP methods), what they'll get back (response format), and what happens if something goes wrong (error responses). A good menu is consistent, clear, and doesn't surprise you. A bad menu has 'Chef's Surprise' as the only option and charges you differently every time. Your API contract is the menu — write it before you build the kitchen."

> [BOARD] **Whiteboard:** Draw the restaurant comparison:
> ```
> MENU (API Contract)          KITCHEN (Backend Implementation)
> +------------------+         +------------------+
> | GET /posts       | ------=> |  Fetch from DB   |
> | POST /posts      | ------=> |  Insert to DB    |
> | DELETE /posts/42 | ------=> |  Remove from DB  |
> +------------------+         +------------------+
> 
> GOOD MENU:                    BAD MENU:
> - Clear descriptions          - "Chef's Surprise"
> - Consistent prices           - Different prices daily
> - Error: "Out of stock"       - Error: *silence*
> ```

> [TIP] **Teaching Tip:** The menu analogy maps perfectly: menu items = endpoints, ordering method = HTTP verbs, dish description = response schema, "out of stock" = error responses. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "The API contract is like your Shopee order page — it shows exactly what you're getting, the price, the delivery date, and what happens if something goes wrong. No surprises."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the HTTP method? What's the response body? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the restaurant. API contract = agreement on what data goes in, what comes out, and what errors look like. Write it before coding. That's the whole point."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min REST constraints -> 5 min resource modeling -> 5 min HTTP methods -> 5 min error contracts -> 5 min naming conventions)

> [SPEAK] **Script:** "Without a contract, frontend and backend developers work in the dark. The backend builds endpoints the frontend doesn't need. The frontend expects data the backend doesn't provide. API-first design solves this by agreeing on the contract *before* writing any code. Let me show you the core principles."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a good vs bad example, (3) why it matters. Don't show all concepts at once — cognitive overload.

> [TIP] **Teaching Tip:** Spend the most time on resource modeling and HTTP method semantics — this is where students make the most mistakes. They'll want to create `/getUser` and `/createUser`. Stop them. Emphasize: nouns, not verbs.

> [ASK] **Ask the class:** "If you want to get all users, what's the endpoint?" (`GET /users`) "If you want to create a new user?" (`POST /users`) "If you want to delete user 42?" (`DELETE /users/42`) "See the pattern? The URL is the resource, the method is the action."

> [ENGAGE] **Gen-Z:** "REST constraints are like the rules of a board game. Stateless = each turn is independent. Client-server = you play your cards, the game board tracks the state. Uniform interface = everyone follows the same rules. Break the rules and the game falls apart."  
> **-> Phone moment:** "Open your browser's DevTools -> Network tab. Look at any API request. What's the HTTP method? What's the URL? What's the response status? That's REST in action."

> [Q&A] **Student Q:** "Why can't I just use POST for everything? It's simpler."
> **Short answer:** Because it breaks the REST contract and loses semantics.
> **Real answer:** `GET` is cacheable and safe. `PUT` is idempotent (retry-safe). `DELETE` is idempotent. If you use POST for everything, you lose caching, retry safety, and every tool that understands HTTP semantics. Proxies, CDNs, and browsers all rely on these semantics.
> **The hidden question:** "Does this really matter?" -> Yes. Using wrong methods breaks caching, breaks retry logic, and makes your API confusing for every developer who uses it.

> [Q&A] **Student Q:** "What's the difference between PUT and PATCH?"
> **Short answer:** PUT replaces the entire resource. PATCH updates specific fields.
> **Real answer:** `PUT /users/1` with `{ name: "Bob" }` replaces the entire user — any fields not included become null/default. `PATCH /users/1` with `{ name: "Bob" }` only changes the name, leaving other fields intact. Use PUT when you have the full resource, PATCH when you're updating a few fields.
> **The hidden question:** "Which one should I use?" -> PATCH for partial updates (most common). PUT when you're replacing the entire resource.

> [LOST] **If they're lost:** "The simplest API design summary: (1) URLs are nouns (resources). (2) HTTP methods are verbs (actions). (3) Errors are consistent. (4) Write the contract first. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min explain contract-first -> 15 min write OpenAPI spec live -> 10 min validate in Swagger Editor)

> [SPEAK] **Script:** "Let's design an OpenAPI spec for a blog API — contract first, code later. We'll define the data shapes first, then the endpoints, then validate it. This is how professional teams design APIs."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: schemas (Post, Error). Step 2: GET /posts (list with pagination). Step 3: POST /posts (create with validation). Step 4: GET/DELETE /posts/{id}.

> [TIP] **Teaching Tip:** **Type the OpenAPI spec live, don't paste.** Explain each section as you write it: "This is the Post schema — these are the fields the client can expect." "This `readOnly: true` means the client can't set it — the server generates it."

> [BOARD] **Whiteboard:** Draw the spec structure:
> ```
> openapi.yaml
> +-- info (title, version, description)
> +-- components
> |   +-- schemas (Post, Error)
> +-- paths
>     +-- /posts (GET, POST)
>     +-- /posts/{postId} (GET, DELETE)
> ```

> [ENGAGE] **Gen-Z:** "Writing an OpenAPI spec is like building a Gundam instruction manual. You define every part (schemas), every assembly step (endpoints), and what the final product looks like (responses). Then you build it."  
> **-> Type-along:** "Open the Swagger Editor in your browser. Type the spec with me, section by section. Watch it validate in real-time — green means valid, red means fix it."

> [Q&A] **Student Q:** "Why define schemas before endpoints?"
> **Short answer:** Because schemas are your data types — endpoints reference them.
> **Real answer:** Defining schemas first is like defining TypeScript interfaces before writing functions. You establish the data shapes, then endpoints reference those shapes with `$ref`. This avoids duplication and ensures consistency — every endpoint that returns a Post uses the exact same schema.
> **The hidden question:** "Can I write endpoints first?" -> You can, but you'll end up duplicating response shapes. Schema-first is cleaner.

> [LOST] **If they're lost:** "Start with just the Post schema. Get that right. Then add the Error schema. Then one endpoint (GET /posts). Validate it. Then add the next endpoint. One piece at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Stripe's API is widely considered the gold standard of API design. Their consistency is legendary — every endpoint follows the same patterns, every error has the same structure, and their documentation is generated from their OpenAPI spec. Companies that design their API contract first (like Stripe, Twilio, GitHub) have happier developers and fewer integration bugs. Companies that don't (like early Twitter, early Facebook) spend years fixing breaking changes."

> [SLIDE] **Slide:** Stripe API docs screenshot (clean, consistent). Logos: Stripe, Twilio, GitHub. Stat: "API-first companies ship 40% faster with 60% fewer integration bugs."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that API design isn't academic — it's what separates professional APIs from amateur ones.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an API where the docs were terrible?" (Most hands.) "That's what happens when companies don't design their API contract first."

> [LOST] **If they're lost:** "You don't need to know Stripe's entire API. Just understand: good API design = consistent patterns + clear docs + contract first. That's the standard."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min spec writing -> 10 min share)

> [SPEAK] **Script:** "Design an OpenAPI spec for an e-commerce API. Define schemas for Product, Category, Order, OrderItem, and Customer. Then define endpoints for CRUD operations, filtering, and pagination. Validate it in the Swagger Editor."

> [SLIDE] **Slide:** Exercise requirements as a checklist:
> - [ ] Define schemas: Product, Category, Order, OrderItem, Customer
> - [ ] CRUD for Products (list, get, create, update, delete)
> - [ ] `GET /categories/{id}/products` — list products by category
> - [ ] `POST /orders` — create an order with order items
> - [ ] `GET /orders/{id}` — get an order by ID
> - [ ] `GET /customers/{id}/orders` — list orders for a customer
> - [ ] Pagination (`page`, `limit`) for all list endpoints
> - [ ] Filtering where appropriate (`?status=pending`)
> - [ ] Consistent error response schema
> - [ ] Proper HTTP status codes (201, 204, 404, etc.)
> - [ ] Validate in Swagger Editor

> [TIP] **Teaching Tip:** The nested resource endpoints (requirements 3, 5, 6) are the hardest part. Students will struggle with URL design for sub-resources. Circulate and help with the pattern: `/parent/{id}/child`.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the schemas (data shapes), the other handles the endpoints (URLs and methods). Then combine and validate together. It's like a collab — each person owns their part."

> [LOST] **If they're lost:** "Start with the Product schema. Then the GET /products endpoint. Then POST /products. Then add the other schemas. Then the nested endpoints. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate an OpenAPI spec from your requirements, then review every endpoint for REST compliance. Ask 'Is this endpoint using the right HTTP method?' and 'Are all error responses consistent?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate an OpenAPI spec for an e-commerce API" | "Design my error contract for me" |
> | "Is this endpoint REST-compliant?" | "Do the entire exercise" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes listed in the content. AI creates action-based endpoints (`/createUser`) instead of resource-based. Teach students to catch this.

> [ENGAGE] **Gen-Z:** "AI is like a junior dev who writes fast but doesn't understand REST principles. It'll give you a working spec, but you need to verify it follows resource-based design."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the spec errors and mental model traps you'll hit this week. The inconsistent naming alone will save you from designing a confusing API."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "OpenAPI spec validation fails"      |
> | YAML syntax errors or invalid keywords|
> | Fix: use Swagger Editor to validate  |
> +--------------------------------------+
> +--------------------------------------+
> | "Inconsistent naming conventions"    |
> | Mixed singular/plural, action verbs  |
> | Fix: pick one style and stick to it  |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The inconsistent naming trap is like your Shopee search — sometimes it's 'phone case', sometimes 'phonecase', sometimes 'phone-case'. Pick one and stick to it, or nobody can find anything."

> [Q&A] **Student Q:** "REST is not a strict rulebook? So I can bend the rules?"
> **Short answer:** Yes, consistency matters more than purity.
> **Real answer:** REST is a set of architectural constraints, not a specification. Some of the best APIs bend REST rules (GraphQL, RPC-style endpoints for specific actions). The goal is that your API is predictable and consistent. If every endpoint follows the same patterns, developers can use it without reading docs for every single endpoint.
> **The hidden question:** "So when DO I break REST rules?" -> When there's a genuinely complex action that doesn't fit the CRUD model (e.g., `/posts/{id}/publish`). But keep it rare.

> [LOST] **If they're lost:** "The #1 issue: inconsistent naming. Pick plural nouns for collections (`/users`), kebab-case for multi-word (`/blog-posts`), and proper HTTP methods. That solves 80% of design confusion."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: API as product -> restaurant menu analogy -> REST constraints -> OpenAPI spec design -> validation. The biggest mental shift is from "API as implementation detail" to "API as product." The OpenAPI spec IS the deliverable this week — students should not write any backend code. Emphasize: contract first, code later. The Swagger Editor validation step is the "aha" moment — students see their spec turn from red to green. Common pitfalls: action-based endpoints (`/createUser`), inconsistent naming, wrong HTTP status codes.

---

