cnv = document.getElementById("mycanvas");
ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

let mario = document.createElement("img");
mario.src = "img/rsz_mario1.jpg";

let voice = document.createElement("audio");
voice.src = "audio/ova.m4a";

let back = document.createElement("audio");
back.src = "audio/pika.wav";
// making diffuclty choices
easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");
background = "black";

mouseIsPressed = false;
let S;
let state;
let paddle;

let ball;
refresh();
requestAnimationFrame(draw);

// Main loop

function draw() {
  if (state === "start") {
    Start();
  } else if (state === "gameon") {
    back.play();
    running();
  } else if (state === "gameover") {
    Over();
  }

  requestAnimationFrame(draw);
}

easy.addEventListener("click", handle);
medium.addEventListener("click", handlem);
hard.addEventListener("click", handleh);
document.addEventListener("mouseup", handle2);

document.addEventListener("keydown", keys);

function handle() {
  mouseIsPressed = true;
  if (state === "start") {
    level = "easy";
    state = "gameon";
  }
}
function handlem() {
  mouseIsPressed = true;
  if (state === "start") {
    level = "medium";
    v();
    state = "gameon";
  }
}
function handleh() {
  console.log("handle");
  mouseIsPressed = true;
  if (state === "start") {
    level = "hard";
    v();
    state = "gameon";
  }
}

function handle2() {}
// handles level diffuclty
function v() {
  if (level === "medium") {
    ball.speedx = ball.speedx * 1.4;
    ball.speedy = ball.speedy * 1.4;
  }
  if (level === "hard") {
    ball.speedx = ball.speedx * 1.8;
    ball.speedy = ball.speedy * 1.8;
  }
}

function keys(cake) {
  if (cake.keyCode === 38) {
    paddle.y -= 5;
  } else if (cake.keyCode === 40) {
    paddle.y += 5;
  }
}
