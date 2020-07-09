class db1{
  constructor(x, y) {
      var options = {
         

      }
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.width = 100;
      this.height = 100;
      this.image = loadImage("pics/db1.png");
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
          if (this.body.position.y>900&&this.body.position.y<1000&&gameState===0){

            destroy++;
          }
          pop();
         }
         else{
           score++;
          World.remove(world, this.body);
         }
    }
}