
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var newton;
var apple, applepic;
var tree, treepic;
var bg_img, ground1;
var button;
var applerope;
var grounds;

function preload(){

  bg_img = loadImage("background.png");
  applepic = loadImage("apple.png");
  newton = loadImage("newton.png");
  treepic= loadImage("tree.png");

}


function setup() {

  createCanvas(600,600);

  apple = Bodies.circle(80,120,20);

  grounds= new Ground(200, 585, 50, 50);

  engine = Engine.create();
  world = engine.world;

  
}


function draw() 
{
  background(51);
  image(bg_img,0,0, 650, 650);
  
  push();
  imageMode(CENTER);
  if(apple!=null){
    image(applepic ,apple.position.x ,apple.position.y, 70, 70);
  }
  pop();

  grounds.show()

  Engine.update(engine);
  drawSprites();
  
}



function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,apple);
               apple = null;
               return true; 
            }
            else{
              return false;
            }
         }
}



