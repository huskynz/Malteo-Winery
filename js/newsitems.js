fetch('/json/news.json')
    .then(response => response.json())
    .then(newsItems => {
        const newsContainer = document.querySelector('.sidebar');
        newsItems.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3 class="news-title">${item.title}</h3>
                <p class="news-date">Date: ${item.date}</p>
                <p class="news-author">Author: ${item.author}</p>
                <p class="news-description">${item.description}</p>
            `;
            newsContainer.appendChild(newsItem);
        });
    });