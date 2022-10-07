import React, { useState, useEffect } from 'react';
import peopleReview from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

//CSS
import './reviews.css';
import reviews from './data';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = peopleReview[index];

  function checkNumber(num) {
    if (num > peopleReview.length - 1) {
      return 0;
    } else if (num < 0) {
      return peopleReview.length - 1;
    }
    return num;
  }

  function rightArrow() {
    setIndex((index) => {
      const newPeople = index + 1;
      return checkNumber(newPeople);
    });
  }

  function leftArrow() {
    setIndex((index) => {
      const newPeople = index - 1;
      return checkNumber(newPeople);
    });
  }

  function surpriseMe() {
    var randomNum = Math.floor(Math.random() * peopleReview.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    return setIndex(checkNumber(randomNum));
  }

  return (
    <>
      <div className='review-alternate'>
        <div className='img-with-icon'>
          <div className='person-img-contain'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
        </div>
        <div className='person-detail'>
          <h3 className='person-name'>{name}</h3>
          <h3 className='person-job'>{job}</h3>
          <p className='person-text'>{text}</p>
        </div>
        <div className='buttons-left-right'>
          <button className='btn left-btn' onClick={() => leftArrow()}>
            <FaChevronLeft />
          </button>
          <button className='btn right-btn' onClick={() => rightArrow()}>
            <FaChevronRight />
          </button>
        </div>
        <div className='button-surprise-contain'>
          <button className='btn-surprise' onClick={() => surpriseMe()}>
            Surprise Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
