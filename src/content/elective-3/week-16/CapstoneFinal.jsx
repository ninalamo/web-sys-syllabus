export default function CapstoneFinal() {
  return (
    <div className="page-content">
      <h2>Week 16: Capstone Final</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 15: CI/CD &amp; Deployment"<br />
        🎯 This week: "Showcase your full-stack capstone — demo, defend, and celebrate 16 weeks of building"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. Architecture Decisions (5 min)<br />
        ▸ B. Security Posture (5 min)<br />
        ▸ C. Test Strategy (5 min)<br />
        ▸ D. Deployment (5 min)<br />
        ▸ E. Tradeoff Articulation (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission<br />
        <br />
        ✅ By end of lab: Present deployed app; defend architecture choices; answer Q&amp;A; submit portfolio-ready codebase
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Architecture Diagram</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Architecture Review + Oral Defense Prep</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Capstone Presentations</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 16 strategy):</strong> This is the culmination — everything from 15 weeks comes together. The restaurant grand opening analogy is essential. This week is NOT about teaching new concepts — it's about students presenting, defending, and reflecting. The oral defense prep is the most valuable activity: run mock Q&amp;A sessions. Emphasize: a working simple app beats a broken complex one. The demo disaster prep (video backup, screenshots) is critical — Murphy's Law applies. Students must be able to explain every AI-generated section.</p>
      </blockquote>
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This is it. The moment where everything you've learned over 15 weeks comes together into one product. You're not just building an app — you're building a portfolio piece that proves you can ship a production-grade full-stack application. When you walk into a job interview and they ask 'what have you built?', this is your answer. Make it count."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "15 Weeks. One Product. Your Portfolio."<br />Timeline graphic: Week 1 (JS) -&gt; Week 6 (React) -&gt; Week 10 (ASP.NET) -&gt; Week 13 (Auth) -&gt; Week 14 (Testing) -&gt; Week 15 (CI/CD) -&gt; Week 16 (Capstone). Each week is a building block leading to the final product.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Make it emotional. Remind them how far they've come: "Week 1 you were replacing <code>var</code> with <code>const</code>. Today you're deploying a full-stack app with JWT auth, tests, and CI/CD. That's a transformation."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Your capstone is like your college thesis but actually useful. Instead of a paper nobody reads, you're building a real app that runs on the internet. When you apply for jobs, this is what you show — not your grades, your PRODUCT."<br /><strong>-&gt; Phone moment:</strong> "Open your deployed app on your phone right now. That's YOUR app, running on the internet, accessible from anywhere. Sixteen weeks ago, you couldn't have built that."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't panic if your capstone isn't perfect. A working simple app is better than a broken complex one. Focus on what works, document what doesn't, and be honest about tradeoffs."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 2. The Analogy</h3>
      <blockquote>
        <p><em>(Part of Hook — same 15 min block)</em></p>
        <blockquote>
          <p>[SPEAK] <strong>Script:</strong> "The capstone is like a restaurant's grand opening. For 15 weeks, you've been learning individual skills: cooking (components), plating (styling), inventory management (state), customer service (APIs), health inspection (testing), and opening procedures (deployment). Now it's opening night. Every skill needs to work together. The food needs to be good, the service needs to be smooth, and the health inspector needs to approve. One weak link and the whole experience falls apart."</p>
        </blockquote>
        <blockquote>
          <p>[BOARD] <strong>Whiteboard:</strong> Draw the restaurant comparison:</p>
          <pre><code>15 WEEKS OF PREP -&gt; GRAND OPENING
      
          Cooking (Components)     -&gt; Your React UI
          Plating (Styling)        -&gt; Your CSS/Tailwind
          Inventory (State)        -&gt; useState, Context, Auth
          Customer Service (APIs)  -&gt; ASP.NET Core endpoints
          Health Inspection (Test) -&gt; xUnit, Playwright tests
          Opening Procedures (CD)  -&gt; GitHub Actions pipeline
      
          GRAND OPENING = Capstone Defense
          - Does the app work? (functional)
          - Is the code clean? (quality)
          - Is it deployed? (production-ready)
          - Can you explain your choices? (engineering)
        </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The restaurant analogy maps perfectly: each skill learned = a restaurant competency, grand opening = capstone defense. Draw it and reference it throughout. Emphasize: the defense is NOT about having the most features — it's about having a complete, working product.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The oral defense is like your thesis defense but for your CODE. Instead of defending your research methodology, you're defending why you chose JWT over cookies, React over Vue, and why your architecture makes sense."<br /><strong>-&gt; Turn to your neighbor:</strong> "In the restaurant analogy, what's the 'health inspection'? What's the 'grand opening'? 15 seconds, discuss!"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the restaurant. Capstone = show your working app, explain your choices, answer questions. That's it. You've been building toward this for 15 weeks."</p>
      </blockquote>
      <hr />
      </blockquote><h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 3. Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (5 min architecture decisions -&gt; 5 min security posture -&gt; 5 min test strategy -&gt; 5 min deployment -&gt; 5 min tradeoff articulation)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Individual skills are useless without the ability to combine them into a complete product. The capstone forces you to make architecture decisions, handle tradeoffs, and present your work — exactly what you'll do in a real job. Let me show you what examiners look for."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show one concept at a time. For each: (1) the concept, (2) an example answer, (3) what a bad answer looks like. Don't show all concepts at once.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Spend the most time on tradeoff articulation — this is what separates engineers from coders. Run mock Q&amp;A: "Why did you choose X?" "What would you do differently?" Students need to practice defending their choices out loud.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If an examiner asks 'Why JWT over cookie-based auth?', what's a good answer?" (JWT is stateless, scales horizontally, tradeoff is revocation difficulty — handled with refresh token rotation.) "What's a bad answer?" ('Because the tutorial used JWT.' — no reasoning.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Tradeoff articulation is like explaining why you chose your college. 'I chose UP because it's the best' is weak. 'I chose UP because the CS program has industry partnerships, the tradeoff is the commute, but the networking opportunities outweigh it' — that's engineering thinking."<br /><strong>-&gt; Phone moment:</strong> "Look at your deployed app. For every technology you used, ask yourself: why this one? What was the alternative? What did I give up? If you can't answer, figure it out before the defense."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What if my app doesn't work during the demo?"
        <strong>Short answer:</strong> Have a backup plan.
        <strong>Real answer:</strong> Record a video of your demo beforehand. Take screenshots of key features. Have a local fallback ready. Test the live deployment right before your presentation. Know how to restart your services if they crash. The best presenters prepare for disaster.
        <strong>The hidden question:</strong> "Will I lose points?" -&gt; Not if you have a backup. Examiners understand that live demos fail. What they DO penalize is having no backup.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What if I used AI for most of my code?"
        <strong>Short answer:</strong> That's fine — if you can explain it.
        <strong>Real answer:</strong> In the real world, engineers use AI constantly. The difference is they understand what the AI generates. If you can trace through every AI-generated section line by line and explain why it works, you're fine. If you can't, rewrite it. The oral defense will expose gaps in understanding.
        <strong>The hidden question:</strong> "How much AI is too much?" -&gt; There's no limit on AI usage. The limit is your ability to explain and defend every line.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The simplest capstone summary: (1) Deployed app that works. (2) Clean code with tests. (3) CI/CD pipeline. (4) Can explain every choice. That's what examiners look for. Focus on these four things."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 4. Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (15 min architecture review -&gt; 15 min oral defense mock Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's review what a production-grade capstone looks like — the full architecture from frontend to database. Then we'll practice the oral defense with real questions examiners will ask."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the full architecture diagram. Then show the mock Q&amp;A format: examiner question -&gt; good answer -&gt; why it's good.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Run the mock Q&amp;A live.</strong> Pick 3-4 students at random and ask them real defense questions. This is the most valuable preparation they'll get. Give constructive feedback on their answers.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the full-stack architecture:</p>
        <pre><code>Frontend (React) -&gt; HTTP + JSON + Bearer token -&gt; Backend (ASP.NET Core)
        +- Pages/Routes                                              +- Controllers
        +- Components                                                +- Services
        +- Hooks (useFetch, useAuth)                                 +- Models
        +- Context (Auth, State)                                     +- Auth (JWT)
      
        Backend -&gt; Entity Framework Core -&gt; Database (SQL Server)
        +- Swagger/OpenAPI docs                          +- Migrations
        +- [ApiController] validation                    +- Seeding
        +- CORS policy                                   +- Tables
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Reviewing your architecture is like checking your outfit before a job interview. Every piece needs to make sense together. Your frontend talks to your backend, your backend talks to your database, your CI/CD deploys everything. If one piece is missing or broken, the whole thing falls apart."<br /><strong>-&gt; Practice:</strong> "Turn to your neighbor. One is the examiner, one is the student. Ask: 'Why did you choose this architecture?' Switch roles after 2 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "How do I explain my architecture if I don't fully understand it?"
        <strong>Short answer:</strong> You need to understand it before the defense.
        <strong>Real answer:</strong> Go through every file in your project. Trace the data flow: user clicks button -&gt; React component sends request -&gt; API controller receives it -&gt; service processes it -&gt; database stores it -&gt; response returns -&gt; UI updates. If you can trace this flow for every feature, you can explain your architecture.
        <strong>The hidden question:</strong> "What if I copied code I don't understand?" -&gt; Rewrite it. You can't defend what you don't understand.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Focus on the data flow. For every feature in your app, trace: frontend -&gt; API -&gt; database -&gt; response -&gt; UI. If you can explain this for each feature, you can handle any defense question."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 5. Debugging + Wrap</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the capstone pitfalls and disaster scenarios you need to prepare for. The demo disaster alone will save your presentation."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+--------------------------------------+
        | "App works locally but breaks in     |
        | production"                          |
        | Check: env vars, DB connection,      |
        | CORS, HTTPS, file paths              |
        +--------------------------------------+
        +--------------------------------------+
        | "It works but I can't explain why"   |
        | AI-generated code you don't          |
        | understand                           |
        | Fix: trace through every section     |
        +--------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The demo disaster is like your presentation file not opening during class. Always have a backup: video recording, screenshots, local fallback. Murphy's Law says if something CAN break during a demo, it WILL."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "More features = better project, right?"
        <strong>Short answer:</strong> No. Working simple &gt; broken complex.
        <strong>Real answer:</strong> A CRUD app with auth, tests, CI/CD, and a clean deployment is worth more than a social network with 20 features that crashes. Examiners evaluate: does it work? is it well-built? can you explain it? Not: how many features does it have?
        <strong>The hidden question:</strong> "So I shouldn't add more features?" -&gt; Only if they work. A finished simple app beats an unfinished complex one every time.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The #1 capstone issue: 'it works but I can't explain why.' Before your defense, go through every AI-generated section and trace through it line by line. If you can't explain it, rewrite it. The oral defense WILL expose gaps."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. In-Class Exercise — Capstone Presentations</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min prep -&gt; 40 min presentations -&gt; 10 min feedback)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Present your production-grade full-stack capstone application. Demo the live app, walk through your architecture, and defend every decision. This is your moment to show what you've built."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Deliverables checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Deployed full-stack app — live URL</li>
          <li><input disabled="" type="checkbox" /> Source code — clean repo with README</li>
          <li><input disabled="" type="checkbox" /> Documentation — architecture diagram, API docs, setup instructions</li>
          <li><input disabled="" type="checkbox" /> CI/CD pipeline — automated build, test, deploy</li>
          <li><input disabled="" type="checkbox" /> Test suite — unit, integration, E2E + coverage report</li>
          <li><input disabled="" type="checkbox" /> 10-minute demo — live walkthrough</li>
          <li><input disabled="" type="checkbox" /> 5-minute Q&amp;A — defend architectural decisions</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The oral defense Q&amp;A (deliverable 7) is where students shine or struggle. Run a structured format: 10-min demo -&gt; 5-min Q&amp;A -&gt; 2-min feedback. Keep time strictly.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Presentations:</strong> "This is your showcase. Treat it like a product launch. Show what works, be honest about what doesn't, and own your decisions. The best presentations are confident and honest."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "If your live demo fails, switch to your video backup immediately. Don't panic. Don't try to fix it live. Examiners respect preparation more than perfection."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>Industry Reality</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This capstone defense mirrors a real architecture review at any tech company. When an engineer proposes a new system, they present the architecture, justify their choices, discuss tradeoffs, and answer questions from senior engineers. The format is identical: demo the product, explain the architecture, defend your decisions. The only difference is that in a real company, the stakes are higher and the audience is your team instead of your professor."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Architecture review format at Google, Amazon, Microsoft. Show a real architecture diagram from a tech blog. Stat: "Every FAANG company uses this exact format for technical reviews."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Show them that the capstone defense isn't academic — it's the same format used in real engineering roles.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you think this defense is just a school requirement?" (Some hands.) "It's actually practice for your first job. Every tech company makes you present and defend your work. This is your rehearsal."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Use AI for boilerplate (component scaffolding, API endpoint templates, test setup). Use it to review your architecture ('what security issues do you see in this design?'). Use it to generate your README structure. But the architecture decisions, the security posture, and the tradeoff analysis must be YOURS."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> AI usage guide:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"Review my architecture for security issues"</td>
            <td>"Make my architectural decisions"</td>
          </tr>
          <tr>
            <td>"Generate README structure"</td>
            <td>"Write my tradeoff analysis"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Point out the common AI mistakes: overly complex architectures, patterns students don't understand, security vulnerabilities in AI-generated code, "best practice" suggestions that don't fit the use case. Emphasize: if AI chose it and you can't explain why, you'll fail the Q&amp;A.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your co-pilot, not your pilot. It can suggest routes, but YOU need to know where you're going and why. In the defense, examiners will ask 'why did you choose this?' — if your answer is 'AI suggested it,' that's not enough."</p>
      </blockquote>
      <hr />
      <p><em>This week's core arc: 15-week journey -&gt; restaurant grand opening analogy -&gt; architecture review -&gt; mock Q&amp;A -&gt; live presentations. Key pitfalls: demo disasters (no backup), AI-generated code you can't explain, feature bloat over working simplicity.</em></p>
      <hr />
      <h2>Appendix: AI / Vibe-Coding Integration Guide</h2>
      <h3>Phase-by-Phase Policy</h3>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Policy</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Prelim (Weeks 1-4)</strong></td>
          <td>Full AI access. Focus: "compare AI-generated TS types with hand-written ones"</td>
          <td>Students have L1 foundations. AI as comparison tool, not crutch.</td>
        </tr>
        <tr>
          <td><strong>Midterm (Weeks 5-8)</strong></td>
          <td>AI allowed. Mandatory: 1-paragraph README per AI-generated component explaining what it does and what was changed</td>
          <td>Build the audit muscle. Students must understand before accepting.</td>
        </tr>
        <tr>
          <td><strong>PreFinals (Weeks 9-12)</strong></td>
          <td>AI generates OpenAPI spec -&gt; students review/correct/critique. AI generates client SDK -&gt; students test and find bugs</td>
          <td>AI as generator, student as quality gate.</td>
        </tr>
        <tr>
          <td><strong>Finals (Weeks 13-16)</strong></td>
          <td>Full AI. Assessment: system behavior, security, performance, and ability to articulate "AI suggested X, but I chose Y because..."</td>
          <td>Mirror industry reality. Architects who leverage AI critically.</td>
        </tr>
      </tbody></table>
      <h3>Core Principles</h3>
      <ul>
        <li><strong>Prompt literacy</strong> — teach chain-of-thought, persona prompting, context stuffing</li>
        <li><strong>Audit the output</strong> — assume AI got something wrong; your job is to find it</li>
        <li><strong>Explain tradeoffs</strong> — every AI suggestion comes with a decision ("I accepted this because...", "I rejected this and rewrote as...")</li>
        <li><strong>Ethics and attribution</strong> — document what AI generated vs. what you wrote</li>
      </ul>
      <h3>Cross-Cutting Practices</h3>
      <table>
        <thead>
          <tr>
            <th>Practice</th>
            <th>Integration</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Git</strong></td>
          <td>Prelim: PR workflow, code review. Finals: CI/CD pipeline</td>
        </tr>
        <tr>
          <td><strong>Kanban</strong></td>
          <td>Every term starts with sprint planning. Week 15: release sprint</td>
        </tr>
        <tr>
          <td><strong>Debugging</strong></td>
          <td>Dedicated labs (Weeks 2, 7) + AI-assisted diagnostic culture</td>
        </tr>
        <tr>
          <td><strong>Code Review</strong></td>
          <td>PR-based workflow. Week 11 peer review. AI-assisted code review</td>
        </tr>
        <tr>
          <td><strong>Deployment</strong></td>
          <td>Week 15 CI/CD. Week 16 production deployment</td>
        </tr>
      </tbody></table>
    </div>
  )
}
