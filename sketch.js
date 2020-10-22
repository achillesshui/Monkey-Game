var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var sscore, score

function preload(){
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  
  monkey = createSprite(50, 417, 20,20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.13;
  
  ground = createSprite(250,480, 1000, 50)
  ground.velocityX = -4;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(400)
  
  sscore = Math.ceil(frameCount/frameRate())
  score = "";
  
  fill("black")
  textSize(20);
  text("Survival Score: " + sscore,320,30);
  text("Score: " + score, 320, 50);
  
  ground.x = ground.width/2
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space")&&monkey.y>415) {
    monkey.velocityY = -13;
    
  }
  
  spawnBanana();
  spawnObstacle();
  
  monkey.collide(ground)
  
  drawSprites()
}

function spawnBanana() {
  if(frameCount%80==0) {
    var banana = createSprite(500,200,20,20);
    var rand = Math.round(random(270,390));
    banana.y = rand;
    banana.addImage("banana",bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 140;
    bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  if(frameCount%300==0) {
    var obstacle = createSprite(500,425,20,20);
    obstacle.addImage("obstacle", obstacleImage)
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifetime = 140;
    obstacleGroup.add(obstacle)
  }
}




