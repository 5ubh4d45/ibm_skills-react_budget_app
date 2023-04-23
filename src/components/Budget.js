import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
const Budget = () => {
  const UPPER_LIMIT = 20000;
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [budgetVal, setBudgetVal] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);

  const handleBudgetSubmit = () => {
    // console.log("Budget: " + budget);

    if (budgetVal > UPPER_LIMIT) {
      alert("Budget cannot be more than £20,000");
      setBudgetVal(budget);
      return;
    }
    if (budgetVal < totalExpenses) {
      alert("Budget cannot be less than the spending £" + totalExpenses);
      setBudgetVal(budget);
      return;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: budgetVal,
    });
  };
  return (
    <div className="alert alert-secondary">
        Budget:
      <span style={{textAlign: "right"}}>
        {currency}
      <input
        required="required"
        type="number"
        name="budget"
        style={{ size: "10",
        borderRadius: '5px', }}
        // add a step size of 10 to the input field
        step="10"
        onChange={(e) => setBudgetVal(e.target.value)}
        // call handleBudget function when user clicks out of the input field
        onBlur={handleBudgetSubmit}
        value={budgetVal}
        ></input>
    </span>
    </div>
  );
};
export default Budget;
