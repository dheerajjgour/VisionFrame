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
            <img src="/20250617_1104_Vision%20Frame%20Logo_simple_compose_01jxy61tznf1mssmg4c0bxckma.png" alt="Logo" />
          </div>

          <ul className='menu-wrapper'>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="mobile-menu">
          <span className='m-menu-bar' onClick={toggleMenu}>
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
