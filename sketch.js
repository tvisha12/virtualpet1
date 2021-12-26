//Create variables here
var dog,dogimg,doging1;
var foodstock,food;
var database;

function preload()
{
	//load images here
  dogimg=loadImage("images/dogimg.png");
  dogimg1=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage(dogimg);
  dog.scale=0.2;
  foodstock=database.ref("food");
  foodstock.on("value",readstock);

}


function draw() {  
   background("purple");
   if(keyDown(UP_ARROW)){
     writestock(food);
     dog.addImage(dogimg1);
   }

  drawSprites();
  //add styles here
   fill(255,255,254);
   stroke("black");
   text("food remaining"+food,165,120);
   text("note:press up arrow to feed the puppy",165,100);

}
function readstock(data){
  food=data.val();

}
function writestock(x){
  if(x<=0){
    x=0;  
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



