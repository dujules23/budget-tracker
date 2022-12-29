import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 23424, name: "Shopping", cost: 50 },
    { id: 23424, name: "Holiday", cost: 300 },
    { id: 23424, name: "Transportation", cost: 70 },
    { id: 23424, name: "Gas", cost: 40 },
    { id: 23424, name: "Child Care", cost: 500 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense, index) => {
        console.log(expense.cost);
        return (
          <div key={index}>
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
