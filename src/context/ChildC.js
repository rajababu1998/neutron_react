import React from 'react'
import ChildD from './ChildD'

const ChildC = (props) => {
  return (
    <>
        ChildC Compoent
        <div>------------------------------------</div>
        <ChildD name={props.name}/>
    </>
  )
}

export default ChildC