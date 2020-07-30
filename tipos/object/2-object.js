const user = {
	name: 'Bruno',
	lastName: 'Duarte'
}

// Recupera as chaves do objeto
console.log('Propiedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('Valores das propiedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('Lista de propiedades e valores:', Object.entries(user));

// Mergear propiedades de objetos
Object.assign(user, {fullName: 'Bruno Duarte'});

console.log('Adiciona a propiedade fullName no objeto user', user);
console.log('Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 23}));

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('Variável newObj após as alterações:', newObj);

// Permite apenas a alteração de propiedades em um objeto
const person = {name: 'Bruno'};
Object.seal(person);

person.name = 'Bruno Duarte';
delete person.name;
person.age = 26;

console.log('Variável person após as alterações:', person);

