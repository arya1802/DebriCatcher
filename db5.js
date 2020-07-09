class db5{
  constructor(x, y) {
      var options = {
         

      }
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.width = 100;
      this.height = 100;
      this.image = loadImage("pics/db5.png");
      World.add(world, this.body);
    }
    display(status1){

         if(status1===0)
         {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          if (this.body.position.y>850&&this.body.position.y<950){
            destroy++;
          }
           pop();
          }
          else{
            score=score+6
           World.remove(world, this.body);
          }
    }
}