import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch,currency } = useContext(AppContext);
  
  const updateCurrency = (event) => {
    
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    return;
  }
  return (
    <div className='btn btn-success'>  
    <span>
      <select 
        className='btn btn-success'
        id='currency'
        onChange={(event) =>updateCurrency(event)}>
          <option hidden="true">Currency ({currency} Pound)</option>
          <option value='£' >£ Pound</option>
          <option value='$'>$ Dollar</option>
          <option value='€'>€ Euro</option>
          <option value='₹'>₹ Rupee</option>
      </select>
      </span>
    </div>



  );
};

export default Currency;