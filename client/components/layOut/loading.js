import React, { useState, useEffect } from "react";

const Loading = (props) => {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.show]);

  return (
    <section
      className={"loading-container" + (props.show === true ? " active" : "")}
    >
      <div className="img-wrapper">
        <img src="lod-top.svg"></img>
        <img src="lod-under.svg"></img>
      </div>
    </section>
  );
};

export default Loading;
