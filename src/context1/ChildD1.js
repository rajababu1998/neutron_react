import React, { useContext } from 'react'
import { NameContext } from './Parent1'

const ChildD1 = () => {
    const temp = useContext(NameContext);
  return (
    <>
        Child D1 Component
        <br></br>
        Name in D1 {temp.name}
        <button onClick={() => temp.setName('Mr XYZ')}>Update Name</button>
        <br></br>
        Count in D1 {temp.count}
        <button onClick={() => temp.setCount(temp.count + 1)}>Update Count</button>
    </>
  )
}

export default ChildD1