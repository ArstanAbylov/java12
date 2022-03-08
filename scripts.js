// ('/article.json')
// .then(response => {
//         return response.json();
//     })
//     .then(article => {

//     })


fetch('/article.json')
    .then(response => {
        return response.json();
    })
    .then(article => {
        document.querySelector('article h1').textContent = article.title;
        document.querySelector('article h2').textContent = article.title;
        document.querySelector('article h3').textContent = article.title;
        document.querySelector('article img').src = article.image;
        document.querySelector('article p').textContent = article.descriptions;
    });