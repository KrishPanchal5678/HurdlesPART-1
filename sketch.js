var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var athletes, athlete1, athlete2, athlete3, athlete4;

var track, athlete1_img, athlete2_img, athlete3_img, athlete4_img;

function preload(){
  track = loadImage("images/track.jpg");
  athlete1_img = addAnimation("P1 Walk");
  athlete2_img = addAnimation("P2 Walk");
  athlete3_img = addAnimation("P3 Walk");
  athlete4_img = addAnimation("P4 Walk");
  ground = loadImage("images/ground.png");
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
