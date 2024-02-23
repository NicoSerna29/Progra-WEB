function sumarArreglo (array){
    var sumaElementos = 0;
    for(sa = 0; sa<array.length; sa++){
      sumaElementos += array[sa];
    }
    return sumaElementos;
  }
  console.log(sumarArreglo([3, 1, 2])) // 6
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
  console.log(sumarArreglo([])) // 0