import{j as t}from"./index-ChWpJeR-.js";function o(){return t.jsxs("div",{className:"page-content code-page",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{className:"code-filename",children:"solution-counter.jsx"}),t.jsx("span",{className:"code-lang",children:"JSX"})]}),t.jsx("pre",{className:"language-jsx",children:t.jsx("code",{className:"language-jsx",children:`// Week 6: Counter Component — Solution

import { useState } from 'react';

function Counter({ step = 1, initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    const color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';

    return (
        <div style={{ border: '1px solid #ccc', padding: '1em', margin: '1em', borderRadius: '8px' }}>
            <h2 style={{ color }}>Count: {count}</h2>
            <button onClick={() => setCount(count - step)}>-{step}</button>
            <button onClick={() => setCount(count + step)}>+{step}</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <h1>Counter Exercise</h1>
            <Counter step={1} initialCount={0} />
            <Counter step={5} initialCount={0} />
            <Counter step={10} initialCount={0} />
        </</div>
    );
}
`})})]})}export{o as default};
