// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true){
    return true;
  }return false
  
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base*height)/2
  return resultado;
  
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ")
  return resultado;
  
}

// Desafio 4
function concatName(array) {
 let primeiroItem =  array[0]
 let segundoItem = array[array.length -1]
 let resultado = (segundoItem + ', ' + primeiroItem)

 return resultado;

}
concatName(['foguete', 'não', 'tem', 'ré'])
// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3; 
  let pontosEmpate = ties * 1;
  let resultado;
  resultado = pontosVitoria + pontosEmpate;
  return resultado;
  
}

// Desafio 6 nao fiz
function highestCount(array) {
  let repeticoes = 0;
  let maior = 0;
  
  for (let index in array){
    let verificaNumero = array[index]
    for (let index2 in array){
      if (verificaNumero === array[index2]){
        repeticoes += 1;
      }
    }
  }
}

// Desafio 7 nao fiz
function catAndMouse(mouse, cat1, cat2) 
  

// Desafio 8
function fizzBuzz(array) {
  let arrayS = [];

  for (index = 0; index < array.length; index += 1){
    if (array[index] % 3 != 0 && array[index] % 5 !=0 ){
       arrayS.push('bug!')
    }
      if (array[index] % 3 === 0 && array[index] % 5 === 0 ){
        arrayS.push("fizzBuzz")
      }
      if (array[index] % 5 === 0 && array[index] % 3 != 0){
        arrayS.push("buzz")
      }
      if (array[index] % 3 === 0 && array[index] % 5 != 0){
      arrayS.push("fizz")   
      }
  }
  return console.log(arrayS)
}
fizzBuzz([9, 25])
// Desafio 9
function encode(string) {
  let codificada 
  for (index = 0; index < string.length; string += 1){
    if(string[index] === a){
       codificada.push(1)
    }if(string[index] === e){
      codificada.push(2)
    }if(string[index] === i){
      codificada.push(3)
    }if(string[index] === o){
      codificada.push(4)
    }if(string[index] === u){
      codificada.push(5)
    }
  }
  
}
return console.log(codificada)
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
