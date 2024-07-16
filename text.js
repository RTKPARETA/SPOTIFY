Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPauses();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-pause");
      e.target.classList.add("fa-circle-play");
      audioElement.pause();
      gif.style.opacity = 0;
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
    });
  }
);

const makeAllPauses = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("Onclick",(s) =>{
      console.log(s.target);
      songIndex = parseInt(s.target.id);
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    s.target.classList.remove("fa-circle-play");
    s.target.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    s.target.classList.remove("fa-circle-pause");
    s.target.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
})});


function playPause(){
    if(songItems.classList.contains("fa-circle-pause")){
  audioElement.pause();
  songItems.classList.remove("fa-circle-pause");
  songItems.classList.add("fa-circle-play");
    }
    else{
      audioElement.play();
      songItems.classList.remove("fa-circle-play");
  songItems.classList.add("fa-circle-pause");
    }
  }