class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:20
            
        
        }

        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA=null;

    }

    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA;
            var pointB=this.pointB;

            strokeweight(2);
            fill("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}