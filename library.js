function stroke(stroke) {
  ctx.strokeStyle = stroke;
}
function fill(fill) {
  ctx.fillStyle = fill;
}
function font(setttngs) {
  ctx.font = setttngs;
}
function rect(x, y, w, h, mode) {
  if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  } else if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  }
}
function line(x1, x2, y1, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, x2);
  ctx.lineTo(y1, y2);
  ctx.stroke();
}
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "stroke") {
    ctx.stroke();
  } else if (mode === "fill") {
    ctx.fill();
  }
}
function trinagle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}
function text(word, mode, pix, pix2) {
  if (mode === "fill") {
    ctx.fillText(word, pix, pix2);
  }
  if (mode == "stroke") {
    ctx.strokeText(word, pix, pix2);
  }
}

function eclispse(x1, y1, xr, yr, rotate, mode) {
  ctx.arc(x1, y1, xr, yr, rotate, 0, 2 * Math.PI);
  if (mode == "fill") {
    ctx.fill();
  } else if (mode == "stroke") {
    ctx.stroke();
  }
}
function image(img, x, y, w, height) {
  ctx.drawImage(img, x, y, w, height);
}
function ptInRectangle(x, y, aRect) {
  return (
    x > aRect.x && x < aRect.x + aRect.w && y > aRect.y && y < aRect.y + aRect.h
  );
}
let mouseX;
let mouseY;
let mouseIsPressed = false;
let keyPressed = {};
document.addEventListener("mousedown", () => (mouseIsPressed = true));
document.addEventListener("mouseup", () => (mouseIsPressed = false));
document.addEventListener("mousemove", mousemoveHandlerLib);
document.addEventListener("keydown", (e) => (keyPressed[e.code] = true));
document.addEventListener("keyup", (e) => (keyPressed[e.code] = false));

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
function rectCollide(rect1, rect2) {
  let le1 = rect1.x;
  let re1 = rect1.x + rect1.w;
  let te1 = rect1.y;
  let be1 = rect1.y + rect1.h;
  let le2 = rect2.x;
  let re2 = rect2.x + rect2.w;
  let te2 = rect2.y;
  let be2 = rect2.y + rect2.h;
  return le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2;
}
