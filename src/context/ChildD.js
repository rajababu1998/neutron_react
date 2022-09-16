import React, { useContext } from 'react'
import { NameContext } from './Parent'

const ChildD = (props) => {
    const temp = useContext(NameContext);
  return (
    <>
        ChildD Compoent
        <br></br>
        Name in D {temp.name}

        <br></br>
        Name - {props.name}
    </>
  )
}

export default ChildD