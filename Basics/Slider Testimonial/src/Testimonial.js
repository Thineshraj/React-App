import React, { useState, useEffect } from 'react';
import data from './data';
import './testimonial.css';
import { FaQuoteRight } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Testimonail = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    const newIndex = people.length - 1;
    if (index > newIndex) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(newIndex);
    }
  }, [index, people]);

  useEffect(() => {
    var newSlider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(newSlider);
    };
  }, [index]);
  return (
    <>
      <main className='testimonial-section'>
        <div className='container'>
          <h1 className='heading'>/Testimonial</h1>
          <div className='testimonial'>
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;

              var position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              } else if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }

              return (
                <div
                  key={personIndex}
                  className={`person-alternate ${position}`}
                >
                  <img className='image' src={image} alt={name} />
                  <h4 className='name'>{name}</h4>
                  <h4 className='title'>{title}</h4>
                  <p className='quote'>{quote}</p>
                  <div className='quote-icon'>
                    <FaQuoteRight />
                  </div>
                </div>
              );
            })}

            <button
              type='button'
              className='left-btn'
              onClick={() => setIndex(index - 1)}
            >
              <AiOutlineLeft />
            </button>

            <button
              type='button'
              className='right-btn'
              onClick={() => setIndex(index + 1)}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Testimonail;
