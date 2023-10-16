import React from "react";

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    add = () => {
        this.setState({count: this.state.count + add})
    }

    render() {
        return (
            <>
                Initially :  {this.state.count}
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>*</button>
                <button onClick={this.divide}>/</button>
                <button onClick={this.equalto}>=</button>
            </>
        )
    }
}

export default Calculator;