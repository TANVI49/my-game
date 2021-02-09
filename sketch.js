var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var form, player, game;
var ground,frontPage,plain,desert,jungle;
var track;
var dog,elephant,panda,tiger,horse,goat;

function preload(){
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
  frontPage = loadImage("images/firstPage.png")
  plain  = loadImage("images/tenor.gif")
  desert = loadImage("images/DESERT.gif")
  jungle = loadImage("images/jungle.gif")

  elephant = loadImage("images/elephant.png");
  horse = loadImage("images/horse.png");
  goat = loadImage("images/goat.png")
  dog  = loadImage("images/dog.png")
  tiger = loadImage("images/tiger.png")
  panda = loadImage("images/panda.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
  game.start();
}

 

function draw(){
 /* if(playerCount === 4){
    game.update(1);
  }*/
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
