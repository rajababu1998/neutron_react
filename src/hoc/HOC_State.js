import React from "react";
import withFilter from "./withFilter";

const state_list = ['Delhi','UP','Chhatishgarh','Bihar','Rajsthan','Jharkhand','Goa','Tamilnadu','J&K','Maharashtra','Haryana']
const HOC_State = (props) => {
    return(
        <>
           {props.list && props.list.map((item,index) =>(
                <div key={item + index}>{item}</div>
           ))} 
        </>
    )
}
export default withFilter(HOC_State,state_list);