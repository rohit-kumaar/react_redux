import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <button className="btn btn-dark">Your Balance: {amount}</button>
    </>
  );
}

export default Navbar;
