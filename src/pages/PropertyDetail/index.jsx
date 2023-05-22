import React from 'react';
import { styled } from 'styled-components';

import slide_image_1 from '../../assets/images/img_2.jpg';
import slide_image_2 from '../../assets/images/img_6.jpg';
import slide_image_3 from '../../assets/images/img_7.jpg';
import { Divider, Button } from '@mui/material';
import RecommendSection from '../../components/RecommendSection';

const Container = styled.div`
  .img {
    max-height: 500px;
    border-radius: 30px;
  }
  .MuiDivider-root {
    border: 1px solid #000000;
    margin: 10px 0;
  }
  .chat {
    position: sticky;
    top: 60px;
    z-index: 998;
  }
`;

function PropertyDetail() {
  return (
    <Container className="container">
      <br />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide_image_1} className="d-block img w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide_image_2} className="d-block img w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide_image_3} className="d-block img w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="desc">
        <div className="row mt-2">
          <div className="col-12 col-md-6">
            <span className="fs-5 fw-bolder" style={{ color: '#4e2ab2' }}>
              Rp 100.000.000
            </span>
            {/* <span>/Tahun</span> */}
            <div className="desc">
              <h6 className="card-subtitle mt-2">Perumahan Griya Indah</h6>
              <p className="fs-6 text-muted">Pekanbaru, Riau</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="fs-5 fw-bolder" style={{ color: '#000000' }}>
              Promo
            </span>
            <h6 className="card-subtitle mt-2">
              Diskon 5% bagi 5 pembeli pertama
            </h6>
          </div>
        </div>
        <Divider />
        <div className="chat">
          <a
            href="https://wa.me/6282387300999/?text=Hallo, Saya ingin bertanya mengenai properti ini http://localhost:3000/property/khakjsja"
            className="text-decoration-none"
          >
            <Button variant="contained" color="success">
              <span className="iconify" data-icon="logos:whatsapp-icon"></span>
              <span className="number"> &nbsp; Tanya Unit</span>
            </Button>
          </a>
        </div>
        <Divider />
        <h4>Informasi Properti</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At sapiente
          consequuntur aut repellendus temporibus vel! Molestias neque incidunt
          quasi. Cumque necessitatibus praesentium sapiente qui iure at enim
          maiores, reiciendis veritatis.
        </p>
        <Divider />
        <h4>Fasilitas</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At sapiente
          consequuntur aut repellendus temporibus vel! Molestias neque incidunt
          quasi. Cumque necessitatibus praesentium sapiente qui iure at enim
          maiores, reiciendis veritatis.
        </p>
        <Divider />
        <h4>Lokasi Sekitar</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At sapiente
          consequuntur aut repellendus temporibus vel! Molestias neque incidunt
          quasi. Cumque necessitatibus praesentium sapiente qui iure at enim
          maiores, reiciendis veritatis.
        </p>
        <Divider />
        <RecommendSection />
      </div>
      <br />
    </Container>
  );
}

export default PropertyDetail;
