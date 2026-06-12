let face1;
let face2;
let face3;

let sun;
let moon;
let star;
let coffee;

let font;

let titleAlpha = 255;

let started = false;

let clouds = [];

function preload(){

  face1 = loadImage("data/face1.png");
  face2 = loadImage("data/face2.png");
  face3 = loadImage("data/face3.png");

  sun = loadImage("data/sun.png");
  moon = loadImage("data/moon.png");
  star = loadImage("data/star.png");
  coffee = loadImage("data/coffee.png");

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

  for(let i = 0; i < 12; i++){

    clouds.push({

      x: random(width),

      y: random(height * 0.6),

      size: random(40,100),

      speed: random(0.2,0.8)

    });

  }

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


  // ---------- FADE TITLE ----------
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


  // ---------- STATE ----------
  let state = 1;

  if(mouseX < width/3){

    state = 0;

  }

  else if(mouseX > width*2/3){

    state = 2;

  }


  // ---------- CLOUDS ----------
  for(let c of clouds){

    c.x += c.speed;

    if(c.x > width + 100){

      c.x = -100;

    }

    drawCloud(
      c.x,
      c.y,
      c.size
    );

  }


  // ---------- ROUTINES ----------
  if(state === 0){

    image(
      sun,
      width * 0.18,
      height * 0.25,
      140,
      140
    );

    image(
      coffee,
      width * 0.22,
      height * 0.75,
      110,
      110
    );

  }


  // ---------- BALANCE ----------
  if(state === 1){

    drawCloud(
      width * 0.25,
      height * 0.25,
      90
    );

    drawCloud(
      width * 0.75,
      height * 0.3,
      80
    );

  }


  // ---------- DREAMS ----------
  if(state === 2){

    image(
      moon,
      width * 0.82,
      height * 0.25,
      140,
      140
    );

    image(
      star,
      width * 0.72,
      height * 0.18,
      70,
      70
    );

    image(
      star,
      width * 0.88,
      height * 0.35,
      60,
      60
    );

    image(
      star,
      width * 0.78,
      height * 0.48,
      50,
      50
    );

  }


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

      "move left / centre / right",

      width/2,
      height - 60

    );

  }

}


function drawCloud(x,y,s){

  noStroke();

  fill(255,180);

  ellipse(x,y,s);

  ellipse(
    x + s * 0.4,
    y,
    s * 0.8
  );

  ellipse(
    x - s * 0.4,
    y,
    s * 0.8
  );

  ellipse(
    x,
    y - s * 0.25,
    s * 0.7
  );

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


// Original sketch by Karen ann Donnachie & Andy Simionato
// Modified and expanded for Creative Coding Assignment Final Project
