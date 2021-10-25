import React, { useState } from 'react';
import Recipe from './Recipe';
import Category from './Category';
import items from './data';

//CSS
import './App.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <section className='menu-section'>
        <div className='container'>
          <h1 className='top-heading'>Our Menu</h1>
          <span className='heading-underline'></span>
          <Category categories={categories} filterItems={filterItems} />
          <Recipe items={menuItems} />
        </div>
      </section>
      <footer className='footer'>
        <div className='container'>
          <h4 className='footer-content'>
            Created by{' '}
            <a
              href='https://thineshraj.github.io/aboutThinesh/#'
              target='_blank'
              className='thinesh-link'
            >
              Thinesh
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}

export default App;
