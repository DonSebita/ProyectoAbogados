import React from 'react'
import conexionBD from '../../lib/cxDB'
import Client from '../../models/Client'
export default function Abogados(/*{clients}*/) {

	console.log(clients)
	return (
		<div>
			<main className="contenedor">
				
			</main>
		</div>
	)
}

export async function serverSideProps(){
	try{
		await conexionBD()
		const res = await clients.find({})
		
		/*const clientes = res.map(doc =>{
			const clientes = doc.toObject()
			clientes._id = `${clientes._id}` //lo mismo que un toString()
			return clientes
		})*/

		console.log(res)
		return {props:{clients:123}}
	}catch(error){
		console.error(error)
	}
}