var floor1,floor2,floor3,floor4,floor5;
var door1,door2,door3,door4,door5,gold,pc,cpu,gold;
var player,usb,usbI,cpu,cpuI,pc,pcI,invMark,stopper;
var border1,border2,border3,border4;
var laser1,laser2,laser3,laser4,laser5,laser6,laser7,box1,box2,bomb,mark;
var bombImg,doorImg,goldImg,cashImg,expoImg,boxImg,door3Img,door4Img,door5img;
var cash  = 0;
var money1,money2,money3,money4,money5,moneyImg;
var gameState = "wait"
function preload(){
   bombImg = loadImage("images/bomb.png")
    doorImg  = loadImage("images/door.png")
    goldImg = loadImage("images/gold.png")
    expoImg = loadImage("images/explotion.png")
    moneyImg = loadImage("images/cash.png")
    usbI = loadImage("images/usb.png");
    pcI = loadImage("images/pc.png")
    cpuI = loadImage("images/cpu.png")
    boxImg = loadImage("images/box.png")
    door3Img = loadImage("images/door3.png")
    door4Img = loadImage("images/door4.png")
}

function setup(){
    createCanvas(500,650);
    //player
    player = createSprite(100,100,20,20)
    //floors-
    floor1 = createSprite(60,100,750,10);
    floor1.shapeColor = "black"
    floor2 = createSprite(250,200,500,10);
    floor2.shapeColor = "black"
    floor3 = createSprite(250,320,500,10);
    floor3.shapeColor = "black"
    floor4 = createSprite(200,440,450,10);
    floor4.shapeColor = "black"
    floor5 = createSprite(250,580,500,10);
    floor5.shapeColor = "black"
    //borders
    border1 = createSprite(30,5,2000,10)
    border2 = createSprite(30,645,2000,10)
    border3 = createSprite(2,300,10,2000)
    border4 = createSprite(495,300,10,2000)
    //doors-
    door1 = createSprite(440,100,110,10)
    door1.shapeColor = "red";
    door2 = createSprite(30,150,10,90)
    door2.addImage(doorImg);
    door2.visible = false
    door2.scale = 0.15
    door3 = createSprite(470,265,60,110)
    door3.addImage(door3Img);
    door3.scale = 0.2
    door4 = createSprite(20,400,60,110)
    door4.addImage(door4Img);
    door4.scale = 0.2
    door5 = createSprite(450,440,150,10)
    door5.shapeColor = "red"
    stopper = createSprite(245,floor4.y,10,40)
    //laser
    laser1 = createSprite(251,130,10,50);
    laser1.shapeColor = "red";
    //4th floor 
    laser2 = createSprite(100,395,5,50)
    laser2.shapeColor = "green"
    laser3 = createSprite(180,360,5,50)
    laser3.shapeColor = "white"
    laser4 = createSprite(260,395,5,50)
    laser4.shapeColor = "orange"
    //3rd floor 
    laser5 = createSprite(108,265,5,75)
    laser5.shapeColor = "red";
    laser6 = createSprite(258,265,5,70)
    laser6.shapeColor = "red";
    laser7 = createSprite(395,265,5,70)
    laser7.shapeColor = "red";
    //boxes
    box1 = createSprite(Math.round(random(150,210)),180,30,30)
    box1.shapeColor = "yellow"
    //bomb
    bomb = createSprite(50,50,20,20)
    bomb.addImage(bombImg)
    bomb.scale = 0.1
    bomb.x = box1.x;
    bomb.y = box1.y - 30;
    //marker
    mark = createSprite(80,190,10,30);
    mark.shapeColor = "yellow";
    invMark = createSprite(83,415,5,40)
    invMark.visible = false
    // gold
    gold = createSprite(50,530,30,30)
    gold.addImage(goldImg)
    gold.scale = 0.09
    //pc
    usb = createSprite(330,385,30,30);
    usb.addImage(usbI)
    usb.scale = 0.1
    pc = createSprite(220,550,50,50)
    pc.addImage(pcI)
    pc.scale = 0.2
    cpu = createSprite(290,550,50,50)
    cpu.addImage(cpuI)
    cpu.scale = 0.2
    //money
    money1 = createSprite(330,120,10,10)
    money1.addImage(moneyImg);
    money1.scale = 0.05
    money2 = createSprite(125,120,10,10)
    money2.addImage(moneyImg);
    money2.scale = 0.05
    money3 = createSprite(60,260,10,10)
    money3.addImage(moneyImg);
    money3.scale = 0.05
    money4 = createSprite(320,260,10,10)
    money4.addImage(moneyImg);
    money4.scale = 0.05
    money5 = createSprite(170,260,10,10)
    money5.addImage(moneyImg);
    money5.scale = 0.05

}

function draw(){
background("blue");
console.log(mouseX,mouseY)
// text for info
if(gameState === "wait"){
  textSize(40)
  fill("white")
  text("Press Space To Start",110,50)
}
if(keyDown("SPACE")){
  laser1.velocityX = +25;
  laser2.velocityY = -3
  laser3.velocityY = +3
  laser4.velocityY = -3
  laser5.rotationSpeed = 8;
  laser6.rotationSpeed = 8;
  laser7.rotationSpeed = 8;
  gameState = "start";
}
if(gameState === "start"){

}
//collision
player.collide(box1)
player.collide(floor1)
player.collide(floor2)
player.collide(floor3)
player.collide(floor4)
player.collide(floor5)
player.collide(door1)
player.collide(door2)
player.collide(door5)
player.collide(border1)
player.collide(border2)
player.collide(border3)
player.collide(border4)
laser1.bounceOff(border3)
laser1.bounceOff(border4)
laser2.bounceOff(floor3)
laser2.bounceOff(floor4)
laser3.bounceOff(floor3)
laser3.bounceOff(floor4)
laser4.bounceOff(floor3)
laser4.bounceOff(floor4)
//visibility
border1.visible = false;
border2.visible = false;
border3.visible = false;
border4.visible = false;
//movements
if(keyDown("LEFT_ARROW")){
  player.x = player.x - 10;
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 10;
}
if(keyDown("UP_ARROW")){
  player.velocityY = -10;
}
player.velocityY += 0.5;

if(keyDown("DOWN_ARROW")){
  player.y = player.y + 10;
}
//door and player
if(player.isTouching(door1)){
  fill("red")
  textSize(20)
  text("Press O to open door",310,145)
}
if(player.isTouching(door1) && keyDown("O")){
  door1.width = 10;
  door1.height = 100
  door1.x = 440
  door1.y = 58
}
if(player.isTouching(bomb)){
  bomb.visible = false;
}
if(player.isTouching(mark)){
  fill("red")
  textSize(20)
  text("Press T to plant the bomb",210,145)
  door2.visible = true
}
if(player.isTouching(mark) && keyDown("T")){
  bomb.x = 6
  bomb.y = 160
  bomb.visible = true
}
if(bomb.isTouching(door2)){
  textSize(20)
  fill("red")
  text("Press B To Blast",255,165)
}
if(bomb.isTouching(door2) && keyDown("B")){
 bomb.addImage(expoImg);
 bomb.scale = 0.2;
 door2.x = 1000;
 bomb.visible = false 
//bomb.x = 1000;
floor2.x =  300
}
if(player.isTouching(door2) && bomb.x !== door2.x ){
  textSize(10)
  fill("red")
  text("Please blast the bomb",190,145)
  floor2.x = 250
  player.x = mark.x+20
 }
 if(player.isTouching(door3)){
  player.x = 10
  player.y = 375
  player.velocityX = 0.5
}
if(player.isTouching(invMark)){
  player.velocityX = 0
}
 if(player.isTouching(door5)){
  fill("red")
  textSize(20)
  text("Press O to open door",285,345)
}
if(player.isTouching(door5) && keyDown("O")){
door5.velocityX = -2
}
if(laser5.isTouching(stopper)){
  laser5.velocityX = 0
}
//laser and player 
 if(player.isTouching(door2)){
  player.x  =100
  player.y = 290 
}
if(laser1.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}
if(laser2.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}
if(laser3.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}
if(laser4.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}
/*if(laser5.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}
if(laser6.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}
if(laser7.isTouching(player)){
  player.x = 100
  player.y = 20
  reset();
}*/
//money and player
if(player.isTouching(money1)){
  cash = cash+1000;
  money1.x = 1000
}
if(player.isTouching(money2)){
  cash = cash+1000;
  money2.x  =1000
}
if(player.isTouching(money3)){
  cash = cash+1000;
  money3.x = 1000
}
if(player.isTouching(money4)){
  cash = cash+1000;
  money4.x = 1000
}
if(player.isTouching(money5)){
  cash = cash+1000;
  money5.x = 1000
}

drawSprites();
//texts 
fill("#00FF01")
textSize(20)
text("Cash:"+cash,30,15) 
}

//reset function 
function reset(){
  gameState = "wait"
  laser1.velocityX = 0
  laser2.velocityY = 0
  laser3.velocityY = 0
  laser4.velocityY = 0
  laser5.rotationSpeed = 0
  laser6.rotationSpeed = 0
  laser7.rotationSpeed = 0
  player.x = 100
  player.y = 20
  door1.x =  440
  door1.y = 100
  door1.width = 110
  door1.height = 10
  cash = 0
  money1.x =330
  money1.y = 120 
  money2.x = 125
  money2.y = 120
  money3.x = 60
  money3.y = 260
  money4.x = 300
  money4.y = 260
  money5.x =150
  money5.y =  265
  bomb.scale = 0.1
  bomb.x = box1.x;
  bomb.y = box1.y - 30;
  bomb.addImage(bombImg)
  bomb.visible = true
  door2.visible = false
  door2.x = 15
  door2.y = 150
  floor2.x = 250
  door5.x = 450
  door5.y = 440

}
