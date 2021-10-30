import React, { useState } from 'react';
import './App.css';
import data from './data';

const App = () => {
  const [paragraph, setParagraph] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var amount = parseInt(paragraph);
    if (paragraph <= 0) {
      amount = 1;
    }
    if (paragraph > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <>
      <section className='lorem-generator'>
        <div className='container'>
          <h1 className='top-heading'>TIRED OF BORING LOREM IPSUM?</h1>
          <form className='form'>
            <div className='form-contain'>
              <label className='label' htmlFor='paragraph'>
                Paragraph:
              </label>
              <input
                className='input'
                type='number'
                id='amount'
                name='amount'
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
              />
              <button className='btn' type='button' onClick={handleSubmit}>
                Generate
              </button>
            </div>
          </form>
          {text.map((article, index) => {
            return (
              <p className='para' key={index}>
                {article}
              </p>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default App;
