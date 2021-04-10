var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("images/track.jpg")
  car1_Img = loadAnimation("images/TREX11.png","images/trex33.png","images/TREX222.png")
  car2_Img = loadImage("images/trex1.png","images/trex3.png","images/trex4.png")
  //car3_Img = loadImage("images/car3.png")
  //car4_Img = loadImage("images/car4.png") 
  //groundImg = loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
