import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Card from '../../components/Card';

const Container = styled.div`
  .main {
    display: flex;
    justify-content: space-between;

    .button {
      text-decoration: none;
      border: 1px solid #4e2ab2;
      color: #000000;
      padding: 5px;
      height: fit-content;
      border-radius: 5px;
      font-weight: 500;
      &:hover {
        background-color: #4e2ab2;
        color: #ffffff;
      }
    }
  }
  .cards {
    display: flex;
    gap: 20px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

function RecommendSection() {
  return (
    <Container className="container">
      <div className="main">
        <h2>Rekomendasi Untukmu</h2>
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
      </div>
    </Container>
  );
}

export default RecommendSection;
