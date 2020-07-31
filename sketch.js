const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var archer;

var carriage;
var bg;
var baloonss= [];

function setup(){
    var canvas = createCanvas(1500,550);
    engine= Engine.create()
    world = engine.world; 
for(var i = 0;i<550;i++){
  baloonss.push(new Balloon1());
}
  

 baloonss= new Balloon1(Math.random(50,100),100,30,50);
 //balloonB= new Balloon2(Math.random(0,50),100,30,50);
 //balloonC= new Balloon3(Math.random(0,50),100,30,50);
 rock1= new Rock(550,100,30,50);
 carriage= new Carriage(1310,200,80,60);
 archer= new Archer(1310,120,100,100);
 

 
bg=loadImage("Images/Background1.jpg");
    
}
function draw(){
    background(bg);
    Engine.update(engine);
   
    baloonss.display();
   // baloonss.move();
   // baloonss.update();
   // balloonA.display();
    //balloonB.display();
   // balloonC.display();
   // balloonA.display();
    //balloonB.display();
    //balloonC.display();
    
    rock1.display();
    carriage.display();
    archer.display();
}



