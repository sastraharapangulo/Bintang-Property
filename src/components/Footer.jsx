import React from 'react';
import { styled } from 'styled-components';
import logo from '../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import { Email, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Divider } from '@mui/material';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary[500]};
  color: #ffffff;
  .brand {
    background-color: rgb(255, 255, 255);
    display: flex;
    width: 100%;
    text-decoration: none;
    color: black;
    padding: 10px;
  }
  .menu {
    text-decoration: none;
    color: #b1b1b1;
    &:hover {
      color: #ffffff;
    }
  }
  .MuiDivider-root {
    border: 1px solid #ffffff;
  }
`;

function Footer() {
  return (
    <Container>
      <br />
      <div className="container">
        <Link className="brand " to="/" title="Beranda">
          <img src={logo} alt="logo" width="80" />
          <span className="fs-5 fw-bold">Bintang Property</span>
        </Link>
        <div className="row mb-3 mt-3">
          <div className="col-12 col-md-4">
            <p className="">
              Bintang Propery adalah Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium, nobis voluptatem ex deleniti
              mollitia possimus quae earum commodi consequatur ipsam!
            </p>
          </div>
          <div className="col-4 col-md-4 d-grid">
            <Link className="menu">Properti</Link>
            <Link className="menu">Promo</Link>
            <Link className="menu">Tentang Kami</Link>
            <Link className="menu">Kontak Kami</Link>
          </div>
          <div className="col-8 col-md-4 d-grid">
            Kontak Kami
            <a
              href="https://bintangnya.property@gmail.com"
              className="menu text-break"
            >
              <Email />
              &nbsp; bintangnya.property@gmail.com
            </a>
            <a href="https://bintangnya.property@gmail.com" className="menu">
              <WhatsApp />
              &nbsp; 0823 8730 0999
            </a>
            <div className="d-flex gap-2">
              <a
                href="https://https://www.instagram.com/bintang_property/"
                title="instagram"
              >
                <div>
                  <span
                    className="iconify"
                    data-icon="skill-icons:instagram"
                  ></span>
                </div>
              </a>
              <a href="https://facebook.com/bintang.pekanbaru" title="facebook">
                <div>
                  <span className="iconify" data-icon="logos:facebook"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Divider />
        <div className="d-flex justify-content-between">
          <div className="d-grid text-white-50">
            Programmer: Sastra Harapan Gulo
            <div className="d-flex gap-2">
              <a
                href="https://www.linkedin.com/in/sastra-harapan-gulo/"
                title="LinkedIn"
                className="text-white-50"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/sastraharapangulo/"
                title="GitHub"
                className="text-white-50"
              >
                <GitHub />
              </a>
            </div>
          </div>
          <span> &copy;2023 Bintang Property</span>
        </div>
      </div>
      <br />
    </Container>
  );
}

export default Footer;
