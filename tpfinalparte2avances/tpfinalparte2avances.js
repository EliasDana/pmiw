let juego;
let framesPaulino = [];
let imagenesTroncos = [];
let barraEnergia;

function preload() {
  fondoRio = loadImage("data/fondoRio.png");
  barraEnergia = loadImage("data/barraEnergia.png");
  
  for (let i = 0; i < 8; i++) {
    framesPaulino[i] = loadImage("data/paulino" + (i + 1) + ".png");
  }
  
  for (let i = 0; i < 5; i++) {
    imagenesTroncos[i] = loadImage("data/tronco" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
  juego = new Juego();
}

function draw() {
  background(40);
  juego.dibujar();
  juego.mover();
}
