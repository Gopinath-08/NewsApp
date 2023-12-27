document.addEventListener('DOMContentLoaded', function () {
    // API key for GNews
    const apiKey = 'c81a1b9c23612aab801bb8ee45ceca3b';

    // API endpoint for GNews
    const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`;

    // Fetch data from the GNews API
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-container');

            articles.forEach(article => {
                const newsArticle = document.createElement('div');
                newsArticle.classList.add('news-article');

                const title = document.createElement('h2');
                title.textContent = article.title;
                newsArticle.appendChild(title);

                const image = document.createElement('img');
                image.src = article.image || 'https://via.placeholder.com/200'; // Use placeholder if no image
                newsArticle.appendChild(image);

                const description = document.createElement('p');
                description.textContent = article.description;
                newsArticle.appendChild(description);

                newsContainer.appendChild(newsArticle);
            });
        })
        .catch(function (error) {
            console.error("Error fetching news:", error);
        });
});
