const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var hammer;
var plane,iron,stone;
var rubber;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone= new Stone(700,470,80,100);
  
    iron = new Iron(300,470,80,40);

    rubber=new Rubber(700,370,20,10);
  
    



}

function draw(){

    rectMode(CENTER);
    background("indigo");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
  iron.display();
  rubber.display();

  
    
 
}