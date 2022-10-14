
// window.alert("Helo World")

const play = document.querySelector("#play")
const pause = document.querySelector("#pause")


const animation = anime({
  targets: "div",
  translateX: 250,
  rotate: "1turn",
  backgroundColor: "#101010",
  duration: 800
})



play.onClick = animation.play;
pause.onClick = animation.pause;

