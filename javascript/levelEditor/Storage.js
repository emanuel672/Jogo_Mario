function Storage() {
  // Obtém um item do localStorage com base no nome do item
  this.getItem = function(itemName) {
    var item = localStorage.getItem(itemName); // Obtém o item do localStorage com o nome fornecido

    return item; // Retorna o item obtido
  };

  // Obtém o número de itens armazenados no localStorage
  this.getLength = function() {
    var length = localStorage.length; // Obtém o número de itens armazenados no localStorage

    return length; // Retorna o número de itens
  };

  // Obtém o nome do item no localStorage com base no índice fornecido
  this.getItemName = function(keyValue) {
    var name = localStorage.key(keyValue); // Obtém o nome do item no localStorage com o índice fornecido

    return name; // Retorna o nome do item
  };

  // Define um item no localStorage com o nome e os dados fornecidos
  this.setItem = function(itemName, itemData) {
    localStorage.setItem(itemName, JSON.stringify(itemData)); // Define o item no localStorage como uma string JSON
  };

  // Limpa todos os itens do localStorage
  this.clear = function() {
    localStorage.clear(); // Limpa todos os itens armazenados no localStorage
  };
}