
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,box1,slingShot;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = createSprite(500,360,20,30);
  box2 = createSprite(520,360,20,30);
  box3 = createSprite(540,360,20,30);
  box4 = createSprite(560,360,20,30);
  box5 = createSprite(580,360,20,30);
  box6 = createSprite(600,360,20,30);

  box7 = createSprite(510,330,20,30);
  box8 = createSprite(530,330,20,30);
  box9 = createSprite(550,330,20,30);
  box10 = createSprite(710,330,20,30);
  box11 = createSprite(910,330,20,30);

  box12 = createSprite(520,310,20,30);
  box13 = createSprite(540,310,20,30);
  box14 = createSprite(560,310,20,30);
  box15 = createSprite(580,310,20,30);

  box16 = createSprite(530,280,20,30);
  box17 = createSprite(550,280,20,30);
  box18 = createSprite(570,280,20,30);

  box19 = createSprite(540,250,20,30);
  box20 = createSprite(560,250,20,30);

  box21 = createSprite(550,220,20,30);

  ball = createSprite(0,0,20,20);

  ground = new Ground(550,160,200,20);

  slingshot = new SlingShot(ball.body,{x:200, y:200});

    
}  
function draw() {
  background(255,255,255); 
  Engine.update(engine);
  strokeWeight(4);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  fill("red");

  ball.display();
  spring.display();
  ground.display();
  slingshot.display();
   
}
function mouseDragger(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();

}