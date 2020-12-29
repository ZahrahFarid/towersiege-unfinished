const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




var a;
var circles=[];
var ground,stand;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var polygon,polygoni;
var engine,world;

function preload() {
 
  polygoni = loadImage("sprites/polygon.png");
  

  function setup(){

    createCanvas(800,800)
    engine = Engine.create()
    world = engine.world 
    Engine.run(engine)


    stroke(255)

 //camera=new Camera(width/2,height/2,0.5);
//camera.on();
 // a=height;
 // circles.push(width/2)

  ground = new Ground(400,780,810,15);

  table = new stand(300,360,150,5);

  b1 = new Box(330,235,30,40)
  b2 = new Box(360,235,30,40)
  b3 = new Box(390,235,30,40)
  b4 = new Box(420,235,30,40)
  b5 = new Box(450,235,30,40)
  b6 = new Box(360,195,30,40)
  b7 = new Box(390,195,30,40)
  b8 = new Box(420,195,30,40)
  b9 = new Box(390,155,30,40)

 

  polygon = Bodies.circle(50,200,20);
  polygon = addImage("polygon");
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:200,y:100});

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  stand.display()
  slingShot.display()
  ground.display()
  table.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()

  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged(){

Matter.Body.setPosition(this.polygon,{x:200,y:100})

}

function mouseReleased(){

slingShot.fly

}}