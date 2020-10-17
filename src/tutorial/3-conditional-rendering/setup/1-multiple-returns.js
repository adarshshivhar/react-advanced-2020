import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    fetch(url).then((resp) => {
      if(resp.status >= 200 && resp.status <= 299){
        return resp.json();
      }else{
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    }).then((user) => {
      const { login } = user;
      setUser(login);
      setIsLoading(false);
    }).catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2>Error...</h2>
      </>
    );
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
