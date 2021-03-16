var movingrect,fixrect;
function setup() {
  
  createCanvas(800,400);
   fixrect=  createSprite(400, 200, 50, 50);
   fixrect.shapeColor="green";
   movingrect=  createSprite(200,200,50,50);
   movingrect.shapeColor="green";

}

function draw() {

  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  console.log(movingrect.x-fixrect.x);
  if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2  &&fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2&&
    movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2  &&fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2){
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixrect.shapeColor="green";  
  }
  drawSprites();
}