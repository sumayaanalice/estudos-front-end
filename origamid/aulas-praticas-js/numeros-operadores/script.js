// exemplos de operadores unários que transforma string em número

var frase = 'Isto é um número';
+frase;
-frase;
console.log(+frase);
console.log(-frase);
// nesse caso ele não consegue trasformar isso num número pelo fato de só ter caracteres dentro da string.

var idade = '27';
+idade;
-idade;
console.log(+idade);
console.log(-idade);

// nesse caso ele consegue transformar por que dentro da string ele tem apenas número, e o typeof dessa variável muda de string para número. além disso, ele consegue realizar o incremento ou decremento dessa variável.

// Qual o resultado da seguinte operação?
var total = 10 + 5 * 2 / 2 + 20;
// 35
console.log(total);

// Crie duas expressões que retornem NaN
var idade = 'Isso não é um número';
var nascimento = 'Eu nasci em 1995';
console.log(+idade, +nascimento);

// Somar a string '200' com o número 50 e retornar 250.
var valor1 = '200';
var valor2 = 50;
console.log(+valor1 + valor2);

// incremente o número 5 e retorne o seu valor incrementado
var soma1 = 5;
console.log(++soma1);

// como dividir o pedo por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var total = +numero / 2;
var final = total + unidade;
console.log(final);