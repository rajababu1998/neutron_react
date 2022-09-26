import React, { useState } from 'react'
import LiftStateChild from './LiftStateChild'

const LiftState = () => {
    const [country ,setCountry] = useState('india');

    const updateCountry = (data) => {
        console.log('parent method component clicked.....',data);
        setCountry(data);
    }

    const updateCountryInput = (event) => {
        console.log('Input field function triggered.....',event.target.value);
        setCountry(event.target.value);
    }
  return (
    <>
        <div className='row bg-light bg-opacity-50'>
            <div className='col-12'>
                LiftState
            </div>
        </div>
        <div className='row bg-danger bg-opacity-50'>
            <div className='col-12'>
                <LiftStateChild country = {country} liftFn = {updateCountry} handleChange = {updateCountryInput}/>
            </div>
        </div>
        
        
    </>
  )
}

export default LiftState

// country = {country}   it means we are passing country as a props.
// liftFn = {updateCountry}  it means we are passing function as a props 