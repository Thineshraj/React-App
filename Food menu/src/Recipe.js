import React, { useState } from 'react';

const Recipe = ({ items }) => {
  return (
    <section className='item-section'>
      {items.map((item) => {
        const { id, img, name, price, describe } = item;
        return (
          <div className='item-alternate' key={id}>
            <img src={img} alt={name} className='item-img' />
            <div className='item-info'>
              <div className='name-and-price'>
                <h3 className='item-name'>{name}</h3>
                <h3 className='item-price'>${price}</h3>
              </div>
              <p className='item-desc'>{describe}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Recipe;
