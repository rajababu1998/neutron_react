import React from 'react'
import ChildC from './ChildC'
import { NameContext } from './Parent';

// const ChildB = (props) => {
//   return (
//     <>
      // ChildB Compoent
      // <div>------------------------------------</div>
      // <ChildC name={props.name}/>
//     </>
//   )
// }

// export default ChildB


class ChildB extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        ChildB Compoent
        <br></br>

        <NameContext.Consumer>
          {
            (temp) => {
              return(
                <>
                  <div>Name in B - {temp.name}</div>
                </>
              )
            }
          }
        </NameContext.Consumer>


        <div>------------------------------------</div>
        <ChildC name={this.props.name}/>
      </>
    )
  }
}

export default ChildB