const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var bbox,boxs;
var grou;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
            }

   

    var ball_options ={
        restitution: 1.0
    }

    bbox= new BBox(250,50,100,45);
    boxs=new BBox(200,300,20,46)
    grou=new ground1();
    

}

function draw(){
    background(0);
    Engine.update(engine);
bbox.d1();
boxs.d1();
grou.display();
}