class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:10,
        }
        this.sling=Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world,this.sling);
    }
    attach(body){
        this.sling.bodyA=body
    }
    fly(){
        this.sling.bodyA=null;
    }


    display(){
        if (this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
      push ();
        stroke("#301608")
        if (pointA.x<220){
            strokeWeight(7);
        line (pointA.x-25,pointA.y,pointB.x-10,pointB.y);
        line (pointA.x+25,pointA.y,pointB.x+20,pointB.y-3);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            }
        else{
            strokeWeight(3);
            line (pointA.x-25,pointA.y,pointB.x-10,pointB.y);
            line (pointA.x+25,pointA.y,pointB.x+20,pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
        }}
        image(this.sling1,200,20);
        image(this.sling2,172,20);
    pop ();
    }
}