import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const counterData = useSelector(state => state.count);
    console.log(counterData);

    const handleIncrement = () => {
        dispatch(increment(5))
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <p>{counterData.count}</p>
            <button onClick={() => handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;