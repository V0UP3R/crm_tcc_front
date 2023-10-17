'use client'
import {BiArrowBack } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import Image from "next/image"

export default function Dashboard() {
	return (
		<div className="w-screen h-screen flex justify-between">
			<div  className="w-1/6 h-screen bg-azul-escuro flex flex-col items-center justify-between">
				<span className="w-full h-2/6 max-h-48 bg-no-repeat logo bg-contain bg-center" />
				<div className="w-4/6 my-6 text-branco flex flex-col">
					<div className="h-12 flex items-center justify-center gap-1 border border-solid border-white rounded-xl">
						<RxDashboard className='w-8 h-8'/>
						<p>Dashboard</p>
					</div>
				</div>
				<div className="w-4/6 my-6 text-branco flex flex-col gap-6">
					<div className="h-12 flex items-center justify-center gap-4 border border-solid border-white rounded-xl">
						<MdOutlineAccountCircle className='w-8 h-8'/>
						<p>Perfil</p>
					</div>
					<div className="h-12 flex items-center justify-center gap-4 border border-solid border-white rounded-xl">
						<BiArrowBack className='w-8 h-8' />
						<p>Sair</p>
					</div>
				</div>
			</div>

			<div className="flex items-end justify-center h-full w-[83%]">
				<div className="bg-cinza w-[95%] h-[80%] mb-5">

				</div>
			</div>
		</div>
	)
}