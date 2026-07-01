//==================================================
// 終焉ノ黙示録 - Eclipse Chronicle -
// Part 1-1
// sketch.js
//==================================================

const WIDTH = 1280;
const HEIGHT = 720;

let scene = "TITLE";
let frameCounter = 0;

let stars = [];
let particles = [];

let dialogIndex = 0;
let textLength = 0;
let textTimer = 0;
let textSpeed = 2;

let fade = 255;
let fadeDir = -1;

let saveData = {
    loop:0,
    route:0,
    endings:[],
    chapter:0
};

let story = [

"西暦2099年。",

"人類は滅亡した。",

"……そう記録されている。",

"だが、その歴史は偽りだった。",

"世界を滅ぼした者の名は",

"歴史から消された。",

"コードネーム",

"『 Ω 』",

"何度目だ。",

"この夢を見るのは。",

"『思い出せ。』",

"『世界はまだ終わっていない。』",

"『終わらせたのは君だ。』",

"『今回こそ、選べ。』"

];

function setup(){

createCanvas(WIDTH,HEIGHT);

textFont("monospace");

for(let i=0;i<300;i++){

stars.push({

x:random(width),
y:random(height),
size:random(1,3),
speed:random(.2,.9),
alpha:random(100,255)

});

}

for(let i=0;i<80;i++){

particles.push({

x:random(width),
y:random(height),
vx:random(-.3,.3),
vy:random(-.3,.3),
size:random(40,150),
alpha:random(5,30)

});

}

}

function draw(){

frameCounter++;

background(0);

switch(scene){

case "TITLE":

drawStars();

drawTitleBackground();

drawTitle();

break;

case "OPENING":

drawStars();

drawOpening();

break;

case "WARNING":

drawWarning();

break;

}

drawFade();

}

function drawStars(){

noStroke();

for(let s of stars){

fill(255,255,255,s.alpha);

circle(s.x,s.y,s.size);

s.y+=s.speed;

if(s.y>height){

s.y=0;

s.x=random(width);

}

}

}

function drawTitleBackground(){

for(let p of particles){

fill(120,0,255,p.alpha);

circle(p.x,p.y,p.size);

p.x+=p.vx;

p.y+=p.vy;

if(p.x<0)p.x=width;
if(p.x>width)p.x=0;
if(p.y<0)p.y=height;
if(p.y>height)p.y=0;

}

push();

translate(width/2,height/2);

rotate(frameCounter*.003);

stroke(120,0,255,80);

strokeWeight(2);

noFill();

ellipse(0,0,380);

rotate(-frameCounter*.006);

ellipse(0,0,500);

rotate(frameCounter*.009);

ellipse(0,0,620);

pop();

}

function drawTitle(){

textAlign(CENTER,CENTER);

fill(255);

textSize(72);

text("終焉ノ黙示録",width/2,180);

fill(180,0,255);

textSize(28);

text("ECLIPSE CHRONICLE",width/2,250);

fill(170);

textSize(18);

text("Code Name : Ω",width/2,320);

if(frameCounter%60<30){

fill(255);

textSize(24);

text("CLICK TO START",width/2,560);

}

fill(120);

textSize(14);

text("Project Eclipse",width/2,690);

}

function drawOpening(){

fill(255);

textAlign(CENTER,CENTER);

textSize(34);

textTimer++;

if(textTimer>=textSpeed){

textTimer=0;

if(textLength<story[dialogIndex].length){

textLength++;

}

}

let str=story[dialogIndex].substring(0,textLength);

text(str,width/2,height/2);

if(textLength>=story[dialogIndex].length){

fill(180);

textSize(18);

if(frameCounter%60<30){

text("CLICK",width/2,640);

}

}

}

function drawWarning(){

background(0);

if(frameCounter%20<10){

background(40,0,0);

}

fill(255,0,0);

textAlign(CENTER);

textSize(84);

text("WARNING",width/2,120);

fill(255);

textSize(30);

text("SYSTEM BOOT",width/2,230);

text("Synchronizing Memory...",width/2,290);

text("Loading Archive...",width/2,340);

fill(random(180,255),0,0);

textSize(42);

text("ERROR",width/2,470);

text("ERROR",width/2,520);

text("ERROR",width/2,570);

fill(255,255,255,40+sin(frameCounter*.3)*40);

rect(0,0,width,height);

}

function drawFade(){

if(fadeDir==1){

fade-=8;

if(fade<=0){

fade=0;

fadeDir=0;

}

}

if(fadeDir==-1){

fade+=8;

if(fade>=255){

fade=255;

fadeDir=0;

}

}

if(fade>0){

noStroke();

fill(0,fade);

rect(0,0,width,height);

}

}

function mousePressed(){

if(scene=="TITLE"){

scene="OPENING";

dialogIndex=0;

textLength=0;

textTimer=0;

fade=255;

fadeDir=1;

return;

}

if(scene=="OPENING"){

if(textLength<story[dialogIndex].length){

textLength=story[dialogIndex].length;

return;

}

dialogIndex++;

textLength=0;

textTimer=0;

if(dialogIndex>=story.length){

scene="WARNING";

}

return;

}

if(scene=="WARNING"){

// Part1-2へ続く

}

}
