var possuiGraduacao = true
var possuiDoutorado = false

if(possuiGraduacao){
  console.log('Possui graduação');
  var x = 10;
}
else if(possuiDoutorado){
  console.log('Possui doutorado')
}
else{
  console.log('Não possui graduação');
}

console.log(x)


var x = 'gato';
console.log(x !== 'gato')

var condicional = (5 - 10) && (5 + 5)
if(condicional){
  console.log('Verdadeiro', condicional)
}
else{
  console.log('Falso')
}


var x = 'gato'
var y = 'cao'
if(x || y){
  console.log('Verdadeiro')
}else {
  console.log('Falso')
}


var corFavorita = 'Azul';
switch(corFavorita){
  case 'Azul':
    console.log('Gosta da cor azul');
    break;

  case 'Vermelho':
    console.log('Gosta da cor vermelha');
    break;

  default:
    console.log('Não gosta de cor nenhuma');
    break;
}