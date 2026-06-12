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

let bgColor;
let targetColor;

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

  bgColor = color(245);
  targetColor = color(245);

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

  // ---------- BACKGROUND ----------
  if(mouseX < width/3){

    targetColor = color(
      248,
      236,
      200
    );

  }

  else if(mouseX > width*2/3){

    targetColor = color(
      60,
      45,
      100
    );

  }

  else{

    targetColor = color(245);

  }

  bgColor = lerpColor(
    bgColor,
    targetColor,
    0.03
  );

  background(bgColor);


  // ---------- TEXT COLOUR ----------
  let textCol;

  if(mouseX > width*2/3){

    textCol = color(255);

  }

  else{

    textCol = color(
      35,
      53,
      43
    );

  }


  // ---------- TITLE ----------
  if(!started){

    fill(
      red(textCol),
      green(textCol),
      blue(textCol),
      titleAlpha
    );

    textFont(font);

    textSize(44);

    text(

      "BETWEEN DREAMS\nAND ROUTINES",

      width/2,
      height/2 - 50

    );

    textSize(18);

    fill(
      red(textCol),
      green(textCol),
      blue(textCol),
      titleAlpha * 0.7
    );

    text(

      "move to explore",

      width/2,
      height/2 + 90

    );

  }


  // ---------- FADE TITLE ----------
  if(started){

    titleAlpha = max(
      0,
      titleAlpha - 3
    );

  }


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


  // ---------- CHARACTER ----------
  let currentFace;

  if(state === 0){

    currentFace = face1;

  }

  else if(state === 1){

    currentFace = face2;

  }

  else{

    currentFace = face3;

  }


  let targetH = height * 0.6;

  let aspect =
  currentFace.width /
  currentFace.height;

  let targetW =
  targetH * aspect;


  image(

    currentFace,

    width/2,
    height/2 + 20,

    targetW,
    targetH

  );


  // ---------- ROUTINES ----------
  if(state === 0){

    push();

translate(
  width * 0.32,
  height * 0.22
);

rotate(
  sin(frameCount * 0.02) * 0.08
);

image(
  sun,
  0,
  0,
  240,
  240
);

pop();

    let coffeeH = 180;

let coffeeW =
coffee.width /
coffee.height *
coffeeH;

image(
  coffee,
  width * 0.38,
  height * 0.72,
  coffeeW,
  coffeeH
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

      width * 0.8,
      height * 0.2 +
      sin(frameCount * 0.02) * 10,
      260,
      260

    );

    image(
  star,
  width * 0.72,
  height * 0.15,
  120,
  120
);

image(
  star,
  width * 0.90,
  height * 0.30,
  100,
  100
);

image(
  star,
  width * 0.78,
  height * 0.48,
  90,
  90
);

  }


  // ---------- GUIDE ----------
  if(started){

    fill(

      red(textCol),
      green(textCol),
      blue(textCol),

      120

    );

    textSize(24);

    text(

      "move left / centre / right",

      width/2,
      height - 40

    );

  }

}


function drawCloud(x,y,s){

  noStroke();

  if(mouseX > width*2/3){

    fill(
      230,
      220,
      255,
      120
    );

  }

  else{

    fill(
      255,
      245,
      220,
      180
    );

  }

  ellipse(x,y,s);

  ellipse(
    x+s*0.4,
    y,
    s*0.8
  );

  ellipse(
    x-s*0.4,
    y,
    s*0.8
  );

  ellipse(
    x,
    y-s*0.25,
    s*0.7
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

// Between Dreams and Routines is an interactive self-portrait created with p5.js. The project explores the relationship between everyday routines and imagined inner worlds through a series of responsive visual states. As the viewer moves the mouse across the screen, different expressions, colours, and symbolic objects are revealed. Warm daytime elements such as the sun and coffee represent daily habits and productivity, while the moon, stars, and darker colours evoke dreams, reflection, and imagination.
//The project combines illustration, animation, typography, and interaction design to create a playful yet personal digital portrait. Visual transitions, moving clouds, colour shifts, and changing character expressions encourage viewers to navigate between contrasting emotional and psychological states.
//Technologies used include p5.js, custom image assets, and typography. AI tools were used during concept development, technical troubleshooting, and iterative refinement of interaction and visual design. All coding, visual composition, asset selection, and final design decisions were completed by the author.
// Original sketch by Karen ann Donnachie & Andy Simionato
// Modified and expanded for Creative Coding Assignment Final Project
