// Week 6: Counter Component — Solution

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
