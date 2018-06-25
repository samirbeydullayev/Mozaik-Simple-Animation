var myCanvas = document.querySelector("#myCanvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
context= myCanvas.getContext("2d");


x = 0;
y = 0;
vx = 20;
vy = 20;
function anima(){
  context.beginPath();
  context.arc(x, y,20,2*Math.PI , 0*Math.PI);
  context.fillStyle=("red");

  context.fill();
  x+=vx;
  y+=vy;
  if(x>1370){
    vx-=20
  }else if(x<10){
    vx+=20
  }
  if(y>650){
    vy-=20
  }else if(y<10){
    vy+=20
  }
}

setInterval(anima,30)

