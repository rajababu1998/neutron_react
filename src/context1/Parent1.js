import React, { createContext, useState } from 'react'

import ChildA1 from './ChildA1';


const NameContext = createContext();
const Parent1 = () => {
  const [name, setName] = useState('Mr ABC');
  const [count, setCount] = useState(0);
  console.log('api key', process.env.REACT_APP_GITHUB_API_KEY)

  return (
    <>
        Parent Compoent
        <div>------------------------------------</div>
        <br></br>
        {
          process.env.REACT_APP_GITHUB_API_KEY
        }
        <NameContext.Provider value={{name,setName, count, setCount}}>  
            <ChildA1/>
        </NameContext.Provider>
    </>
  )
}

export default Parent1

export {NameContext}