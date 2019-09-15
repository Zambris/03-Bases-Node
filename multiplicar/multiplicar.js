const fs = require('fs');

// module.exports.createFila=(base)=>{
function createFile(base,listar=10){
	return new Promise((result,reject)=>{
		let tabla='';
		let name = `Tabla${base}.txt`;

		if(!Number(base)){
			reject('it is not a number');
			return;
		}else{
			for(let j=1;j<=listar;j++){
				tabla += `${base} * ${j} = ${base*j} \n`;
			}

			fs.writeFile('tablas/'+name,tabla,(err)=>{
				if(err){
					reject(err);
				}else{
					result(`tabla No. ${base}.txt`);
				}
			});
		}

	});
}

function read(number,listar=10){
	return new Promise((result,err)=>{
		let tabla = '';
		if(!Number(number)){
			err('it is not a number');
			return ;
		}else{
			for(let j=1;j<=listar;j++){
				tabla += `${number} * ${j} = ${number*j} \n`;
			}
			result(tabla);
		}
	});
}

module.exports={
	createFile,
	read
}
