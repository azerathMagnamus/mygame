function randomint(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
function randnet(array) {
  return array[randomint(0, array.length)];
}
function maker(ar) {
  ar.split(",");
  return ar;
}
function randrgb() {
  r = randomint(0, 256);
  g = randomint(0, 256);
  b = randomint(0, 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
