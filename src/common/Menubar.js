import React from 'react'
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
const Menubar = () => {
  return (
    <>
        <div className='row bg-info bg-opacity-75'>
            <div className='col'>
              <Navbar>
                <NavDropdown title="Hooks" id="nav-dropdown" className="btn btn-outline-success">
                  <NavDropdown.Item>
                    <Link to='/hooklayouteffect' className='nav-link btn btn-outline-success'>Hook Layout Effect</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to='/hookmemo' className='nav-link btn btn-outline-success'>Hook Memo</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/hookcallback' className='nav-link btn btn-outline-success'>Hook Call Back</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/hookparams' className='nav-link btn btn-outline-success'>Hook Params</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                
                <Link to='/misc' className='nav-link btn btn-outline-success'>Misc</Link>
                <Link to='/colorapp' className='nav-link btn btn-outline-success'>Color App</Link>
                <Link to='/login' className='nav-link btn btn-outline-success'>Login</Link>
                <Link to='/parent1' className='nav-link btn btn-outline-success'>Context-Props Drilling1</Link>
                <Link to='/parent' className='nav-link btn btn-outline-success'>Context-Props Drilling</Link>
                <Link to='/hookreducer' className='nav-link btn btn-outline-success'>Hook Reducer</Link>
                <Link to='/contactapp' className='nav-link btn btn-outline-success'>Contact App</Link>
                <Link to='/githubfn' className='nav-link btn btn-outline-success'>Github Fn</Link>
                <Link to='/github' className='nav-link btn btn-outline-success'>Github</Link>
                <Link to='/prctice' className='nav-link btn btn-outline-success'>Practice</Link>
                <Link to='/classcomp' className='nav-link btn btn-outline-success'>Class Comp</Link>
                <Link to='/modal' className='nav-link btn btn-outline-success'>Modal</Link>
                <Link to='/todo' className='nav-link btn btn-outline-success'>ToDO</Link>
                <Link to='/hoccountry' className='nav-link btn btn-outline-success'>HOC Country</Link>
                <Link to='/hocstate' className='nav-link btn btn-outline-success'>HOC State</Link>
                <Link to='/hoccity' className='nav-link btn btn-outline-success'>HOC City</Link>
                <Link to='/App1' className='nav-link btn btn-outline-success'>App1</Link>
                <Link to='/home' className='nav-link btn btn-outline-success'>Home</Link>
                <Link to='/cricket' className='nav-link btn btn-outline-success'>Cricket</Link>
                {/* <Link to='/cricketChild' className='nav-link btn btn-outline-success'>CricketChild</Link> */}
                <Link to='/bollywood' className='nav-link btn btn-outline-success'>Bollywood</Link>
                {/* <Link to='/bollywoodChild' className='nav-link btn btn-outline-success'>BollywoodChild</Link> */}
                <Link to='/tollyWood' className='nav-link btn btn-outline-success'>Tollywood</Link>
                {/* <Link to='/tollywoodChild' className='nav-link btn btn-outline-success'>TollywoodChild</Link> */}
                <Link to='/liftState' className='nav-link btn btn-outline-success'>LiftState</Link>
                <Link to='/emi' className='nav-link btn btn-outline-success'>EMI</Link>
                <Link to='/refclass' className='nav-link btn btn-outline-success'>RefClass</Link>
                <Link to='/refFn' className='nav-link btn btn-outline-success'>RefFn</Link>
                <Link to='/formfn' className='nav-link btn btn-outline-success'>FormFn</Link>
                <Link to='/formpr' className='nav-link btn btn-outline-success'>FormPr</Link>
                <Link to='/formfn2' className='nav-link btn btn-outline-success'>FormFn2</Link>
          
              </Navbar>
                
            </div>
        </div>
    </>
  )
}

export default Menubar