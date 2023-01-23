import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const setBudget = (value) => {
        if(value > 20000) {
            alert("The budget cannot exceed the remaining funds");
            value=20000
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(value < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending");
            value=totalExpenses
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
                        style={{width:135}}
                        min='0'
                        value={budget}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
                        </span>
        </div>
    );
};

export default Budget;
