
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	var options = {
        isStatic: true
	}
	
	rectMode(CENTER);
	ground = Bodies.rectangle(400,height,800,20, options);
	paper = new Paper(75,height-20,20);
	dustbin = new Dustbin(600 ,height-15);

	World.add(world, ground);
	World.add(world, paper);
	World.add(world, dustbin);
	Engine.run(engine);  
}


function draw() {
  background(0);

  fill("yellow");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
  paper.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW && paper.position.y>280) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15,y:-15})
	}
}
