function manufacture(regalos, materiales){
  var regalosCreados = []
  for(r = 0; r<regalos.length; r++){
    var regaloActual = regalos[r]
    var cont = 0
    for(ra = 0; ra<regaloActual.length; ra++){
      for(mt = 0; mt<materiales.length; mt++){
        if(regaloActual[ra] === materiales[mt]){
          cont++
        }
      }
    }
    if(regaloActual.length === cont){
      regalosCreados.push(regaloActual)
    }
  }
  return regalosCreados
}
const gifts = ['tren', 'oso', 'pelota']
const materiales = 'tronesa'

console.log(manufacture(gifts, materiales))