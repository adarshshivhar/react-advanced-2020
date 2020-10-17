import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople); 
  }

  return (
    <>
    {
      people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })
    }
    <button type='button' className='btn' onClick={() => setPeople([])}>Clear</button>
    </>
  );
};

export default UseStateArray;
