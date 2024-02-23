function contrasenaValida (contrasena){
    return (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9")
  }
  console.log(contrasenaValida("2Fj(jjbFsuj")) // true
  console.log(contrasenaValida("eoZiugBf&g9")) // true
  console.log(contrasenaValida("hola")) // false
  console.log(contrasenaValida("")) // false