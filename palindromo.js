   // Uma string vazia é PALÍNDROMO.

   // Um espaço em branco é PALÍNDROMO.

   // Uma string com 1 caractere é PALÍNDROMO.
   // a: true

// saias: true

// s a i As: true

// socorram me subi no onibus em marrocos: true

// O romano acata amores a damas amadas e Roma ataca o namoro: true

// 23gg32: true

// blablabla: false

// saias!:false (devido ao ponto de exclamação)

// Salve o tricolor paulista: false
exports.palindromo = (array)=>{ 
  let arrayInicial = array.toLowerCase().split('').join('').replace(/\s/g, '');
  console.log(arrayInicial);
  let arrayInvertido = arrayInicial.split('').reverse().join(''); 
  console.log(arrayInvertido)

  if(arrayInvertido === arrayInicial)
    return 'É um palindromo';

    return 'Não é um palindromo';

}