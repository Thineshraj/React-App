import React, { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  return (
    <div>
      <h1>Welcome</h1>
      {!changedText && <h4>Thanks for visiting</h4>}
      {changedText && <h4>Changed</h4>}
      <button onClick={() => setChangedText(true)}>Change text</button>
    </div>
  );
};

export default Greeting;
