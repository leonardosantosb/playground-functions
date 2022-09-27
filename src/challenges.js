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
return console.log(segundoItem + ', '+ primeiroItem)

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

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
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
