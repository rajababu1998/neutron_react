import React, { useEffect, useLayoutEffect } from 'react'

const HookLayoutEffect = () => {


    // useEffect it just run after the jsx part.
    useEffect(() => {
        console.log('useEffect triggered....');
    })

    // useLayoutEffect it just run before the jsx part.
    useLayoutEffect(() => {
        console.log('useLayoutEffect triggered...');
    })
    
  return (
    <>
        <div>Hook Layout Effect</div>
    </>
  )
}

export default HookLayoutEffect