import React from 'react';
import img from '../assets/images/img_1.jpg';

function Card() {
  return (
    <div className="card" style={{ maxWidth: '18rem', width: '240px' }}>
      <div className="action">
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ width: '100%', height: '210px' }}
        />
        <a href="https://wa.me/6281360167381/?text=Hallo">Chat</a>
      </div>

      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
