import React, { useState } from "react";
import styled from "styled-components";
import Text from "../src/components/Text";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import KaTalk from "../src/components/images/KaTalk";
import OrderButton from "../src/components/images/OrderButton";
import CakeIcon from "../src/components/buttons/icons/cake_icon";
import ImageViewer from "../src/components/ImageViewer";
import { useRouter } from "next/router";
import Modal from "../src/components/Modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const API_URL =
  "http://ec2-13-209-15-173.ap-northeast-2.compute.amazonaws.com:5000/api/shops";

const District = ({ data }) => {
  const router = useRouter();
  const name = router.query.name;
  const src = name + ".png";
  const [nameTag, setNameTag] = useState();
  const [order, setOrder] = useState();
  const [selected, setSelected] = useState("");
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper
      onClick={() => {
        setVisible(false);
      }}
    >
      <TopWrapper>
        <Header name={name} />
        <div
          style={{
            width: "100%",
            marginTop: "4rem",
            display: "flex",
            boxSizing: "border-box",
            paddingLeft: "49%",
          }}
        >
          <KaTalk />
        </div>
      </TopWrapper>
      <ImageWrapper>
        <div style={{ width: "fit-content", position: "relative" }}>
          <img src={src} />
          {data &&
            data.map((value, index) =>
              value.district === name ? (
                <CakeButton
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(value.name);
                    setVisible(true);
                    setNameTag(
                      <>
                        <NameTag1
                          style={{
                            top: -50 - 34 + 1 * value.pos_y + "px",
                            left: -50 - 28 + 1 * value.pos_x + "px",
                          }}
                        ></NameTag1>
                        <NameTag2
                          style={{
                            top: -60 - 34 + 1 * value.pos_y + "px",
                            left: -60 - 28 + 1 * value.pos_x + "px",
                          }}
                        >
                          <A href={value.link} target="_blank">
                            <Text
                              width="10rem"
                              color="#fff"
                              align="center"
                              font="TmonMonsori"
                              size="1.6rem"
                            >
                              {value.name} >
                            </Text>
                          </A>
                        </NameTag2>
                      </>
                    );
                    setOrder(
                      <>
                        {value.contact === "channel" ||
                        value.contact === "open" ? (
                          <A href={value.address} target="_blank">
                            <OrderButton
                              style={{
                                position: "absolute",
                                top: "-50px",
                                left: "70%",
                              }}
                            />
                          </A>
                        ) : (
                          <CopyToClipboard text={value.address}>
                            <Order
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal();
                                setModal(
                                  <>
                                    <Modal
                                      close={closeModal}
                                      id={value.address}
                                    />
                                  </>
                                );
                              }}
                              style={{
                                top: "-50px",
                                left: "70%",
                              }}
                            >
                              <OrderButton />
                            </Order>
                          </CopyToClipboard>
                        )}
                        <img
                          src="DownArrow.svg"
                          style={{
                            position: "absolute",
                            width: "30px",
                            height: "auto",
                            top: "-100px",
                            left: "45%",
                          }}
                        />
                        <ImageViewer
                          link={value.link}
                          s1={value.img1}
                          s2={value.img2}
                          s3={value.img3}
                        />
                      </>
                    );
                  }}
                  style={{
                    top: -50.5 + 1 * value.pos_y + "px",
                    left: value.pos_x * 1 + -19.25 + "px",
                  }}
                >
                  <CakeIcon
                    key={index}
                    style={{
                      width: "38.5px",
                      height: "50.5px",
                    }}
                    fill={
                      visible && selected === value.name ? "#66cccc" : "#fff"
                    }
                  ></CakeIcon>
                </CakeButton>
              ) : (
                ""
              )
            )}
          {visible && nameTag}
        </div>
      </ImageWrapper>
      <InfoWrapper>
        {visible && order}
        {isModalOpen && modal}
      </InfoWrapper>
      <Footer></Footer>
    </Wrapper>
  );
};

District.getInitialProps = async (ctx) => {
  const { data } = await axios.get(API_URL);
  return {
    data: data,
  };
};

const Wrapper = styled.div`
  min-height: 100%;
  max-width: 100%;
`;

const TopWrapper = styled.div`
  height: 160px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const A = styled.a`
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0 7rem 0;
`;

const NameTag1 = styled.div`
  width: 12rem;
  height: 4rem;
  border-radius: 0.7rem;
  border: solid 0.2rem #e94c56;
  background-color: #66cccc;
  position: absolute;
`;

const NameTag2 = styled.div`
  width: 12rem;
  height: 4rem;
  border-radius: 0.7rem;
  border: solid 0.2rem #e94c56;
  background-color: #ec728c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem auto;
  position: absolute;
`;

const CakeButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  position: absolute;
  padding: 0;
`;

const Order = styled.button`
  position: absolute;
  border: 0;
  outline: 0;
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
`;

export default District;
