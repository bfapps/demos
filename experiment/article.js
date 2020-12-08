const articleSec = document.getElementById('article-sec');
let shortText = "";
let fileData;

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
    articleSec.innerHTML = "";
    fileData = data;
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
        if (data[i].date.length > 8) {
            h4.innerHTML = data[i].date;
        }
        else if (data[i].date.length < 8) {
            h4.innerHTML = "Once Upon A Time ...";
        }
        
        a.setAttribute('href', 'open-article.html');
        a.setAttribute('id', "a" + i);
        a.innerHTML = "Read More";
        let adress = "article-" + i + ".json";
        var textd = fetchData(adress, loadTxt);
        alert(textd);
        p.innerHTML = textd.slice(0, 150) + "...";
        if (data[i].src.length > 4) {
            article.appendChild(img);
        }
        article.appendChild(h2);
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(a);
        articleSec.appendChild(article);
    }
    addListener();
}

function loadTxt (data) {
    let txt = data[0].txt;
    localStorage.setItem('text', txt);
    return txt;
    
}


function addListener () {
    document.querySelectorAll(".article-sec article a").forEach(function (item) {
        item.addEventListener('click', function (event) {
            let number = Number(event.target.id.replace(/a/g, ""));
            localStorage.setItem('articleNumber', number);
            
        })
    })
}


