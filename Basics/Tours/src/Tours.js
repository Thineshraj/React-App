import React, { useState, useEffect } from 'react';
import { data } from './data';
import './tours.css';

const Tours = () => {
  const [places, setPlaces] = useState(data);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {});

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  function remove(id) {
    const newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  }
  return (
    <>
      <h1 className='top-heading'>Our Tours</h1>
      <span className='heading-line'></span>

      <div className='container'>
        {places.map((place) => {
          const { id, img, title, desc, price } = place;
          return (
            <div key='id' className='place-alternate'>
              <div className='image-contain'>
                <img src={img} className='place-img' alt='imageplace' />
              </div>

              <div className='place-detail'>
                <div className='title-with-price'>
                  <h4 className='place-title'>{title}</h4>
                  <h4 className='place-price'>${price}</h4>
                </div>
                <p className='place-desc'>{desc}</p>
              </div>
              <div className='button-contain'>
                <button className='btn' onClick={() => remove(id)}>
                  Not Interest
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// const Loading = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   if (isLoading) {
//     return <h1 className='top-heading'>Loading...</h1>;
//   }
// };

export default Tours;
