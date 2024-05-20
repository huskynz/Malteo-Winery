// sidebar.js
fetch('/json/news.json')
    .then(response => response.json())
    .then(posts => {
        const sidebarContainer = document.querySelector('#sidebar');
        posts.forEach(item => {
            const sidebarItem = document.createElement('a');
            sidebarItem.href = `/pages/news.html?postid=${item.postid}`;
            sidebarItem.classList.add('sidebar-item','news-link');
            sidebarItem.innerHTML = `
                <h3 class="sidebar-title">${item.title}</h3>
                <p class="sidebar-date">Date: ${item.date}</p>
                <p class="sidebar-author">Author: ${item.author}</p>
                <p class="sidebar-description">${item.description}</p>
            `;
            sidebarContainer.appendChild(sidebarItem);
        });
    });