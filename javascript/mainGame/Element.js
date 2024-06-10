function Element() {
  var gameUI = GameUI.getInstance();

  var element = new Image();
  element.src = 'images/elements.png'; // Caminho da imagem dos elementos

  this.type; // Tipo do elemento
  this.sX; // Posição X do sprite do elemento
  this.sY = 0; // Posição Y do sprite do elemento
  this.x; // Posição horizontal do elemento
  this.y; // Posição vertical do elemento
  this.width = 32; // Largura do sprite do elemento
  this.height = 32; // Altura do sprite do elemento

  var that = this; // Referência para o objeto Element

  // Define o elemento como uma plataforma
  this.platform = function() {
    that.type = 1; // Tipo de plataforma
    that.sX = 0; // Posição X do sprite da plataforma
  };

  // Define o elemento como uma caixa de moeda
  this.coinBox = function() {
    that.type = 2; // Tipo de caixa de moeda
    that.sX = 1 * that.width; // Posição X do sprite da caixa de moeda
  };

  // Define o elemento como uma caixa de power-up
  this.powerUpBox = function() {
    that.type = 3; // Tipo de caixa de power-up
    that.sX = 2 * that.width; // Posição X do sprite da caixa de power-up
  };

  // Define o elemento como uma caixa inútil
  this.uselessBox = function() {
    that.type = 4; // Tipo de caixa inútil
    that.sX = 3 * that.width; // Posição X do sprite da caixa inútil
  };

  // Define o elemento como um poste de bandeira
  this.flagPole = function() {
    that.type = 5; // Tipo de poste de bandeira
    that.sX = 4 * that.width; // Posição X do sprite do poste de bandeira
  };

  // Define o elemento como uma bandeira
  this.flag = function() {
    that.type = 6; // Tipo de bandeira
    that.sX = 5 * that.width; // Posição X do sprite da bandeira
  };

  // Define o elemento como um cano esquerdo
  this.pipeLeft = function() {
    that.type = 7; // Tipo de cano esquerdo
    that.sX = 6 * that.width; // Posição X do sprite do cano esquerdo
  };

  // Define o elemento como um cano direito
  this.pipeRight = function() {
    that.type = 8; // Tipo de cano direito
    that.sX = 7 * that.width; // Posição X do sprite do cano direito
  };

  // Define o elemento como um cano superior esquerdo
  this.pipeTopLeft = function() {
    that.type = 9; // Tipo de cano superior esquerdo
    that.sX = 8 * that.width; // Posição X do sprite do cano superior esquerdo
  };

  // Define o elemento como um cano superior direito
  this.pipeTopRight = function() {
    that.type = 10; // Tipo de cano superior direito
    that.sX = 9 * that.width; // Posição X do sprite do cano superior direito
  };

  // Desenha o elemento na tela
  this.draw = function() {
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height); // Desenha o sprite do elemento na tela
  };
}