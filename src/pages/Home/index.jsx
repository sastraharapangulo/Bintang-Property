import React from 'react';
import { styled } from 'styled-components';
import MainSection from './MainSection';
import SearchSection from './SearchSection';
import PromoSection from './PromoSection';
import RecommendSection from './RecommendSection';

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <MainSection />
      <SearchSection />
      <PromoSection />
      <RecommendSection />

      <a href="mailto:email@example.com">Click to Send an Email</a>
      <a href="https://wa.me/6281360167381/?text=Hallo">Chat</a>
    </Container>
  );
}

export default Home;
