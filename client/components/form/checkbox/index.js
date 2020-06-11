import React, { useState, useEffect } from "react";

const CheckBoxForm = (props) => {
  return (
    <div className="checkbox">
      <input
        id={props.id}
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange(e)}
      />
      <label className="label-txt" for={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default CheckBoxForm;
