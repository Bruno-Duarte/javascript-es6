let user = {
	name: 'Bruno'
};

// Alterando a propiedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

// Criando uma propiedade
user.lastName = 'Duarte';

// Deletando uma propiedade
delete user.name;

console.log(user);
