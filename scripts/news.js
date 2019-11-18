function getNews(news) {
	// Iterate through items in JSON file
	for (let i = 0; i < news.length; i++) {
		// Display all found items
		displayNews(news[i]);
	} 
}

// Display all news items given to the function
function displayNews(newsItem) {
	const newsContainer = document.querySelector('.section-content'),
		newsWrapper = document.createElement('div'),
		newsArticle = document.createElement('div'),
		anchorElement = document.createElement('a');

	// Assign attributes and HTML to elements
	newsArticle.className = "news-article";
	anchorElement.setAttribute("href", "news.html");
	anchorElement.innerHTML = `
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