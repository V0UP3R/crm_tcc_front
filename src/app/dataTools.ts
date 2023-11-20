export const arDatabase = {
	usuarios:[
		{id:1, email:'felipemendes@gmail.com', nome:'Felipe Mendes', curso:'Eng. da Computação', temaTcc:'Gerenciador de TCCs', professor:true, arTccsAlunos:[
			{ id: 2, email: 'fulano@gmail.com', nome: 'Fulano', curso: 'Eng Mecanica', temaTcc: 'Roda 1', professor: false, arTccsAlunos:[]},
			{ id: 2, email: 'fulano@gmail.com', nome: 'Fulano2', curso: 'Eng Alimentos', temaTcc: 'Bolo 1', professor: false, arTccsAlunos:[]}
		]}
	]	
}

interface Usuario{
	id:number, 
	email:string, 
	nome:string, 
	curso:string, 
	temaTcc:string,
	professor:boolean
	arTccsAlunos:Array<Usuario>
}

export function returnUser(username: string): Usuario {
	const usuarioEncontrado = arDatabase.usuarios.find((usuario) => usuario.email === username);

	if (usuarioEncontrado) {
			return usuarioEncontrado;
	} else {
			return { id: 0, email: '', nome: '', curso: '', temaTcc: '', professor: false, arTccsAlunos:[]};
	}
}