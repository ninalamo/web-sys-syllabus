import{j as e}from"./index-Dh6XhhbZ.js";function o(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-profilecard.jsx"}),e.jsx("span",{className:"code-lang",children:"JSX"})]}),e.jsx("pre",{className:"language-jsx",children:e.jsx("code",{className:"language-jsx",children:`// Week 6: ProfileCard Component — Solution

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
`})})]})}export{o as default};
