//requires
// const fs = require('fs');
// const fs = require('express'); -- No node
// const fs = require('./path'); --archivos que nosotros mismo hicimos


//yargs
// const argv = require('yargs')
// 	.command('limite','Imprime la tabla de multiplicar',{
// 		base:{
// 			demand:true,
// 			alias:'b'
// 		},
// 		limite:{
// 			alias:'l',
// 			default:10
// 		}
// 	})
// 	.command('crear','Imprime la tabla de multiplicar',{
// 		base:{
// 			demand:true,
// 			alias:'b'
// 		},
// 		limite:{
// 			alias:'l',
// 			default:10
// 		}
// 	})
// 	.help()
// 	.argv;

const {argv} = require('./yargs.js');

const {createFile ,read } = require('./multiplicar/multiplicar');

// let base = 1 ;

// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=');
// base  = base[1];

// console.log(argv.limite);
// console.log(argv2);

let command = argv._[0];
switch(command){
	case 'listar':
		read(argv.b,argv.limite)
		.then(table=>console.log(`Tabla del numero ${argv.b} \n${table}`))
		.catch(err=>console.log(err));
	break;
	case 'crear':
		createFile(argv.base,argv.limite)
		.then(nameF=>console.log(`Archivo Creado: ${nameF}`))
		.catch(err=>console.log(err));
	break;
	default:
		console.log('comando no permitido');
	break;
}

// createFile(base)
// .then(nameF=>console.log(`Archivo Creado: ${nameF}`))
// .catch(err=>console.log(err));