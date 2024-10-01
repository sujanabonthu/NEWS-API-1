document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "Josh Schafer",
                title: "A critical labor report meets a stock market at record highs: What to know this week",
                description: "The September jobs report highlights the coming trading week as investors search for clues on how rapidly the labor market is cooling.",
                url: "https://finance.yahoo.com/news/a-critical-labor-report-meets-a-stock-market-at-record-highs-what-to-know-this-week-113035514.html/",
                urlToImage: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                publishedAt: "2024-09-29T11:30:35Z",
                content: "For the week, the S&amp;P 500 and Dow Jones Industrial Average (^DJI) were up about 0.7%..."
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "marketbeat.com",
                title: "Silver Lake Advisory LLC Acquires New Position in Tesla, Inc. (NASDAQ:TSLA)",
                description: "Silver Lake Advisory LLC bought a new position in Tesla, Inc. in the 2nd quarter, according to the company in its most recent disclosure...",
                url: "https://biztoc.com/x/5f2638e60c125b7d",
                urlToImage: "https://biztoc.com/cdn/5f2638e60c125b7d_s.webp",
                publishedAt: "2024-09-29T11:28:47Z",
                content: "Silver Lake Advisory LLC bought a new position in Tesla, Inc..."
            }
            // Add more articles as needed
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});