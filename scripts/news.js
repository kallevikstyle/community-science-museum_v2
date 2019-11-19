function getNews(news) {
	// Sort news items by date
		news = news.sort(function(a, b) {
			a.date = new Date(a.date);
			b.date = new Date(b.date);
			return a.date - b.date;
		});
	// Check if all news articles will be displayed, or just the latest items
	if (document.querySelector('.allNews')) {
		const newsContainer = document.querySelector('.allNews');
		// Iterate through items from JSON file in reverse
		for (let i = (news.length - 1); i >= 0; i--) {
			// Display all found items
			displayNews(news[i], newsContainer);
		} 
	} else if (document.querySelector('.latestNews')) {
		let latestNews = [];
		const newsContainer = document.querySelector('.latestNews');

		// Pushing the two latest items into latestNews array
		latestNews.push(news.pop());
		latestNews.push(news.pop());

		for (let i = 0; i < latestNews.length; i++) {
			// Display all found items
			displayNews(latestNews[i], newsContainer);
		} 
	}
	
}

// Display all news items given to the function
function displayNews(newsItem, newsContainer) {
	const newsWrapper = document.createElement('div'),
		newsArticle = document.createElement('div'),
		anchorElement = document.createElement('a'),
		date = (newsItem.date.getMonth() + 1) + "/" + newsItem.date.getDate() + "/" + newsItem.date.getFullYear();

	// Assign attributes and HTML to elements
	newsArticle.className = "news-article";
	anchorElement.setAttribute("href", "news.html");
	anchorElement.innerHTML = `
		<div class="date">${date}</div>
		<img src="${newsItem.imageSrc}" alt="${newsItem.imageAlt}">
		<h3>${newsItem.title}</h3>
		<p>${newsItem.shortText}</p>
	`;

	// Display elements on page
	newsArticle.appendChild(anchorElement);
	newsWrapper.appendChild(newsArticle);
	newsContainer.appendChild(newsWrapper);
}

// Get news from json
(function() {
	fetch('http://kallevikstyle.no/portfolio1/community-science-museum/json/news.json')
	.then(result => result.json())
	.then((news) => {
		getNews(news);
	})
	.catch(err => console.log(err));
})();