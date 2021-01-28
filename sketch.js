
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1140,100,30);
	mango2=new mango(1100,230,30);
	mango3=new mango(1050,90,30);
	mango4=new mango(990,150,30);
	mango5=new mango(1200,175,30);
	mango6=new mango(950,210,30);
	mango7=new mango(1100,170,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1=new stone();
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();


  groundObject.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
     stone.isStatic=false,
	  Matter.Body.applyForce(stone1.body,stone1.body.position,{x:10,y:-20});
	}
  
  }
  