
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PAPER = new Paper(100,100,1);
	GROUND = new Ground(400,700,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  PAPER.display();
  //GROUND.display();
  drawSprites();
 
}



