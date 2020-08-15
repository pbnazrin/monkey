//Global Variable
var monkey,banana,ground,score=0;
var ground_image;
var background;
var bananaGroup;
var stoneGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var restart,gameOver;
var invisibleGround;
var stone;

function preload(){

monkeyImage=  loadAnimation ("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png",          "Monkey_08.png", "Monkey_09.png" )

  backImage = loadImage("jungle.jpg")
  
  bananaImage = loadImage("banana.png")
  
  stoneImage = loadImage("stone.png")
}

function setup() {
  
  createCanvas(400, 400);
  
  background1 = createSprite(200,200,30,30);
  background1.addImage("acb",backImage);
  background1.scale = 1
  
  monkey = createSprite(35,360,50,50);
  monkey.addAnimation("abc",monkeyImage);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(200,380,400,10)
  background1.x = background1.width /2;
  
  invisibleGround.visible = false;
  
}

function draw() {
     
  background(236);
  
   stroke("white");
   textSize(20);
   fill("white");
  text("Score: "+ score, 300,100);
  
 
  
    monkey.collide(invisibleGround);
  
  
  background1.velocityX = -4;
  
  if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
  
    if(keyDown("space")&&monkey.y>=345.1) {
      monkey.velocityY = -15;
    } 

    monkey.velocityY = monkey.velocityY + 0.8

  
  spawnbananas();
  
  drawSprites();
}

function spawnbananas(){
  if(World.frameCount % 80 === 0) {
    
  banana = createSprite(400, 200,20,20);
    
  banana.y=random(150,300);
    
  banana.addImage("Bana",bananaImage);
    
  banana.scale=0.05;
    
  banana.velocityX=-4;
    
  banana.lifetime = 150;
    
  
  
  } 
  }

function spawnStones() {
  if(World.frameCount % 100 === 0) {
    
    stone = createSprite(200,330,10,40);
    
    stone.setAnimation("Ston",stoneImage);
    
    stone.velocityX = -5 ;
    
    stone.scale = 5;
    
    stone.lifetime = 70;
    
    stoneGroup.add(obstacle);
    }
}

