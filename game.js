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
});
