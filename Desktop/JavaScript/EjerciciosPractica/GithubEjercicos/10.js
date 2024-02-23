function numeroDeCaracteres (palabra, caracter){
    var contCaracter = 0;
    for(crt = 0; crt<palabra.length; crt++){
      if(caracter === palabra[crt]){
        contCaracter++;
      }
    }
    return contCaracter;
  }
  console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
  console.log(numeroDeCaracteres("MMMMM", "m")) // 0
  console.log(numeroDeCaracteres("eeee", "e")) // 4