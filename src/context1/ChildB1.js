import React from 'react'
import ChildC1 from './ChildC1';
import { NameContext } from './Parent1';

class ChildB1 extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <>
          ChildB1 Compoent
          <br></br>
  
          <NameContext.Consumer>
            {
              (temp) => {
                return(
                  <>
                    <div>Name in B1 - {temp.name}</div>
                  </>
                )
              }
            }
          </NameContext.Consumer>
  
  
  
  
          <div>------------------------------------</div>
          <ChildC1/>
        </>
      )
    }
  }
  
  export default ChildB1