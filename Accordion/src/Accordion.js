import React, { useState } from 'react';

import data from './data';

//icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

//CSS
import './accordion.css';

const Accordion = () => {
  document.title = 'Accordion';

  const [question] = useState(data);

  return (
    <>
      <div className='container'>
        <div className='Q_A-contain'>
          <h1 className='Q_A-heading'>Questions And Answers About Login</h1>
          <div className='Q_A'>
            {question.map((que) => {
              return <Questions key={que.id} {...que}></Questions>; // shoud identify the key value. And make sure the 'spread notation' {...que} -> this means 'que={que}'
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Questions = ({ title, info }) => {
  // using the prop
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='Q_A-alternate'>
        <div className='title-with-button'>
          <h3 className='title'>{title}</h3>
          <div className='btn-contain'>
            <button
              className='btn'
              type='button'
              onClick={() => setShow(!show)}
            >
              {/* this button will change to the oposite boolean value of the show */}
              {show === true ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </div>
        </div>
        {show && <p className='info'>{info}</p>}{' '}
        {/* if the show is true ->  this 'info' will be printed */}
      </div>
    </>
  );
};

export default Accordion;
