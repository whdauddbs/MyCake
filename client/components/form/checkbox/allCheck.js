import React, { useState, useEffect } from "react";

const AllCheckBoxForm = (props) => {
  return (
    <div className="checkbox-all">
      <input
        id={props.id}
        checked={props.checked}
        type="checkbox"
        onChange={props.onChange}
      />
      <label className="label-txt" for={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default AllCheckBoxForm;
