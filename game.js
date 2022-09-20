$(".btn").click(function(){
  var userChosenNote = $(this).attr("id");
  playMusic(userChosenNote);
  animationPress(userChosenNote);
});

function animationPress(currentNote){
  $("#" + currentNote).addClass("pressed");
  setTimeout(function(){
    $("#" + currentNote).removeClass("pressed");
  },100);
}
function playMusic(name){
  var audio = new Audio("sound/" + name + ".mp3" );
  audio.play();
}
$(document).keypress(function(event){
  if(event.key === "d" ){
    var audio = new Audio("sound/do.mp3" );
    audio.play();
    animationPress("do");
  }
  if(event.key === "f" ){
    var audio = new Audio("sound/re.mp3" );
    audio.play();
    animationPress("re");
  }
  if(event.key === "g" ){
    var audio = new Audio("sound/mi.mp3" );
    audio.play();
    animationPress("mi");
  }
  if(event.key === "h" ){
    var audio = new Audio("sound/fa.mp3" );
    audio.play();
    animationPress("fa");
  }
  if(event.key === "j" ){
    var audio = new Audio("sound/sol.mp3" );
    audio.play();
    animationPress("sol");
  }
  if (event.key === "k") {
    var audio = new Audio("sound/la.mp3" );
    audio.play();
    animationPress("la");
  }
  if(event.key === "l"){
    var audio = new Audio("sound/si.mp3" );
    audio.play();
    animationPress("si");
  }
  if(event.key === "r"){
    var audio = new Audio("sound/C.mp3" );
    audio.play();
    animationPress("C");
  }
  if(event.key === "t"){
    var audio = new Audio("sound/D.mp3" );
    audio.play();
    animationPress("D");
  }
  if(event.key === "u"){
    var audio = new Audio("sound/F.mp3" );
    audio.play();
    animationPress("F");
  }
  if(event.key === "i"){
    var audio = new Audio("sound/G.mp3" );
    audio.play();
    animationPress("G");
  }if(event.key === "o"){
    var audio = new Audio("sound/A.mp3" );
    audio.play();
    animationPress("A");
  }
});

var started = false;
$(document).keypress(function(){
  if(!started){
    $("#head-title").text("enjoy");
  }
});
$(document).click(function(){
  if(!started){
    $("#head-title").text("enjoy");
  }
});
