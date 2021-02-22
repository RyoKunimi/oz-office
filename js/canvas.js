var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var x, y, relX, relY, objX, objY;
var objWidth, objHeight;
var dragging = false;

function init() {
  objWidth = 50;
  objHeight = 50;
  objX = canvas.width / 2 - objWidth / 2;
  objY = canvas.height / 2 - objHeight / 2;
  // 不要の見込：初期化処理
  //ctx.fillStyle = "white";
  drawRect();
}

function onDown(e) {
  var offsetX = canvas.getBoundingClientRect().left;
  var offsetY = canvas.getBoundingClientRect().top;

  x = e.clientX - offsetX;
  y = e.clientY - offsetY;

  if (objX < x && (objX + objWidth) > x && objY < y && (objY + objHeight) > y) {
    dragging = true;
    relX = objX - x;
    relY = objY - y;
  }
}

function onMove(e) {
  var offsetX = canvas.getBoundingClientRect().left;
  var offsetY = canvas.getBoundingClientRect().top;

  x = e.clientX - offsetX;
  y = e.clientY - offsetY;

  if (dragging) {
    objX = x + relX;
    objY = y + relY;
    drawRect();
  }
}

function onUp(e) {
  dragging = false;
}

function drawRect() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(objX, objY, objWidth, objHeight);
}
var image = new Image();
image.src = 'https://s3.ap-northeast-1.amazonaws.com/ovice.in/upload/background/No.53_workspace__luxury.jpg';
image.addEventListener('onLoad', function() {
    context.drawImage(image, 0, 0, 150, 100);
}, false);
canvas.addEventListener('mousedown', onDown, false);
canvas.addEventListener('mousemove', onMove, false);
canvas.addEventListener('mouseup', onUp, false);

function switchMenu(){
  alert('こんにちは')
}