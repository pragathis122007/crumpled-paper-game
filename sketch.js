
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3;
var paper1;
var ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
engine = Engine.create();
world = engine.world;


rect1 = createSprite(650,650,200,20);
rect1.shapeColor = "blue";

rect2 = createSprite(750,610,20,100);
rect2.shapeColor = "blue";

rect3 = createSprite(550,610,20,100);
rect3.shapeColor = "blue";

paper1 = new Paper(50,650);


ground = new Ground(10,669,1600,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();
  ground.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.setPosition(paper1.body,{x:600,y:610});

	}
}



