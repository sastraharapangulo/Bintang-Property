import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  height: 70vh;
`;

function NoPages() {
  return (
    <Container className="container d-flex align-items-center justify-content-center text-center">
      <div className="text">
        <h1>404 Not Found</h1>
        <h4>Halaman tidak ditemukan</h4>
        <Link to="/">Home</Link> &nbsp;
        <Link to="property">Property</Link>
      </div>
    </Container>
  );
}

export default NoPages;
