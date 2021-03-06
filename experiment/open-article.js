const articleSec = document.getElementById('article-sec');

function fetchData(url, cFunction) {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        let data = json;
        cFunction(data);
    });
}

window.addEventListener("load", function () {
    fetchData("article.json", loadData);
});

function loadData(data) {
    articleSec.innerHTML = "";
    let i = localStorage.getItem('articleNumber');
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
        if (data[i].date.length > 8) {
            h4.innerHTML = data[i].date;
        }
        else if (data[i].date.length < 8) {
            h4.innerHTML = "Once Upon A Time ...";
        }

        a.setAttribute('href', 'index.html');
        a.innerHTML = "Back";
        let adress = "article-" + i + ".json";
        fetchData(adress, loadTxt);
        p.innerHTML = localStorage.getItem('fulltxt');
        if (data[i].src.length > 4) {
            article.appendChild(img);
        }
        article.appendChild(h2);
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(a);
        articleSec.appendChild(article);
    }

function loadTxt(data) {
    let txt = data[0].txt;
    localStorage.setItem('fulltxt', txt);
}



