import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/images/img_1.jpg';
import slide_image_2 from '../../assets/images/img_2.jpg';
import slide_image_3 from '../../assets/images/img_3.jpg';
import slide_image_4 from '../../assets/images/img_4.jpg';
import slide_image_5 from '../../assets/images/img_5.jpg';
import slide_image_6 from '../../assets/images/img_6.jpg';
import slide_image_7 from '../../assets/images/img_7.jpg';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  .swiper_container {
    height: 350px;
    .swiper-slide {
      width: 300px;
      height: 300px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
      .fs-5 {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: #ffffff;
      }

      &:hover {
        img {
          filter: blur(1px);
        }
        .fs-5 {
          /* filter: drop-shadow(-20px 0px 20px rgba(0, 0, 0, 0.9)); */
          /* text-shadow: 0px 0px 10px #000000; */
          background-color: #000000;
        }
      }
    }

    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
      display: none;
    }

    .slider-controler {
      position: relative;
      bottom: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slider-controler .swiper-button-next {
      left: 58% !important;
      transform: translateX(-58%) !important;
    }

    @media (max-width: 990px) {
      .slider-controler .swiper-button-next {
        left: 70% !important;
        transform: translateX(-70%) !important;
      }
    }

    @media (max-width: 450px) {
      .slider-controler .swiper-button-next {
        left: 80% !important;
        transform: translateX(-80%) !important;
      }
    }

    @media (max-width: 990px) {
      .slider-controler .swiper-button-prev {
        left: 30% !important;
        transform: translateX(-30%) !important;
      }
    }

    @media (max-width: 450px) {
      .slider-controler .swiper-button-prev {
        left: 20% !important;
        transform: translateX(-20%) !important;
      }
    }

    .slider-controler .slider-arrow {
      background: var(--white);
      width: 3.5em;
      height: 3.5em;
      border-radius: 50%;
      left: 42%;
      transform: translateX(-42%);
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-controler .slider-arrow ion-icon {
      font-size: 2em;
      color: #222224;
    }

    .slider-controler .slider-arrow::after {
      content: '';
    }

    .swiper-pagination {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 15em !important;
      bottom: 1em;
    }

    .swiper-pagination .swiper-pagination-bullet {
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .swiper-pagination .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.primary[500]};
    }
  }
`;

function PromoSection() {
  const promoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#promo') {
      promoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <Container className="container" id="promo" ref={promoRef}>
      <br />
      <h4 className="text-center">Promo Khusus Untukmu</h4>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_1} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_2} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_3} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_4} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_5} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_6} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/property/khakdj">
            <img src={slide_image_7} alt="slide_image" />
            <p className="fs-5 text-center">
              Diskon 5% untuk 5 pembeli pertama
            </p>
          </Link>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIos />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIos />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </Container>
  );
}

export default PromoSection;
