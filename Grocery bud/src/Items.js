import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Items = ({ items, editItem, removeItem }) => {
  return (
    <>
      <div className='grocery-list'>
        {items.map((item) => {
          const { id, title } = item;
          return (
            <section key={id} className='grocery-item'>
              <p className='title'>{title}</p>
              <div className='btn-container'>
                <button
                  className='edit-btn'
                  type='button'
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='remove-btn'
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Items;
