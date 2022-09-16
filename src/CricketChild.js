import React from "react";

class CricketChild extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render () {
        // destructuring.
        const {count_temp, name_temp} = this.props;
        return (
            <>
            <div> Child comp...</div>
            <div> Child comp...</div>
            <div>Count - {count_temp}</div>
            <div>Name - {name_temp}</div>
            <div>Location - {this.props.location_temp}</div>
            </>
        )
    }
}

export default CricketChild;