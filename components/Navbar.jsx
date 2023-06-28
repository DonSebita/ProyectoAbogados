import Link from 'next/link'
import Image from'next/image'
import styles from '../styles/Navbar.module.css'
const links = [{
    label : 'Inicio',
    ruta: '/'
  },{
    label : 'Locales',
    ruta: '/principal/locales'
  },{
    label : 'Contactanos',
    ruta: '/principal/contacto'
}]
const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href = '/'>
          <Image
              src="/../public/logo.png"
              width={50}
              height={50}
              alt="logo"
              style={{
                objectFit: "cover",
                borderRadius: "50px",
              }}
          />
        </Link>
      </div>


      <div className={styles.navbarLinks}>
      {links.map(({label,ruta})=>(
          <li key={ruta}>
            <Link href={ruta}>{label}</Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;