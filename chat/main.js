let preTxt="";
let newTxt;
let chatArticle = document.querySelector('main article');
// window.addEventListener('load', function () {
//     setInterval(dataFetch('chat.json', getTxt), 1000);
    
// })

function dataFetch(adress, cFunction) {
    fetch (adress).then(function (response) {
        return response.json();
    }).then(function (json) {
        let data=json;
        cFunction(data);
    })
}

function getTxt (data) {
    alert('bad');
    if (preTxt !== data[0].txt) {
        preTxt = data[0].txt;
        let p = document.createElement('p');
        p.innerHTML = data[0].name + " : " + preTxt;
        chatArticle.appendChild(p);
        
    }
}

document.getElementById('send-btn').addEventListener('click', function () {
    setTimeout(dataFetch('chat.json', getTxt), 2000);  
})