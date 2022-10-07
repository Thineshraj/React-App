import React, { useState, useEffect } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import './App.css';

// https://course-api.com/react-tabs-project
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    // throw new Error(response.statusText);

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='container'>
        <h1 className='loading'>Loading...</h1>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='top-heading'>experience</h1>
        <div className='underline'></div>
        {/* Company menu */}
        <div className='menu-and-info'>
          <div className='btn-container'>
            {jobs.map((item, index) => {
              return (
                <button
                  type='button'
                  onClick={() => setValue(index)}
                  className={`btn ${index === value && 'btn-active'}`}
                  key={index}
                >
                  {item.company}
                </button>
              );
            })}
          </div>

          {/* Work Info */}
          <div className='wrk-info'>
            <h1 className='work-title'>{title}</h1>
            <h1 className='company'>{company}</h1>
            <h3 className='date'>{dates}</h3>

            {/* duties */}
            <div className='duties'>
              {duties.map((duty, index) => {
                return (
                  <div className='per-duty'>
                    <span className='icon'>
                      <AiOutlineDoubleRight />
                    </span>
                    <p className='duty' key={index}>
                      {duty}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='more-info-btn-contain'>
          <button type='button' className='more-info-btn'>
            more info
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
