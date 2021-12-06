import React from "react";
import "../styles.css";

//Stateless function

const button = ({ buttonDisplayName, ClickHandler }) => {
  return (
    <button className="button" onClick={ClickHandler}>
      {buttonDisplayName}
    </button>
  );
};

export default button;
