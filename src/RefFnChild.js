import React,{ useRef,forwardRef } from 'react'

const RefFnChild = (props,ref) => {
  console.log('bacha ho kya...')
  return (
    <>
        
        <h2>Login Form - Function</h2>
        <div ref={ref}></div>
        <br></br>
    </>
  )
}

export default forwardRef(RefFnChild)