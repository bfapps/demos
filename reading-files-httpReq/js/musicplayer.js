let songsInfo;
let flexContainer = document.querySelector('.musicbox-container-4');
let h4SongName;
let pSingerName;
let changeSongNumber;
let newSongNumber;
let firstSong;

localStorage.setItem('artist-name', "artists/selena-gomez/songs.json");
singerJsonFile = localStorage.getItem("artist-name");
window.onload = function () {
    fetchFunction(singerJsonFile, createDiv);
    fetchFunction(singerJsonFile, setFirstSong);
    
}

function fetchFunction(url, cFunction) {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        let song = json;
        cFunction(song);
    })
}
// Setting first song appears on the top of the page
function setFirstSong (songs) {
    firstSong = songs[0];
    document.querySelector('#main-music img').src = firstSong.src;
    document.querySelector('#main-music h4').innerHTML = firstSong.name;
    document.querySelector('#main-music p').innerHTML = firstSong.singer;
    document.getElementById('youtube-link').href = firstSong.youtube;
    document.getElementById('download-link').href = firstSong.url;
    songsInfo = firstSong;

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
function listener() {
    document.querySelectorAll(".music-detail-container h4").forEach(function (item) {
        item.addEventListener('click', function (event) {
            // getting song name and singer name
            h4SongName = event.target.innerHTML;
            pSingerName = event.target.parentNode.children[1].textContent;
            console.log(h4SongName, pSingerName);
            // triggers the function to find the music
            fetchFunction(singerJsonFile, findMusic);
        })
    })
    document.querySelectorAll(".music-detail-container p").forEach(function (item) {
        item.addEventListener('click', function (event) {
            // getting song name and singer name
            h4SongName = event.target.parentNode.children[0].textContent;
            pSingerName = event.target.innerHTML;
            // triggers the function to find the musics of that singer in another page
            fetchFunction(singerJsonFile, findMusic);
        })
    })
}


// the function to filter based on"song name" & "singer name"
function findMusic(songs) {
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].name === h4SongName && songs[i].singer === pSingerName) {
            songsInfo = songs[i];
        }
    }
    if (songsInfo.name === h4SongName && songsInfo.singer === pSingerName) {
        console.log(songsInfo.name, "\n", songsInfo.singer, "\n", songsInfo.youtube, "\n", songsInfo.url);
        pauseIfPlaying();
    }
    else {
        console.log("Song Not Found");
    }

}


// magic happens here ::: first function is related to choosing song and the second function is related to playying or pausing music
// setting default values to work as global variables
let songUrl = new Audio("https://dl.baarzesh.net/music/2020/8/Previous/Wolves-SELENA-GOMEZ-ft-MARSHMELLO.mp3");
let validationToPauseOrPlay = "pause";
// this function is to check plaing state when clicking on h4
function pauseIfPlaying() {
    if (validationToPauseOrPlay === "playing") {
        validationToPauseOrPlay = "pause";
        songUrl.pause();
    }
    songUrl = new Audio(songsInfo.url);
    selectSong();
}
// this function is to play or pause by play-btn or play after selecting by clicking on h4
function selectSong() {
    if (validationToPauseOrPlay === "playing") {
        validationToPauseOrPlay = "pause";
        songUrl.pause();
    }
    else if (validationToPauseOrPlay === "pause") {
        validationToPauseOrPlay = "playing";
        songUrl.play();
        fetchFunction(singerJsonFile, changeValues);
    }
}

// this function is to go forward or backward
document.getElementById('backward-btn').addEventListener('click', function () {
    changeSongNumber = -1;
    fetchFunction(singerJsonFile, backForward)
})
document.getElementById('forward-btn').addEventListener('click', function () {
    changeSongNumber = 1;
    fetchFunction(singerJsonFile, backForward)
})

// function for forward and backward buttons
function backForward(songs) {
    let CurrentSongNumber = Number(songsInfo.number);
    if (CurrentSongNumber >= 1 && changeSongNumber === -1) {
        newSongNumber = CurrentSongNumber - 1;
        fetchFunction(singerJsonFile, loopToNumber);
    }
    else if (CurrentSongNumber < songs.length - 1 && changeSongNumber === 1) {
        newSongNumber = CurrentSongNumber + 1;
        fetchFunction(singerJsonFile, loopToNumber);
    }

}
function loopToNumber(songs) {
    for (let i = 0; i < songs.length; i++) {
        if (newSongNumber === Number(songs[i].number)) {
            songsInfo = songs[i];
            console.log(songsInfo.name);
        }
    }
    pauseIfPlaying();
}

// function to add listener to pause and play button
document.getElementById('pasue-btn').addEventListener('click', function () {
    selectSong();
})

function changeValues (songs) {
    document.querySelector('#main-music h4').innerHTML = songsInfo.name;
    document.querySelector('#main-music p').innerHTML = songsInfo.singer;
    document.getElementById('youtube-link').href = songsInfo.youtube;
    document.getElementById('download-link').href = songsInfo.url;
}