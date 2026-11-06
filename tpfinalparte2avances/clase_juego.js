class Juego {
  constructor() {
    this.escenario = new Escenario();
    this.paulino = new Paulino(framesPaulino);

    this.interfaz = new Interfaz();

    this.cantTroncos = 5;
    this.troncos = [];

    this.tiempoChoque = 0;
    this.perdio = false; 
    
    for (let i = 0; i < this.cantTroncos; i++) {
      this.troncos[i] = new Tronco();
    }
  }

  dibujar() {
  this.escenario.dibujar();
  this.paulino.dibujar();

  for (let i = 0; i < this.cantTroncos; i++) {
    this.troncos[i].dibujar();
  }

  this.interfaz.dibujar(this.paulino.energia);

  if (this.perdio) {
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER);
    textSize(45);
    text("GAME OVER", width / 2, height / 2);

    textSize(20);
    text("Paulino no logró sobrevivir", width / 2, height / 2 + 45);

    textAlign(LEFT);
  }
}

  mover() {
  if (!this.perdio) {
    this.escenario.mover();
    this.paulino.mover();
    this.paulino.animar();
    for (let i = 0; i < this.cantTroncos; i++) {
      this.troncos[i].mover();
    }

    this.detectarColisiones();

    if (this.paulino.energia <= 0) {
      this.paulino.energia = 0;
      this.perdio = true;
    }
  }
}

  detectarColisiones() {
    for (let i = 0; i < this.cantTroncos; i++) {
      if (this.troncos[i].colision(this.paulino)) {
      if (this.tiempoChoque <= 0) {
        this.paulino.energia -= 10;
      if (this.paulino.energia < 0) {
        this.paulino.energia = 0;
      }
        this.tiempoChoque = 40;
        this.troncos[i].reiniciar();
        }
      }
    }

      if (this.tiempoChoque > 0) {
        this.tiempoChoque--;
      }
   }
}
