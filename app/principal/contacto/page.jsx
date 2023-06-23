import React from 'react'
import styles from '../../../styles/Formulario.module.css'

export default function Index() {
	return (
		<div className={styles.cuadroformulario}>
    		<section className={styles.formregister}>
	        	<h4>Formulario de Contacto</h4>
		    	<input className={styles.controls} type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
		     	<input className={styles.controls} type="text" name="apellido" id="apellido" placeholder="Ingrese su Apellido"/>
		        <input className={styles.controls} type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
		        <input className={styles.controls} type="tel" name="telefono" id="telefono" placeholder="Ingrese su Número de Teléfono"/>
		        <textarea className={styles.controls} name="mensaje" id="mensaje" placeholder="Deje su Mensaje"></textarea>
	        	<input className={styles.botons} type="submit" value="Enviar"/>
    		</section>
    	</div>  
	)
}