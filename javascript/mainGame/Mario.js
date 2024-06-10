function Mario() {
  var gameUI = GameUI.getInstance();

  this.type = 'small'; // Tipo inicial do Mario
  this.x; // Posição horizontal do Mario
  this.y; // Posição vertical do Mario
  this.width = 32; // Largura do Mario
  this.height = 44; // Altura do Mario
  this.speed = 3; // Velocidade do Mario
  this.velX = 0; // Velocidade horizontal do Mario
  this.velY = 0; // Velocidade vertical do Mario
  this.jumping = false; // Indica se o Mario está pulando
  this.grounded = false; // Indica se o Mario está no chão
  this.invulnerable = false; // Indica se o Mario está invulnerável
  this.sX = 0; // Posição X do sprite do Mario
  this.sY = 4; // Posição Y do sprite do Mario
  this.frame = 0; // Frame atual do Mario

  var that = this; // Referência para o objeto Mario

  // Inicializa o Mario
  this.init = function() {
    that.x = 10; // Define a posição horizontal inicial do Mario
    that.y = gameUI.getHeight() - 40 - 40; // Define a posição vertical inicial do Mario

    marioSprite = new Image(); // Cria uma nova imagem para os sprites do Mario
    marioSprite.src = 'images/mario-sprites.png'; // Define o caminho da imagem dos sprites do Mario
  };

  // Desenha o Mario na tela
  this.draw = function() {
    that.sX = that.width * that.frame; // Define a posição X do sprite do Mario
    gameUI.draw(marioSprite, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height); // Desenha o sprite do Mario na tela
  };

  // Verifica o tipo atual do Mario e ajusta suas propriedades
  this.checkMarioType = function() {
    if (that.type == 'big') {
      that.height = 60; // Ajusta a altura do Mario para o tipo 'big'

      // Define a posição Y do sprite do Mario dependendo da sua vulnerabilidade
      if (that.invulnerable) {
        that.sY = 276; // Se estiver invulnerável, mostra o Mario transparente
      } else {
        that.sY = 90; // Se não, mostra o Mario normal
      }
    } else if (that.type == 'small') {
      that.height = 44; // Ajusta a altura do Mario para o tipo 'small'

      // Define a posição Y do sprite do Mario dependendo da sua vulnerabilidade
      if (that.invulnerable) {
        that.sY = 222; // Se estiver invulnerável, mostra o Mario transparente
      } else {
        that.sY = 4; // Se não, mostra o Mario normal
      }
    } else if (that.type == 'fire') {
      that.height = 60; // Ajusta a altura do Mario para o tipo 'fire'

      that.sY = 150; // Define a posição Y do sprite do Mario para o tipo 'fire'
    }
  };

  // Reseta a posição do Mario para a posição padrão
  this.resetPos = function() {
    that.x = canvas.width / 10; // Define a posição horizontal do Mario
    that.y = canvas.height - 40; // Define a posição vertical do Mario
    that.frame = 0; // Reseta o frame do Mario
  };
}