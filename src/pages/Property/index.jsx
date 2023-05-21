import React from 'react';
import { styled } from 'styled-components';
import Card from '../../components/Card';

const Container = styled.div`
  /* input {
    padding: 0 5px;
    border: 1px solid ${({ theme }) => theme.secondary[500]};
    border-radius: 5px;
    &:active {
      border: 1px solid ${({ theme }) => theme.secondary[500]};
    }
  }
  button {
    border: 1px solid ${({ theme }) => theme.secondary[500]};
    border-radius: 5px;
    font-weight: 500;
    &:hover {
      background-color: ${({ theme }) => theme.secondary[500]};
      color: #ffffff;
    }
  } */
`;

function Property() {
  return (
    <Container className="container mt-3 mb-3">
      <div className="searchInput d-flex gap-2">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
      <div className="d-flex gap-2 flex-wrap justify-content-around mt-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
}

export default Property;
