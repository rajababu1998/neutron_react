import React, { useState } from 'react'
import TollywoodChild from './TollywoodChild';

const Tollywood = () => {
  const[status,setStatus] = useState(false);

  const showFn = () => {
    setStatus(true);
  }

  const hideFn = () => {
    setStatus(false);
  }

  return (
    <>
        <div>Tollywood</div>
        <TollywoodChild temp = "Runway-34"/>

        <br></br>
        <div>-------------------------------------</div>

        <button onClick={showFn}>Show</button>
        <button onClick={hideFn}>Hide</button>

        {
          status === true && <div>Show whatever you want</div>
        }

    </>
  )
}

export default Tollywood