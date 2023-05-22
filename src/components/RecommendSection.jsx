import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Card from './Card';

const Container = styled.div`
  .main {
    display: flex;
    justify-content: space-between;

    .button {
      text-decoration: none;
      border: 1px solid ${({ theme }) => theme.secondary[500]};
      color: #000000;
      padding: 0 5px;
      height: fit-content;
      border-radius: 5px;
      font-weight: 500;
      &:hover {
        background-color: ${({ theme }) => theme.secondary[500]};
        color: #ffffff;
      }
    }
  }
  .cards {
    display: flex;
    gap: 20px;
    overflow: scroll;

    .content {
      text-decoration: none;
      color: #000000;
    }
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

function RecommendSection() {
  return (
    <Container className="container">
      <br />
      <div className="main">
        <h4>Rekomendasi Untukmu</h4>
        <Link to="/about" className="button">
          Lainnya..
        </Link>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <br />
    </Container>
  );
}

export default RecommendSection;
