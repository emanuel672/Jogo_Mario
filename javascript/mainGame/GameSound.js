function GameSound() {
  // Declaração das variáveis para os diferentes sons do jogo
  var coin; // Som de pegar uma moeda
  var powerUpAppear; // Som de aparecimento de um power-up
  var powerUp; // Som de pegar um power-up
  var marioDie; // Som de quando o Mario morre
  var killEnemy; // Som de quando um inimigo é derrotado
  var stageClear; // Som de quando o estágio é concluído
  var bullet; // Som de disparo
  var powerDown; // Som de quando o Mario perde um power-up
  var jump; // Som de pulo do Mario

  var that = this; // Referência para o objeto GameSound

  // Inicialização dos sons
  this.init = function() {
    // Carrega os arquivos de áudio para cada som
    coin = new Audio('sounds/coin.wav');
    powerUpAppear = new Audio('sounds/power-up-appear.wav');
    powerUp = new Audio('sounds/power-up.wav');
    marioDie = new Audio('sounds/mario-die.wav');
    killEnemy = new Audio('sounds/kill-enemy.wav');
    stageClear = new Audio('sounds/stage-clear.wav');
    bullet = new Audio('sounds/bullet.wav');
    powerDown = new Audio('sounds/power-down.wav');
    jump = new Audio('sounds/jump.wav');
  };

  // Função para reproduzir um som específico
  this.play = function(element) {
    // Verifica qual som deve ser reproduzido com base no argumento 'element'
    if (element == 'coin') {
      // Para o som atual, define o tempo de reprodução para o início e, em seguida, reproduz o som
      coin.pause();
      coin.currentTime = 0;
      coin.play();
    } else if (element == 'powerUpAppear') {
      powerUpAppear.pause();
      powerUpAppear.currentTime = 0;
      powerUpAppear.play();
    } else if (element == 'powerUp') {
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
    } else if (element == 'marioDie') {
      marioDie.pause();
      marioDie.currentTime = 0;
      marioDie.play();
    } else if (element == 'killEnemy') {
      killEnemy.pause();
      killEnemy.currentTime = 0;
      killEnemy.play();
    } else if (element == 'stageClear') {
      stageClear.pause();
      stageClear.currentTime = 0;
      stageClear.play();
    } else if (element == 'bullet') {
      bullet.pause();
      bullet.currentTime = 0;
      bullet.play();
    } else if (element == 'powerDown') {
      powerDown.pause();
      powerDown.currentTime = 0;
      powerDown.play();
    } else if (element == 'jump') {
      jump.pause();
      jump.currentTime = 0;
      jump.play();
    }
  };
}
