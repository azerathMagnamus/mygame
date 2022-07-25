// random movements
let t;
function gravity(a, b) {
  if (rectCollide(a, b)) {
    a.y = 0;
  }
}

function movepaddle(a) {
  if (a.y >= cnv.height - a.h) {
    console.log("noo");
    a.g = a.g * -1;
  } else if (a.y <= 0) {
    a.g = a.g * -1;
  }
  a.y += a.g;
}
// random movements
function ranmov(a) {
  if (a.x + a.w <= 0 || a.x + a.w >= cnv.width) {
    a.speedx = -a.speedx;
  } else if (a.y + a.h <= 0 || a.y + a.h >= cnv.height) {
    a.speedy = -a.speedy;
  }

  a.x += a.speedx;
  a.y += a.speedy;
}

function Score() {
  if (t === 0) {
    back.pause();
    voice.play();
    state = "gameover";
  }
}
let f;
function cold(a) {
  if (rectCollide(a, paddle) === true) {
    console.log("pizza");
    f = "false";
    a.speedx = -a.speedx;
    a.speedy = -a.speedy;
  } else if (a.x <= 0 && rectCollide(a, paddle) === false) {
    S = S - 0.2;
  }
}
function Start() {
  backround("lightpink");
  ctx.fillStyle = "black";

  // diplay Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "darkblue";
  ctx.fillText("Choose Diffuculty", 150, 285);
}

function running() {
  most();
}

function Over() {
  gameoverlook();
  setTimeout(refresh, 1500);
}

function most() {
  t = Math.floor(S);
  backround("lightpink");
  ctx.fillStyle = "black";
  ctx.fillText("Pong Game", 65, 35);
  ctx.fillText("Score:" + t, 25, cnv.height - 15);
  fill("green");
  rect(ball.x, ball.y, ball.w, ball.h, "fill");

  fill("blue");
  rect(paddle.x, paddle.y, paddle.h, paddle.w, "fill");
  cold(ball);

  ranmov(ball);

  Score();
}

function gameoverlook() {
  backround("black");

  ctx.font = "90px chiller";
  ctx.fillStyle = "darkred";
  ctx.fillText("Game over", 150, 285);
}

function refresh() {
  state = "start";
  S = 10;
  paddle = {
    x: 15,
    y: 1,
    w: 100,
    h: 20,
    g: 0.4,
  };

  ball = {
    x: 200,
    y: 200,
    h: 17,
    w: 17,
    speedx: 9,
    speedy: 3,
  };
}
