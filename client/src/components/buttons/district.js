import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Text from "../Text";

export default function Button(props) {
  let { x, y } = props;
  return (
    <Wrapper
      style={{
        top: y - 12 + "px",
        left: x - 60 + "px"
      }}
    >
      <Link href={`district?name=${props.name}`}>
        <A>
          <Text
            width="fit-content"
            color="white"
            size="1.3rem"
            font="YanoljaYacheR"
          >
            {props.name}
          </Text>
        </A>
      </Link>
    </Wrapper>
  );
}

const A = styled.a``;

const Wrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: fit-content;
`;
