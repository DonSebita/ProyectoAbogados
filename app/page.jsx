import styles from '../styles/Index.module.css'
import Image from'next/image'
import Link from 'next/link';

export default function HomePage() {
  return (

<div className={styles.cuadro}>
  <div className={styles.contenido}>
    <div className={styles.texto}>
      <h2>Quienes somos</h2>
      <p>
        Somos un equipo de abogados especializados en diversas áreas del derecho,
        comprometidos en ofrecer soluciones jurídicas efectivas a nuestros clientes.
        Con una amplia experiencia en litigios y asesoramiento legal, brindamos un servicio personalizado y de calidad,
        adaptándonos a las necesidades de cada caso.
      </p>
      <Link href="/principal/contacto">
        <button className={styles.btnAsesoramiento}>Pedir Asesoramiento</button>
      </Link>
    </div>
    <div className={styles.imagen}>
      <Image
        src="/../public/img-pag-principal.png"
        width={500} // Ajusta el ancho de la imagen según tus necesidades
        height={400} // Ajusta la altura de la imagen según tus necesidades
        alt="imagenPrincipal"
      />
    </div>
  </div>
</div>

  )
}
