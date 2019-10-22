import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment, multipleByTwo, divideByTwo, defaultFunc} from "../Actions"

function CounterWithReduxState(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()
    console.log(counter)

    return(
        <div>
            <div>
                <button onClick={() => dispatch(multipleByTwo())}>*2</button>
                <button onClick={() => dispatch(divideByTwo())}>/2</button>
                <span>{counter}</span>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <button onClick={() => dispatch(defaultFunc())}>-</button>
            </div>
        </div>
    )
}

export default CounterWithReduxState