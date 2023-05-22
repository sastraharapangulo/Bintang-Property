import { Button } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 7%;
  z-index: 998;
  .MuiButton-root {
    border-radius: 50%;
    width: max-content;
    height: 58px;
    &:hover {
      border-radius: 10px;
      .number {
        display: block;
        width: 100%;
      }
    }
  }
  .iconify {
    font-size: 2rem;
  }
  .number {
    display: none;
    width: 0px;
    transition: 1s ease;
  }
`;

function WhatsApp() {
  return (
    <Container className="mb-3">
      <a
        href="https://wa.me/6282387300999/?text=Hallo"
        className="text-decoration-none"
      >
        <Button variant="contained" color="success">
          <span className="iconify" data-icon="logos:whatsapp-icon"></span>
          <span className="number"> &nbsp; 0823 8730 0999</span>
        </Button>
      </a>
    </Container>
  );
}

export default WhatsApp;
