
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone1,groundObject, slingshot;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000,100,30)
	mango3 = new mango(1000,200,30)
	mango4 = new mango(1100,200,30)
	mango5 = new mango(900,200,30)
	mango6 = new mango(1200,200,30)

	stone1 = new Stone(170,320,20)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,80);

	slingshot = new SlingShot(stone1.body,{x:220, y:390});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()

  stone1.display()

  slingshot.display()

  groundObject.display();

  drawSprites()
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}