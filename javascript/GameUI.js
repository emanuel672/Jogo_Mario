// Define o módulo GameUI usando uma função de autoinvocação.
var GameUI = (function() {
  var instance;

  // Define o construtor GameUI.
  function GameUI() {
    // Obtém a referência para o elemento canvas na página.
    var canvas = document.getElementsByClassName('game-screen')[0];
    // Obtém o contexto de desenho 2D do canvas.
    var ctx = canvas.getContext('2d');

    var that = this;

    // Define a largura do canvas.
    this.setWidth = function(width) {
      canvas.width = width;
    };

    // Define a altura do canvas.
    this.setHeight = function(height) {
      canvas.height = height;
    };

    // Obtém a largura do canvas.
    this.getWidth = function() {
      return canvas.width;
    };

    // Obtém a altura do canvas.
    this.getHeight = function() {
      return canvas.height;
    };

    // Retorna o canvas.
    this.getCanvas = function() {
      return canvas;
    };

    // Exibe o canvas definindo o estilo de exibição para 'block'.
    this.show = function() {
      canvas.style.display = 'block';
    };

    // Oculta o canvas definindo o estilo de exibição para 'none'.
    this.hide = function() {
      canvas.style.display = 'none';
    };

    // Limpa uma área específica do canvas.
    this.clear = function(x, y, width, height) {
      ctx.clearRect(x, y, width, height);
    };

    // Translada o contexto de desenho para simular o deslocamento da janela.
    this.scrollWindow = function(x, y) {
      ctx.translate(x, y);
    };

    // Desenha uma imagem no canvas.
    this.draw = function(image, sx, sy, swidth, sheight, x, y, width, height) {
      ctx.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
    };

    // Desenha um retângulo preenchido no canvas.
    this.makeBox = function(x, y, width, height) {
      ctx.rect(x, y, width, height);
      ctx.fillStyle = 'black';
      ctx.fill();
    };

    // Escreve texto no canvas.
    this.writeText = function(text, x, y) {
      ctx.font = '20px SuperMario256'; // Define a fonte do texto.
      ctx.fillStyle = 'white'; // Define a cor do texto.
      ctx.fillText(text, x, y); // Desenha o texto no canvas nas coordenadas especificadas.
    };
  }

  // Retorna uma instância única do GameUI.
  return {
    getInstance: function() {
      if (instance == null) {
        instance = new GameUI();
      }

      return instance;
    }
  };
})();