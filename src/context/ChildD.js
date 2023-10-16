import React, { useContext } from 'react'
import { NameContext } from './Parent'

const ChildD = (props) => {
    const temp = useContext(NameContext);
  return (
    <>
        Child D Compoent
        <br></br>
        Name in D {temp.name}
        <br></br>
        Name - {props.name}
    </>
  )
}

export default ChildD