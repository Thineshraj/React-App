import React from 'react';
import List from './List';
import './App.css';

const App = () => {
  return (
    <>
      <main className='container'>
        <div className='grocery-bud'>
          <List />
        </div>
      </main>
    </>
  );
};

export default App;
