import React from 'react';
import { styled } from 'styled-components';
import MainSection from './MainSection';
import SearchSection from './SearchSection';
import PromoSection from './PromoSection';
import RecommendSection from './RecommendSection';
import WhyUsSection from './WhyUsSection';
import TestimonialSection from './TestimonialSection';
import ContactUs from './ContactUs';

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <MainSection />
      <PromoSection />
      <RecommendSection />
      <WhyUsSection />
      <TestimonialSection />
      <SearchSection />
      <ContactUs />
    </Container>
  );
}

export default Home;
