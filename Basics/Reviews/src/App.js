import React, { useState, useEffect } from 'react';
import Reviews from './Reviews';

//CSS
import './reviews.css';

const App = () => {
  return (
    <>
      <div className='review-section'>
        <div className='container'>
          <h1 className='top-heading'>Our Reviews</h1>
          <span className='heading-line'></span>
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default App;
