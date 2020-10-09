class Box{
    constructor(x,y,widht,height){
    var options= {
    restitution:0.8,
    friction:1.0,
    density:0.04
    
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
    rectMode(CENTER)
    fill('black')
    rect(0,0,this.widht,this.height)
    pop();


}
}