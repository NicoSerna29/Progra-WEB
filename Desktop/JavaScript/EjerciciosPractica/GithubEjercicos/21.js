function encontrarPares(MatrizPares){
    var paresEncontrados = [];
    for(mp = 0; mp<MatrizPares.length; mp++){
      if(MatrizPares[mp]%2 === 0){
        paresEncontrados[mp] = MatrizPares[mp] 
      }
    }
    return paresEncontrados
  }
  console.log(encontrarPares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
  console.log(encontrarPares([])) // []