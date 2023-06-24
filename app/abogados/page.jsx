"use client"
import LoginForm from '../../components/Formulario'
import conexionBD from '../../lib/mongodb'

export default function Abogados() {
	return (
		<div>
	      <h1>Iniciar Sesión</h1>
	      <LoginForm/>
	    </div>
	)
}
export async function getServerSideProps(){
	try{
		await conexionBD()

		return {props: {abogados:123}}
	}catch(error){
		console.log.error 
	}
}