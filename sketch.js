const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var polygon, launcher ;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20)
    base1 = new Ground(380,300,270,10);
	base2 = new Ground(700,200,200,10);

    //level one;
	block1 = new Box(280,275,30,40);
    block2 = new Box(310,275,30,40);
	block3 = new Box(340,275,30,40);
	block4 = new Box(370,275,30,40);
	block5 = new Box(400,275,30,40);
	block6 = new Box(430,275,30,40);
	block7 = new Box(460,275,30,40);
	block8 = new Box(490,275,30,40);

	//level two;
	block9 = new Box(310,235,30,40);
	block10 = new Box(340,235,30,40);
	block11 = new Box(370,235,30,40);
	block12 = new Box(400,235,30,40);
	block13 = new Box(430,235,30,40);
	block14 = new Box(460,235,30,40);

	//level three;
	block15 = new Box(340,195,30,40);
	block16 = new Box(370,195,30,40);
	block17 = new Box(400,195,30,40);
	block18 = new Box(430,195,30,40);

	//level four;
	block19 = new Box(370,155,30,40);
	block20 = new Box(400,155,30,40);

	//level five;
	block21 = new Box(385,115,30,40);

	//set two;
	//level one;
	blocks1 = new Box(640,175,30,40);
	blocks2 = new Box(670,175,30,40);
	blocks3 = new Box(700,175,30,40);
	blocks4 = new Box(730,175,30,40);
	blocks5 = new Box(760,175,30,40);
	//level two;
	blocks6 = new Box(670,135,30,40);
	blocks7 = new Box(700,135,30,40);
	blocks8 = new Box(730,135,30,40);
    //level three;
	blocks9 = new Box(700,95,30,40);

    polygon = new Polygon(150,200,40,40)

    launcher = new Launcher(polygon.body,{ x:150 , y:200 }) ;
    
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(2)

   // ground.display();
    base1.display();
    base2.display();

    polygon.display();

    stroke(15);
    fill('lightblue');
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
 
    stroke(15);
    fill('pink');
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
 
    stroke(15);
    fill('cyan');
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
 
    stroke(15);
    fill('orange');
    block19.display();
    block20.display();
 
    stroke(15);
    fill('grey');
    block21.display();
    blocks9.display();

    launcher.display();

    
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if (keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x:150, y:200})
      launcher.attach(polygon.body)
    }
  }