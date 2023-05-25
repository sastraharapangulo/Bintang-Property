import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Card from './Card';
import PropertyData from '../assets/data/Property';

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
  const [randomProperties, setRandomProperties] = useState([]);

  useEffect(() => {
    // List data properti
    const propertyData = PropertyData.data;

    // Mendapatkan 5 data properti secara acak
    const getRandomProperties = () => {
      const randomProperties = [];
      while (randomProperties.length < 4) {
        const randomProperty =
          propertyData[Math.floor(Math.random() * propertyData.length)];
        if (!randomProperties.includes(randomProperty)) {
          randomProperties.push(randomProperty);
        }
      }
      return randomProperties;
    };

    // Set data properti acak ke state
    setRandomProperties(getRandomProperties());
  }, []);
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
        {randomProperties.map((property) => (
          <div key={property.id}>
            <Card item={property} />
          </div>
        ))}
      </div>
      <br />
    </Container>
  );
}

export default RecommendSection;
