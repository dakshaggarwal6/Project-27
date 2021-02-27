const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var ground;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  bobobject1 = new Bob(200,300,40);
  bobobject2 = new Bob(239,300,40);
  bobobject3 = new Bob(278,300,40);
  bobobject4 = new Bob(317,300,40);
  bobobject5 = new Bob(356,300,40);

  roof=new Roof(278,100,200,30);
  rope1 = new Rope(bobobject1.body,roof.body,-40*2,0);
  rope2 = new Rope(bobobject2.body,roof.body,-19*2,0);
  rope3 = new Rope(bobobject3.body,roof.body,0*2,0);
  rope4 = new Rope(bobobject4.body,roof.body,20*2,0);
  rope5 = new Rope(bobobject5.body,roof.body,39*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 bobobject1.display();
bobobject2.display();
bobobject3.display();
bobobject4.display();
bobobject5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}

function keyPressed() {
  if (keyCode===UP_ARROW) {
    Matter.Body.applyForce(bobobject1.body, bobobject1.body.position, { x: -55, y: -40 })  
  }
    
  if (keyCode===DOWN_ARROW) {
    Matter.Body.applyForce(bobobject5.body, bobobject5.body.position, { x: 55, y: 40 })  }
}