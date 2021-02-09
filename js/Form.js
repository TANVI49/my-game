class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
  
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(255)
    
    image(frontPage,0,0,displayWidth -20, displayHeight-30)
    this.title.html("WELCOME TO JUNGLE RUN");
    this.title.position(displayWidth/2 - 200, 250);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
 

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      background(255)
      image(ground,0,0,displayWidth -20, displayHeight-30)
     
  image(plain,200,300,250,250)
    fill("black");
    textSize(30);
    text("PLAIN",280,580);

    image(desert,670,300,250,250)
    fill("black");
    textSize(30);
    text("DESERT",750,580);

    image(jungle,1120,300,250,250)
    fill("black");
    textSize(30);
    text("JUNGLE",1197,580);
   
      player.name = this.input.value();
     
      this.greeting.html("Hello " + player.name + ",please select your theme where you want to race")
      this.greeting.position( 380,70);

    });
    Theme=new theme()
   Theme.a();
  }
}
