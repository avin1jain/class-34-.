class Ground{
    constructor(x,y,widht,height){
    var options= {
    isStatic: true,
    
    }
    this.body=Bodies.rectangle(x,y,widht,height,options);
    this.widht=widht;
    this.height=height;
    World.add(world,this.body)    
}
display(){
    var pose=this.body.position;
    rectMode(CENTER)
    fill('red')
    rect(pose.x,pose.y,this.widht,this.height)





}
}