function compareStrings(str1, str2){
    var contdif = 0;
    if(str1.length>=str2.length){
      for(c = 0; c<str1.length; c++){
        if(str1[c] !== str2[c]){
          contdif++;
        }
      }
    } else {
        for(c = 0; c<str2.length; c++){
          if(str1[c] !== str2[c]){
            contdif++;
          }
      }
    }

    return contdif;
}
console.log(compareStrings("hola", "hola")) // 0
console.log(compareStrings("sol", "tol")) // 1
console.log(compareStrings("carro", "correr")) // 3
console.log(compareStrings("correr", "carro")) // 3