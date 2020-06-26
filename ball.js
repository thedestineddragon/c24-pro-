class Ball {
    constructor(x,y,radius){
    var option = {
        isStatic:false,
        restitution:0.3,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,option)
    this.radius=radius;
     
    World.add(world,this.body);
    }
  
    display() {
      var pos = this.body.position;
     ellipseMode(RADIUS);  
     ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }
 