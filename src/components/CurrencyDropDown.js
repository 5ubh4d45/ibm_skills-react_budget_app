import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropDown = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      {" "}
      Currency:{" "}
      {
        // styalize it with green background and white text with onhover effect
        <select
          name="Currency"
          id="Currency"
          defaultValue={currency}
          onChange={(event) => changeCurrency(event.target.value)}
          style={{backgroundColor: 'lightseagreen',
          color: 'white',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: 'lightgreen',
            color: 'black'}}}
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
        </select>
      }
    </div>
  );
};

export default CurrencyDropDown;