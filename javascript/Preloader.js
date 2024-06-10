// Define uma função construtora chamada Preloader
function Preloader() {
  // Obtém uma instância da classe View
  var view = View.getInstance();

  // Declaração de variáveis
  var loadingPercentage; // Armazena a porcentagem de carregamento
  var imageSources; // Objeto contendo as fontes das imagens a serem carregadas
  var soundSources; // Objeto contendo as fontes dos sons a serem carregados
  var that = this; // Referência ao contexto atual

  // Método de inicialização
  this.init = function() {
    // Cria um elemento 'div' para exibir a porcentagem de carregamento
    loadingPercentage = view.create('div');
    // Adiciona uma classe ao elemento para estilização
    view.addClass(loadingPercentage, 'loading-percentage');
    // Define o conteúdo inicial como '0%'
    view.setHTML(loadingPercentage, '0%');
    // Adiciona o elemento ao corpo do documento HTML
    view.appendToBody(loadingPercentage);

    // Define as fontes das imagens a serem carregadas
    imageSources = {
      // Chave: Identificador da imagem, Valor: URL da imagem
      1: 'images/back-btn.png',
      2: 'images/bg.png',
      3: 'images/bullet.png',
      4: 'images/clear-map-btn.png',
      5: 'images/coin.png',
      6: 'images/delete-all-btn.png',
      7: 'images/editor-btn.png',
      8: 'images/elements.png',
      9: 'images/enemies.png',
      10: 'images/flag-pole.png',
      11: 'images/flag.png',
      12: 'images/start-screen.png',
      13: 'images/grid-large-btn.png',
      14: 'images/grid-medium-btn.png',
      15: 'images/grid-small-btn.png',
      16: 'images/grid.png',
      17: 'images/lvl-size.png',
      18: 'images/mario-head.png',
      19: 'images/mario-sprites.png',
      20: 'images/powerups.png',
      21: 'images/save-map-btn.png',
      22: 'images/saved-btn.png',
      23: 'images/slider-left.png',
      24: 'images/slider-right.png',
      25: 'images/start-btn.png'
    };

    // Inicia o carregamento das imagens
    that.loadImages(imageSources);
  };

  // Método para carregar as imagens
  this.loadImages = function(imageSources) {
    var images = {}; // Objeto para armazenar as imagens carregadas
    var loadedImages = 0; // Contador para imagens carregadas com sucesso
    var totalImages = 0; // Total de imagens a serem carregadas

    // Calcula o total de imagens a serem carregadas
    for (var key in imageSources) {
      totalImages++;
    }

    // Loop para carregar cada imagem
    for (var key in imageSources) {
      images[key] = new Image(); // Cria um objeto de imagem para cada fonte de imagem
      images[key].src = imageSources[key]; // Define a fonte da imagem

      // Evento de carregamento bem-sucedido
      images[key].onload = function() {
        loadedImages++; // Incrementa o contador de imagens carregadas
        var percentage = Math.floor(loadedImages * 100 / totalImages); // Calcula a porcentagem de carregamento

        // Atualiza a porcentagem de carregamento exibida
        view.setHTML(loadingPercentage, percentage + '%');
        
        // Verifica se todas as imagens foram carregadas
        if (loadedImages >= totalImages) {
          // Remove o elemento de porcentagem de carregamento do corpo do documento
          view.removeFromBody(loadingPercentage);
          // Inicia a aplicação principal após o carregamento completo
          that.initMainApp();
        }
      };
    }
  };

  // Método para inicializar a aplicação principal
  this.initMainApp = function() {
    // Obtém uma instância da classe MarioMaker
    var marioMakerInstance = MarioMaker.getInstance();
    // Inicia a aplicação principal do Mario Maker
    marioMakerInstance.init();
  };
}

// Evento de carregamento da janela
window.onload = function() {
  // Cria uma instância do pré-carregador
  var preloader = new Preloader();
  // Inicia o pré-carregador
  preloader.init();
};
