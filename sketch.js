var path,boy,cash,Diamonds,jewllery,sword,coins,BoyImage,GameImage,GameImage2,GameImage,GameImagestart,GameOver,Specialgift
var
pathImg,boyImg,cashImg,DiamondsImg,jewlleryImg,swordImg,coinsImg,BoyImageImg,GameImageImg,GameImage2Img,GameImageImg,GameImagestartImg,GameOverImg,SpecialgiftImg
var treasureCollection = 0;
//Game States
var PLAY=1;
var END=0;
var gameState=1;
var Edges=1;
function preload(){
backgroundImg=loadImage("Background.jpg")
boyImg=loadImage("BoyImage.jpg")
cashImg=loadImage("cash.png")
diamondsImg=loadImage("diamonds.png")
jewlleryImg=loadImage("jwell.png")
coinsImg=loadImage("coins.jpg")
gameImageImg=loadImage("GameImage.jpg")
gameImagestartImg=loadImage("GameImagestart.jpg")
gameoverImg=loadImage("gameOver.png")
specialgiftImg=loadImage("Specialgift.jpg")
swordImg=loadImage("sword.png")
}
function setup(){
createCanvas(400,600);
//Moving background
//backGround=createSprite(200,200)
//backGround.addImage(backgroundImg)
//backGround.velocityY=4;

//creating boy running
boy=createSprite(70,580,20,20)
boy.addAnimation("boyImage",boyImg);
boy.scale=0.08

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}
function draw(){
    if(gameState===PLAY)
    boy.x=World.mouseX;

    edges=createEdgeSprites();
    boy.collide(edges);
    //if(backGround.y>400){
       // backGround.y=height/2
    }
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
   
    if(cashG.isTouching(boy)){
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;
    }
    else if(diamondsG.isTouching(boy)){
        diamondsG.destroyEach();
        treasureCollection=treasureCollection+100;
    }
    else if(jwelleryG.isTouching(boy)){
        jwelleryG.destroyEach();
        treasureCollection=treasureCollection+150;
    }
    else if(swordGroup.isTouching(boy)){
        swordGroup.destroyEach();
        treasureCollection=treasureCollection+150;
    }else{
    if(swordGroup.isTouching(boy)){
    gameState=END;

    boy.addAnimation("Runner",endImg);
    boy.x=200;
    boy.y=300;boy.scale=0.6;

    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();

     cashG.setVelocityYEach(0);
     diamondsG.setVelocityYEach(0);
     jwelleryG.setVelocityYEach(0);
     swordGrouo.setVelocityYEach(0);
    }
 }



     
    drawSprites();   
    textSize(20);
    fill(255);
    text("Treasure:"+ treasureCollection,150,30);
} 
function createCash() {
    if (frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
    }
  }
  function createDiamonds() {
    if (World.frameCount % 320 == 0) {
    var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale=0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
  }
  }
  function createJwellery() {
    if (World.frameCount % 410 == 0) {
    var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
    jwellery.addImage(jewlleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
    }
  }
  function createSword(){
    if (World.frameCount % 530 == 0) {
    var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
    }
  } 
                                                                                                                                           