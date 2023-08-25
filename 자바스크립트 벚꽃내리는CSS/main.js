const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const TOTAL = 150;
const flowerArray = [];
const flowerImg = new Image();
flowerImg.src = "https://cdn.crowdpic.net/detail-thumb/thumb_d_2585BEDB390ADAC6CEB0FF3482B0D396.png";

flowerImg.onload = () => {
  for (let i = 0; i < TOTAL; i++) {
    flowerArray.push(new Flower());
  }
  render();
};

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  flowerArray.forEach((flower) => {
    return flower.animate();
  });
  window.requestAnimationFrame(render);
}

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });

class Flower {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.w = 20 + Math.random() * 10;
    this.h = 10 + Math.random() * 10;
    this.opacity = this.w / 30;
    this.xSpeed = 2 + Math.random();
    this.ySpeed = 1 + Math.random();
    this.flip = Math.random();
    this.flipSpeed = Math.random() * 0.03;
  }
  draw() {
    if (this.y > canvas.height || this.x > canvas.width) {
      this.x = -flowerImg.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height;
      this.xSpeed = 2 + Math.random();
      this.ySpeed = 1 + Math.random();
      this.flip = Math.random();
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(flowerImg, this.x, this.y, this.w * (0.66 + Math.abs(Math.cos(this.flip)) / 3), this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 2));
  }
  animate() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.flip += this.flipSpeed;
    this.draw();
  }
}
