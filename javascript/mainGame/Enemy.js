function Enemy() {
  var gameUI = GameUI.getInstance();

  var tickCounter = 0; // Contador para animar o inimigo
  var maxTick = 10; // Número máximo de ticks para mostrar o sprite do inimigo

  var element = new Image();
  element.src = 'images/enemies.png'; // Caminho da imagem do inimigo

  this.x; // Posição horizontal do inimigo
  this.y; // Posição vertical do inimigo
  this.velX = 1; // Velocidade horizontal do inimigo
  this.velY = 0; // Velocidade vertical do inimigo
  this.grounded = false; // Indica se o inimigo está no chão
  this.type; // Tipo do inimigo
  this.state; // Estado do inimigo (vivo, morto, morto por bala)

  this.sX; // Posição X do sprite do inimigo
  this.sY = 0; // Posição Y do sprite do inimigo
  this.width = 32; // Largura do sprite do inimigo
  this.height = 32; // Altura do sprite do inimigo

  this.frame = 0; // Frame atual do inimigo

  var that = this; // Referência para o objeto Enemy

  // Define o inimigo como um Goomba
  this.goomba = function() {
    this.type = 20; // Tipo do Goomba
    that.sX = 0; // Posição X do sprite do Goomba
  };

  // Desenha o inimigo na tela
  this.draw = function() {
    that.sX = that.width * that.frame; // Define a posição X do sprite do inimigo
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height); // Desenha o sprite do inimigo na tela
  };

  // Atualiza o estado e a posição do inimigo
  this.update = function() {
    var gravity = 0.2; // Gravidade aplicada ao inimigo

    if (that.grounded) {
      that.velY = 0; // Se estiver no chão, a velocidade vertical é zero
    }

    if (that.state == 'dead') {
      that.frame = 2; // Goomba esmagado

      tickCounter++;
      if (tickCounter >= 60) {
        that.frame = 4; // Após 60 ticks, muda para o estado esmagado no chão
      }
    } else if (that.state == 'deadFromBullet') {
      // Goomba caindo
      that.frame = 3;
      that.velY += gravity;
      that.y += that.velY;
    } else {
      // Animação do inimigo quando não está morto
      that.velY += gravity;
      that.x += that.velX;
      that.y += that.velY;

      // Para animar o inimigo
      tickCounter += 1;

      if (tickCounter > maxTick) {
        tickCounter = 0;
        if (that.frame == 0) {
          that.frame = 1; // Alterna entre os frames para animação
        } else {
          that.frame = 0;
        }
      }
    }
  };
}