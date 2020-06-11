import React from "react";
import styled from "styled-components";
import Logo from "../src/components/images/Logo";
import Info from "../src/components/images/MainInfo";
import Button from "../src/components/buttons/district";
import Footer from "../src/components/Footer";
import Router from "next/router";

export default function Home() {
  return (
    <Wrapper>
      <HeadWrapper>
        <Logo
          style={{
            width: "12rem",
            height: "auto",
            margin: "1.9rem 0rem 2.4rem 2.2rem",
            objectFit: "contain",
          }}
        ></Logo>
        <img
          src="m-kakaologin.svg"
          style={{
            cursor: "pointer",
          }}
          onClick={() => Router.push("/signin")}
          style={{ width: "40px", margin: "1.5rem 0rem 0rem 16rem" }}
        />
        <InfoWrapper>
          <img src="Headline.svg" />
          <Info style={{ width: "100%", margin: "1rem 0 0 0" }}></Info>
        </InfoWrapper>
      </HeadWrapper>
      <ImageWrapper>
        <div style={{ position: "relative" }}>
          <img src="MapMain.svg" width="360px"></img>
          <Button x="250" y="334.905" name="서초구"></Button>
          <Button x="297" y="316.905" name="강남구"></Button>
          <Button x="280" y="237" name="성동구"></Button>
          <Button x="330" y="232.032" name="광진구"></Button>
          <Button x="285" y="185.032" name="동대문구"></Button>
          <Button x="222" y="259.032" name="용산구"></Button>
          <Button x="155" y="220.032" name="마포구"></Button>
          <Button x="136" y="284.032" name="영등포구"></Button>
          <Button x="185" y="195.032" name="서대문구"></Button>
          <Button x="177" y="134.032" name="은평구"></Button>
          <Button x="189" y="300.032" name="동작구"></Button>
          <Button x="90" y="310.032" name="구로구"></Button>
        </div>
      </ImageWrapper>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  max-width: 100%;
`;

const HeadWrapper = styled.div`
  height: 250px;
`;

const InfoWrapper = styled.div`
  padding: 0 4rem 1rem 4rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
