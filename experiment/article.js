const articleSec = document.getElementById('article-sec');

function fetchData (url, cFunction) {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function(json) {
        let data = json;
        cFunction(data);
    });
}

window.addEventListener("load", function () {
    fetchData("article.json", loadData);
});

function loadData (data) {
    let secLength = data.length;
    for (let i = 0; i < data.length; i++) {
        let article = document.createElement('article');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let a = document.createElement('a');
        img.setAttribute('src', data[i].src);
        img.setAttribute('loading', "lazy");
        img.setAttribute('alt', 'article image');
        h2.innerHTML = data[i].title;
        h4.innerHTML = data[i].date;
        a.setAttribute('href', 'open-article.html');
        a.innerHTML = "Read More";
        let adress = "article-" + i + ".json";
        fetchData(adress, loadTxt);
        p.innerHTML = localStorage.getItem('txt').slice(0, 150) + "...";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(a);
        articleSec.appendChild(article);
    }
}

function loadTxt (data) {
    let txt = data[0].txt;
    localStorage.setItem('txt', txt); 
}

