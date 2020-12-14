import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError,setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const toggleError = () => {
    setIsError(!isError)
  }

  // console.log(secondValue)

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}
      <h1>{text || 'john soe'}</h1>
      <button className="btn" onClick={toggleError}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError 
      ? (<p>there is an error...</p> )
      : (<div>
          <h2>there is no error</h2>
        </div>)}
    </>
  )
};

export default ShortCircuit;
