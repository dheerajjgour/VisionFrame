import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // toggle state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // toggle value
  };

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

          {/* ✅ Toggle class based on state */}
          <ul className={`m-menu-wrapper ${menuOpen ? 'open' : ''}`}>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
