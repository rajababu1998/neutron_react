import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
  return (
    <>
        ChildA Compoent
        <div>------------------------------------</div>
        <ChildB name={props.name}/>
    </>
  )
}

export default ChildA