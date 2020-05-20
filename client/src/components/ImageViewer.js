import React from "react";
import styled from "styled-components";

export default function ImageViewer({ link, s1, s2, s3 }) {
  const embed = "media/?size=t";

  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        position: "relative"
      }}
    >
      <iframe
        src={s1 + embed}
        key={Math.random()}
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
        style={{ float: "left", width: "33%", height: "auto" }}
      />
      <iframe
        src={s2 + embed}
        key={Math.random()}
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
        style={{ float: "left", width: "33%", height: "auto" }}
      />
      <iframe
        src={s3 + embed}
        key={Math.random()}
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
        style={{ float: "left", width: "33%", height: "auto" }}
      />
      <Overlay
        onClick={e => {
          window.open(link);
          e.stopPropagation();
          console.log("click image");
        }}
      />
      <Source>사진출처: 매장 공식 인스타그램</Source>
    </div>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;

const Source = styled.div`
  width: 100%;
  text-align: right;
  font-family: YanoljaYacheB;
  color: #bbbbbb;
  font-size: 13px;
`;
