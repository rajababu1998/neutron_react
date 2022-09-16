import React, { useState } from 'react'

const TollywoodChild = (props) => {
  const [count, setCount] = useState(0);  // step 1

  // const [status, setStatus] = useState(true);
  // const [str, setStr] = useState('abc');
  // const [arr, setArr] = useState([1,2,3]);
  // const [obj, setObj] = useState({name : 'abcdef'});

  // first is state variable second is method to update variable.
  // type definition and value initialization.
  // method will run in async mode.

  const increase = () => {
    // update count variable.
    console.log(count);
    setCount(count => count + 1) 
    console.log(count);    // old value
    // setCount(count + 1);
  }
  return (
    <>
        <div>Movie Name</div>
        <div>{props.temp}</div>

        <div>{count}</div> 
        <button onClick={increase}>Increase</button>

    </>
  )
}

export default TollywoodChild



// 1 : initialize state variable  - 
// 2 : display it.      
// 3 : write a button create a function onclick 
// 4 : write a function for onclick
// 5 : function is going to update the state variable.
