const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7,
block8,block9,block10,block11,block112, block13

var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8, blocks9

var stand1, stand2
var slingshot


function preload(){

}

function setup(){
    engine= Engine.create();
    world= engine.world;

    createCanvas(900,400);
    ground= new Ground();
    stand1= new Base(380,300,270,10);
    stand2= new Base(700,200,200,10);

   // level uno
   
   block1= new Block(280,275,30,40);
   block2= new Block(310,275,30,40);
   block3= new Block(340,275,30,40);
   block4= new Block(370,275,30,40);
   block5= new Block(400,275,30,40);
   block6= new Block(430,275,30,40);

   // level dos

   block7= new Block(310,275,30,40);
   block8= new Block(340,275,30,40);
   block9= new Block(370,275,30,40);
   block10= new Block(400,275,30,40);

   // level tres

   block11= new Block(340,275,30,40);
   block12= new Block(370,275,30,40);

   // level cuatro 

   block13= new Block(365,275,30,40);

   // set dos
   // level uno

   blocks1= new Block(640,175,30,40);
   blocks2= new Block(670,175,30,40);
   blocks3= new Block(700,175,30,40);
   blocks4= new Block(730,175,30,40);
   blocks5= new Block(760,175,30,40);

   // leve dos

   blocks6= new Block(670,135,30,40);
   blocks7= new Block(700,135,30,40);
   blocks8= new Block(730,135,30,40);

   // level tres y final 

   blocks9= new Block(700,95,30,40);

   ball= Bodies.circle(50,200,20);
   World.add(world,ball);

   slingshot= new SlingShot(this.ball, {x:200, y:200});

}

function draw(){
    background("light blue")
    Engine.update(engine);

    stand1.display();
    stand2.display();

    fill("black");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    fill("orange");

    block7.display();
    block8.display();
    block9.display();
    block10.display();

    fill("grey");
    block11.display();
    block12.display();

    fill("brown");
    block13.display();

    fill("red");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    fill("pink");
    blocks6.display();
    blocks7.display();
    blocks8.display();

    fill("green");
    blocks9.display();


    ellipse(ball.position.x, ball.position.y, 20);
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    slingshot.fly();

}
