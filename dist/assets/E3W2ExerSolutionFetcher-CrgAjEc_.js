import{j as s}from"./index-6VvVNkbu.js";function o(){return s.jsxs("div",{className:"page-content code-page",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("span",{className:"code-filename",children:"solution-fetcher.js"}),s.jsx("span",{className:"code-lang",children:"JAVASCRIPT"})]}),s.jsx("pre",{className:"language-javascript",children:s.jsx("code",{className:"language-javascript",children:`// Week 2: Async Fetcher — Solution

const API_URL = 'https://jsonplaceholder.typicode.com';

async function loadPosts() {
    const statusEl = document.getElementById('status');
    const postsEl = document.getElementById('posts');

    statusEl.innerHTML = '<p class="loading">Loading posts...</p>';
    postsEl.innerHTML = '';

    try {
        const res = await fetch(\`\${API_URL}/posts?_limit=5\`);
        if (!res.ok) throw new Error(\`HTTP error! Status: \${res.status}\`);

        const posts = await res.json();

        // Fetch comments for all posts in parallel
        const commentsPromises = posts.map(post => fetchComments(post.id));
        const allComments = await Promise.all(commentsPromises);

        statusEl.innerHTML = '';
        posts.forEach((post, i) => {
            postsEl.innerHTML += renderPost(post, allComments[i]);
        });
    } catch (error) {
        statusEl.innerHTML = \`<p class="error">Error: \${error.message}</p>\`;
    }
}

async function fetchComments(postId) {
    const res = await fetch(\`\${API_URL}/posts/\${postId}/comments?_limit=3\`);
    if (!res.ok) throw new Error(\`Failed to fetch comments for post \${postId}\`);
    return res.json();
}

function renderPost(post, comments) {
    const commentsHtml = comments
        .map(c => \`<div class="comment"><strong>\${c.name}</strong>: \${c.body}</div>\`)
        .join('');

    return \`
        <div class="post">
            <h3>\${post.title}</h3>
            <p>\${post.body}</p>
            <h4>Comments:</h4>
            \${commentsHtml}
        </div>
    \`;
}

document.getElementById('loadBtn').addEventListener('click', loadPosts);
`})})]})}export{o as default};
