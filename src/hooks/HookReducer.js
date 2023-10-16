import React, { useEffect, useReducer, useState } from 'react'

const HookReducer = () => {
    const initialvalues = {
        numTransaction:0,
        netBalance:10000,
        showNetBalance:false
    }
    // reducer is a function which will accept two parameter.
    // reducer is going to implement like if else like yeh hai to ye kardo ye hai to ye kardo
    
    const reducer = (state, action) => {
        switch(action.type) {
            case 'INCREMENTBYONE':
                return {
                    numTransaction: state.numTransaction + 1,
                    netBalance: state.netBalance,
                    showNetBalance: state.showNetBalance
                }
            case 'INCREMENTBY5K':
                return {
                    numTransaction: state.numTransaction + 1,
                    netBalance: state.netBalance + 5000,
                    showNetBalance: state.showNetBalance
                }
            case 'SHOWNETBALANCE':
                return {
                    numTransaction: state.numTransaction,
                    netBalance: state.netBalance,
                    showNetBalance: !state.showNetBalance
                }
            default:
                return state;
        }
    }
    // action will come from dispatch in hidden form.

    // Way of initializing useState
    // const [show, setShow] = useState(false) 

    // Way of intializing useReducer
    const [state, dispatch] = useReducer(reducer, initialvalues);
    // state: global state variable
    // dispatch: function to update state
    // dispatch: it will have one parameter to explain the action type.
    // reducer: function to handle all type of actions and update state.

    useEffect(()=> {
        console.log('component re-triggered....', state);
    })
    
  return (
    <>
    
        <br></br>
        <button onClick={() => dispatch({type:'INCREMENTBYONE'})}>Update Transaction Count</button>
        <br></br>
        <button onClick={() => dispatch({type:'INCREMENTBY5K'})}>Incremnt Balance By 500</button>
        <br></br>
        <button onClick={() => dispatch({type:'SHOWNETBALANCE'})}>Show Balance</button>
        <br></br>
        <div>Balance - {state.numTransaction}</div>
        <div>Balance - {state.netBalance}</div>
        {state.showNetBalance && <div>mission successful...</div> }

    </>
  )
}

export default HookReducer