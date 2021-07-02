const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1;
var base2;
var player;
var computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  
	
   //Create Player Base and Computer Base Object
   base1 = new Computerbase(1500,600,350,350);
   base2 = new Playerbase(500,random(370,730),350,350);
  

   player = new Player(500,base2.body.position.y - 220,50,180);
   computer = new Player(1500,base1.body.position.y - 220,50,180);  


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   base1.display();
   base2.display();
  

   //display Player and computerplayer
   player.display();
   computer.display();


}
