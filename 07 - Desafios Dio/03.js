//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets())
  };
  
  // JSON do Cliente 2
  const cliente2 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets()) 
  };
  
  //TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
  if (cliente1.nome != cliente2.nome || cliente1.item != cliente2.item || cliente1.preco != cliente2.preco){
    print("Os pedidos são diferentes")
  } else {
    print("Os pedidos são iguais")
  }
  //TODO: Imprimir a saída conforme o enunciado deste desafio.