console.log("Welcome to Youtube Music!");

//initialise the variable

let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
// audioElement.play();

let masterPlay = document.getElementById('masterplay');
let myprogressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songItems = Array.from(document.getElementsByClassName("songItems"));

let songs = [
  {
    songName: "Jai Sachinandan",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },

  {
    songName: "Hare Krishna",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },

  {
    songName: "Pehli Dafa",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },

  {
    songName: "Pal- Ek Pal",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },

  {
    songName: "Yaar Na Mile- Kick",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },

  {
    songName: "Kuch Baatein",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },

  {
    songName: "Mast Nazaron Se",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);

  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});



audioElement.addEventListener("timeupdate", () => {
  //update seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressBar.value = progress;
});

myprogressBar.addEventListener("change", () => {
  audioElement.currentTime = (myprogressBar.value * audioElement.duration) / 100;
});

const makeAllPlays= ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
  
  songIndex= parseInt(e.target.id);
    makeAllPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');



    })
}
)







//handle play/pause click  //listen to events //masterplay button

if (masterPlay) {

  masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
     

      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");

      audioElement.play();
      gif.style.opacity = "1";
    } 
    
    else {
      audioElement.pause();
      masterPlay.classList.add("fa-circle-play");
      masterPlay.classList.remove("fa-circle-pause");
      gif.style.opacity = "0";
    }
  });
}



//previous click

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex>=6){
    songIndex=0;
  }

  else{
    songIndex-=1;
  }

  audioElement.src= `songs/${songIndex+1}.mp3`;
  audioElement.currentTime= 0;
  audioElement.play();
 
    if (audioElement.paused || audioElement.currentTime <= 0) {
     

      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");

      audioElement.play();
      gif.style.opacity = "1";
    } 
    
    else {
      audioElement.pause();
      masterPlay.classList.add("fa-circle-play");
      masterPlay.classList.remove("fa-circle-pause");
      gif.style.opacity = "0";
    
  }
}
  );




//next click
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>6){
    songIndex=0;
  }

  else{
    songIndex+=1;
  }

  audioElement.src= `songs/${songIndex+1}.mp3`;
  audioElement.currentTime= 0;
  audioElement.play();

  if (audioElement.paused || audioElement.currentTime <= 0) {
     

    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    audioElement.play();
    gif.style.opacity = "1";
  } 
  
  else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = "0";
  }
}
);
  