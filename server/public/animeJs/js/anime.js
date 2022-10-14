
// window.alert("Helo World")

const play = document.querySelector("#play")
const pause = document.querySelector("#pause")

var animation = anime({
  targets: '#text',
  translateX: 270,
  easing: "easeInOutExpo"
});



document.querySelector('#play').onclick = animation.play;
document.querySelector('#pause').onclick = animation.pause;

