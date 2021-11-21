canvas = document.getElementById("myCanvas"); 
ctx=canvas.getcontext("2d"); 
var nasamarsarray=["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];
random_number=Math.floor(Math.random()*4);
 
 var roverwidth=100;
 var roverheight=90;
 
 background_image=nasamarsarray[random_number];
 rover_img="rover.png"; 
rover_x=10; 
rover_y=10;
 function add(){ background_imgT=new Image();
 background_imgT.onload=uploadBackground; 
background_imgT.src=background_image;
 rover_imgTag = new Image();
 rover_imgTag.onload = uploadrover;
 rover_imgTag.src = rover_image; }

 function uploadBackground(){ ctx.drawImage(background_imgT,0,0,canvas.width,canvas.height);
 } 
function uploadrover(){ ctx.drawImage(rover_imgTag,rover_x,rover_y,roverwidth,roverheight); } 

window.addEventListener("keydown",my_keydown);
 function my_keydown(e){ keypressed = e.keyCode;
     if(keypressed=="38") 
     { up(); } 
     if(keypressed=="40"){ down();} 
if(keypressed=="37"){ left(); } 
if(keypressed=="39"){right();}}

function up()
{
     if(rover_y>=0)
     {rover_y=-10; uploadBackground(); uploadrover();}} 
function down()
{ if(rover_y<=500){rover_y=+10; uploadBackground(); uploadrover();}} 

function left()
{ if(rover_x>=0){rover_x=-10; uploadBackground(); uploadrover();}} 

function right()
{ if(rover_x<=700){rover_x=+10; uploadBackground(); uploadrover();}}