import styles from '../styles/Index.module.css'
import Image from'next/image'
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
            <button className={styles.btnAsesoramiento}>Pedir Asesoramiento</button>
          </div>
          <div className={styles.imagen}>
            <Image
              src="/../public/img-pag-principal.png"
              width={100}
              height={100}
              alt="imagenPrincipal"
            />
          </div>
        </div>
      </div>

  )
}
