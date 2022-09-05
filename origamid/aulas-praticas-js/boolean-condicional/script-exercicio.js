// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeSumaya = 27;
var idadeAndre = 26;

if(idadeSumaya > idadeAndre){
  console.log('Sumaya é mais velha')
}
else if(idadeSumaya === idadeAndre){
  console.log('São da mesma idade')
}
else{
  console.log('André é mais velho')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
if(expressao){
  console.log('É verdadeiro');
}
else{
  console.log('É falso');
}
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// if(nome){
//   console.log('Truthy');
// }
// else{
//   console.log('false')
// }
// if(idade){
//   console.log('Truthy');
// }
// else{
//   console.log('false')
// }
// if(possuiDoutorado){
//   console.log('Truthy');
// }
// else{
//   console.log('false')
// }
// if(empregoFuturo){
//   console.log('Truthy');
// }
// else{
//   console.log('false')
// }

// if(dinheiroNaConta){
//   console.log('Truthy');
// }
// else{
//   console.log('false')
// } esse é um dos jeitos de se verificar. Outro jeito é:
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(brasil > china);
console.log(brasil < china);

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}