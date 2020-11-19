let articleSection = document.querySelector('.articles-section');
let articleText = "";

// fetch function
function getJsonData(url, cFunction) {
    fetch(url).then(function (response) {
        return response.json()
    }).then(function (json) {
        let jsonData = json;
        cFunction(jsonData);
    })
}
// xml function
function getXmlData(url, cFunction) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
            data = cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

window.onload = function () {
    getJsonData("assets/json/articles.json", createArticles);
}

function createArticles(jsonData) {
    articleSection.innerHTML = "";
    for (let i = 0; i < jsonData.length; i++) {
        let article = document.createElement('article');
        article.setAttribute('loading', 'lazy');
        article.setAttribute('id', "number" + jsonData[i].number);
        if (jsonData[i].src === true) {
            let img = document.createElement('img');
            let src = "assets/img/number" + jsonData[i].number + ".jpg";
            console.log(src);
            img.setAttribute('src', src);
            article.appendChild(img);
        }
        let h1 = document.createElement('h1');
        h1.textContent = jsonData[i].name;
        let h3 = document.createElement('h3');
        h3.textContent = jsonData[i].date;

        article.appendChild(h1);
        article.appendChild(h3);
        if (jsonData[i].xml === true) {
            let xmlUrl = "assets/xml/number" + jsonData[i].number + ".xml";
            getXmlData(xmlUrl, getText);
            let p = document.createElement('p');
            p.textContent = localStorage.getItem('articleText');;
            article.appendChild(p);
        }
        articleSection.appendChild(article);
    }
}

function getText(xml) {
    let xmlDoc = xml.responseXML;
    articleText = xmlDoc.getElementsByTagName('text')[0].textContent;
    localStorage.setItem('articleText', articleText);
}