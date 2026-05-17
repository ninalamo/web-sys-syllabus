export default function MiniCapstoneCheckpoint() {
  return (
    <div className="page-content">
      <h2>Week 12: Mini Capstone Checkpoint</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 11: Consuming APIs with HttpClient"<br />
        🎯 This week: "Consolidate — build a mini-capstone to prove you can put all the pieces together"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Architecture Review (7 min)<br />▸ B. Minimum Viable Product / MVP (7 min)<br />▸ C. Debugging the Yellow Screen (6 min)<br />▸ D. Peer Code Review (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality (code review culture) + AI Integration + Capstone Checkpoint deliverables<br />
        <br />
        ✅ By end of lab: Build MVC app from scratch; connect to DB with EF Core; read runtime error and find source file; understand MVP concept
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
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
            <td>Lecture + Slides + MVP Planning</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Debugging (Common pitfalls)</td>
          </tr>
          <tr>
            <td>Break</td>
            <td>10 min</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Exercise</td>
            <td>55 min</td>
            <td>Lab (Code Review + Catchup)</td>
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
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Do not introduce new code today. This is a consolidation week. Students are building a mini-project to prove they understand MVC, EF Core, and Routing before moving to advanced topics like Security.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You have all the Lego pieces. You know how the bricks snap together. Now, nobody is handing you an instruction manual. You have to build the house yourself."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The House Blueprint</p>
        <ul>
          <li><strong>Foundation (EF Core):</strong> If the database is broken, nothing works.</li>
          <li><strong>Walls (Controllers/Models):</strong> The structure that holds data.</li>
          <li><strong>Paint (Views):</strong> Make it look good <em>last</em>. Don't paint a wall before it's built!</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Architecture Review (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Let's review the golden rule of MVC: Separation of Concerns. Where does logic go? Not in the view. Where does HTML go? Not in the controller."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw a triangle: <code>Model (Data/Rules) &lt;--&gt; Controller (Traffic Cop) &lt;--&gt; View (UI)</code>.</p>
        <p><strong>[TIP] Instructor Tip:</strong> Ask students to shout out where specific tasks belong (e.g., "Where do I validate an email?" -&gt; Model Annotation. "Where do I query the database?" -&gt; Controller).</p>
      </blockquote>
      <h4>▸ B. Minimum Viable Product (MVP) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Perfection is the enemy of done. An MVP is the absolute bare minimum required to prove the app works."</p>
        <p><strong>[CODE] Example:</strong></p>
        <ul>
          <li><strong>Not MVP:</strong> A login system, dark mode toggle, forgotten password email.</li>
          <li><strong>MVP:</strong> I can click "Add Item", it saves to the database, and it appears on the list.</li>
        </ul>
        <p><strong>[TIP] Gen-Z Hook:</strong> MVP is the rough draft of your TikTok. Post it, see if the hook works, then worry about the filters later.</p>
      </blockquote>
      <h4>▸ C. Debugging the Yellow Screen (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "When ASP.NET crashes, it throws a giant yellow/white error screen with 500 lines of text. Do not panic. The answer is almost always in the first 2 lines."</p>
        <p><strong>[VISUAL] Example:</strong>
        Show an <code>InvalidOperationException: The view was not found</code>. Point exactly to where it says what view name it was looking for.</p>
        <p><strong>[TIP] Instructor Tip:</strong> Teach them the "Read the Red" rule. If it's a compiler error, read the red underline. If it's a runtime error, read the top line of the stack trace.</p>
      </blockquote>
      <h4>▸ D. Peer Code Review (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "In the industry, you never push code without someone else reading it first. We look for naming conventions, dead code, and security risks."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Debugging Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "I have a broken project. We are going to debug it together using the skills you've learned."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Routing Bug</strong><ul>
        <li><em>Action:</em> Run an app where clicking a link returns a 404. Trace it to a misspelled Action method name in the controller.</li>
      </ul>
      </li>
      <li><strong>Step 2: The Database Bug</strong><ul>
      <li><em>Action:</em> Try to save a record. It crashes with a column error. Show them how to check if a migration was run.</li>
      </ul>
      </li>
      <li><strong>Step 3: The View Bug</strong><ul>
      <li><em>Action:</em> Show a page crashing because a <code>foreach</code> loop is iterating over a <code>null</code> list. Add the <code>null</code> check.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Peer Review Lab. Have students swap laptops (or screenshare). The reviewer must find 3 things to improve in the other person's code: a bad variable name, a missing comment, or a missing <code>null</code> check.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "The biggest mistake junior developers make on their first big project is Feature Creep. They start building an inventory system, decide it needs a chat feature, spend 3 days trying to build chat, and fail the project because the inventory system doesn't work. The industry builds in 'Sprints'. Sprint 1: Make it work. Sprint 2: Make it pretty. Sprint 3: Add the chat feature. Stick to Sprint 1."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Explain this stack trace to me." Not Allowed: "Write my mini-capstone project."</li>
        <li><strong>Common Error 1:</strong> Getting stuck for 3 hours on a typo. -&gt; Teach them to walk away for 5 minutes. The brain needs a reset to spot obvious typos.</li>
        <li><strong>Common Error 2:</strong> Deleting everything and starting over. -&gt; Version control (Git) exists so you can undo mistakes. Commit frequently.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can build an MVC app from scratch without a tutorial.</li>
          <li><input disabled="" type="checkbox" /> I know how to connect an app to a database using EF Core.</li>
          <li><input disabled="" type="checkbox" /> I can read a runtime error and figure out which file caused it.</li>
          <li><input disabled="" type="checkbox" /> I understand the concept of an MVP.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Mini-Capstone MVP"</p>
        <ol>
          <li>Finish the core functionality of your assigned mini-project (e.g., a simple To-Do tracker, Expense logger, or Book library).</li>
          <li>It must have 2 Models with a 1-to-Many relationship.</li>
          <li><strong>The Catch:</strong> You must deploy or present the code running flawlessly locally. No extra features allowed until the core CRUD (Create, Read, Update, Delete) operations work perfectly.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A "Frankenstein" MVC app with 4 intentional, common bugs (Routing, NullReference, Model State, Migration missing).</li>
          <li><strong>Solution Repo:</strong> The bugs fixed, acting as a reference for how clean architecture should look at the halfway point.</li>
        </ul>
      </blockquote>
    </div>
  )
}
