function Bullet() {
  var gameUI = GameUI.getInstance();

  var element = new Image();
  element.src = 'images/bullet.png'; // Caminho da imagem da bala

  this.x; // Posição horizontal da bala
  this.y; // Posição vertical da bala
  this.velX; // Velocidade horizontal da bala
  this.velY; // Velocidade vertical da bala
  this.grounded = false; // Indica se a bala está no chão
  this.sX; // Posição X do sprite da bala
  this.sY = 0; // Posição Y do sprite da bala
  this.width = 16; // Largura do sprite da bala
  this.height = 16; // Altura do sprite da bala

  var that = this; // Referência para o objeto Bullet

  // Inicializa a bala com uma posição inicial e direção
  this.init = function(x, y, direction) {
    that.velX = 8 * direction; // Define a velocidade horizontal da bala baseada na direção
    that.velY = 0; // Define a velocidade vertical inicial da bala
    that.x = x + that.width; // Define a posição horizontal inicial da bala (considerando o tamanho da bala)
    that.y = y + 30; // Define a posição vertical inicial da bala (um pouco abaixo do Mario)
    that.type = 30; // Tipo da bala (pode ser útil em outras partes do código)
    that.sX = 0; // Define a posição X do sprite da bala
  };

  // Desenha a bala na tela
  this.draw = function() {
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height); // Desenha o sprite da bala na tela
  };

  // Atualiza a posição da bala
  this.update = function() {
    var gravity = 0.2; // Gravidade aplicada à bala

    if (that.grounded) {
      // Rebate a bala ao tocar o chão
      that.velY = -4; // Define a velocidade vertical negativa para simular um salto
      that.grounded = false; // Reseta o estado de estar no chão
    }

    that.velY += gravity; // Aplica a gravidade à velocidade vertical da bala

    that.x += that.velX; // Atualiza a posição horizontal da bala baseada na velocidade horizontal
    that.y += that.velY; // Atualiza a posição vertical da bala baseada na velocidade vertical
  };
}