

function setup() {
  createCanvas(500,500);
  frameRate(60)
  angleMode(DEGREES);
  background(45);
}
//VARIABLES
var a = 0;
var c = 0;
var stop_a = false;
var toggle = true;
var stop_c = false;
var c_inverse = false;

function draw() {
  if (stop_a===false) {a = a+1}
  if (c==120) {c_inverse=true;}
  if (c_inverse===true) {c=c-0.5}
  if (c==-80) {c_inverse=false;}
  if(c_inverse===false){c=c+0.5}
  
  stroke(120-c/2,180+c,250-c);
  
  translate(width/2,height/2);
  if(toggle===true) {background(45);}
  
  //text(c,0,20)
  
  //TRIANGLE 1
  push();
  line(sin(a)*150,cos(a)*150,-150,0); 
  
  rotate(120);
  line(sin(a)*150,cos(a)*150,-150,0); 
  
  rotate(120);
  line(sin(a)*150,cos(a)*150,-150,0);
  pop();
  
  //TRIANGLE 2
  stroke(240-c/2,180+c,125-c);
  
  push();
  rotate(60);
  
  line(sin(a)*150,cos(a)*150,-150,0); 

  rotate(120);
  line(sin(a)*150,cos(a)*150,-150,0); 
  
  rotate(120);
  line(sin(a)*150,cos(a)*150,-150,0); 
  pop();
  
  //MAJOR TRIAD
  push();
  stroke(120-c/2,180+c,250-c);
  scale(-1,1);
  rotate(60);
  line(cos(a)*400,sin(a)*400,cos(a)*200,sin(a)*200); 
  
  rotate(120);
  line(cos(a)*400,sin(a)*400,cos(a)*200,sin(a)*200); 
  
  rotate(120);
  line(cos(a)*400,sin(a)*400,cos(a)*200,sin(a)*200); 
  pop();
  
  //MINOR TRIAD 1
  
  push();
  scale(-1.6,-1.6);
  line(cos(a)*120,sin(a)*120,cos(a)*100,sin(a)*100); 
  
  rotate(120);
  line(cos(a)*120,sin(a)*120,cos(a)*100,sin(a)*100); 

  rotate(120);
  line(cos(a)*120,sin(a)*120,cos(a)*100,sin(a)*100); 
  pop();
  
    
  //TEXT
  push();
  if(toggle===true) {  
  scale(1.5,1.5)
  noStroke();
  fill(225);
  textAlign(CENTER);
  text("Click to toggle tracing mode",0,0);}
  pop();
  
}
function mousePressed() {if(toggle===false) {toggle=true; c=0;} else{toggle=false; c=0; background(45);}}

