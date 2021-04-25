const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let center = { x: width / 2, y: height / 2 };
const orbitColor = 'rgba(100,100,100,0.1)';

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = window.innerWidth;
  height = window.innerHeight;

  center = { x: width / 2, y: height / 2 };
};

let i = 0;
(function draw() {
  i %= 360;
  
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, width, height);
  
  ctx.translate(center.x, center.y);
  ctx.save();
  
  // Sol
  ctx.fillStyle = 'yellow';
  fillCircle(0, 0, 10);
  
  ctx.rotate(Math.PI / 180 * (i * 8));
  
  // Mercurio
  ctx.fillStyle = 'gray';
  ctx.strokeStyle = orbitColor;
  strokeCircle(0, 0, 87, 0);
  fillCircle(0, -87, 2.5, 0);
  
  ctx.restore();
  ctx.save();
  ctx.rotate(Math.PI / 180 * (i * 3));
  
  // Venus
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = orbitColor;
  strokeCircle(0, 0, 162);
  fillCircle(0, -162, 6);
  
  ctx.restore();
  ctx.save();
  ctx.rotate(Math.PI / 180 * (i * 2));
  
  // Terra
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = orbitColor;
  strokeCircle(0, 0, 224);
  fillCircle(0, -224, 6);
  
  ctx.restore();
  ctx.rotate(Math.PI / 180 * i);
  
  // Marte
  ctx.fillStyle = 'tomato';
  ctx.strokeStyle = orbitColor;
  strokeCircle(0, 0, 342);
  fillCircle(0, -342, 3.5);
  
  ctx.restore();
  
  i++;
  
  requestAnimationFrame(draw);
}) ();

function fillCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function strokeCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}