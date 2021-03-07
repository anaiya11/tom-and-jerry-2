var tomSitting, jerryCheese, tomStanding, tomWalking, jerryNothing, jerrySilly, jerryLooking, tom, jerry, garden, gardenImg

function preload() {
    //load the images here
    tomSitting = loadAnimation("images/cat1.png")
tomWalking = loadAnimation("images/cat2.png", "images/cat3.png")
tomStanding = loadAnimation("images/cat4.png")
jerryCheese = loadAnimation ("images/mouse1.png")
jerrySilly = loadAnimation("images/mouse2.png", "images/mouse3.png")
jerryLooking = loadAnimation("images/mouse4.png")
gardenImg = loadImage("images/garden.png") 
} 

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite (900,600,20,20)
    tom.addAnimation("tomSitting", tomSitting)
    tom.scale = 0.2
    jerry = createSprite(200,600,20,20)
    jerry.addAnimation("jerryCheese", jerryCheese)
    jerry.scale = 0.2
    jerry2 = createSprite(350,600,20,20)
    jerry2.visible = false 
    


}

function draw() {
    keyPressed();
   


    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0
        jerry.addAnimation("jerryLooking", jerryLooking)
        jerry.changeAnimation("jerryLooking")
        tom.addAnimation("tomStanding", tomStanding)
        tom.changeAnimation("tomStanding")
        tom.x = 350
        tom.y = 600
    }
    

    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomWalking",tomWalking)
        tom.changeAnimation("tomWalking")
        text(mouseX + ',' + mouseY, 200, 600);
        jerry.addAnimation("jerrySilly", jerrySilly)
        jerry.changeAnimation("jerrySilly")
    }
    
    
    
  //For moving and changing animation write code here


}
