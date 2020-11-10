class Dustbin{
    constructor(x, y){
        this.box1 = Bodies.rectangle(x, y, 150, 15 , {isStatic:true});
	    this.box2 = Bodies.rectangle(x+75, y-30, 15,75, {isStatic:true});
	    this.box3 = Bodies.rectangle(x-75, y-30, 15,75, {isStatic:true});

        World.add(world, this.box1);
	    World.add(world, this.box2);
	    World.add(world, this.box3);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.box1.position.x, this.box1.position.y, 150, 15);
        rect(this.box2.position.x, this.box2.position.y, 15, 75);
        rect(this.box3.position.x, this.box3.position.y, 15, 75);
    }
}