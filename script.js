console.log ("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Hanuman", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ganesh", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ram", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Krishna", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Shiva", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Vishnu", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Brahma", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Vighnaharta", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "BajrangBali", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Bhurakhia", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
// Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');    
         element.classList.remove('fa-pause-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else {
        songIndex += 1; 
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else {
        songIndex -= 1; 
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})