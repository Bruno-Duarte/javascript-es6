'use strict';

const myText = 'Hello prototype!';

myText.split('');  // <- de onde vem esse "split"?

// Mesma declaração

console.log(myText.__proto__.split);
// f split() { [native code] }

console.log(String.prototype.split);
// f split() { [native code] }

console.log(myText.__proto__.split === String.prototype.split);
// true

console.log(myText.constructor === String);

// __proto__ -> prototype -> constructor

// myText.constructor -> String

// myText.__proto__ -> String.prototype

// function Animal() { }

// console.log(Animal.constructor);
// f Function() { [native code ] }

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
// 4

console.log(cachorro.__proto__ === Animal.prototype);
// true

console.log(Animal.__proto__ === Function.prototype);
// true

new Foo(...);

/**
 * O que ocorre?
 *
 * 1 - Um novo objeto é criado, herdando Foo.prototype
 * 2 - A função contrutora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo
 *     objeto criado.
 * 3 - Caso a função contrutora tenha um retorno explícito, será respeitado o seu `return`. Senão, será
 *     retornado o objeto criado no passo 1.
 */

function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Bruno');

