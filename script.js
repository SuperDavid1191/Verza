// Floating circles animation
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let circles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// Create circles
for (let i = 0; i < 50; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 8 + 2,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 255, 136, 0.4)';
    ctx.fill();
  });
}

function update() {
  circles.forEach(c => {
    c.x += c.dx;
    c.y += c.dy;

    if (c.x + c.r > canvas.width || c.x - c.r < 0) c.dx = -c.dx;
    if (c.y + c.r > canvas.height || c.y - c.r < 0) c.dy = -c.dy;
  });
}

function animate() {
  draw();
  update();
  requestAnimationFrame(animate);
}
animate();

// Routing function
function goTo(page) {
  alert(`You clicked: ${page}. This will navigate to the ${page} page.`);
  // You could later replace alert with window.location = 'host.html' etc.
}
