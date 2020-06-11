import React, { useState, useEffect } from "react";

const InputForm = (props) => {
  return (
    <div className="input-group clearfix">
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
      />
      <img
        className={"pwd-img" + (props.visible === true ? " visible" : "")}
        src="hide-icon.svg"
      />
    </div>
  );
};

export default InputForm;
