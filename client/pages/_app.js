import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import ReactGA from "react-ga";
import "./icon.css";
import "../styles/style.scss";

import styled, { createGlobalStyle } from "styled-components";

Router.onRouteChangeComplete = (url) => {
  const pathName = window.location.pathname;
  ReactGA.initialize("UA-160024128-1");
  ReactGA.set({ page: pathName });
  ReactGA.pageview(pathName);
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'TmonMonsori';
  src: url(fonts/TmonMonsori.ttf) format('truetype');
}

@font-face {
  font-family: 'YanoljaYacheR';
  src: url(fonts/YanoljaYacheR.ttf) format('truetype');
}

@font-face {
  font-family: 'YanoljaYacheB';
  src: url(fonts/YanoljaYacheB.ttf) format('truetype');
}

@font-face {
  font-family: 'NotoSansCJKkr';
  src: url(fonts/NotoSansCJKkr.otf) format('opentype');
}

@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

@media (max-width: 252px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 253px) and (max-width: 288px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 289px) and (max-width: 324px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 325px) and (max-width: 360px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 361px) and (max-width: 396px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 397px) and (max-width: 432px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 433px){
  html {
    font-size: 13px;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'NotoSansCJ', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

class CakeMap extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <title>Cake Map</title>
          <link rel="shortcut icon" href="favicon.ico"></link>
        </Head>
        <BestWrapper>
          <Grey />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Grey />
        </BestWrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 36rem;
  min-width: 375px;
  min-height: 100%;
  background-color: white;
  position: relative;
`;

const Grey = styled.div`
  flex: 1;
  background-color: #ccc;
  z-index: 100;
`;

const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  background-color: #fff;
`;

export default CakeMap;
