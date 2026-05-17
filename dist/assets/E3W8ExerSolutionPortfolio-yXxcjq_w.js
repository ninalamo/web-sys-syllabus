import{j as e}from"./index-u8WTylHP.js";function r(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-portfolio.jsx"}),e.jsx("span",{className:"code-lang",children:"JSX"})]}),e.jsx("pre",{className:"language-jsx",children:e.jsx("code",{className:"language-jsx",children:`// Week 8: Portfolio SPA — Solution

import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1em', background: '#333', color: '#fff' }}>
            <Link to="/" style={{ color: '#fff', marginRight: '1em' }}>Home</Link>
            <Link to="/projects" style={{ color: '#fff', marginRight: '1em' }}>Projects</Link>
            <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
        </nav>
    );
}

function Layout() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '2em' }}>
                <Outlet />
            </main>
        </div>
    );
}

function Home() {
    return <h1>Welcome to My Portfolio</h1>;
}

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li><Link to="/projects/1">Project Alpha</Link></li>
                <li><Link to="/projects/2">Project Beta</Link></li>
            </ul>
        </div>
    );
}

function ProjectDetail() {
    const { id } = useParams();
    return <h1>Project #{id} Details</h1>;
}

function Contact() {
    return <h1>Contact Me</h1>;
}

function NotFound() {
    return <h1>404 — Page Not Found</h1>;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'projects/:id', element: <ProjectDetail /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
`})})]})}export{r as default};
