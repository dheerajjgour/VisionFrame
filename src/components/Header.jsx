import React, { useState } from 'react';
import { useEffect } from 'react';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // toggle state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // toggle value
  };
  useEffect(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}, []);


  return (
    <div className='header'>
      <div className='container'>
        <div className='wrapper'>
          <div className="logo">
            <img src="/LOGO-1.png" alt="Logo" />
          </div>

          <ul className='menu-wrapper'>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#Service'>Service</a></li>
            <li ><a href='#Contact'>Contact</a></li>
          </ul>
        </div>

        <div className="mobile-menu">
          <span className={`m-menu-bar ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
          </span>

          <ul className={`m-menu-wrapper ${menuOpen ? 'open' : ''}`}>
             <li><a href='#Home'>Home</a></li>
            <li><a href='#Service'>Service</a></li>
            <li ><a href='#Contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
