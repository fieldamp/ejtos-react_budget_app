import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const setBudget = (value) => {
        if(value > 20000) {
            alert("The budget cannot exceed  "+currency+"20000");
            value=20000
            return;
        }
        if(value < 0) {
            value=0;
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        step='10'
                        min='0'
                        value={budget}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
                        </span>
        </div>
    );
};

export default Budget;
