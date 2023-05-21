import { Avatar } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  .icon {
    padding: 10px;
    color: #ffffff;
    background-color: ${({ theme }) => theme.primary[500]};
    border-radius: 50%;
    width: max-content;
  }
  .img {
    display: flex;
    gap: 10px;
  }
`;

function CardInfo({
  maxWidth,
  minWidth,
  img,
  icon,
  title,
  subtitle,
  desc,
  color,
}) {
  return (
    <Container>
      <div className="card" style={{ maxWidth: maxWidth, minWidth: minWidth }}>
        <div className="card-body">
          {img ? (
            <div className="img">
              <Avatar alt="Remy Sharp" src={img} />
              <div className="text">
                <h5 className="card-title mb-0">{title}</h5>
                <h6 className="card-subtitle text-muted mb-4">{subtitle}</h6>
              </div>
            </div>
          ) : (
            <>
              <div className="icon mb-4" style={{ backgroundColor: color }}>
                {icon}
              </div>
              <h5 className="card-title mb-0">{title}</h5>
            </>
          )}

          <p className="card-text">{desc}</p>
        </div>
      </div>
    </Container>
  );
}

export default CardInfo;
