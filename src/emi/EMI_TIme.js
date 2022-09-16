import React from 'react'

const EMI_TIme = (props) => {
  return (
    <>
        <div className='row'>
            <div className='col-12'>
                <h4>Enter Time</h4>
                <input type='number' value = {props.time} onChange={props.fn_time}/>
            </div>
        </div>
    </>
  )
}

export default EMI_TIme