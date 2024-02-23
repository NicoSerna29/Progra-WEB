function bmi(peso, altura){
    var bmi = peso/(altura**2)
    switch(true){
      case (bmi<18.5): return ("Bajo de peso"); break;
      case (bmi>=18.5 && bmi<24.9): return ("Peso Normal"); break;
      case (bmi>=25 && bmi<29.9): return ("Sobrepeso"); break;
      case (bmi>=30): return ("Obeso"); break;
      default: ("Ingrese un peso Valido");
    }
  }
  console.log(bmi(65, 1.8)) // "Normal"
  console.log(bmi(72, 1.6)) // "Sobrepeso"
  console.log(bmi(52, 1.75)) //  "Bajo de peso"
  console.log(bmi(135, 1.7)) // "Obeso"