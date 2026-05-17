import{j as e}from"./index-u8WTylHP.js";function o(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"starter-fetcher.js"}),e.jsx("span",{className:"code-lang",children:"JAVASCRIPT"})]}),e.jsx("pre",{className:"language-javascript",children:e.jsx("code",{className:"language-javascript",children:`// Week 2: Async Fetcher — Starter Code
// TODO: Complete the functions below

const API_URL = 'https://jsonplaceholder.typicode.com';

// TODO: Fetch all posts and display them
async function loadPosts() {
    // 1. Show loading state
    // 2. Fetch posts from API
    // 3. Check response.ok
    // 4. Parse JSON
    // 5. For each post, fetch its comments using Promise.all()
    // 6. Display posts with comments
    // 7. Handle errors with try/catch
}

// TODO: Fetch comments for a single post
async function fetchComments(postId) {
    // Fetch comments for the given postId
}

// TODO: Render a single post with its comments
function renderPost(post, comments) {
    // Return HTML string for a post and its comments
}

// Wire up the button
document.getElementById('loadBtn').addEventListener('click', loadPosts);
`})})]})}export{o as default};
