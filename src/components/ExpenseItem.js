import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill mr-3">
          ${props.cost}
        </span>
        <TiDelete size="1.5rem"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
