// Define a função Score.
function Score() {
  // Obtém uma instância de View.
  var view = View.getInstance();

  // Declaração das variáveis para os elementos HTML do score.
  var mainWrapper;
  var scoreWrapper;
  var coinScoreWrapper;
  var totalScoreWrapper;
  var lifeCountWrapper;
  var levelWrapper;

  // Variáveis para armazenar os valores do score.
  this.coinScore;
  this.totalScore;
  this.lifeCount;

  var that = this;

  // Inicializa o score.
  this.init = function() {
    // Define os valores iniciais do score.
    that.coinScore = 0;
    that.totalScore = 0;
    that.lifeCount = 5;

    // Obtém referências para os elementos HTML do score.
    mainWrapper = view.getMainWrapper();
    scoreWrapper = view.create('div');
    coinScoreWrapper = view.create('div');
    totalScoreWrapper = view.create('div');
    lifeCountWrapper = view.create('div');
    levelWrapper = view.create('div');

    // Adiciona classes CSS aos elementos HTML.
    view.addClass(scoreWrapper, 'score-wrapper');
    view.addClass(coinScoreWrapper, 'coin-score');
    view.addClass(totalScoreWrapper, 'total-score');
    view.addClass(lifeCountWrapper, 'life-count');
    view.addClass(levelWrapper, 'level-num');

    // Adiciona os elementos HTML ao DOM.
    view.append(scoreWrapper, levelWrapper);
    view.append(scoreWrapper, lifeCountWrapper);
    view.append(scoreWrapper, coinScoreWrapper);
    view.append(scoreWrapper, totalScoreWrapper);
    view.append(mainWrapper, scoreWrapper);

    // Atualiza os valores visuais do score.
    that.updateCoinScore();
    that.updateTotalScore();
    that.updateLifeCount();
    that.updateLevelNum(1);
  };

  // Atualiza a quantidade de moedas coletadas.
  this.updateCoinScore = function() {
    // Verifica se o jogador coletou 100 moedas para ganhar uma vida extra.
    if (that.coinScore == 100) {
      that.coinScore = 0;
      that.lifeCount++;
      that.updateLifeCount();
    }

    // Atualiza o texto exibindo a quantidade de moedas coletadas.
    view.setHTML(coinScoreWrapper, 'Coins: ' + that.coinScore);
  };

  // Atualiza o total do score.
  this.updateTotalScore = function() {
    // Atualiza o texto exibindo o total do score.
    view.setHTML(totalScoreWrapper, 'Score: ' + that.totalScore);
  };

  // Atualiza a contagem de vidas.
  this.updateLifeCount = function() {
    // Atualiza o texto exibindo a quantidade de vidas restantes.
    view.setHTML(lifeCountWrapper, 'x ' + that.lifeCount);
  };

  // Atualiza o número do nível.
  this.updateLevelNum = function(level) {
    // Atualiza o texto exibindo o número do nível atual.
    view.setHTML(levelWrapper, 'Level: ' + level);
  };

  // Exibe o score.
  this.displayScore = function() {
    // Define o estilo para exibir o score.
    view.style(scoreWrapper, { display: 'block', background: '#add1f3' });
  };

  // Esconde o score.
  this.hideScore = function() {
    // Define o estilo para ocultar o score e reinicia os valores do score.
    view.style(scoreWrapper, { display: 'none' });
    that.coinScore = 0;
    that.lifeCount = 5;
    that.totalScore = 0;
    that.updateCoinScore();
    that.updateTotalScore();
    that.updateLifeCount();
  };

  // Exibe a tela de fim de jogo.
  this.gameOverView = function() {
    // Define o estilo para exibir a tela de fim de jogo.
    view.style(scoreWrapper, { background: 'black' });
  };
}