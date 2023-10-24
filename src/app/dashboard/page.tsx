'use client'
import {BiArrowBack } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {

	const [perfil, setPerfil] = useState(false)
	const [dadosPerfil, setDadosPerfil] = useState({nome:'Felipe Mendes', curso:'Eng. da Computação', temaTcc:'Gerenciador de TCCs'})

	const router = useRouter()

	const sairDashboard = () => {
		router.push('/')
	}

	const exibirPerfil = () => {
		if(perfil){
			setPerfil(false)
		} else {
			setPerfil(true)
			setDadosPerfil({nome:'Felipe Mendes', curso:'Eng. da Computação', temaTcc:'Gerenciador de TCCs'})
		}
	}

	return (
		<div className="w-screen h-screen flex justify-between">
			<div  className="w-1/6 h-screen bg-azul-escuro flex flex-col items-center justify-between">
				<span className="w-full h-2/6 max-h-48 bg-no-repeat bg-contain bg-center" />
				<div className="w-4/6 my-6 text-branco flex flex-col">
					<div className="h-12 flex items-center justify-center gap-1 border border-solid border-white rounded-xl">
						<RxDashboard className='w-8 h-8'/>
						<p>Dashboard</p>
					</div>
				</div>
				<div className="w-4/6 my-6 text-branco flex flex-col gap-6">
					<div onClick={exibirPerfil} className="h-12 flex items-center justify-center gap-4 border border-solid border-white rounded-xl hover:cursor-pointer hover:bg-slate-700">
						<MdOutlineAccountCircle className='w-8 h-8'/>
						<p>Perfil</p>
					</div>
					<div onClick={sairDashboard} className="h-12 flex items-center justify-center gap-4 border border-solid border-white rounded-xl hover:cursor-pointer hover:bg-slate-700">
						<BiArrowBack className='w-8 h-8' />
						<p>Sair</p>
					</div>
				</div>
			</div>

			<div className="flex items-end justify-center h-full w-[83%]">
				<div className={`bg-cinza w-[95%] h-[80%] mb-5 pt-4 px-4 ${perfil ? `flex justify-center items-center` : ''}`}>
					{
						perfil ? 
						<>
							<div className="w-1/2 flex flex-col items-center">
								<p>Nome</p>
								<label className="w-1/2 p-2 m-4 bg-branco rounded-2xl" htmlFor="name">{dadosPerfil.nome}</label>
								<p>Curso</p>
								<label className="w-1/2 p-2 m-4 bg-branco rounded-2xl" htmlFor="name">{dadosPerfil.curso}</label>
								<p>Tema do TCC</p>
								<label className="w-1/2 p-2 m-4 bg-branco rounded-2xl" htmlFor="name">{dadosPerfil.temaTcc}</label>
							</div>
						</> 
						: 
						<>
						<div className="flex w-full h-44 justify-between">
							<button className="bg-azul-escuro w-44 h-14 rounded-3xl font-semibold text-xl text-center text-branco" >Novo Trabalho</button>
							
							<div className="bg-azul-escuro w-52 h-14 rounded-3xl font-semibold text-3xl text-center flex justify-center items-center text-branco"><h1>Trabalhos</h1></div>
							
							<div className="bg-branco w-52 h-8 rounded-3xl font-semibold text-xl text-center flex justify-center items-center"><h1>Filtros</h1></div>
						</div>
						<div className="bg-branco w-1/3 h-1/3 rounded-3xl flex flex-col items-center justify-between py-4">
							<h1 className="rounded-xl font-semibold text-3xl text-center flex justify-center items-center text-azul-escuro">{dadosPerfil.temaTcc}</h1>
							<p>Aluno: {dadosPerfil.nome}</p>
							<p>Área: {dadosPerfil.curso}</p>
							<button className="bg-azul-escuro w-36 h-11 rounded-3xl font-semibold text-xl text-center text-branco">Acessar</button>
						</div>
						</>
					}
				</div>
			</div>
		</div>
	)
}