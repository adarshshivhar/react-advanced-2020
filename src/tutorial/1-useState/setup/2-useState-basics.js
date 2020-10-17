import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  const clickHandler = () => {
    if(text === 'random title'){
      setText('Hello World');
    }else {
      setText('random title');
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={clickHandler}>Change Text</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
