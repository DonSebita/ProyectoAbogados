import styles from '../styles/Index.module.css'
import Image from'next/image'
import Link from 'next/link';
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
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
              width={500}
              height={400} 
              alt="imagenPrincipal"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
