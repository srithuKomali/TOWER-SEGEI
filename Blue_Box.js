class Blue_Box{
    constructor(x, y, width, height){
    var options = {
    isStatic:false
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.width,this.height, options)
    World.add(world, this.body);
    this.Visibility=255;
    }
    display(){
        if(this.body.speed<3){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y)
    rectMode(CENTER);
    fill(173,216,230);
    rect(0,0,this.width, this.height)
    pop()
    }
 
else
{
World.remove(world,this.body)
push()
this.Visibility=this.Visibility-5
pop();

}
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-105){
            score++
        }
        
    }
    }
    
    