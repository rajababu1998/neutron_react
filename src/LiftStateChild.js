import React from 'react'

const LiftStateChild = (props) => {
  return (
    <>
        <div className='row bg-danger bg-opacity-50'>
            <div className='col-12'>
                Country Name - {props.country}
                <br></br><br></br>
                <button onClick={() => props.liftFn('India')}>India</button>
                <button onClick={() => props.liftFn('USA')}>USA</button>
                <button onClick={() => props.liftFn('Russia')}>Russia</button>
                <button onClick={() => props.liftFn('UK')}>UK</button>
                <br></br><br></br>
                <input type="text" onBlur={props.handleChange}></input>
                <br></br><br></br>
            </div>
        </div>
    </>
  )
}

export default LiftStateChild