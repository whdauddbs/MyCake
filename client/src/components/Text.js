import styled, { css } from "styled-components";

export default styled.p`
  ${props => css`
    width: ${props.width};
    font-family: ${props.font};
    font-weight: ${props.weight};
    font-style: ${props.fstyle};
    text-align: ${props.align};
    font-size: ${props.size};
    color: ${props.color};
    letter-spacing: ${props.spacing};
    margin: 0;
    padding: 0;
    text-decoration: ${props.deco};
  `}
`;
