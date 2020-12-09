const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var plank1, plank2, plank3 ,plank4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(200,height,2000,20);
    pig1 = new Pig(810,350);
    pig2 = new Pig (810,250);
    plank1 = new Plank(810,260,20,300,PI/2);
    plank2 = new Plank(810,180,20,300,PI/2);
    plank3 = new Plank(760,120,20,150,PI/7);
    plank4 = new Plank(870,120,20,150,-PI/7);
    bird1 = new Bird(100,100);

}
function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(pig1.body.position.x);
    console.log(pig1.body.position.y);*/
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    plank1.display();
    plank2.display();
    plank3.display();
    plank4.display();
    bird1.display();
    ground.display();
}