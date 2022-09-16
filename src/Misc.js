import React, { useContext } from 'react'
import { DataAppContext } from './common/DataApp';
import { Link, useLocation } from 'react-router-dom';

const Misc = () => {
  // approach 1
  const loginDetails = useContext(DataAppContext);


  // approach 2
  const {state} = useLocation();
  console.log(state);


  const id = '12345';

  return (
    <>
      <div className='row bg-info bg-opacity-50'>
        <div className='col-8'>
          {loginDetails.isLoggedIn && <div>Hi {state.userName}</div>}
        </div>
        <div className='col-4'>
            {loginDetails.isLoggedIn ?
            (<button onClick={() => loginDetails.setLogin(false)}>Logout</button>) :
            (<button onClick={() => loginDetails.setLogin(true)}>Login</button>)}
        </div>        
      </div>

      <div className='row bg-info bg-opacity-50'>
        <div>Misc Component</div>
        <Link to={`/hookparams/${id}`}>Product ID</Link>
      </div>
    </>
  )
}

export default Misc