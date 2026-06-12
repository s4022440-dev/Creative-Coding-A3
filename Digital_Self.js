let face1;
let face2;
let face3;

let font;

let titleAlpha = 255;

let started = false;

function preload(){

  face1 = loadImage("data/face1.png");
  face2 = loadImage("data/face2.png");
  face3 = loadImage("data/face3.png");

  font = loadFont(
    "data/comic.woff"
  );

}

function setup(){

  createCanvas(
    windowWidth,
    windowHeight
  );

  imageMode(CENTER);

  textAlign(CENTER,CENTER);

}

function draw(){

  background(245);


  // ---------- TITLE ----------
  if(!started){

    fill(
      35,
      53,
      43,
      titleAlpha
    );

    textFont(font);

    textSize(42);

    text(

      "BETWEEN DREAMS\nAND ROUTINES",

      width/2,
      height/2 - 40

    );


    textSize(18);

    fill(
      35,
      53,
      43,
      titleAlpha * 0.7
    );

    text(

      "move to explore",

      width/2,
      height/2 + 80

    );

  }


  // ---------- FADE ----------
  if(started){

    titleAlpha = max(
      0,
      titleAlpha - 3
    );

  }


  // ---------- CHARACTER ----------
  let currentFace;


  if(mouseX < width/3){

    currentFace = face1;

  }

  else if(mouseX < width*2/3){

    currentFace = face2;

  }

  else{

    currentFace = face3;

  }


  let faceSize = min(
    width,
    height
  ) * 0.35;


  tint(
    255,
    255 - titleAlpha
  );

  image(

    currentFace,

    width/2,
    height/2,

    faceSize,
    faceSize

  );

  noTint();


  // ---------- GUIDE ----------
  if(started){

    fill(
      35,
      53,
      43,
      100
    );

    textSize(14);

    text(

      "move left / center / right",

      width/2,
      height - 60

    );

  }

}


function mouseMoved(){

  started = true;

}


function windowResized(){

  resizeCanvas(
    windowWidth,
    windowHeight
  );

}
