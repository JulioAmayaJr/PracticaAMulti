const songs=[
    {title:"Vibra Positiva", artist:"Zona ganjah",srcc:"videoplayback (3).m4a", cover:"img/zonaganjah.jpg"},
    {title:"Perrea KTM", artist:"Julianno Sosa",srcc:"videoplayback.m4a", cover:"img/zonaganjah.jpg"},
    {title:"Cochinae", artist:"Julianno Sosa",srcc:"videoplayback (1).m4a", cover:"img/zonaganjah.jpg"},
    {title:"Pa que retozen", artist:"Tego Calderon",srcc:"pa-que-retozen.mp3", cover:"img/zonaganjah.jpg"},
    {title:"Perrea KTM", artist:"Julianno Sosa",srcc:"videoplayback (1).m4a", cover:"img/zonaganjah.jpg"},
]

let currentSongIndex = 0;
let isPlaying = false;
let audio;

function playCurrentSong() {
if (audio) {
audio.stop();
}


audio = new Howl({
src: [songs[currentSongIndex].src],
autoplay: isPlaying,
volume: volumeSlider.value,
onend: function () {
playNextSongs();
}
});
updateSongInfo();
}



const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volumen');
const songTitle = document.getElementById('title-song');
const songArtist = document.getElementById('song-artist');
const albumCover = document.querySelector('.card-img-top');


playButton.addEventListener('click',()=>{
isPlaying = true;
playCurrentSong();
});

pauseButton.addEventListener('click',()=>{
isPlaying = false;
audio.pause();
});

nextButton.addEventListener('click',()=>{
playNextSongs();
});

prevButton.addEventListener('click',()=>{
if (audio.seek()>5) {
audio.seek(0);
}else{
currentSongIndex=(currentSongIndex-1+songs.length)%songs.length;
playCurrentSong();
}
});


volumeSlider.addEventListener('input',()=>{
audio.volume(volumeSlider.value)
});

function updateSongInfo() {
songTitle.textContent=songs[currentSongIndex].title;
songArtist.textContent=songs[currentSongIndex].artist;
albumCover.src=songs[currentSongIndex].cover;
}

function playNextSongs() {
currentSongIndex=(currentSongIndex+1)%songs.length;
playCurrentSong();
}

playCurrentSong();