import React from 'react'

const EMI_FInal = (props) => {
  return (
    <>
        <div className='row'>
            <div className='col-12'>
                <h4>Amount - {props.anount}</h4>
                <h4>Interest -{props.anount - props.principal}</h4>
            </div>
        </div>
    </>
  )
}

export default EMI_FInal