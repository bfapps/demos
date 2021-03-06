


if (!localStorage.getItem("songFileAddress")) {
    alert("Ops, It seem there is a problem with internet servers. We are unable to show your artist's song.")
    // localStorage.setItem('songFileAddress', "artists/selena-gomez/songs.json");
}
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
    findSub ();
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
        let img = "<img loading='lazy' src='" + songs[i].src + "' alt='music image'>";
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
    changeAllValues();
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
    if( songInfo < allSongsLength - 1);{
        changeSongNumber = songInfo.number + 1;
        fetchFunction(songFileAddress, forOrBackward);
    }
    
})
backwardBtn.addEventListener('click', function () {
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


// this is function to change all values if song changed
 function changeAllValues () {
     document.querySelector("#main-music img").src = songInfo.src;
     document.querySelector("#main-music h4").innerHTML = songInfo.name;
     document.querySelector("#main-music p").innerHTML = songInfo.singer;
     document.getElementById('download-link').href = songInfo.url;
     document.getElementById('youtube-link').href = songInfo.youtube;

     findSub ();

 }

//  to change subtitle

function findSub () {
    if (songInfo.sub.length > 5) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                changeSub(this)
            }
        };
        xhttp.open("GET", songInfo.sub, true);
        // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
        
    }

    else if (songInfo.sub.length < 5) {
        document.querySelector('.exact-subtitle-container').innerHTML = "Subtitle Not Found";
    }
}
function changeSub (sub) {
    let subDoc = sub.responseXML;
    let subText = subDoc.getElementsByTagName("text")[0].textContent;
    document.querySelector('.exact-subtitle-container').innerHTML = subText;
}