var starImg,bgImg;
var star, starBody;
var fairy, fairyImage, fairysound;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fairyImage = loadImage("images/fairyImage1.png", "images/fairyImage2.png");
    fairysound = loadSound("sound/JoyMusic.mp3");
	

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairysound.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(130, 500);
	fairy.addImage(fairyImage);
	fairy.scale = 0.2;
	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  fairy.x=fairy.position.x;
  fairy.y=fairy.position.y;

  //write code to stop star in the hand of fairy
  if(starBody.position.y>450)
  {
	  
    star.setVelocity = 0;
	fairy.setVelocity = 0;
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === LEFT_ARROW){
      fairy.x = fairy.position.x - 20;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.position.x + 20;
	  }
	
}


