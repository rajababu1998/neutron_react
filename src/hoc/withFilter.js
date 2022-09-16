import React from 'react';

const withFilter = (InputComponent,data) => {
    class OutputComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                tempInput:'',
                orgList: data,
                filterlist: data,
            }
        }
        filterFunc = (event) => {
            console.log('inside filter function...',event.target.value);
            let tempArr = this.state.orgList.filter((item) => {
                return item.toLowerCase().indexOf(event.target.value.toLowerCase()) >=0;
            });

            this.setState({
                filterlist : tempArr,
                tempInput : event.target.value,
                orgList : this.state.orgList
            })
        }
        render() {
            return(
                <>
                    <br></br>
                    <input type="text" onChange = {(e) => this.filterFunc(e)} />
                    <InputComponent list = {this.state.filterlist}/>
                </>
            )
        }
    }
    return OutputComponent;
}
export default withFilter;