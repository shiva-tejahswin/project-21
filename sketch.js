const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,right,left;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;


	var ball_options={
		
		restitution:0.1,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,15,ball_options);
	World.add(world,ball);


	Engine.run(engine);

	 ground = new Ground(500,450,1000,20)

	 right = new Ground(800,400,10,80)

	 left = new Ground(600,400,10,80)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,15);
  

  ground.display();
  right.display();
  left.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:30.5,y:-30.5})
	}
}