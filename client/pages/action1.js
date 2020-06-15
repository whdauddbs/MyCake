import React from "react";
import Router from "next/router";

export default function action1() {
  return (
    <img
      src="action1.png"
      style={{
        cursor: "pointer",
      }}
      onClick={() => Router.push("/action2")}
      style={{ width: "100%" }}
    />
  );
}
