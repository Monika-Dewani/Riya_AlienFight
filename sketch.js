const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var ship, monster;
var shipImg, monsterImg
var background, bg;
var engine, world;
var health = 200;
var laser;
var laserGroup,monsterGroup;
var boundary;
function preload(){
shipImg = loadImage('Spaceship.png');
bg = loadImage('SpaceBackground.jpg');
monsterImg = loadImage('monster.png');
}


function setup() {
  createCanvas(1200,800);

  monster = createSprite(0,150,10,20);
    monster.addImage(monsterImg);
    monster.scale = 0.3;
    monster.velocityX = 5;
  
  ship = createSprite(560, 680, 20, 20);
  ship.addImage(shipImg);
  ship.scale = 0.3;
  
  laserGroup=new Group();
  //monsterGroup=new Group();
  boundary=createEdgeSprites();
 
}

function draw() {
  background(bg);  
  textSize(30);
    text("Heath : "+ health, 50,100)
  //monsters();
  

  

if(keyDown(RIGHT_ARROW)){
  ship.x = ship.x + 5;
}

if(keyDown(LEFT_ARROW)){
  ship.x = ship.x - 5;
}

if(keyWentDown(UP_ARROW)){
  lasers();
}

monster.bounceOff(boundary);

if(monster.isTouching(laserGroup)){
  console.log("hello");
 laserGroup.destroyEach();
  if(health>0){
    
    health=health-50;
  }
  if(health<=0){
monster.destroy();
  }
}
drawSprites();
}

function lasers(){
  laser = createSprite(ship.x, ship.y,20,40);
  laser.velocityY=-10;
  laser.lifetime=70;
  ship.depth=laser.depth+1;
  laserGroup.add(laser);
}

// function monsters(){
//   if(frameCount%200===0){
//   monster = createSprite(0,150,10,20);
//   monster.addImage(monsterImg);
//   monster.scale = 0.3;
//   monster.velocityX = 5;
//   monster.lifetime=220;
//   monsterGroup.add(monster);
//   }

// }