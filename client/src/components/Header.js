import React from "react";
import styled from "styled-components";
import BackIcon from "./buttons/icons/back";
import Router from "next/router";
import Text from "./Text";

export default function Header(props) {
  return (
    <Wrapper>
      <a onClick={() => Router.back()}>
        <BackIcon
          style={{
            width: "1.8rem",
            height: "1.4rem",
            position: "absolute",
            left: "2rem",
            top: "3.8rem",
          }}
          fill="#ddd"
        ></BackIcon>
      </a>
      <NameWrapper2></NameWrapper2>
      <NameWrapper>
        <Text font="TmonMonsori" size="1.6rem" color="#e94c56">
          {props.name}
        </Text>
      </NameWrapper>
      <img
        src="action.png"
        style={{
          cursor: "pointer",
          margin: "1rem 0rem 0rem 20rem",
        }}
        onClick={() => Router.push("/action1")}
      />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.7rem 2rem;
`;

const NameWrapper = styled.div`
  width: 10.7rem;
  height: 3.2rem;
  object-fit: contain;
  border-radius: 0.24rem;
  border: solid 0.2rem #e94c56;
  background-color: #fffdfd;
  position: absolute;
  left: 5.6rem;
  top: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameWrapper2 = styled.div`
  width: 10.7rem;
  height: 3.2rem;
  object-fit: contain;
  border-radius: 0.24rem;
  border: solid 0.2rem #e94c56;
  background-color: #f0959d;
  position: absolute;
  left: 6.1rem;
  top: 3.2rem;
`;
