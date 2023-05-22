import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../assets/images/logo/logo.png';

const Container = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.primary[500]};
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  .navbar {
    padding: 4px 0;
  }
`;

function Navbar() {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/" title="Beranda">
            <img src={logo} alt="logo" width="100" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'nav-link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/property"
                  className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'nav-link'
                  }
                >
                  Properti
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'nav-link'
                  }
                >
                  Berita
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'nav-link'
                  }
                >
                  Tentang Kami
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Simulasi KPR
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.btnproperti.co.id/tools/simulasi-kpr"
                    >
                      BANK BTN
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.lamudi.co.id/kalkulator-simulasi-kpr-bni"
                    >
                      BANK BNI
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
