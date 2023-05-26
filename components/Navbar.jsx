import { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/locaciones">Locaciones</a>
        <a href="/agendar-hora">Agendar hora</a>
      </div>
    </nav>
  );
};

export default Navbar;