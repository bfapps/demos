localStorage.setItem('songFileAddress', "artists/selena-gomez/songs.json");
const songFileAddress = localStorage.getItem('songFileAddress');
let songInfo;
let flexContainer = document.querySelector('.musicbox-container-4');
let h4SongName;
let pSingerName;
let firstValues;
let playingValidation = "false";
let playBtn = document.getElementById('play-btn');
let forwardBtn = document.getElementById('forward-btn');
let backwardBtn = document.getElementById('backward-btn');
let changeSonge;
let changeSongNumber;
let allSongsLength;


window.onload = function () {
    // this is the first function that invokes just as page lodes
    fetchFunction(songFileAddress, createDiv);
    // setting first music values
    fetchFunction(songFileAddress, setFirstValues)
}
function setFirstValues(songs) {
    firstValues = songs[0];
    document.querySelector("#main-music img").src = firstValues.src;
    document.querySelector("#main-music h4").innerHTML = firstValues.name;
    document.querySelector("#main-music p").innerHTML = firstValues.singer;
    document.getElementById('download-link').href = firstValues.url;
    document.getElementById('youtube-link').href = firstValues.youtube;
    songUrl = new Audio (firstValues.url)
    songInfo = firstValues;
}

function fetchFunction(url, cFunction) {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        let song = json;
        cFunction(song);
    })
}

// we create the div containers with specific class and put the details in it
function createDiv(songs) {
    flexContainer.innerHTML = "";
    for (let i = 0; i < songs.length; i++) {
        let divContainer = document.createElement('div');
        let imageContainer = document.createElement('div');
        let musicDiv = document.createElement('div');
        let img = "<img loading='lazy' src=" + songs[i].src + " alt='music image'>";
        let text = "<h4>" + songs[i].name.trim() + "</h4>\n<p>" + songs[i].singer + "</p>";

        // adding classes to created elements
        divContainer.setAttribute('class', "musicbox-container-1");
        imageContainer.setAttribute('class', "music-img-container");
        musicDiv.setAttribute('class', "music-detail-container");

        // adding data to elements
        imageContainer.innerHTML = img;
        musicDiv.innerHTML = text;
        divContainer.appendChild(imageContainer);
        divContainer.appendChild(musicDiv);
        flexContainer.appendChild(divContainer);
    }

    // invoking the function to add event listener to created dives
    listener();
}
// function to add event listener
function listener () {
    document.querySelectorAll(".music-detail-container h4").forEach(function (item) {
        item.addEventListener('click', function (event) {
            h4SongName = event.target.innerHTML;
            pSingerName = event.target.parentNode.children[1].innerHTML;
            // triggers the function to find the music
            fetchFunction(songFileAddress, findsong)
        })
    })
    document.querySelectorAll(".music-detail-container p").forEach(function (item) {
        item.addEventListener('click', function (event) {
            h4SongName = event.target.parentNode.children[0].innerHTML;
            pSingerName = event.target.innerHTML;
            fetchFunction(songFileAddress, findsong)
        })
    })
}


// the function to filter based on song "name"
function findsong (songs) {
    allSongsLength = songs.length;
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].name === h4SongName && songs[i].singer === pSingerName) {
            songInfo = songs[i];
        }
    }
    pauseIfPlaying();
}

// magic happens here ::: first function is related to choosing song and the second function is related to playying or pausing music
// setting default values to work as global variables
songUrl = new Audio();
function pauseIfPlaying () {
    if (playingValidation === "true") {
        playingValidation = "false";
        songUrl.pause();
    }
    // to change play-icon color
    document.getElementById('play-btn').classList.remove('blue-play-btn');
    document.getElementById('play-btn').classList.add('blue-play-btn');
    // to play selected song
    songUrl = new Audio(songInfo.url);
    playOrPauseSong ();
}

// play or pause Selected Song
playBtn.addEventListener('click', function () {
    playOrPauseSong ();
})
function playOrPauseSong () {
    if (playingValidation === "false") {
        playingValidation = "true";
        songUrl.play();
    }
    else if (playingValidation === "true") {
        playingValidation = "false";
        songUrl.pause();
    }
}

// forward and backward
forwardBtn.addEventListener('click', function () {
    changeSonge = 1;
    if( songInfo < allSongsLength - 1);{
        changeSongNumber = songInfo.number + 1;
        fetchFunction(songFileAddress, forOrBackward);
    }
    
})
backwardBtn.addEventListener('click', function () {
    changeSonge = -1;
    if (songInfo.number > 0) {
        changeSongNumber = songInfo.number -1;
        fetchFunction(songFileAddress, forOrBackward);
    } 
})
function forOrBackward (songs) {
    for( let i = 0; i < songs.length; i++) {
        if (songs[i].number === changeSongNumber) {
            songInfo = songs[i];
        }
    }
    pauseIfPlaying();
}