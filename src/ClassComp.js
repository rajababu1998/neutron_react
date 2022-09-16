import React from "react";

class ClassComp extends React.Component {
    constructor() {
        super();
        console.log('constructor -----------------------');
        this.state = {
            count : 0
        }
    }
    updateCount = () => {
        console.log('---------update-----------');
        this.setState({
            count:this.state.count + 1
        })
    }
    componentDidMount () {
        console.log('my ticket booked for component did mount');
        // var let - setInterval

        // api call 
        // update state variable
    }
    componentDidUpdate () {
        console.log('my ticket booked for component did update');
        // never call setState method here without breaking condition.
        //because it will make infinite loop

        // it is a breaking condition so we can use this way.
        // if(this.state.count < 10) {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }
    }
    componentWillUnmount () {
        alert('You are switching to other component');
        // clearInterval(ret)
        console.log('----------unmount------------');
    }
    render() {
        console.log('------------render-------------');
        return(
            <>
                <h1>Test of Class Component - Life Cycle Method</h1>
                Count = {this.state.count}
                <button onClick={this.updateCount}>Update</button>
            </>
        )
    }
}
export default ClassComp;



// how the class component work.

//  constructor
//  render
//  componentDidMount
//  render
//  componentDidUpdate
//  render
//  componentDidUpdate
//  render
//  componentDidUpdate

//  componentDidUpdate