**Compiladores**
- Transforma nosso código em um formato para outro. Normalmente os browsers suportam a versão recente do ECMAScript, porém caso alguma versão nova ainda não seja suportada pelo browser, o compilador transforma o código para algo que o browser suporte.
- A ferramenta mais famosa é o Babel por ser específico para o JavaScript.

______________________________________________________________________________________________________________________________________

**Variáveis**
- Salva na memória os dados referente aquela variável. Existem três tipos de variáveis: **var, let e const**
***var** é a menos usada no momento devido ao fato de que ela substitui a declaração caso um novo valor seja atribuído a ela.
Com o var, pode-se separar as variáveis apenas por vírgula, não sendo necessário colocar a palavra reservada Var na frente de todas as variáveis.

- A diferença de **let** e **var** é que o let você não pode repetir ele no código
Ex: let nome = 'batata'
    let nome = 'banana'

dessa forma o JS quebra inteiro pq informa que a variável nome já foi declarada. Caso seja necessário colocar a mesma variável com outra atribuição, **é só repetir o nome da variável, sem a palavra reservada na frente.**

- **Const** não pode ser modificado. São dados que não mudam sempre que forem execultados.
______________________________________________________________________________________________________________________________________

**Typeof**

- Serve para saber qual tipo de dado é o valor que está atribuído a variável. Só mostra no console uma variável por vez.

**Template String**

- É uma forma de usar a string e chamar uma variável dentro da string.
- Ex= var gols = 1000, frase1 = 'Romário fez ' + gols + ' gols', frase2 = **`Romario fez ${gols} gols`**

Colocando a **crase** no lugar das aspas simples, você pode fazer uma expressão com o caracteres **${}** e chamar a variável dentro dele. **Funciona da mesma forma que concatenar com o + junto com a variável.** Pode-se colocar qualquer coisa de JS dentro da expressão como, por exemplo, somar, multiplicar e etc.
Dentro da crase todo espaço é contado dentro da string.

______________________________________________________________________________________________________________________________________

**Números e Operadores**

- Quando se quiser escrever o número com vírgula, é necessário escrever com . e não com vírgula, como é usado no Brasil.
- Existe um precisão de até 15 números, após isso ele arredonda.
  Ex: 15,328495903827490

- Quando se quiser escrever número exponencial (o exponencial na base de 10 é a quantidade de zeros que se quer mostrar após qualquer número) é só colocar o número seguido da letra "e" e depois o número 10. Ele também funciona para números negativos.
    Ex: 2e10 = 20000000000
        2e-2 = 0.02

- É possível fazer operação aritméticas com strings, porém é não com todas. Exemplo, o + usado com string ele tem a função de concatenar, então ele não age de forma aritmética como, por exempplo:
    Ex: '100'+ 50 = 10050 (o resultado vai ser uma string também)

Porém, a -, / e a * funcionam com string também, devido ao fato de que elas não tem outra função além. Todas essas funções tem uma ressalva, que é: caso tenha caracteres na string além de número escrito em forma de string, ela não consegue converter a string em número, e isso faz com que ela não funcione.

- A ordem das funções importa igual funciona na matemática.
a ordem é: primeiro * e /
           depois + e -.
com parênteses é a mesma coisa. Ele tem prioridade na resolução da expressão aritmética que tiver dentro.

Operador Unário.
Você pode somar sem precisar colocar um número em sequência. Com o operador unário funciona o incremento, que é quando você diz pro código que é pra ser acrescentado +1 ao número já declarado
Ex: var incremento = 5
console.log(incremento++) (aqui está se falando pro código: some +1 ao número 5, porém ele ainda mostra número 5, devido a variável não ter sido lida com o novo valor.)
console.log(incremento) (após pedir para exibir novamente no console, ele irá mostrar o número com o valor incrementado: 6).

o decremento funciona da mesma forma, mas no sentido de diminuir o valor que já está informado na variável.

Um detalhe importante é que o sinal na frente chamada da variável no console já mostra o valor alterado. O final atrás da variável vai mostrar o valor anterior e após chamar novamente a variável no console, ele mostra o novo valor.

______________________________________________________________________________________________________________________________________

**Boolean e Condicionais**

Booleano são os valores true ou false. Serve como comparação condicional.

Numa comparação condicional são usados o **If** e **Else**. Existe também o **else if**, que pode ter mais de um else if e ele vai verificar a primeira condição, caso ela seja verdadeira, ele não vai verificar mais nenhuma além da verdadeira. Caso seja falsa, ele vai verificando os else if até que algum seja verdadeiro, e caso nenhum seja, ele executa o else.

**&& e ||**

&& - Ele irá mostrar o último valor que for verdadeiro, se todos forem verdadeiros. Ou o primeiro valor false, e ai ele não conta os outros valores.

|| - Ele irá mostrar o último valor que for false, se todos forem false. Ou o primeiro valor verdadeiro, e ai ele não conta os outros valores.

**Switch**

Ele serve quando você quer ver se o valor da variável é igual a diferentes opções como, por exemplo:

var cor = 'Azul'. Se cor for azul, você executa tal situação; Se for vermelha, você executa outra situação. E caso o valor da variável não seja nenhuma das opções que foram mapeadas nos cases, passa um valor default que é alguma situação padrão que se deseja pro código.