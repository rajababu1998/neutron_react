import React, {Component, Fragment} from 'react';
import CricketChild from './CricketChild';
import TollywoodChild from './TollywoodChild';

class Cricket extends Component {
    constructor() {
        super();  // super keyword is calling the constructor of component.
        this.state = {   // this keyword is used here because state is a object.
            count : 0,
            count2 : 0,
            sum : 0 
        }
    }
    Increment = () => {
        console.log('Inside increment function');
        // this.state se dom ko pata nahi chalta hai isliye this.setState use kiye hai 

        // this.state = {
        //     count : this.state.count + 1
        // }
        console.log(this.state.count);
        // this.forcrUpdate
        this.setState({
            count : this.state.count + 1
        })

        this.setState({
            count2 : this.state.count2 + 1
        })

        this.setState((prevState) => ({
            sum : prevState.count + prevState.count2
        }))
        console.log(this.state.count);
        console.log('Increment function over....');
        // setState is an async method - it expect new state as parameter, not function
    }
    render() {
        let name = "alkjfj";
        return (
            // <div> I am at NS 
            //     <CricketChild/>
            // </div>

            <Fragment>
                <diV>
                    I am at NS.
                </diV>
                <diV>
                    abcd
                </diV>
                <div>Count - {this.state.count}
                    <button onClick={this.Increment}>Increase</button>
                </div>
                <br></br>

                <CricketChild count_temp = {this.state.count} name_temp = {name} location_temp = "ajflj"/>
                <TollywoodChild temp = "RajaBabu"/>
            </Fragment>
        )
    }
}

export default Cricket;