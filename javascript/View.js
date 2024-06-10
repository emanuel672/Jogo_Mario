// Classe View implementada usando o padrão Singleton
var View = (function() {
  var instance;

  // Função construtora da classe View
  function View() {
    // Retorna o primeiro elemento da classe CSS 'main-wrapper'
    this.getMainWrapper = function() {
      var element = document.getElementsByClassName('main-wrapper')[0];
      return element;
    };

    // Cria um novo elemento HTML com o nome especificado
    this.create = function(elementName) {
      var element = document.createElement(elementName);
      return element;
    };

    // Define a classe CSS do elemento especificado
    this.addClass = function(element, className) {
      element.className = className;
    };

    // Adiciona um elemento filho a um elemento pai
    this.append = function(parentElement, childElement) {
      // Insere antes do primeiro filho se for uma pontuação
      if (childElement.className == 'score-wrapper') {
        parentElement.insertBefore(childElement, parentElement.firstChild);
      } 
      // Insere antes do botão Voltar se houver
      else if (parentElement.lastChild && parentElement.lastChild.className == 'btn-wrapper') {
        parentElement.insertBefore(childElement, parentElement.lastChild);
      } 
      // Adiciona no final do elemento pai
      else {
        parentElement.appendChild(childElement);
      }
    };

    // Adiciona um elemento como filho do elemento <body> do documento HTML
    this.appendToBody = function(childElement) {
      document.body.appendChild(childElement);
    };

    // Remove um elemento filho de um elemento pai especificado
    this.remove = function(parentElement, childElement) {
      parentElement.removeChild(childElement);
    };

    // Remove um elemento do <body> do documento HTML
    this.removeFromBody = function(childElement) {
      document.body.removeChild(childElement);
    };

    // Aplica estilos CSS ao elemento especificado
    this.style = function(element, styles) {
      for (var property in styles) {
        element.style[property] = styles[property];
      }
    };

    // Define o conteúdo HTML do elemento especificado
    this.setHTML = function(element, content) {
      element.innerHTML = content;
    };
  }

  return {
    // Método estático para obter uma instância da classe View
    getInstance: function() {
      // Se ainda não houver uma instância, cria uma nova
      if (instance == null) {
        instance = new View();
      }
      return instance;
    }
  };
})();
