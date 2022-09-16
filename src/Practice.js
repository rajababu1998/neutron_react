import React from "react";

class Prctice extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }
    increament = () => {
        
        this.setState({count:this.state.count+1})
        
    }

    decrement = () => {
        this.setState({count:this.state.count-1})
    }

    reset = () => {
        this.setState({count:0})
    }

    render() {
        return(
            <>
                <div>
                    Count - {this.state.count}
                    <button onClick={this.increament}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </>
        )
    }
}
export default Prctice;