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

function TestimonialSection() {
  return (
    <Container>
      <div className="container">
        <br />
        <h3 className="text-center text-white">Testimoni</h3>
        <div className="cards">
          <CardInfo
            minWidth="270px"
            maxWidth="24rem"
            color="#f44534"
            img="/static/images/avatar/1.jpg"
            title="Card Title"
            subtitle="subtitle"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
          <CardInfo
            minWidth="270px"
            maxWidth="24rem"
            color="#f44534"
            img="/static/images/avatar/1.jpg"
            title="Card Title"
            subtitle="subtitle"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
          <CardInfo
            minWidth="270px"
            maxWidth="24rem"
            color="#f44534"
            img="/static/images/avatar/1.jpg"
            title="Card Title"
            subtitle="subtitle"
            desc="Some quick example text to build on the card title and make up the
              bulk of the cards content"
          />
        </div>
      </div>
      <br />
    </Container>
  );
}

export default TestimonialSection;
