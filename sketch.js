

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
var redBalloonGroup, blueBalloonGroup, pinkBalloonGroup, greenBalloonGroup, arrowGroup;
var swooshSound;
 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  swooshSound= loadSound("Arrow+Swoosh+1.mp3");
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  redBalloonGroup= new Group();
  greenBalloonGroup= new Group();
 blueBalloonGroup= new Group();
  pinkBalloonGroup= new Group();
  arrowGroup= new Group();
}

function draw() {

  background.velocityX = -3 
    score=score+Math.round(frameCount/60);
 
  
  

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
   
  }
 
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
   
  }
   if(arrowGroup.isTouching(redBalloonGroup)){
     redBalloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score=score+1;
     swooshSound.play();
   }
   if(arrowGroup.isTouching(greenBalloonGroup)){
     greenBalloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score=score+3;
      swooshSound.play();
   }
   if(arrowGroup.isTouching(blueBalloonGroup)){
     blueBalloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score=score+2;
      swooshSound.play();
   }
   if(arrowGroup.isTouching(pinkBalloonGroup)){
     pinkBalloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score=score+4;
      swooshSound.play();
   }
 
  drawSprites();
  text("score:"+score,500,20);
}



function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.scale = 0.1
  red.lifetime=200;
  redBalloonGroup.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 5;
  blue.scale = 0.1
   blue.lifetime=200;
   blueBalloonGroup.add(blue);
  
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.scale = 0.1
   green.lifetime=200;
   greenBalloonGroup.add(green);

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 5;
  pink.scale = 1
   pink.lifetime=200;
   pinkBalloonGroup.add(pink);
  
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.y=bow.y;
arrow.lifetime = 100;
  arrow.velocityX = -4;
  arrow.scale = 0.3;
arrow.lifetime=100;
   arrowGroup.add(arrow);
  
   
  
}

