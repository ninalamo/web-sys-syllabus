## Week 11: Consuming APIs with HttpClient

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Live API Demo |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 11 strategy):** This week is fun — students finally see their apps talk to the outside world. But JSON deserialization will frustrate them. The mismatch between snake_case JSON and PascalCase C# properties is the #1 error. Have them paste real API responses into json2csharp.com or use AI to generate models. Also: `IHttpClientFactory` vs `new HttpClient()` is a conceptual leap — use the socket exhaustion demo to make it concrete.

---

### The Hook

> [SPEAK] **Script:** "Your app is lonely. It's been talking to its own database all semester. Time to make friends. Your app can talk to other apps — get weather data, GitHub stats, cat pictures. Your app is about to get a lot more interesting."

> [SLIDE] **Slide:** Title: "Your App Is About to Get a Lot More Interesting"  
> Three screenshots side by side: a weather widget, a GitHub profile card, and a Bitcoin price ticker.  
> Subtitle: "All fetched from external APIs. All in C#. All today."

> [TIP] **Teaching Tip:** This hook should feel exciting — it's the week where apps stop being exercises and start being products. Show a live demo if possible: hit an API from your laptop and display the result in 30 seconds.

> [ENGAGE] **Gen-Z:** "Every app you use is just a fancy API consumer. TikTok fetches videos from an API. GCash fetches your balance from an API. Shopee fetches product listings from an API. Today you learn how to do the same thing."  
> **-> Poll:** "Raise your hand if you've ever wondered how apps get real-time data like weather or stock prices. It's all APIs."

> [LOST] **If they're lost:** "An API is just a URL that returns data instead of a webpage. You visit it, it gives you JSON (a data format), and your app uses that data. That's the entire concept."

---

### The Analogy

> [SPEAK] **Script:** "Consuming an API is like ordering food delivery. Your app calls a restaurant (the API), tells them what it wants (the request), they cook it (process), and deliver it (response). If the restaurant is closed, you get an error (500). If you asked for something not on the menu, they say 'we don't have that' (404). If everything works, you eat (display data)."

> [BOARD] **Whiteboard:** Draw the food delivery analogy:
> ```
> Your App (Customer)
>     v "I want weather data for Manila"
> HttpClient (Delivery rider)
>     v GET request to API URL
> External API (Restaurant)
>     v Cooks the data
> JSON Response (Food delivered)
>     v Deserialize into C# objects
> Your App displays it (You eat)
> ```

> [TIP] **Teaching Tip:** The food delivery analogy works for Filipino students — everyone uses Foodpanda or GrabFood. Emphasize the key insight: **your app is the customer, not the restaurant.** It's consuming, not providing.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If your app is ordering from GrabFood, what's the request? What's the response? What's a 404? 10 seconds, go!" (Request = order, Response = food, 404 = item not on menu.)

> [LOST] **If they're lost:** "Think of it like asking Google a question. You type a query (request), Google searches (process), and shows results (response). APIs work the same way, just with data instead of search results."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min what is an API -> 8 min IHttpClientFactory -> 7 min JSON serialization -> 5 min error handling)

> [SPEAK] **Script:** "Here's the entire API consumption mental model: APIs return JSON, `IHttpClientFactory` makes HTTP calls safely, JSON serialization turns JSON into C# objects, and error handling keeps your app from crashing when APIs fail. Let's go through each."

> [SLIDE] **Slide:** Show the weather API URL first, then the raw JSON response, then the C# model that matches it. Reveal each step: raw JSON -> `[JsonPropertyName]` mapping -> C# properties.

> [TIP] **Teaching Tip:** The most important concept: **`IHttpClientFactory` over `new HttpClient()`.** Socket exhaustion is real and hard to debug. Show them the one-line difference: `builder.Services.AddHttpClient()` vs `new HttpClient()`. For JSON serialization, emphasize: "Property names must match JSON field names. Use `[JsonPropertyName]` when they don't."

> [ASK] **Ask the class:** "What happens if the API is down when your app tries to fetch data?" (Answer: It crashes — unless you handle the error. That's why we need try-catch and status code checks.)

> [ENGAGE] **Gen-Z:** "JSON serialization is like translating from English to Tagalog. The API speaks English (snake_case JSON). Your C# code speaks Tagalog (PascalCase). `[JsonPropertyName]` is the dictionary that maps between them."  
> **-> Phone moment:** "Open any API URL in your browser. See that JSON text? That's what your app will receive. Your job is to turn that into C# objects."

> [Q&A] **Student Q:** "Why can't I just use `new HttpClient()`? It works."
> **Short answer:** It works until it doesn't — then your app crashes with socket exhaustion.
> **Real answer:** `HttpClient` holds onto system sockets even after you dispose it. Creating many instances exhausts available sockets. `IHttpClientFactory` manages a pool of reusable connections. It's the difference between buying a new phone for every call vs using the same phone.
> **The hidden question:** "Is this really a problem?" -> In development with 5 requests, no. In production with 10,000 requests per minute, yes.

> [Q&A] **Student Q:** "What if the JSON structure changes?"
> **Short answer:** Your deserialization breaks.
> **Real answer:** That's why you need error handling. If the API changes, `ReadFromJsonAsync<T>()` returns null or throws. Catch it, log it, and show a graceful error message to the user instead of a crash.
> **The hidden question:** "How do I protect against this?" -> Always check for null after deserialization. Always have a fallback.

> [LOST] **If they're lost:** "Forget the technical terms. The flow is: (1) Create an HttpClient from the factory. (2) Call the API URL. (3) Get JSON back. (4) Turn JSON into C# objects. (5) Display the data. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min Program.cs setup -> 10 min single API call -> 10 min JSON models -> 10 min parallel dashboard)

> [SPEAK] **Script:** "Let's build a dashboard that fetches from three APIs at the same time. First a simple single API call, then we'll add JSON models, then we'll do all three in parallel with `Task.WhenAll`."

> [SLIDE] **Slide:** Show the single API call first (WeatherController). Then reveal the JSON model classes with `[JsonPropertyName]`. Finally show the parallel DashboardController with `Task.WhenAll`.

> [TIP] **Teaching Tip:** **Type this live.** After the single API call, run it and show the result. Then add the JSON model and show how `GetFromJsonAsync<T>()` replaces manual deserialization. For the parallel dashboard, emphasize: "Three calls at the same time = faster than three calls one after another."

> [BOARD] **Whiteboard:** Draw the parallel execution timeline:
> ```
> Sequential (slow):
> [---Weather 500ms---][---GitHub 500ms---][---News 500ms---] = 1500ms
> 
> Parallel with Task.WhenAll (fast):
> [---Weather 500ms---]
> [---GitHub  500ms---]  = 500ms (all at once)
> [---News    500ms---]
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the WeatherController with me. Register `AddHttpClient()` in Program.cs. Run it. See the weather data appear. Now add the GitHub call. Now do both in parallel. Watch the speed difference."

> [Q&A] **Student Q:** "Why does GitHub API require a User-Agent header?"
> **Short answer:** To identify who's making the request.
> **Real answer:** Without a User-Agent, GitHub can't distinguish between legitimate apps and bots. They block unidentified requests to prevent abuse. It's like showing your ID at a building entrance.
> **The hidden question:** "Do all APIs require this?" -> Not all, but many do. Always check the API documentation.

> [LOST] **If they're lost:** "Start with just one API call. Get the weather API working. See the JSON in your browser. Then create the C# model. Then deserialize. Don't try to build the parallel dashboard first."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "No web app is an island. Modern apps integrate 5-15 external APIs on average: payment gateways, maps, notifications, social login, weather, shipping, email. If you can't consume an API, you can't build real products. Every SaaS company has an integration team that does exactly this."

> [SLIDE] **Slide:** A real app architecture diagram showing: Your App -> Stripe (payments), Google Maps (location), SendGrid (email), OpenWeather (weather), GitHub (auth). Label: "One app, five APIs."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Connect it to their capstone: "Your capstone will need at least one external API. This week teaches you how."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used GCash? It integrates with banks, telecom providers, and merchants — all through APIs. That's the scale of API integration in the real world."

> [LOST] **If they're lost:** "You don't need to understand enterprise architecture today. Just know: APIs let your app use other services. That's a superpower. Learn it now, use it forever."

---

### Exercise: API Dashboard

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a dashboard with three API integrations. Weather, GitHub, and one you choose. Handle errors gracefully — if one API is down, the others still work. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Register `IHttpClientFactory` in Program.cs
> - [ ] Fetch Open-Meteo Weather API (free, no key)
> - [ ] Fetch GitHub User API (free, needs User-Agent)
> - [ ] Choose a third API (CoinDesk, Dog Facts, Jikan Anime)
> - [ ] Create `DashboardViewModel` to hold all three data sets
> - [ ] Handle errors: if one API fails, others still display
> - [ ] Display all data in a single view

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — JSON model creation is where students get stuck. Encourage them to paste the API response into a JSON-to-C# tool or ask AI to generate the model. The "aha" moment is when they see live external data on their page.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the weather and GitHub APIs, the other handles the third API. Then combine into one dashboard view."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the weather API working?" (Show of hands.) "How many have all three working?" "If you're stuck on JSON models, paste the API response into json2csharp.com or ask AI."

> [LOST] **If they're lost:** "Start with just the weather API. It's the simplest — no key needed, straightforward JSON. Get that working. Then add GitHub. Then the third one. One API at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your JSON model generator. Paste an API response and ask AI to create the C# model. But comment every generated line — show me you understand what `[JsonPropertyName]` does."

> [SLIDE] **Slide:** Prompt template:
> "I want to call this API [URL]. Generate the C# model and deserialization code. Here's the JSON response [paste]."

> [TIP] **Teaching Tip:** Demonstrate the workflow: (1) Visit API URL in browser, (2) Copy JSON response, (3) Paste into AI prompt, (4) Get C# model, (5) Add comments to every property. This is a real-world skill — developers do this daily.

> [ENGAGE] **Gen-Z:** "AI is your 'JSON translator' — it turns API responses into C# models. But if you can't explain why `[JsonPropertyName('temperature')]` maps to `public double Temperature`, you didn't learn."

> [LOST] **If they're lost:** "Start by asking AI to explain: 'What is JSON deserialization?' 'How does GetFromJsonAsync work?' Build understanding first, then use AI for model generation."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the API errors you WILL see this week. Most are JSON mismatches or missing headers."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | 403 Forbidden on GitHub API              |
> | You didn't set User-Agent header         |
> | Fix: client.DefaultRequestHeaders.Add    |
> | ("User-Agent", "MyApp")                  |
> +------------------------------------------+
> +------------------------------------------+
> | JSON deserialization returns null        |
> | Property names don't match JSON fields   |
> | Fix: use [JsonPropertyName("field_name")]|
> +------------------------------------------+
> +------------------------------------------+
> | Socket exhaustion                        |
> | You used new HttpClient() in a loop      |
> | Fix: use IHttpClientFactory              |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "403 on GitHub API is like trying to enter a club without ID. The bouncer (GitHub) says 'I don't know who you are.' Fix: show your ID (User-Agent header)."

> [Q&A] **Student Q:** "Why does my JSON model have all null values?"
> **Short answer:** Property names don't match the JSON field names.
> **Real answer:** JSON uses `snake_case` (e.g., `current_weather`), C# uses `PascalCase` (e.g., `CurrentWeather`). Without `[JsonPropertyName("current_weather")]`, the deserializer can't map them.
> **The hidden question:** "How do I check?" -> Print the raw JSON string before deserializing. Compare it to your model property names.

> [LOST] **If they're lost:** "The three things to check: (1) Did you register `AddHttpClient()` in Program.cs? (2) Does your C# model match the JSON structure? (3) Are you checking `IsSuccessStatusCode` before deserializing? Those fix 90% of API errors."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: always use `IHttpClientFactory`, never `new HttpClient()`. That prevents socket exhaustion."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The "aha" moment is seeing live external data on the page — make sure every student gets at least one API working. The #1 error is JSON deserialization returning null due to property name mismatches — teach `[JsonPropertyName]` early. `IHttpClientFactory` is non-negotiable — drill this in. Use the parallel vs sequential timeline on the whiteboard to show why `Task.WhenAll` matters.

---

