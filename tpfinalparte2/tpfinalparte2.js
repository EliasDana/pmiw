let juego;
let framesPaulino = [];
let imagenesTroncos = [];
let barraEnergia;
let pantallaInicio;
let pantallaInstrucciones;
let pantallaCreditos;
let pantallaDerrota;
let pantallaVictoria;
let pantallas;
let miTipografia;

function preload() {
  fondoRio = loadImage("data/fondoRio.png");
  barraEnergia = loadImage("data/barraEnergia.png");
  pantallaInicio = loadImage("data/inicio.png");
  pantallaInstrucciones = loadImage("data/instrucciones.png");
  pantallaCreditos = loadImage("data/creditos.png");
  pantallaDerrota = loadImage("data/derrota.png");
  pantallaVictoria = loadImage("data/victoria.png");
  miTipografia = loadFont("data/Redaction10-Regular.ttf");
  
  
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
  pantallas = new Pantallas();
}

function draw() {

  background(40);

  if (pantallas.estado == 3) {

    juego.dibujar();
    juego.mover();

    if (juego.perdio) {
      pantallas.estado = 4;
    }

    if (juego.gano) {
      pantallas.estado = 5;
    }

  } else {

    pantallas.dibujar();

  }
}

function mousePressed() {
  pantallas.click(mouseX, mouseY);
}
