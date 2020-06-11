import React, { useState, useEffect } from "react";
import Router from "next/router";

const Header = (props) => {
  return (
    <React.Fragment>
      <section className="header">
        <img onClick={() => Router.back()} src="backward-arrow.svg" />
        <p>{props.title}</p>
      </section>
    </React.Fragment>
  );
};

export default Header;
