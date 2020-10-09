class Ball{
    constructor(x,y,widht,height){
    var options= {
    frictionAir:0.05,
    density:1.0,
    
    }
    this.body=Bodies.rectangle(x,y,widht,height,options);
    this.widht=widht;
    this.height=height;
    World.add(world,this.body)    
}
display(){
    var pose=this.body.position;
    push();
    translate(pose.x,pose.y);
    rotate(this.body.angle)
    ellipseMode(CENTER)
    fill('brown')
    ellipse(0,0,this.widht,this.height)
    pop();


}
}