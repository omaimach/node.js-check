var generator = require('generate-password');

var password = generator.generate({
	length: 25,
	numbers: true
});


console.log(password);