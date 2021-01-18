var garden,gardenImg;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4;
var cat,catImg1,catImg2,catImg3,catImg4;

function preload() {
    //load the images here

    gardenImg =loadImage("garden.png");

    jerryImg1 =loadImage("jerryOne.png");
    jerryImg2 =loadImage("jerryTwo.png");
    jerryImg3 =loadImage("jerryThree.png");
    jerryImg4 =loadImage("jerryFour.png");
    
    catImg1 =loadAnimation("tomOne.png");
    catImg2 =loadAnimation("tomTwo.png");
    catImg3 =loadAnimation("tomThree.png");
    catImg4 =loadAnimation("tomFour.png");

}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here

    var garden =createSprite(500,500);

    var jerry =createSprite(200,100,20,50);
    var cat =createSprite(400,100,20,50);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg1);
        cat.changeAnimation("catRunning");
    }

    text(mouseX +','+ mouseY,10,45);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
      cat.addAnimation("catLastImage",catImg3);
      cat.changeAnimation("catLastImage")
    }


}

