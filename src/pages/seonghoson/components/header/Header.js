import React from 'react';
import { useNavigate } from 'react-router';
import './Header.scss';

function Header() {
  const navigate = useNavigate();

  function navigateClick(location) {
    navigate(location);
  }

  return (
    <header className="header_main">
      <div
        className="header_logo_wrapper"
        onClick={() => navigateClick('/list-seonghoson')}
      >
        <h1>We bucks</h1>
      </div>
      <div className="header_menu_list">
        <span>COFFEE</span>
        <span>MENU</span>
        <span>STORE</span>
        <span
          id="logout_button"
          onClick={() => navigateClick('/login-seonghoson')}
        >
          LOGOUT
        </span>
      </div>
    </header>
  );
}

export default Header;
