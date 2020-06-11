import React, { useState, useEffect } from "react";

const BtnInputForm = (props) => {
  return (
    <div className="btnInput clearfix">
      <div className="input-group clearfix">
        <label>{props.label}</label>
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e)}
        />
      </div>
      <button className="btn-pink">인증받기</button>
    </div>
  );
};

export default BtnInputForm;
