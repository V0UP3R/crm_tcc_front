interface CardsProps{
	nome: string
	curso: string
	temaTcc: string
}
export const Card = (props:CardsProps) =>{

	return (
	<div className="bg-branco w-1/3 h-1/3 rounded-3xl flex flex-col items-center justify-between py-4">
		<h1 className="rounded-xl font-semibold text-3xl text-center flex justify-center items-center text-azul-escuro">{props.temaTcc}</h1>
		<p>Aluno: {props.nome}</p>
		<p>Área: {props.curso}</p>
		<button className="bg-azul-escuro w-36 h-11 rounded-3xl font-semibold text-xl text-center text-branco">Acessar</button>
	</div>
	)
}