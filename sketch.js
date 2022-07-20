
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var object;
var ground;
var ball;
var border;
var ball2;

function setup()
{
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
object = Bodies.rectangle(200,50,30,80)


World.add(world,object)
var ground_options = {
  isStatic: true
}
ground = Bodies.rectangle(200,400,400,20,ground_options)
World.add(world,ground)

var ball_options = {
  restitution: 1
}


border = Bodies.rectangle(25,200,400,20,ground_options)
World.add(world,border)

ball2 = Bodies.circle(280,100,20,ball_options)
World.add(world,ball2)

ball = Bodies.circle(100,50,40,ball_options)
World.add(world,ball)
}

function draw() 
{
  background(51);
Engine.update(engine) 
rectMode(CENTER)
ellipseMode(RADIUS)
rect(object.position.x,object.position.y,30,80)
rect(ground.position.x,ground.position.y,400,20)
ellipse(ball.position.x,ball.position.y,20,20)
rect(border.position.x,border.position.y,400,20)
ellipse(ball2.position.x,ball2.position.y,20,20)
}

