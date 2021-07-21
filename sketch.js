var canvas,backgroundImg,playerCount,form,player,game
var gameState=0
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game= new Game()
  game.getState()
  game.start()
}


 

function draw(){
  
    
  
}


