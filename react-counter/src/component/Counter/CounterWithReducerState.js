import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment, multipleByTwo, divideByTwo, defaultFunc} from "../Actions"
import '../../App.css';

function CounterWithReduxState(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()
    console.log(counter)

    return(
        <div className="container">
            <span>{counter}</span>
            <div>
                <button onClick={() => dispatch(multipleByTwo())}>*2</button>
                <button onClick={() => dispatch(divideByTwo())}>/2</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(defaultFunc())}>R</button>
            </div>
        </div>
    )
}

export default CounterWithReduxState