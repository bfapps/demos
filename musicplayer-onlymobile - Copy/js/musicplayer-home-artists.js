let artistsFile = "artists/all-names/artists.json";
let listContainer = document.querySelector('.list-container');
let h4ArtistsName;

function fetchData (url, cFunction) {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function(json) {
        let artists = json;
        cFunction(artists);
    });
}

window.onload = function () {
    fetchData (artistsFile, createArtists);
}

// function to create artists Dives 
function createArtists (artists) {
    listContainer.innerHTML="";
    for (let i = 0; i<artists.length; i++) {
        // creating dives
        let musicBox = document.createElement('div');
        musicBox.setAttribute('class', 'musicbox-container-artists');
        let imgBox = document.createElement('div');
        imgBox.setAttribute('class', 'music-img-container');
        let musicDetail = document.createElement('div');
        musicDetail.setAttribute('class', 'music-detail-container');

        // inside dives
        let img = "<img loading='lazy' src='" + artists[i].src + "' alt='music image'>";
        let text = "<h4><a href='musicplayer-onlymobile.html'>" + artists[i].name + "</a></h4>";

        // setting Values
        imgBox.innerHTML = img;
        musicDetail.innerHTML = text;

        musicBox.appendChild(imgBox);
        musicBox.appendChild(musicDetail);
        listContainer.appendChild(musicBox);
        
         
    }

    artistsLitener ();
}

function artistsLitener () {
    document.querySelectorAll('.musicbox-container-artists h4').forEach(function (itme) {
        itme.addEventListener('click', function (event) {
            h4ArtistsName = event.target.innerHTML.toLowerCase();
            fetchData(artistsFile, findArtist);
        })
    })
}
function findArtist (artists) {
    for(let i = 0; i<artists.length; i++) {
        if (h4ArtistsName === artists[i].name) {
            localStorage.setItem('songFileAddress', artists[i].url);
            console.log(artists[i].url);
        }
    }
    
    // window.open("musicplayer-onlymobile.html");
    // window.close();
}

// function to renewate artists dives 
document.getElementById('based-on-artists').addEventListener('click', function () {
    fetchData(artistsFile, createArtists);
})
document.getElementById('based-on-songs').addEventListener('click', function () {
    listContainer.innerHTML= "";
})