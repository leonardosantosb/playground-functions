// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    const num = array[index];
    if (num < 0 || num > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    const count = array.filter((n) => n === num).length;
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  const ddd = array.slice(0, 2).join('');
  const firstPart = array.slice(2, 7).join('');
  const secondPart = array.slice(7).join('');
  return `(${ddd}) ${firstPart}-${secondPart}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
