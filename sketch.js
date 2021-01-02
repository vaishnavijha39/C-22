const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var world,engine
var ground
var ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
  var ground_options={
    isStatic:true
  }
  
  ground = Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground)
//console.log(object)
var ball_options={
  restitution:1.0
}
ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
}

function draw() {
  background("yellow"); 
  Engine.update(engine)
  fill("brown") 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  fill("cyan")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}