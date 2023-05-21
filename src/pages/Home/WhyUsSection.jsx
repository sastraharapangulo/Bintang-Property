import { GppGoodOutlined } from '@mui/icons-material';
import React from 'react';
import { styled } from 'styled-components';
import CardInfo from '../../components/CardInfo';

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary[500]};
  .cards {
    display: flex;
    overflow-x: scroll;
    justify-content: space-between;
    gap: 10px;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

function WhyUsSection() {
  return (
    <Container>
      <div className="container">
        <br />
        <h3 className="text-center text-white">
          Kenapa Harus Bintang Property?
        </h3>
        <div className="cards">
          <CardInfo
            minWidth="250px"
            maxWidth="18rem"
            icon={<GppGoodOutlined />}
            title="Card Title"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
          <CardInfo
            maxWidth="18rem"
            minWidth="250px"
            color="#f44534"
            icon={<GppGoodOutlined />}
            title="Card Title"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
          <CardInfo
            minWidth="250px"
            maxWidth="18rem"
            icon={<GppGoodOutlined />}
            title="Card Title"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
          <CardInfo
            minWidth="250px"
            maxWidth="18rem"
            color="#f44534"
            icon={<GppGoodOutlined />}
            title="Card Title"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
        </div>
      </div>
    </Container>
  );
}

export default WhyUsSection;
