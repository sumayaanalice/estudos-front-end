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
