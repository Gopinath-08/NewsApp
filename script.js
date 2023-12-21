const newsContainer = document.getElementById('category-news');
const categoryLinks = document.querySelectorAll('nav a');

// Function to fetch and display news for a specific category
function fetchNewsByCategory(category) {
    const apiKey = 'd0cafc29985f4a05975149fcaf0ed8e0'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            newsContainer.innerHTML = ''; // Clear previous news articles

            articles.forEach(article => {
                const newsArticle = document.createElement('div');
                newsArticle.classList.add('news-article');

                const title = document.createElement('h2');
                title.textContent = article.title;
                newsArticle.appendChild(title);

                const image = document.createElement('img');
                image.src = article.urlToImage || 'https://via.placeholder.com/200'; // Use placeholder if no image
                newsArticle.appendChild(image);

                const description = document.createElement('p');
                description.textContent = article.description;
                newsArticle.appendChild(description);

                newsContainer.appendChild(newsArticle);
            });
        })
        .catch(error => console.error(error));
}

// Fetch news for the initial category (Top Headlines)
fetchNewsByCategory('general');

// Handle category navigation clicks
categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const selectedCategory = this.textContent;
        categoryLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        fetchNewsByCategory(selectedCategory);
    });
});
