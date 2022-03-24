const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var background
var database, gameState;
var form, player, playerCount;
var officer1,officer2,allPlayers
var officers = []
var game
var bullet,bulletImg,bulletGroup
var ammos = 50
var enemy,tankImg,enemysGroup
var life,lifeImg,lifeGroup,lifeImage
var ammo,ammoImg,ammoGroup
var blastImg
var invisible
var bgSound,gunSound,reloadSound,blastSound,crashSound
var muteButton

function preload() {
 backgroundImage = loadImage("./assets/road.png")
 backgroundImg = loadImage("./assets/bg.png")
 officerImage = loadImage("./assets/gun.png")
 officerImg = loadImage("./assets/gun2.png")
 buildImg = loadImage("./assets/building.png")
 tankImg = loadImage("./assets/tank.png")
 bulletImg = loadImage("./assets/bullet1.png")
 ammoImg = loadImage("./assets/ammos.png")
 lifeImg = loadImage("./assets/ambulance.png")
 lifeImage = loadImage("./assets/life.png")
 blastImg = loadImage("./assets/blast.png")

 bgSound = loadSound("./assets/background.mp3")
 gunSound = loadSound("./assets/gunshoot.mp3")
 reloadSound = loadSound("./assets/reload.mp3")
 blastSound = loadSound("./assets/blast.mp3")
 crashSound = loadSound("./assets/crash.mp3")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState()

  /*muteButton = createImg('./assets/mute.png');
  muteButton.position(width-70,20);
  muteButton.size(50,50);
  muteButton.mouseClicked(mute);*/
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  //bgSound.play();
  //bgSound.setVolume(0.1);

  if(playerCount == 2){
    game.update(1)
  }

  if(gameState == 1){
    game.play();
    //background(backgroundImage);
  }

  //text(mouseX+","+mouseY,mouseX,mouseY)
}

/*function mute(){
  if(bgSound.isPlaying())
     {
      bgSound.stop();
     }
     else{
      bgSound.play();
     }
}*/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
