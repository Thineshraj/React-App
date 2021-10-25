import React from 'react';

const Category = ({ categories, filterItems }) => {
  return (
    <section className='category-section'>
      {categories.map((category, index) => {
        return (
          <button
            className='btn'
            type='button'
            onClick={() => filterItems(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Category;
