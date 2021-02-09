class Game {
  constructor(){

  }

  async start(){
    if(gameState === 0){
      player = new Player();
      form = new Form()
      form.display();
    }
  }
  theme(){
    var plain=createSprite(200,300,20,20)
  plain.addImage(plain);
  if(mousePressedOver(plain)){
    image(panda,200,200,30,30)
  }}
  play(){
    form.hide();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
    }

    if(player.distance > 3880){
     // gameState = 2;
     ////player.rank=player.rank+1
     // Player.updateCarsAtEnd(player.rank)

    }
   
   drawSprites();
  }

}
