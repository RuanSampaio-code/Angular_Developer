const pedidos = [
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    }
  ];
  
  //TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  let dist = parseFloat(15)
  let name = ""
  let tipo = ""
  for (let i = 0; i<pedidos.length; i++){
      if (pedidos[i].distancia < dist){
        dist = pedidos[i].distancia
        name = pedidos[i].nome
        tipo = pedidos[i].tipo
      }
      
  }
    
  //TODO: Imprima a saída de acordo com o enunciado deste desafio.
  print(`O pedido mais próximo é o de ${name}, do tipo ${tipo}`)