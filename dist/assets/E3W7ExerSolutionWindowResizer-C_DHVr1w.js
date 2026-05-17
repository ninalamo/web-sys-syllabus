import{j as e}from"./index-ChWpJeR-.js";function n(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-window-resizer.jsx"}),e.jsx("span",{className:"code-lang",children:"JSX"})]}),e.jsx("pre",{className:"language-jsx",children:e.jsx("code",{className:"language-jsx",children:`// Week 7: Window Resizer — Solution (Take-Home Mission)

import { useState, useEffect } from 'react';

function WindowResizer() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // Cleanup function — runs when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isVisible) {
        return <button onClick={() => setIsVisible(true)}>Show Resizer</button>;
    }

    return (
        <div>
            <h2>Window Width: {width}px</h2>
            <button onClick={() => setIsVisible(false)}>Hide</button>
        </div>
    );
}

export default WindowResizer;
`})})]})}export{n as default};
