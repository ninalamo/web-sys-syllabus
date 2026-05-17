export default function E3W6ExerSolutionProfilecard() {
  const code = `// Week 6: ProfileCard Component — Solution

import { useState } from 'react';

function ProfileCard({ name, role }) {
    const [likes, setLikes] = useState(0);

    return (
        <div style={{ border: '1px solid #ccc', padding: '1em', margin: '1em', borderRadius: '8px' }}>
            <h2>{name}</h2>
            <p>{role}</p>
            <button onClick={() => setLikes(likes + 1)}>
                Like ({likes})
            </button>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <h1>Profile Cards</h1>
            <ProfileCard name="Alice" role="Developer" />
            <ProfileCard name="Bob" role="Designer" />
            <ProfileCard name="Charlie" role="Manager" />
        </div>
    );
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-profilecard.jsx</span>
        <span className="code-lang">JSX</span>
      </div>
      <pre className="language-jsx"><code className="language-jsx">{code}</code></pre>
    </div>
  )
}
