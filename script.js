var x = -1
var y = -1
var seziure = setInterval(blank);
function blank(){
    document.getElementById("test").style.backgroundColor = "white";
}
clearInterval(seziure);


 // purple black white, pink tangerine ? 
function random(){

while (x == y){
  x = Math.floor(Math.random() * 6 );
  console.log(x);
}

y = x;

  if (y == 0) {
    document.getElementById("test").style.backgroundColor = "red";
  }
  else if (y == 1){
    document.getElementById("test").style.backgroundColor = "blue";
  }
  else if (y == 2){
    document.getElementById("test").style.backgroundColor = "green";
  }
  else if (y == 3){
    document.getElementById("test").style.backgroundColor = "purple";
  }
  else if(y == 4){
    document.getElementById("test").style.backgroundColor = "black";
  }
  else if (y == 5){
    document.getElementById("test").style.backgroundColor = "pink";
  }
  var i = 0;
  console.log(i);
  
  
}



function callButton(){

 seziure = setInterval(random);

}

function stopButton(){
    clearInterval(seziure);
}