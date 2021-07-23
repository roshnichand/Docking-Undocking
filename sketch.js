var bg,issimg,sp1,sp2,sp3,sp4;

var iss, spacecraft, hasDocked = false; 

function preload(){

  bg = loadImage("spacebg.jpg")
  issimg = loadImage("iss.png")
  
  sp1 = loadImage("spacecraft1.png")
  sp2 = loadImage("spacecraft2.png")
  sp3 = loadImage("spacecraft3.png")
  sp4 = loadImage("spacecraft4.png")
  

}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330, 200, 50, 50);
  iss.addImage(issimg)
  iss.scale = 0.5

  spacecraft = createSprite(285, 280, 50, 50);
  spacecraft.addImage(sp1)
  spacecraft.scale = 0.15
}

function draw() {
  background(bg);  

  if(!hasDocked){
   spacecraft.x = spacecraft.x + random(-1,1);
   
   if(keyDown(UP_ARROW)){
     spacecraft.addImage(sp2)
     spacecraft.y = spacecraft.y - 2
   }

   if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(sp4)
    spacecraft.x = spacecraft.x - 2 
   }
   
   if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(sp3)
    spacecraft.x = spacecraft.x + 2
   }

   if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(sp1)
    spacecraft.x = spacecraft.x - 2
   }
  }

  if (spacecraft.y <=( iss.y + 70) && spacecraft.x <= (iss.x -10)){
    hasDocked = true;
    textSize (25);
    fill("white");
    text("Docking Successful", 200,300);
  }
  drawSprites();
}