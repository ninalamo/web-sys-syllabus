export default function E3W10PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 10: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 10: ASP.NET Core Web API"</li>
        <li>"Build endpoints that serve JSON data to our frontend"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"MVC only works in a browser. Web APIs serve raw data — website, iPhone app, smart fridge all use the same backend"</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Kitchen Revisited</li>
        <li>MVC: cooks AND plates the food</li>
        <li>Web API: hands raw ingredients (JSON), customer decides how to plate</li>
      </ul>
      <h3>Slide 4: ControllerBase vs Controller</h3>
      <ul>
        <li>Strip out the HTML/View rendering engine</li>
        <li>Return HTTP status codes explicitly</li>
      </ul>
      <h3>Slide 5: [ApiController] Attribute</h3>
      <ul>
        <li>Auto-reads request body</li>
        <li>Auto-returns 400 for invalid ModelState</li>
        <li>"Automatic spellcheck for your API"</li>
      </ul>
      <h3>Slide 6: CORS</h3>
      <ul>
        <li>Browser security feature</li>
        <li>Different ports = different origins</li>
        <li>"The security guard checking trusted IDs"</li>
      </ul>
      <h3>Slide 7: Asynchronous APIs</h3>
      <ul>
        <li>Every database call MUST be async</li>
        <li>Free up server threads</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Scaffold the API</li>
        <li>Step 2: Attribute routing</li>
        <li>Step 3: Postman testing</li>
        <li>Step 4: CORS configuration</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>Forgetting [ApiController]</li>
        <li>CORS errors</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>Video Games CRUD API</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
