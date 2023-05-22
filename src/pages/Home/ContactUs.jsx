import { Email, LocationOn, WhatsApp } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  .first {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button,
  .sosmed {
    border: 1px solid ${({ theme }) => theme.primary[500]};
    max-width: 400px;
    width: 100%;
    padding: 5px 15px;
    height: max-content;
    border-radius: 10px;
    text-align: start;
    font-weight: 500;
    margin: 10px 0;
    &:hover {
      background-color: ${({ theme }) => theme.secondary[500]};
      color: white;
    }
  }

  .sosmed {
    background-color: ${({ theme }) => theme.secondary[500]};
    color: white;
  }
  .map {
    border: 1px solid ${({ theme }) => theme.primary[500]};
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 20px;
  }
`;

function ContactUs() {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <Container ref={contactRef}>
      <br />
      <div className="container" id="contact">
        <div className="row">
          <div className="col-12 col-md-6 first">
            <h4>Kontak Kami</h4>
            <a href="https://goo.gl/maps/v3JvHeiV4vUCy9wK8" className="button">
              <button>
                <LocationOn />
                &nbsp; Jl. Imam Munandar, Pekanbaru, Riau
              </button>
            </a>
            <a
              href="mailto:bintangnya.property@gmail.com"
              className="button text-break"
            >
              <button>
                <Email />
                &nbsp; bintangnya.property@gmail.com
              </button>
            </a>
            <a
              href="https://wa.me/6282387300999/?text=Hallo"
              className="button"
            >
              <button>
                <WhatsApp />
                &nbsp; 0823 8730 0999
              </button>
            </a>
            <div className="sosmed d-flex justify-content-between">
              <span>Sosial Media</span>
              <div className="link d-flex gap-2">
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
                <a
                  href="https://facebook.com/bintang.pekanbaru"
                  title="facebook"
                >
                  <div>
                    <span className="iconify" data-icon="logos:facebook"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              title="Bintang Property"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8342993494648!2d101.49945853836297!3d0.4963690819857949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a96b75bee5fd%3A0x84b9373b204a42c2!2sBintang%20Property!5e0!3m2!1sid!2sid!4v1684566422136!5m2!1sid!2sid"
              width="100%"
              height="350"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <br />
    </Container>
  );
}

export default ContactUs;
