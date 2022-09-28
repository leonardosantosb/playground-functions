// Desafio 1 concluido
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true){
    return true;
  }return false
  
}

// Desafio 2 concluido
function calcArea(base, height) {
  let resultado = (base*height)/2
  return resultado;
  
}

// Desafio 3 concluido
function splitSentence(frase) {
  let resultado = frase.split(" ")
  return resultado;
  
}

// Desafio 4 concluido
function concatName(array) {
 let primeiroItem =  array[0]
 let segundoItem = array[array.length -1]
 let resultado = (segundoItem + ', ' + primeiroItem)

 return resultado;

}
concatName(['foguete', 'não', 'tem', 'ré'])
// Desafio 5 concluido
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3; 
  let pontosEmpate = ties * 1;
  let resultado;
  resultado = pontosVitoria + pontosEmpate;
  return resultado;
  
}

// Desafio 6
function highestCount(array) {
  let valor = 0;
  let vezes = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] > valor){
      valor = array[index]
    }
  }for (let index2 = 0; index2 < array.length; index2 += 1){
    if(valor === array[index2]){
      vezes += 1
    }
  }
  
  
  return vezes;
}
  highestCount ([0, 0, 0])

// Desafio 7 concluido
function catAndMouse(mouse, cat1, cat2){ 
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  

  if (distancia1 < distancia2 ){
  return ('cat1')
  }else if (distancia2 < distancia1){
  return ('cat2')
  }
  return "os gatos trombam e o rato foge"

}
  catAndMouse (1, 1, 2)

// Desafio 8 concluido
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
  return arrayS
}

// Desafio 9 concluido
function encode(string) {
  let codificada = [];

  for (index = 0; index < string.length; index += 1){
    if(string[index] === 'a'){
       codificada.push('1')
    }else if(string[index] === 'e'){
      codificada.push('2')
    }else if(string[index] === 'i'){
      codificada.push('3')
    }else if(string[index] === 'o'){
      codificada.push('4')
    }else if(string[index] === 'u'){
      codificada.push('5')
    }else{
      codificada.push(string[index])
    }
  }
  return codificada.join('')
}
encode ('hi there!')
 
function decode(string) {

  let decodificada = [];
  
  for (index = 0; index < string.length; index += 1){

    if(string[index] === '1'){
        decodificada.push('a')
    }else if(string[index] === '2'){
        decodificada.push('e')
    }else if(string[index] === '3'){
        decodificada.push('i')
    }else if(string[index] === '4'){
        decodificada.push('o')
    }else if(string[index] === '5'){
        decodificada.push('u')
    }else{
        decodificada.push(string[index])
    }
  }
  return decodificada.join('')
}
decode ('h3 th2r2!')


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
