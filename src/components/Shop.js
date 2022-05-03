import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Shop() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      <div className="mt-5">
        <div
          className="btn btn-dark"
          onClick={() => {
            withdrawMoney(100);
          }}
        >
          -
        </div>
        <span className="mx-2"> Update Balance</span>
        <div
          className="btn btn-dark"
          onClick={() => {
            depositMoney(100);
          }}
        >
          +
        </div>
      </div>
    </>
  );
}

export default Shop;
