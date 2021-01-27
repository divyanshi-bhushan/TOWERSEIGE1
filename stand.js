class Stand{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.stand=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.stand);
    }

    display(){

        var angle=this.body.angle;
        strokeWeight(2);
        fill("white");
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}