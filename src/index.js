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
            return (author = "unknown");
          }

          console.log(author);
          newsHTML += `
            <div class="news-item">
              <h3 >${title}</h3>
              <h2>Author: <a href= ${link} style="color: inherit; text-decoration: none; ">${author}</a></h2>
              <p>${description}</p><br>
              <img src="${image}" alt="${title}">
            </div>
          `;
        });
        technology.innerHTML = newsHTML;
      });
    form.reset();
  });
});
