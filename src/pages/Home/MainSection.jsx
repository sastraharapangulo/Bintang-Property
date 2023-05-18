import React from 'react';
import bg from '../../assets/images/bg.jpg';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.div`
  position: relative;
  min-height: 260px;
  height: 70vh;
  max-height: 360px;
  background-image: url(${bg});
  background-repeat: repeat-x;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #4e2ab2;
    opacity: 0.4;
  }
  .container {
    position: relative;
    height: 100%;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 25px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    max-width: 500px;

    .button {
      text-decoration: none;
      border: 1px solid #4e2ab2;
      color: #ffffff;
      padding: 5px;
      height: fit-content;
      border-radius: 5px;
      font-weight: 500;
      &:hover {
        background-color: #4e2ab2;
      }
    }

    .MuiButton-outlined {
      color: #ffffff;
    }
  }
`;

function MainSection() {
  return (
    <Main>
      <div className="container">
        <div className="text">
          <h1 className="lh-1">Jual Beli & Sewa Menyewa Property</h1>
          <p>Solusi Cepat, Tepat Urusan Jual Beli Seperti Yang Anda Mau</p>
          <div className="link" style={{ gap: '.5rem', display: 'flex' }}>
            <Link to="/about" className="button">
              TENTANG KAMI
            </Link>
            <Link to="#saya" className="button">
              TENTANG KAMI
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default MainSection;
