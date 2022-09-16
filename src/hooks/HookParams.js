import React from 'react'
import { useParams } from 'react-router-dom'

const HookParams = () => {
    const {id} = useParams();
  return (
    <>
        <div>Id from caller - Product ID {}</div>
    </>
  )
}

export default HookParams