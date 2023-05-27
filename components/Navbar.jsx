import { useState } from 'react';
import Link from 'next/link'
import Image from'next/image'
import styles from '../styles/Navbar.module.css'
const links = [{
    label : 'Inicio',
    ruta: '/'
  },{
    label : 'Locales',
    ruta: '/locales'
  },{
    label : 'Contactanos',
    ruta: '/contacto'
}]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
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