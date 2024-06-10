function CreatedLevels() {
  var view = View.getInstance(); // Instância da visualização

  var storage; // Instância do armazenamento
  var levelsWrapper; // Wrapper para os níveis criados

  var that = this; // Referência para o objeto CreatedLevels

  // Inicialização da classe
  this.init = function() {
    var mainWrapper = view.getMainWrapper(); // Obtém o wrapper principal da visualização
    var deleteAllBtn = view.create('button'); // Cria um botão para deletar todos os níveis
    levelsWrapper = view.create('div'); // Cria um wrapper para os níveis

    view.addClass(levelsWrapper, 'levels-wrapper'); // Adiciona a classe 'levels-wrapper' ao wrapper dos níveis
    view.addClass(deleteAllBtn, 'delete-all-btn'); // Adiciona a classe 'delete-all-btn' ao botão de deletar todos
    view.style(levelsWrapper, { display: 'block' }); // Define o estilo do wrapper dos níveis
    view.append(levelsWrapper, deleteAllBtn); // Adiciona o botão de deletar todos ao wrapper dos níveis
    view.append(mainWrapper, levelsWrapper); // Adiciona o wrapper dos níveis ao wrapper principal

    deleteAllBtn.onclick = that.deleteAllMaps; // Define a ação de clique do botão de deletar todos os níveis

    storage = new Storage(); // Instância do armazenamento

    that.showLevels(); // Mostra os níveis salvos
  };

  // Mostra os níveis salvos
  this.showLevels = function() {
    var totalStoredLevels = storage.getLength(); // Obtém o número total de níveis salvos

    if (totalStoredLevels != 0) {
      // Se houver níveis salvos
      for (var i = 1; i < totalStoredLevels; i++) {
        // Itera sobre os níveis salvos
        var levelButton = view.create('div'); // Cria um botão para o nível
        var levelName = storage.getItemName(i); // Obtém o nome do nível

        view.setHTML(levelButton, levelName); // Define o texto do botão como o nome do nível
        view.addClass(levelButton, 'level-btn'); // Adiciona a classe 'level-btn' ao botão do nível
        view.append(levelsWrapper, levelButton); // Adiciona o botão do nível ao wrapper dos níveis

        levelButton.onclick = (function(i) {
          // Define a ação de clique do botão do nível
          return function() {
            that.startLevel(i); // Inicia o nível correspondente ao botão clicado
            that.removeCreatedLevelsScreen(); // Remove a tela de níveis criados
          };
        })(i);
      }
    } else {
      // Se não houver níveis salvos
      var noMapsMessage = view.create('div'); // Cria uma mensagem informando que não há níveis salvos

      view.addClass(noMapsMessage, 'no-maps'); // Adiciona a classe 'no-maps' à mensagem
      view.setHTML(noMapsMessage, 'No maps currently saved. Please use the Level Editor to create custom Maps'); // Define o texto da mensagem
      view.append(levelsWrapper, noMapsMessage); // Adiciona a mensagem ao wrapper dos níveis
    }
  };

  // Deleta todos os níveis salvos
  this.deleteAllMaps = function() {
    storage.clear(); // Limpa todos os níveis salvos

    that.removeCreatedLevelsScreen(); // Remove a tela de níveis criados
    that.init(); // Reinicia a tela de níveis criados
  };

  // Inicia o nível correspondente ao índice fornecido
  this.startLevel = function(i) {
    var marioMakerInstance = MarioMaker.getInstance(); // Obtém a instância do MarioMaker
    var levelName = storage.getItemName(i); // Obtém o nome do nível
    var level = storage.getItem(levelName); // Obtém os dados do nível
    var map = { 1: level }; // Cria um mapa com os dados do nível

    marioMakerInstance.startGame(map); // Inicia o jogo com o mapa fornecido
  };

  // Mostra a tela de níveis criados
  this.showCreatedLevelsScreen = function() {
    if (levelsWrapper) {
      view.style(levelsWrapper, { display: 'block' }); // Define o estilo do wrapper dos níveis para exibição
    }
  };

  // Remove a tela de níveis criados
  this.removeCreatedLevelsScreen = function() {
    if (levelsWrapper) {
      view.style(levelsWrapper, { display: 'none' }); // Define o estilo do wrapper dos níveis para ocultação

      while (levelsWrapper.hasChildNodes()) {
        // Remove todos os elementos filhos do wrapper dos níveis
        view.remove(levelsWrapper, levelsWrapper.lastChild);
      }
    }
  };
}