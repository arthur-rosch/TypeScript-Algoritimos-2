// 1. Faça uma função que recebe uma string como parâmetro e faça a contagem de
// vogais (a,e,i,o,u) e retorne esse número.

function vogais(string: string): number {
  let quantidade = string.match(/[aeiou|à-ú]/gi).length;
  return quantidade;
}
console.log(vogais("Arthur é viado"));

// 2. Faça uma função que recebe uma palavra como parâmetro, você deve retornar o
// caractere do meio dessa palavra. Se o comprimento da palavra for ímpar, retorne o
// caractere do meio. Se o comprimento for par retorne os dois caracteres do meio.

function meio(string: string): string {
  let index = Math.floor(string.length / 2),
    meio: string = "";
  if (string.length % 2 == 0) {
    return (meio = string[index - 1] + string[index]);
  } else {
    return (meio = string[index]);
  }
}
console.log(meio("Arthur"));

// 3. Faça uma função que receba um número qualquer inteiro e positivo como
// parâmetro. O objetivo é reorganizar os dígitos desse número em ordem decrescente,
// de maneira a formar o maior número possível e retornar esse número.
function maiorNumero(numero: number): number {
  let arrayNovo: number[] = [],
    arrayNumero = numero
      .toString()
      .split("")
      .forEach((item: string) => {
        arrayNovo.push(parseInt(item));
      });
  arrayNovo.sort(), arrayNovo.reverse(), arrayNovo.toString();
  return parseInt(arrayNovo.join(""));
}
console.log(maiorNumero(645876894574586));
