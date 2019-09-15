const opt = {
	base:{
		demand:true,
		alias:'b'
	},
	limite:{
		alias:'l',
		default:10
	}
};
const argv = require('yargs')
	.command('limite','Imprime la tabla de multiplicar',opt)
	.command('crear','Imprime la tabla de multiplicar',opt)
	.help()
	.argv;

module.exports={
	argv
}