let form= document.querySelector('form')

form.addEventListener('submit', (e)=>{

    e.preventDefault()

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
        let image = article.urlToImage;

        newsHTML += `
            <div class="news-item">
              <h2>${title}</h2>
              <p>Author: ${author}</p>
              <p>${description}</p>
              <img src="${image}" alt="${title}">
            </div>
          `;
      });
      technology.innerHTML = newsHTML;
    });
    form.reset()
})
