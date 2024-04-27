import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {

    const myXElement = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');

    const handleIncrement = () => {
        const incrementAmount = amount !== '' ? parseInt(amount) : 1;
        dispatch({ type: 'INCREMENT', payload: incrementAmount });
    };

    const handleDecrement = () => {
        const decrementAmount = amount !== '' ? parseInt(amount) : 1;
        dispatch({ type: 'DECREMENT', payload: decrementAmount });
    };

    return (
        <div className='divStyle'>
            <h1>Counter: {myXElement}</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            /><br/>
            <button className='btnStyle' onClick={handleIncrement}>+</button>
            <button className='btnStyle' onClick={handleDecrement}>-</button>
        </div>
    )
};

export default CounterComponent;