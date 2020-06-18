import React from "react";
import styled from "styled-components";
import Info from "./images/FooterInfo";

export default function Footer() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.footer`
  width: 100%;
  height: 8.6rem;
  background-color: #eee;
  margin: 2rem 0 0 0;
  padding: 1.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BusinessInfo = styled.div`
  color: #7f7f7f;
  font-size: 10px;
`;
