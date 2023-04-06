window.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let technology = document.getElementById("technology");
    let api = "cbe5e4be705e46479aad0781844cafff";
    let topic = document.getElementById("topic").value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${api}`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let articles = data.articles;
      let newsHTML = "";
      articles.forEach(function (article) {
        let title = article.title;
        let author = article.author;
        let description = article.description;
        let link = article.url;
        let image = article.urlToImage;
        if (author === null) {
          author = "unknown";
        }
  
        newsHTML += `
          <div class="news-item" data-aos="fade-up-right">
            <h3><a href="${link}" style="color: inherit;">${title}</a></h3>
            <h2>Author: ${author}</h2>
            <p>${description}</p><br>
            <img src="${image}" alt="${title}">
          </div>
        `;
      });
      technology.innerHTML = newsHTML;
      AOS.init(); // initialize AOS after the news items have been added to the DOM
    });
  
    form.reset();
  });
});
