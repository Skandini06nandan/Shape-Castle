var MB,pillar1,pillar2,circle,door,ball,pillar3,pillar4,cone,cone1,window;

function setup() {
  createCanvas(800,400);
  
pillar1 = createSprite(160,390,40,600);
pillar1.shapeColor = ("orange");
pillar2 = createSprite(500,390,40,600);
pillar2.shapeColor =("orange");
pillar3 =createSprite(210,320,40,330);
pillar3.shapeColor =("blue");
pillar4 =createSprite(450,320,40,330);
pillar4.shapeColor=("blue");

door = createSprite(330,350,70,100);
door.shapeColor=("magenta");

MB = createSprite(330,340,200,280);
MB.shapeColor =("yellow");

ss =createSprite(250,190,30,30);
ss.shapeColor =("yellow");
ss1 =createSprite(290,190,30,30);
ss1.shapeColor =("yellow");
ss2 =createSprite(330,190,30,30);
ss2 .shapeColor =("yellow");
ss3 =createSprite(370,190,30,30);
ss3 .shapeColor =("yellow");
ss4 =createSprite(410,190,30,30); 
ss4.shapeColor =("yellow");

fill(0,0,0)
window =createSprite(330,245,50,50);
}

function draw() {
  background(0,0,0);

  fill(127,255,0);
  circle =ellipse(210,140,40,40);

  fill(255,0,0);
  circle1 =ellipse(450,140,40,40);
   
  door.depth = MB.depth;
  door.depth =door.depth+1;

  fill(50,55,100);
  cone1 =triangle(140,95,158,20,180,95); 
  cone =triangle(520,95,498,20,480,95);

   drawSprites();
}