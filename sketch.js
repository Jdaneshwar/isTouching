var movingRect, fixedRect;


function setup() {
  createCanvas(400,400);

  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //M.x - F.x < M.width/2 + F.width/2 = Rightside
  //F.x - M.x < M.width/2 + F.width/2 = Leftside

  //M.y - F.y < M.height/2 + F.height/2 = 
  //F.y - M.y < M.height/2 + F.height/2 = 

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){

    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}


 