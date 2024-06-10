// Define a função PowerUp.
function PowerUp() {
  // Obtém uma instância de GameUI.
  var gameUI = GameUI.getInstance();

  // Cria um elemento de imagem para representar o power-up e define sua origem.
  var element = new Image();
  element.src = 'images/powerups.png';

  // Variáveis para armazenar as propriedades do power-up.
  this.type; // Tipo do power-up.
  this.x; // Posição horizontal do power-up.
  this.y; // Posição vertical do power-up.
  this.velX = 2; // Velocidade horizontal do power-up.
  this.velY = 0; // Velocidade vertical do power-up.
  this.grounded = false; // Indica se o power-up está no chão.
  this.sX; // Posição horizontal da sprite do power-up.
  this.sY = 0; // Posição vertical da sprite do power-up.
  this.width = 32; // Largura do power-up.
  this.height = 32; // Altura do power-up.

  var that = this;

  // Define um método para criar um power-up cogumelo.
  this.mushroom = function(x, y) {
    that.x = x; // Define a posição horizontal do cogumelo.
    that.y = y - that.height; // Define a posição vertical do cogumelo ajustando para ficar no chão.
    that.type = 30; // Define o tipo do power-up como cogumelo.
    that.sX = 0; // Define a posição horizontal da sprite do cogumelo.
  };

  // Define um método para criar um power-up flor.
  this.flower = function(x, y) {
    that.x = x; // Define a posição horizontal da flor.
    that.y = y - that.height; // Define a posição vertical da flor ajustando para ficar no chão.
    that.type = 31; // Define o tipo do power-up como flor.
    that.sX = 32; // Define a posição horizontal da sprite da flor.
  };

  // Método para desenhar o power-up no canvas.
  this.draw = function() {
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
  };

  // Método para atualizar a posição do power-up.
  this.update = function() {
    // Se o power-up for um cogumelo, aplica a gravidade.
    if (that.type == 30) {
      var gravity = 0.2;

      // Se o power-up estiver no chão, sua velocidade vertical é 0.
      if (that.grounded) {
        that.velY = 0;
      }

      // Adiciona a gravidade à velocidade vertical do power-up.
      that.velY += gravity;

      // Atualiza as posições horizontal e vertical do power-up.
      that.x += that.velX;
      that.y += that.velY;
    }
  };
}