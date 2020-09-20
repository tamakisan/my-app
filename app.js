const background = document.getElementById("background")
const artwrok = document.getElementById("artwrok")
const song = document.getElementById("song")
const songArtist = document.getElementsByClassName("song-artist")[0]
const songTitle = document.getElementsByClassName("song-title")[0]
const progressbar = document.getElementById("progress-bar")
const pPause = document.getElementById("playpause")
const nextBtn = document.getElementById("makesong")
const prevBtn = document.getElementById("rewindtime")
const cTime = document.getElementsByClassName("currentTime")
const dr = document.getElementsByClassName("durationTime")

let artist = [
    "Radwimps band",
    "Natsumi Tabuchi,Miki Sakurai,Hanae Nakamura"
]

let title = [
    "Nandemonaiya",
    "Gotoubun no Kimochi"

]

let songs = [
    "./assets/music/kimi_no_na_wa_nandemonaiya_kamishiraishi_mone_maxone_remix_K-x6BXMByoK-gucZeNsy.mp3",
    "./assets/music/gotoubun_no_hanayome_opening_gotoubun_no_kimochi_full_version_color_coded_lyrics_1477616.mp3"
]

let covers = [
    "./assets/cover/artwork for music(Your name).jpg",
    "./assets/cover/Miku's Sisters from Go Toubun No Hanayome.jpg2.jpg"
]

let playing = true

function playPause() {
    if (playing) {
        pPause.src = "./assets/icon/icons8-pause-50.png"
        song.play()
    } else {
        pPause.src = "./assets/icon/icons8-play-50.png"
        song.pause()
    }
    playing = !playing
}

let songIndex = 0

function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    song.src = songs[songIndex]
    artwrok.src = covers[songIndex]
    background.src = covers[songIndex]

    songArtist.innerText = artist[songIndex]
    songTitle.innerText = title[songIndex]

    playing = true
    playPause()
}
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    song.src = songs[songIndex]
    artwrok.src = covers[songIndex]
    background.src = covers[songIndex]

    songArtist.innerText = artist[songIndex]
    songTitle.innerText = title[songIndex]

    playing = true
    playPause()
}

nextBtn.onclick = nextSong
prevBtn.onclick = previousSong

function changeProgressBar() {
    song.currentTime = progressbar.value
}

function updateProgressValue() {
    progressbar.max = song.duration
    progressbar.value = song.currentTime

    document.querySelector(".currentTime").innerHTML = formatTime(Math.floor(song.currentTime))

    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00'

    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration))
    }

}
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60)

    let sec = Math.r(seconds - minutes * 60)
    if (sec < 10) {
        sec = `0${sec}`
    }
    return `${minutes}:${sec}`
}

setInterval(updateProgressValue, 500);
function changeProgressBar() {
    song.currentTime = progressbar.value
}
progressbar.onchange = changeProgressBar