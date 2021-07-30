class Mango {

  constructor(x, y, radius) {
    var options = {
      'isStatic' : false,
        'restitution':0,
        'friction':1,
    }
   
        this.body = Bodies.circle(x, y, radius/5, options);
        this.radius = radius;
        this.image = loadImage ("Plucking mangoes/mango.png")
        World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("cyan");
   image(this.image,0,0,this.radius,this.radius);


    pop();
  };
}


  