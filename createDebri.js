class createDebriCatcher{
    constructor(x, y) {
        var options = {
           
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 75;
        this.height = 75;
      this.debriCatcherImg=loadAnimation("debri/d1.png");
        //this.image = loadImage("pics/db3.png");
        World.add(world, this.body);
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
      }
      display(){
          
        
       animation(this.debriCatcherImg, 100, 100);
       
      }
}