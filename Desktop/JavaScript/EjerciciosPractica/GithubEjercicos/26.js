function imprimirMatriz(matriz){
    for(m = 0; m<matriz.length; m++){
      var arrayInterno = matriz[m];
      for(m2 = 0; m2<arrayInterno.length; m2++){
        console.log(arrayInterno[m2])
      }
    }
  }
  imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])