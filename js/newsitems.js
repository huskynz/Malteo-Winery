import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

fetch('/json/news.json')
    .then(response => response.json())
    .then(posts => {
        const urlParams = new URLSearchParams(window.location.search);
        const postid = urlParams.get('postid');
        if (postid) {
            const post = posts.find(post => post.postid == postid);
            if (post) {
                fetch(`/markdown/${postid}.md`)
                    .then(response => response.text())
                    .then(markdown => {
                        const html = marked(markdown);
                        const postElement = document.createElement('div');
                        postElement.classList.add('post');
                        postElement.innerHTML = `
                            <h2>${post.title}</h2>
                            <p>${post.date}</p>
                            ${html}
                        `;
                        document.querySelector('.news-content').appendChild(postElement);
                    });
            } else {
                console.error('Invalid post ID:', postid);
            }
        } else {
            const listElement = document.createElement('ul');
            listElement.classList.add('styled-list');
            posts.forEach(post => {
            const listItem = document.createElement('li');
            const button = document.createElement('button');
            button.onclick = function() {
                 window.location.href = `/pages/news.html?postid=${post.postid}`;
             };
            button.textContent = post.title;
            button.classList.add('post-button');
            listItem.appendChild(button);
            listElement.appendChild(listItem);
        });
            document.querySelector('.news-content').appendChild(listElement);
        }
    });