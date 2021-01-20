const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var world,engine
var ploygon

function setup(){
  engine = Engine.create()
  world = engine.world;
  var canvas = createCanvas(1600,400);
  polygon=Bodies.circle(200,100,20,{'restitution':1,'density':1,
  'friction':1});
  ground = new Ground(600,height,1200,20)

  slingshot = new Slingshot(this.polygon,{x:100,y:100});
console.log(polygon)

}


function draw(){
background('white');
Engine.update(engine)



ellipseMode(RADIUS);
ellipse(this.polygon.position.x,this.ploygon.position.y,20,20);
slingshot.display();

}