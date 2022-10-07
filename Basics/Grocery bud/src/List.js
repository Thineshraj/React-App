import React, { useState, useEffect } from 'react';
import Items from './Items';
import Alert from './Alert';

import './List.css';

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem('list')));
//   } else {
//     return [];
//   }
// };

const List = () => {
  const [name, setName] = useState('');
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      showAlert(true, 'success', 'value changed');
      setName('');
      setEditId(null);
      setIsEdit(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      showAlert(true, 'success', 'item added to the list');
      setList([...list, newItem]);
      setName('');
      setIsEdit(false);
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);

    setIsEdit(true);
    setEditId(id);
    setName(specificItem.title);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  //   useEffect(() => {
  //     localStorage.setItem('list', JSON.stringify(list));
  //   }, [list]);

  return (
    <section>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h1>Grocery Bud</h1>
      <form className='form'>
        <input
          type='text'
          value={name}
          placeholder='e.g. eggs'
          className='input'
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit} className='btn'>
          {isEdit ? `Edit` : `Submit`}
        </button>
      </form>

      {list.length > 0 && (
        <div>
          <Items items={list} editItem={editItem} removeItem={removeItem} />
        </div>
      )}

      <button type='button' className='clear-btn' onClick={clearList}>
        Clear Items
      </button>
    </section>
  );
};

export default List;
