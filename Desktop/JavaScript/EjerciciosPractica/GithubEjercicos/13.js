function removerCeros(matriz){
    for(rc = 0; rc<matriz.length; rc++){
      if(matriz[rc] === 0){
        matriz.splice(rc, 1)
      }
    }
    return matriz
  }
  console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
  console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
  console.log(removerCeros([0, 0, 0])) // []