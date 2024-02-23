function contarRango(numInicial, numFinal){
    if(numFinal>numInicial){
      return (numFinal-1)-numInicial
    } else {
      return ("Ingrese valores validos")
    }
  }
  console.log(contarRango(1, 9)) // 7
  console.log(contarRango(1332, 8743)) // 7410
  console.log(contarRango(5, 6)) // 0