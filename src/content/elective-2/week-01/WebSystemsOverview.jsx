export default function WebSystemsOverview() {
  return (
    <div className="page-content">
      <h2>How this week fits into Web Systems</h2>
      <p>
        In a modern web application a request starts as an HTTP message from the browser,
        travels through the server’s routing layer, hits a controller action,
        talks to services (via interfaces), pulls data from a database,
        and finally returns a rendered view or JSON.
        The C# syntax we learn today is the foundation of all those layers.
      </p>
      <img
        src="/assets/img/pipeline-diagram.png"
        alt="Request pipeline diagram"
      />
    </div>
  );
}
