import React from 'react';
import img from '../assets/images/img_1.jpg';
import { styled } from 'styled-components';
import { BathtubOutlined, SingleBedOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 16rem;
  @media (max-width: 760px) {
    max-width: 100%;
  }
  p {
    margin: 0;
  }
  .MuiDivider-root {
    border: 1px solid #000000;
  }
  .fasilitas {
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

function Card() {
  return (
    <Container className="card" style={{ minWidth: '240px', width: '100%' }}>
      <Link to="/property/khakjsja" className="text-decoration-none text-black">
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ width: '100%', height: '240px' }}
        />

        <div className="card-body">
          {/* <h4 style={{ color: '#4e2ab2', fontSize: '1.2rem', fontWeight: 700 }}>
          Rp 100.000.000
        </h4> */}
          <span className="fs-5 fw-bolder" style={{ color: '#4e2ab2' }}>
            Rp 100.000.000
          </span>
          {/* <span>/Tahun</span> */}
          <div className="desc">
            <h6 className="card-subtitle mt-2">Perumahan Griya Indah</h6>
            <p className="fs-6 text-muted">Pekanbaru, Riau</p>
          </div>
          <Divider />
          <div className="fasilitas text-center">
            <span>
              4 <SingleBedOutlined />
            </span>
            <span>
              | 4 <BathtubOutlined />
            </span>
            <span>
              | LT : 4 m<sup>2</sup>
            </span>
            <span>
              | LB : 4 m<sup>2</sup>
            </span>
          </div>
        </div>
      </Link>
    </Container>
  );
}

export default Card;
