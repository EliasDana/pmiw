//TPFINALPARTE2
// Alejandro del Nogal 125564/4
// Elias Dana 125563/3
// comision 1
// url

let framesPaulino = [];
let imagenesTroncos = [];
let fondoRio;
let barraEnergia;
let pantallaInicio;
let pantallaInstrucciones;
let pantallaCreditos;
let pantallaDerrota;
let pantallaVictoria;
let pantallas;
let miTipografia;
let sonidoRio;

function preload() {
  fondoRio = loadImage("data/fondoRio.png");
  barraEnergia = loadImage("data/barraEnergia.png");
  pantallaInicio = loadImage("data/inicio.png");
  pantallaInstrucciones = loadImage("data/instrucciones.png");
  pantallaCreditos = loadImage("data/creditos.png");
  pantallaDerrota = loadImage("data/derrota.png");
  pantallaVictoria = loadImage("data/victoria.png");
  miTipografia = loadFont("data/Redaction10-Regular.ttf");
  sonidoRio = loadSound("data/sonidoRio.mp3");

  for (let i = 0; i < 8; i++) {
    framesPaulino[i] = loadImage("data/paulino" + (i + 1) + ".png");
  }

  for (let i = 0; i < 5; i++) {
    imagenesTroncos[i] = loadImage("data/tronco" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
  pantallas = new Pantallas();
}

function draw() {
  pantallas.actualizar();
}

function mousePressed() {
  pantallas.click(mouseX, mouseY);
}
