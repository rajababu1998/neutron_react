import React, { createContext, useState } from 'react'
import ChildA from './ChildA'


const NameContext = createContext();
const Parent = () => {
    const [name, setName] = useState('Mr ABC');
  return (
    <>
        <NameContext.Provider value={{name,setName}}>
            Parent Compoent
            <div>------------------------------------</div>
            <ChildA name={name}/>

        </NameContext.Provider>
    </>
  )
}

export default Parent

export {NameContext}