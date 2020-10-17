import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);

  const checkSize = () => {
    setValue(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [])
  return (
  <>
  <h1>Window</h1>
  <h2>{value} px</h2>
  </>);
};

export default UseEffectCleanup;
