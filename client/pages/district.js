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
import ReactGA from "react-ga";

export default function District() {
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
          {data[name] &&
            data[name].map((value, index) => (
              <CakeButton
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(value.name);
                  setVisible(true);
                  setNameTag(
                    <>
                      <NameTag1
                        style={{
                          top: -50 - 34 + 1 * value.top + "px",
                          left: -50 - 28 + 1 * value.left + "px",
                        }}
                      ></NameTag1>
                      <NameTag2
                        style={{
                          top: -60 - 34 + 1 * value.top + "px",
                          left: -60 - 28 + 1 * value.left + "px",
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
                        <A
                          href={value.address}
                          target="_blank"
                          onClick={() => {
                            ReactGA.ga(
                              "send",
                              "event",
                              value.category,
                              value.action,
                              value.label
                            );
                            window.fbq("track", "ViewContent");
                          }}
                        >
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
                              ReactGA.ga(
                                "send",
                                "event",
                                value.category,
                                value.action,
                                value.label
                              );
                              window.fbq("track", "ViewContent");
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
                        s1={value.insta1}
                        s2={value.insta2}
                        s3={value.insta3}
                      />
                    </>
                  );
                }}
                style={{
                  top: -50.5 + 1 * value.top + "px",
                  left: value.left * 1 + -19.25 + "px",
                }}
              >
                <CakeIcon
                  key={index}
                  style={{
                    width: "38.5px",
                    height: "50.5px",
                  }}
                  fill={visible && selected === value.name ? "#66cccc" : "#fff"}
                ></CakeIcon>
              </CakeButton>
            ))}
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
}

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

const data = {
  서대문구: [
    {
      name: "카페 카프카",
      link: "http://www.instagram.com/kafka_cake_",
      left: "297.0263789",
      top: "352.2673031",
      address: "https://pf.kakao.com/_gTExkj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9YRB9eJ-IH/",
      insta2: "https://www.instagram.com/p/B9Qn_IZp3l6/",
      insta3: "https://www.instagram.com/p/B9JH4spJVR2/",
      category: "oderclick",
      action: "Seodaemun",
      label: "SD-1",
    },
    {
      name: "뽀들렌 케이크",
      link: "https://www.instagram.com/bbocake/",
      left: "215.4916067",
      top: "279.7136038",
      address: "https://pf.kakao.com/_RwNpj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9VKMi0Bg79/",
      insta2: "https://www.instagram.com/p/B9P6qjThPC8/",
      insta3: "https://www.instagram.com/p/B9FsuoShvU8/",
      category: "oderclick",
      action: "Seodaemun",
      label: "SD-2",
    },
    {
      name: "에쉬본",
      link: "https://www.instagram.com/eschborn_cakeshop/?hl=ko",
      left: "184.7961631",
      top: "252.9832936",
      address: "eschborn7",
      contact: "id",
      insta1: "https://www.instagram.com/p/B52LU-fpVGs/",
      insta2: "https://www.instagram.com/p/BwLlcU5n64K/",
      insta3: "https://www.instagram.com/p/B8QHZ26pHQG/",
      category: "oderclick",
      action: "Seodaemun",
      label: "SD-3",
    },
    {
      name: "메종드마리안느",
      link: "https://www.instagram.com/maison_de_marianne/",
      left: "223.1654676",
      top: "283.5322196",
      address: "https://pf.kakao.com/_zdHKxb",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B8QTT2wpz44/",
      insta2: "https://www.instagram.com/p/B8QAeIeJ0aT/",
      insta3: "https://www.instagram.com/p/B8NSNQOJKm4/",
      category: "oderclick",
      action: "Seodaemun",
      label: "SD-4",
    },
    {
      name: "라플로레종",
      link: "https://www.instagram.com/lafloraison_/",
      left: "333.5803357",
      top: "328.4009547",
      address: "https://pf.kakao.com/_excmfu",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9WWgWIJHoa/",
      insta2: "https://www.instagram.com/p/B9RTpHiJMif/",
      insta3: "https://www.instagram.com/p/B9RTUB-JqQA/",
      category: "oderclick",
      action: "Seodaemun",
      label: "SD-5",
    },
    {
      name: "헬로케이크",
      link: "http://instagram.com/hellocake_ewha",
      left: "368.0095923",
      top: "341.7661098",
      address: "https://pf.kakao.com/_pQbnC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bTUdUndOP/",
      insta2: "https://www.instagram.com/p/B9bBKKmHbPF/",
      insta3: "https://www.instagram.com/p/B9ZDcBZHcsk/",
      category: "oderclick",
      action: "Seodaemun",
      label: "SD-6",
    },
  ],
  마포구: [
    {
      name: "메이비 케이크 본점",
      link: "http://instagram.com/may_cake_tarte",
      left: "247.6658477",
      top: "188.3084577",
      address: "https://pf.kakao.com/_sxcxfxgT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dKMggpyc6/",
      insta2: "https://www.instagram.com/p/B9ZGrnvJFPG/",
      insta3: "https://www.instagram.com/p/B9Th2VVJNxB/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-1",
    },
    {
      name: "스윗희",
      link: "https://www.instagram.com/sweet.hee.cake/",
      left: "412.7764128",
      top: "238.0597015",
      address: "https://pf.kakao.com/_kjxaxhT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9axyTpFNuT/",
      insta2: "https://www.instagram.com/p/B8Atx6BFCH6/",
      insta3: "https://www.instagram.com/p/B64juVwF2Re/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-2",
    },
    {
      name: "달상점",
      link: "https://www.instagram.com/moon_month_shop/",
      left: "229.97543",
      top: "152.4875622",
      address: "https://pf.kakao.com/_xdxlJxoC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dCyyIhsbd/",
      insta2: "https://www.instagram.com/p/B9UDAdohKx6/",
      insta3: "https://www.instagram.com/p/B9LGxeqB5xJ/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-3",
    },
    {
      name: "단꽃케이크",
      link: "https://www.instagram.com/dan_flower_cake/?hl=ko",
      left: "369.5331695",
      top: "259.9502488",
      address: "https://pf.kakao.com/_zIBqxb",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dRj30lil_/",
      insta2: "https://www.instagram.com/p/B9bSHuZlVnL/",
      insta3: "https://www.instagram.com/p/B9atVZwl6C1/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-4",
    },
    {
      name: "오투베이커리",
      link: "https://www.instagram.com/o2.bakery/",
      left: "379.8525799",
      top: "277.8606965",
      address: "https://pf.kakao.com/_GBXxeT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9I3Eieltvq/",
      insta2: "https://www.instagram.com/p/B7S7TgXhhB7/",
      insta3: "https://www.instagram.com/p/B3oghkYlBwl/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-5",
    },
    {
      name: "루모스케이크",
      link: "https://www.instagram.com/lumos_cake/?hl=ko",
      left: "204.4226044",
      top: "182.3383085",
      address: "https://pf.kakao.com/_xdxbYxexl",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bFelOluVN/",
      insta2: "https://www.instagram.com/p/B9V3TvxF7zJ/",
      insta3: "https://www.instagram.com/p/B9DzxzbFvbo/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-6",
    },
    {
      name: "케이크원",
      link: "https://www.instagram.com/cakeone_1/?hl=ko",
      left: "393.1203931",
      top: "202.238806",
      address: "https://pf.kakao.com/_Dxixmxoxl",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bAXPrHYt2/",
      insta2: "https://www.instagram.com/p/B9YvCaEHoW7/",
      insta3: "https://www.instagram.com/p/B9GhpGCHg-D/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-7",
    },
    {
      name: "리아의 오븐",
      link: "https://www.instagram.com/le_four_de_leah/?hl=ko",
      left: "125.7985258",
      top: "148.5074627",
      address: "http://pf.kakao.com/_cxjVxjxb",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B80J0GzJa-m/",
      insta2: "https://www.instagram.com/p/B8SsiivJStZ/",
      insta3: "https://www.instagram.com/p/B7KrWhqJUJR/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-8",
    },
    {
      name: "에노하나",
      link: "https://www.instagram.com/enohana_cake/",
      left: "135.6265356",
      top: "72.88557214",
      address: "touko76",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9a50L5pIZS/",
      insta2: "https://www.instagram.com/p/B9HKEQZp5BF/",
      insta3: "https://www.instagram.com/p/B8nY5sbJ5bu/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-9",
    },
    {
      name: "크림데이",
      link: "https://www.instagram.com/creamday_cakeshop/",
      left: "58.96805897",
      top: "96.76616915",
      address: "https://pf.kakao.com/_xnthvT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dRYswgGdM/",
      insta2: "https://www.instagram.com/p/B9avGBrgKlz/",
      insta3: "https://www.instagram.com/p/B9VrI4qA9St/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-10",
    },
    {
      name: "오롯스튜디오",
      link: "https://www.instagram.com/olotstudio/?hl=ko",
      left: "149.3857494",
      top: "108.7064677",
      address: "https://pf.kakao.com/_xkxlIku",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9VeMGjJ7j6/",
      insta2: "https://www.instagram.com/p/B9VeDzgptEF/",
      insta3: "https://www.instagram.com/p/B9S_LJ3ppr3/",
      category: "oderclick",
      action: "Mapo",
      label: "MP-11",
    },
  ],
  용산구: [
    {
      name: "행복상점",
      link: "https://www.instagram.com/h.appystore/",
      left: "95.02487562",
      top: "166.3265306",
      address: "https://pf.kakao.com/_ExmTnj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9YINW7JWNo/",
      insta2: "https://www.instagram.com/p/B9WYx2EJ0wb/",
      insta3: "https://www.instagram.com/p/B9McYZBJNr7/",
      category: "oderclick",
      action: "Yongsan",
      label: "YS-1",
    },
    {
      name: "다음에또봐",
      link: "https://www.instagram.com/dattoseoul/",
      left: "110.9452736",
      top: "52.80612245",
      address: "https://pf.kakao.com/_DfAZxb",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bkoVvpZAK/",
      insta2: "https://www.instagram.com/p/B9a954gpEtI/",
      insta3: "https://www.instagram.com/p/B9ao9UJplDo/",
      category: "oderclick",
      action: "Yongsan",
      label: "YS-2",
    },
    {
      name: "마쁘띠뜨",
      link: "https://www.instagram.com/ma_petite_atelier/",
      left: "127.8606965",
      top: "43.87755102",
      address: "https://pf.kakao.com/_xnxaxeIT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B6vHuQQjvyh/",
      insta2: "https://www.instagram.com/p/B6as9ceDWJP/",
      insta3: "https://www.instagram.com/p/B5ndaLXjq2e/",
      category: "oderclick",
      action: "Yongsan",
      label: "YS-3",
    },
    {
      name: "리암스 케이커리",
      link: "https://www.instagram.com/liams_cakery/",
      left: "284.079602",
      top: "90.81632653",
      address: "https://pf.kakao.com/_sxnHxej",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B4caKWrpgKw/",
      insta2: "https://www.instagram.com/p/B4KC6JNJsV6/",
      insta3: "https://www.instagram.com/p/B3HS4yJpazp/",
      category: "oderclick",
      action: "Yongsan",
      label: "YS-4",
    },
    {
      name: "스윗쿠킹",
      link: "https://www.instagram.com/hyun_ju81/",
      left: "117.9104478",
      top: "156.122449",
      address: "ucdc00",
      contact: "id",
      insta1: "https://www.instagram.com/p/BiLevAbgdTB/",
      insta2: "https://www.instagram.com/p/BiEOyF8gG9u/",
      insta3: "https://www.instagram.com/p/BfAMjsDhm1f/",
      category: "oderclick",
      action: "Yongsan",
      label: "YS-5",
    },
  ],
  은평구: [
    {
      name: "안아줘베이킹",
      link: "https://www.instagram.com/hugme_baking/",
      left: "158.6466165",
      top: "155.0868486",
      address: "https://pf.kakao.com/_xaVvMj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dBEkIh3r-/",
      insta2: "https://www.instagram.com/p/B9cz-GghyV7/",
      insta3: "https://www.instagram.com/p/B9bxI9sBRTk/",
      category: "oderclick",
      action: "Eunpyeong",
      label: "EY-1",
    },
    {
      name: "다온케이크",
      link: "https://www.instagram.com/_daoncake/",
      left: "120.5513784",
      top: "226.5508685",
      address: "https://pf.kakao.com/_xfjxcFj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9b3V0QpnFU/",
      insta2: "https://www.instagram.com/p/B9a27D5JB_N/",
      insta3: "https://www.instagram.com/p/B9aurvtpdae/",
      category: "oderclick",
      action: "Eunpyeong",
      label: "EY-2",
    },
    {
      name: "수다케이크",
      link: "https://www.instagram.com/SUDA_CAKE/",
      left: "234.8370927",
      top: "36.12903226",
      address: "imgasina",
      contact: "id",
      insta1: "https://www.instagram.com/p/B3JHBAEg2Cf/",
      insta2: "https://www.instagram.com/p/BrPVca9gKiK/",
      insta3: "https://www.instagram.com/p/Bq9KD2hgUuu/",
      category: "oderclick",
      action: "Eunpyeong",
      label: "EY-3",
    },
    {
      name: "땡땡케이크",
      link: "https://www.instagram.com/ddangddangcake/",
      left: "268.9223058",
      top: "42.08436725",
      address: "https://pf.kakao.com/_xhxcaST",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9aqWMLpJGq/",
      insta2: "https://www.instagram.com/p/B9WdRZopDa4/",
      insta3: "https://www.instagram.com/p/B9TM1Gppn_s/",
      category: "oderclick",
      action: "Eunpyeong",
      label: "EY-4",
    },
    {
      name: "꽃가루",
      link: "https://www.instagram.com/flowergaru_cake/",
      left: "160.6516291",
      top: "244.4168734",
      address: "https://pf.kakao.com/_zVIxij",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bPimthch9/",
      insta2: "https://www.instagram.com/p/B9Vm3pOh03j/",
      insta3: "https://www.instagram.com/p/B9TRoWdhbkw/",
      category: "oderclick",
      action: "Eunpyeong",
      label: "EY-5",
    },
    {
      name: "달콤 꿈꾸다",
      link: "http://www.instagram.com/sweet__dreaming",
      left: "134.5864662",
      top: "184.8635236",
      address: "https://open.kakao.com/o/sIMddaJb",
      contact: "open",
      insta1: "https://www.instagram.com/p/B9WWf_0gHiD/",
      insta2: "https://www.instagram.com/p/B9RUtj-AkWK/",
      insta3: "https://www.instagram.com/p/B9OzVL_AEpV/",
      category: "oderclick",
      action: "Eunpyeong",
      label: "EY-6",
    },
  ],
  강남구: [
    {
      name: "더달달 역삼점",
      link: "https://www.instagram.com/murmuringcake/",
      left: "63.16666667",
      top: "165.1666667",
      address: "http://pf.kakao.com/_VmTxgC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9XxgmIppu0/",
      insta2: "https://www.instagram.com/p/B9Oz4-SJWik/",
      insta3: "https://www.instagram.com/p/B9HQolMJkS4/",
      category: "oderclick",
      action: "Gangnam",
      label: "GN-1",
    },
    {
      name: "미엘드파리",
      link: "https://www.instagram.com/mieldeparis/",
      left: "37.83333333",
      top: "67.83333333",
      address: "mieldeparis",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9bLnVkJ5yF/",
      insta2: "https://www.instagram.com/p/B9ZN8F5BpJf/",
      insta3: "https://www.instagram.com/p/B9WjJX_hEz2/",
      category: "oderclick",
      action: "Gangnam",
      label: "GN-2",
    },
    {
      name: "더케익스토리",
      link: "https://www.instagram.com/thecakestory.kr/",
      left: "40.5",
      top: "22.5",
      address: "https://pf.kakao.com/_mJxbxkxd",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9diVDdA3MX/",
      insta2: "https://www.instagram.com/p/B9dZHLRAWdI/",
      insta3: "https://www.instagram.com/p/B9dY04Ngv2S/",
      category: "oderclick",
      action: "Gangnam",
      label: "GN-3",
    },
    {
      name: "파스피스",
      link: "http://www.instagram.com/pazpeace_",
      left: "20.5",
      top: "61.16666667",
      address: "https://pf.kakao.com/_QIvXC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9WI78JHdoQ/",
      insta2: "https://www.instagram.com/p/B9Tqy8YHPbJ/",
      insta3: "https://www.instagram.com/p/B9RfN3kHv4O/",
      category: "oderclick",
      action: "Gangnam",
      label: "GN-4",
    },
    {
      name: "제니스케이크",
      link: "http://www.instagram.com/jennysboutiquecake",
      left: "97.83333333",
      top: "78.5",
      address: "jennyscake",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9Ohs6mJXqu/",
      insta2: "https://www.instagram.com/p/B9OhIjApkRR/",
      insta3: "https://www.instagram.com/p/B8aytDEJ6ty/",
      category: "oderclick",
      action: "Gangnam",
      label: "GN-5",
    },
    {
      name: "Athird",
      link: "http://instagram.com/athird.flower.cake",
      left: "113.8333333",
      top: "33.16666667",
      address: "https://pf.kakao.com/_Rmtfj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dWAEPpqKr/",
      insta2: "https://www.instagram.com/p/B9dFTLYJE3B/",
      insta3: "https://www.instagram.com/p/B9dDOEBJ6zD/",
      category: "oderclick",
      action: "Gangnam",
      label: "GN-6",
    },
  ],
  성동구: [
    {
      name: "JOFREE CAKE",
      link: "http://www.instagram.com/jofreecake",
      left: "343.5323383",
      top: "349.25",
      address: "https://open.kakao.com/o/sN0bTJvb",
      contact: "open",
      insta1: "https://www.instagram.com/p/B9dR8_qpKst/",
      insta2: "https://www.instagram.com/p/B9X6-0Np4wY/",
      insta3: "https://www.instagram.com/p/B9VWTfPpqrz/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-1",
    },
    {
      name: "방울새",
      link: "https://www.instagram.com/bangulsae/",
      left: "180.3482587",
      top: "231.25",
      address: "http://pf.kakao.com/_rxdQxixl",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9Y8Pv_BtSV/",
      insta2: "https://www.instagram.com/p/B9WfC-Mhefq/",
      insta3: "https://www.instagram.com/p/B9IfieYhQ0U/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-2",
    },
    {
      name: "관계의이점",
      link: "http://www.instagram.com/cafe2.22",
      left: "144.5273632",
      top: "239.25",
      address: "https://pf.kakao.com/_pcfNT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9WTbTjHYUD/",
      insta2: "https://www.instagram.com/p/B9RedOcnE1D/",
      insta3: "https://www.instagram.com/p/B9F3_qfnJVR/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-3",
    },
    {
      name: "알몽케이크",
      link: "https://www.instagram.com/almong_cake/",
      left: "196.2686567",
      top: "173.25",
      address: "https://pf.kakao.com/_lxbjxgj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9UQxmDnReL/",
      insta2: "https://www.instagram.com/p/B9Ru-LNHAzh/",
      insta3: "https://www.instagram.com/p/B9Hdv66nDOO/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-4",
    },
    {
      name: "달콤한파티",
      link: "https://www.instagram.com/dollcom_party/",
      left: "146.5174129",
      top: "65.25",
      address: "dollcom",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9GB8oCFo87/",
      insta2: "https://www.instagram.com/p/B9YkgeClonn/",
      insta3: "https://www.instagram.com/p/B9TW7ZXFJVn/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-5",
    },
    {
      name: "소예아뜰리에",
      link: "http://instagram.com/soye_cake",
      left: "212.1890547",
      top: "191.25",
      address: "https://pf.kakao.com/_xeIwYT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9SJ1xipzIz/",
      insta2: "https://www.instagram.com/p/B9Cke2Up6Io/",
      insta3: "https://www.instagram.com/p/B87zs6Npn9t/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-6",
    },
    {
      name: "메이크 잇 러브",
      link: "http://www.instagram.com/makeit_luv/",
      left: "200.2487562",
      top: "121.25",
      address: "https://pf.kakao.com/_xnxaxeIT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bIntdF3le/",
      insta2: "https://www.instagram.com/p/B9aM_YSl010/",
      insta3: "https://www.instagram.com/p/B9alLS2lTgl/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-7",
    },
    {
      name: "레몬드",
      link: "https://www.instagram.com/lemoned_pastry/",
      left: "62.93532338",
      top: "255.25",
      address: "https://pf.kakao.com/_pGExfT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9VZqn4pV_1/",
      insta2: "https://www.instagram.com/p/B9X90ehpGMC/",
      insta3: "https://www.instagram.com/p/B85phBdpBWK/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-8",
    },
    {
      name: "아띠",
      link: "https://www.instagram.com/atti_cafe/",
      left: "164.4278607",
      top: "109.25",
      address: "https://open.kakao.com/o/sTA3FlK",
      contact: "open",
      insta1: "https://www.instagram.com/p/B9apyV7lHA3/",
      insta2: "https://www.instagram.com/p/B9WI478ld0H/",
      insta3: "https://www.instagram.com/p/B9WIn_ElGJT/",
      category: "oderclick",
      action: "Seongdong",
      label: "Sd-9",
    },
  ],
  서초구: [
    {
      name: "챱챱케이크",
      link: "http://www.instagram.com/chyapchyap_cake",
      left: "154.3209877",
      top: "157.4626866",
      address: "https://open.kakao.com/o/sjPi6pR",
      contact: "open",
      insta1: "https://www.instagram.com/p/B9W1TuzJ54q/",
      insta2: "https://www.instagram.com/p/B9Tq2vvpViU/",
      insta3: "https://www.instagram.com/p/B9JlPGIJ-mJ/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-1",
    },
    {
      name: "해이케이크샵",
      link: "https://www.instagram.com/hayee.daily/",
      left: "75.30864198",
      top: "235.0746269",
      address: "hayeecake",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9dETaQJyEK/",
      insta2: "https://www.instagram.com/p/B9aft0PpM93/",
      insta3: "https://www.instagram.com/p/B9X_uBPp9dR/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-2",
    },
    {
      name: "오베르디",
      link: "http://www.instagram.com/ober.dessert",
      left: "37.77777778",
      top: "159.4527363",
      address: "https://pf.kakao.com/_kpIyT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B8-hLtynQTy/",
      insta2: "https://www.instagram.com/p/B8kq5dVH3F3/",
      insta3: "https://www.instagram.com/p/B8aTnEyn9x1/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-3",
    },
    {
      name: "마쥬네",
      link: "https://www.instagram.com/majournee_cake",
      left: "255.0617284",
      top: "143.5323383",
      address: "https://pf.kakao.com/_JdBUC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dZdiapsH2/",
      insta2: "https://www.instagram.com/p/B9c-qHKpl7Z/",
      insta3: "https://www.instagram.com/p/B9a6A1up0F5/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-4",
    },
    {
      name: "오즈룸",
      link: "https://www.instagram.com/theohsroom/",
      left: "207.654321",
      top: "183.3333333",
      address: "https://pf.kakao.com/_xeMqjxl",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9Ypl9aptbV/",
      insta2: "https://www.instagram.com/p/B9QYSH8p_lg/",
      insta3: "https://www.instagram.com/p/B9JIKYppqPS/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-5",
    },
    {
      name: "생과방봄날",
      link: "https://www.instagram.com/sweet_bom_nal/",
      left: "351.8518519",
      top: "219.1542289",
      address: "https://pf.kakao.com/_xjyQHT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9a8Uy1BxCi/",
      insta2: "https://www.instagram.com/p/B9LY7SlAY6C/",
      insta3: "https://www.instagram.com/p/B9BbF9_BANJ/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-6",
    },
    {
      name: "디저트 스튜디오 단청",
      link: "http://instagram.com/dessert_studio_dancheong",
      left: "336.0493827",
      top: "237.0646766",
      address: "https://pf.kakao.com/_xlwXIxl",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dnb6hpj5X/",
      insta2: "https://www.instagram.com/p/B9LYdQGJ8Tp/",
      insta3: "https://www.instagram.com/p/B9ItAblJCL-/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-7",
    },
    {
      name: "포드레비아오",
      link: "http://instagram.com/poudrebiao",
      left: "95.0617284",
      top: "111.6915423",
      address: "https://pf.kakao.com/_dZxbPT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B8vgG3rHWtD/",
      insta2: "https://www.instagram.com/p/B8qlR54HRQR/",
      insta3: "https://www.instagram.com/p/B8fDEQNnov_/",
      category: "oderclick",
      action: "Seocho",
      label: "SC-8",
    },
  ],
  광진구: [
    {
      name: "케익다방",
      link: "http://instagram.com/cakedabang",
      left: "110.7843137",
      top: "236.4089776",
      address: "https://pf.kakao.com/_xixdLdj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9TyBksAkI2/",
      insta2: "https://www.instagram.com/p/B9TxyLEg3tL/",
      insta3: "https://www.instagram.com/p/B9TxQLBAWBg/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-1",
    },
    {
      name: "뮤르뮤르",
      link: "http://www.instagram.com/murmure.sj",
      left: "218.627451",
      top: "40.89775561",
      address: "https://pf.kakao.com/_DxkbxeT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9TZrhMJ4TQ/",
      insta2: "https://www.instagram.com/p/B9Q4vsGpaY7/",
      insta3: "https://www.instagram.com/p/B9Mu_9uJSoN/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-2",
    },
    {
      name: "카페노니다",
      link: "https://www.instagram.com/cafe11nonida/?hl=ko",
      left: "157.8431373",
      top: "182.5436409",
      address: "https://pf.kakao.com/_fipZj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9RXXaKFwkn/",
      insta2: "https://www.instagram.com/p/B9J0-pMlCSZ/",
      insta3: "https://www.instagram.com/p/B9E3uozICPF/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-3",
    },
    {
      name: "스윗정",
      link: "https://www.instagram.com/unjung1214/",
      left: "130.3921569",
      top: "124.6882793",
      address: "uj4157",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9VfUaKFHfb/",
      insta2: "https://www.instagram.com/p/B9VeXIElZXs/",
      insta3: "https://www.instagram.com/p/B9VeJlVl4aZ/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-4",
    },
    {
      name: "그자체 베이커리카페 2호점",
      link: "https://www.instagram.com/g_jache_bakery/",
      left: "130.3921569",
      top: "124.6882793",
      address: "https://pf.kakao.com/_xgxfrTT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dL1jaJ0_x/",
      insta2: "https://www.instagram.com/p/B8-VatRp10C/",
      insta3: "https://www.instagram.com/p/B8nIsfLp8Yi/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-5",
    },
    {
      name: "로얄부띠그",
      link: "https://www.instagram.com/royal.ltd/?hl=ko",
      left: "183.3333333",
      top: "278.3042394",
      address: "https://pf.kakao.com/_pxhchxl",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9YMikUlGVd/",
      insta2: "https://www.instagram.com/p/B9VhZrllJaV/",
      insta3: "https://www.instagram.com/p/B9Vc9EtlIcW/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-6",
    },
    {
      name: "딜라이트디케이크",
      link: "https://www.instagram.com/delight_d_cake/",
      left: "191.1764706",
      top: "198.5037406",
      address: "auty23",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9YQDyqJL9n/",
      insta2: "https://www.instagram.com/p/B9WNrZJJvx8/",
      insta3: "https://www.instagram.com/p/B9V59VipAJ9/",
      category: "oderclick",
      action: "Gwangjin",
      label: "GG-7",
    },
  ],
  영등포구: [
    {
      name: "빵어니스타 여의도점",
      link: "https://www.instagram.com/panhonesta/",
      left: "296.5432099",
      top: "236.7821782",
      address: "https://pf.kakao.com/_xmfyNj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bvqN9Hhne/",
      insta2: "https://www.instagram.com/p/B9dTQAfHTUG/",
      insta3: "https://www.instagram.com/p/B9YKyt0nnGl/",
      category: "oderclick",
      action: "Yeongdeungpo",
      label: "YD-1",
    },
    {
      name: "유니네케이크",
      link: "https://www.instagram.com/unine_cake/",
      left: "56.04938272",
      top: "303.9108911",
      address: "https://pf.kakao.com/_IZpwC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dKrCMnM9q/",
      insta2: "https://www.instagram.com/p/B9X5bs7HhmE/",
      insta3: "https://www.instagram.com/p/B9boUoWnoAh/",
      category: "oderclick",
      action: "Yeongdeungpo",
      label: "YD-2",
    },
    {
      name: "플로리스",
      link: "https://www.instagram.com/floris_flowercake/",
      left: "79.25925926",
      top: "347.6732673",
      address: "https://pf.kakao.com/_cVwxbj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dbf2oHYbB/",
      insta2: "https://www.instagram.com/p/B9bLRVrnFvf/",
      insta3: "https://www.instagram.com/p/B9Zh2gLHEMM/",
      category: "oderclick",
      action: "Yeongdeungpo",
      label: "YD-3",
    },
    {
      name: "하오나 공방",
      link: "https://www.instagram.com/haona_cake/",
      left: "138.5185185",
      top: "171.43564356",
      address: "https://pf.kakao.com/_CxaxauT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bykSAh4U6/",
      insta2: "https://www.instagram.com/p/B9YWadDhct5/",
      insta3: "https://www.instagram.com/p/B9J3vs4B6lU/",
      category: "oderclick",
      action: "Yeongdeungpo",
      label: "YD-4",
    },
    {
      name: "도롱제과",
      link: "https://www.instagram.com/dorong_bakery/",
      left: "432.8395062",
      top: "260.5445545",
      address: "https://pf.kakao.com/_veSQC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9ddKonHUSp/",
      insta2: "https://www.instagram.com/p/B9a-4hlnl5u/",
      insta3: "https://www.instagram.com/p/B9Y8GcVHSSi/",
      category: "oderclick",
      action: "Yeongdeungpo",
      label: "YD-5",
    },
    {
      name: "벨라다봉",
      link: "http://www.instagram.com/belladabon",
      left: "260.9876543",
      top: "203.1188119",
      address: "dabon2",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9asg1cFD-5/",
      insta2: "https://www.instagram.com/p/B9QXmYNlIp5/",
      insta3: "https://www.instagram.com/p/B8xOIYylu-L/",
      category: "oderclick",
      action: "Yeongdeungpo",
      label: "YD-6",
    },
  ],
  동대문구: [
    {
      name: "매일피는꽃하루케이크",
      link: "https://www.instagram.com/one_flower_day/",
      left: "260",
      top: "185",
      address: "https://pf.kakao.com/_Wlxkxcd",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9Y7mtKF1jc/",
      insta2: "https://www.instagram.com/p/B9Zhcw4lKtw/",
      insta3: "https://www.instagram.com/p/B9W8LHEFwIc/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-1",
    },
    {
      name: "미밀케이크",
      link: "http://www.instagram.com/mimealcake",
      left: "286",
      top: "99",
      address: "mimeal",
      contact: "id",
      insta1: "https://www.instagram.com/p/B9apoR4lFPd/",
      insta2: "https://www.instagram.com/p/B9aoxv4lbD9/",
      insta3: "https://www.instagram.com/p/B9WAYlBlkCP/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-2",
    },
    {
      name: "아이러브케익",
      link: "https://www.instagram.com/ilovecake_seoul/",
      left: "148",
      top: "225",
      address: "ilovecakes",
      contact: "id",
      insta1: "https://www.instagram.com/p/BULC-VZFjuT/",
      insta2: "https://www.instagram.com/p/BT-uaIxFsEM/",
      insta3: "https://www.instagram.com/p/BTz-8qclllm/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-3",
    },
    {
      name: "파티스리 소소",
      link: "http://www.instagram.com/patisseriesoso",
      left: "306",
      top: "195",
      address: "https://pf.kakao.com/_xgqTcV",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9S8uXQAohB/",
      insta2: "https://www.instagram.com/p/B9Ou3KcAYl-/",
      insta3: "https://www.instagram.com/p/B9NjsylgwAo/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-4",
    },
    {
      name: "잇츄",
      link: "http://www.instagram.com/eats__u",
      left: "295",
      top: "147",
      address: "https://pf.kakao.com/_bnIbT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9bSOPxjQ59/",
      insta2: "https://www.instagram.com/p/B9Ysb8yDjo0/",
      insta3: "https://www.instagram.com/p/B9V7gizjY1Y/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-5",
    },
    {
      name: "월곡동케이크",
      link: "https://www.instagram.com/sosotable_cake/",
      left: "151",
      top: "102",
      address: "https://pf.kakao.com/_RzJpj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9dZTCWpiyw/",
      insta2: "https://www.instagram.com/p/B9YMKnZp7es/",
      insta3: "https://www.instagram.com/p/B9VoPi3JygF/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-6",
    },
    {
      name: "덕수이가네제과",
      link: "https://www.instagram.com/rosie__ne/",
      left: "229",
      top: "250",
      address: "https://pf.kakao.com/_uxnxiIj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B6hR8WDjW6J/",
      insta2: "https://www.instagram.com/p/B6SnHSDjTCx/",
      insta3: "https://www.instagram.com/p/B54Z5e7DrQH/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-7",
    },
    {
      name: "디어아그네스",
      link: "https://www.instagram.com/yeonhui_patisserie/",
      left: "222",
      top: "171",
      address: "https://pf.kakao.com/_RhZQT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B8yWVStpFfP/",
      insta2: "https://www.instagram.com/p/B8iAp72Jt9T/",
      insta3: "https://www.instagram.com/p/B8I7uRmJP3x/",
      category: "oderclick",
      action: "Dongdaemun",
      label: "DD-8",
    },
  ],
  동작구: [
    {
      name: "아뜨레케이크",
      link: "https://www.instagram.com/atrecake/",
      left: "107",
      top: "117",
      address: "https://pf.kakao.com/_xhSxkcC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B-Cma8eDDT1/",
      insta2: "https://www.instagram.com/p/B-CmRgMjLRz/",
      insta3: "https://www.instagram.com/p/B-BOzd5D6FF/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-1",
    },
    {
      name: "이담공방",
      link: "https://www.instagram.com/2dam_gongbang/",
      left: "192",
      top: "41",
      address: "https://pf.kakao.com/_wHZPj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B-EbXRklnMG/",
      insta2: "https://www.instagram.com/p/B-B7JSMlvWW/",
      insta3: "https://www.instagram.com/p/B9_QvphlQOA/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-2",
    },
    {
      name: "달쿠마",
      link: "https://www.instagram.com/dalkuma/",
      left: "178",
      top: "136",
      address: "https://pf.kakao.com/_Ncjbj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B-AIIYkplg3/",
      insta2: "https://www.instagram.com/p/B9d9LkFJ0Ws/",
      insta3: "https://www.instagram.com/p/B8VbuYHJ-aE",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-3",
    },
    {
      name: "케이크팝",
      link: "https://www.instagram.com/cakepop_star9/",
      left: "213",
      top: "114",
      address: "https://pf.kakao.com/_qxhxcgj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B5Z62hGJ1nF/",
      insta2: "https://www.instagram.com/p/B4KPU3cJELb/",
      insta3: "https://www.instagram.com/p/B4KQEYwJ7M5/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-4",
    },
    {
      name: "리앨리스",
      link: "https://www.instagram.com/studio.realice/",
      left: "295",
      top: "132",
      address: "https://pf.kakao.com/_xgNxnxjC",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9hQnOqngtl/",
      insta2: "https://www.instagram.com/p/B9Wh8KLn7qP/",
      insta3: "https://www.instagram.com/p/B3wntnGnOa8/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-5",
    },
    {
      name: "거거케이크",
      link: "https://www.instagram.com/geogeo_cake/",
      left: "282",
      top: "217",
      address: "https://pf.kakao.com/_LjKYT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B-G7YtZpv_Q/",
      insta2: "https://www.instagram.com/p/B9-swZPJjFt/",
      insta3: "https://www.instagram.com/p/B93l48FpKcn/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-6",
    },
    {
      name: "미엘케이크",
      link: "https://www.instagram.com/mielcake_flower/",
      left: "106",
      top: "62",
      address: "https://pf.kakao.com/_UbSIxb",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B90-QCJpGaQ/",
      insta2: "https://www.instagram.com/p/B9tTA6WJCeK/",
      insta3: "https://www.instagram.com/p/B9rgqCHp2UA/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-7",
    },
    {
      name: "꼬돌린케이크",
      link: "https://www.instagram.com/ccodolyn_cake/",
      left: "254",
      top: "238",
      address: "ccodolyn",
      contact: "id",
      insta1: "https://www.instagram.com/p/B-EWZ-zJF15/",
      insta2: "https://www.instagram.com/p/B9_sVI8pORD/",
      insta3: "https://www.instagram.com/p/B9_r-qEp4_W/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-8",
    },
    {
      name: "플로앙",
      link: "https://www.instagram.com/floang_flower_ricecake/",
      left: "302",
      top: "246",
      address: "https://pf.kakao.com/_NHxdRu",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9_jFJEFeNb/",
      insta2: "https://www.instagram.com/p/B94HAEilDi6/",
      insta3: "https://www.instagram.com/p/B922RtTlEet/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-9",
    },
    {
      name: "브레드숨",
      link: "https://www.instagram.com/breadsum/",
      left: "149",
      top: "47",
      address: "breadsum",
      contact: "id",
      insta1: "https://www.instagram.com/p/B6cv5SopE8Q/",
      insta2: "https://www.instagram.com/p/B5rPF-eJJqU/",
      insta3: "https://www.instagram.com/p/B0qI3lMpsgJ/",
      category: "oderclick",
      action: "Dongjak",
      label: "DG-10",
    },
  ],
  구로구: [
    {
      name: "마이리틀케이크",
      link: "https://www.instagram.com/my_little_cake__/",
      left: "184",
      top: "151",
      address: "https://pf.kakao.com/_ddxcBT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9v-bfUDark/",
      insta2: "https://www.instagram.com/p/B9q_muHDXhs/",
      insta3: "https://www.instagram.com/p/B9jQlCGjK0t/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-1",
    },
    {
      name: "파파비",
      link: "https://www.instagram.com/pa_pab/",
      left: "86",
      top: "187",
      address: "jjpapab",
      contact: "id",
      insta1: "https://www.instagram.com/p/B8cv95eH2kH/",
      insta2: "https://www.instagram.com/p/B5rGhBdHLSS/",
      insta3: "https://www.instagram.com/p/B4YqT_4nxLq/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-2",
    },
    {
      name: "큐리크",
      link: "https://www.instagram.com/__kuric__/",
      left: "296",
      top: "235",
      address: "KuriC",
      contact: "id",
      insta1: "https://www.instagram.com/p/B-b0okRJrD0/",
      insta2: "https://www.instagram.com/p/B-b0lXGJVS-/",
      insta3: "https://www.instagram.com/p/B-b0d_WpQpO/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-3",
    },
    {
      name: "조은날케이크",
      link: "https://www.instagram.com/joeun.day.cake/",
      left: "253",
      top: "190",
      address: "https://pf.kakao.com/_xoUgxeT",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B-UAOiTJXTt/",
      insta2: "https://www.instagram.com/p/B-T_lB_pbgq/",
      insta3: "https://www.instagram.com/p/B-MWqDeJwDg/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-4",
    },
    {
      name: "봉수니케이크",
      link: "https://www.instagram.com/mindi_1018/",
      left: "255",
      top: "102",
      address: "ckatjdeks1018",
      contact: "id",
      insta1: "https://www.instagram.com/p/B-d7fkWH-v1/",
      insta2: "https://www.instagram.com/p/B-d7Y6FHwBs/",
      insta3: "https://www.instagram.com/p/B-WZyQPnUYS/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-5",
    },
    {
      name: "마마스뜰리에",
      link: "https://www.instagram.com/mamastelier/",
      left: "80",
      top: "152",
      address: "https://pf.kakao.com/_FySGxb",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B9llTNjBBim/",
      insta2: "https://www.instagram.com/p/B9ll237B05u/",
      insta3: "https://www.instagram.com/p/B73Ae9EhwPg/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-6",
    },
    {
      name: "아뜰리에소담",
      link: "https://www.instagram.com/ateliersodam/",
      left: "250",
      top: "60",
      address: "ateliersodam",
      contact: "id",
      insta1: "https://www.instagram.com/p/B-VbIanF4Fz/",
      insta2: "https://www.instagram.com/p/B-N1Ta0lDo3/",
      insta3: "https://www.instagram.com/p/B-LIJNil3I-/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-7",
    },
    {
      name: "달달하니",
      link: "https://www.instagram.com/daldal_haney/",
      left: "127",
      top: "185",
      address: "daldalhaney",
      contact: "id",
      insta1: "https://www.instagram.com/p/B-bF-6Unn14/",
      insta2: "https://www.instagram.com/p/B-TQyjhHChr/",
      insta3: "https://www.instagram.com/p/B-OOg1QHtAR/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-8",
    },
    {
      name: "말랑한날",
      link: "https://www.instagram.com/mallang_day/",
      left: "45",
      top: "107",
      address: "https://pf.kakao.com/_ivGxlj",
      contact: "channel",
      insta1: "https://www.instagram.com/p/B-de3H9HzCO/",
      insta2: "https://www.instagram.com/p/B-der5LH_yP/",
      insta3: "https://www.instagram.com/p/B-arDQgH28j/",
      category: "oderclick",
      action: "Gurogu",
      label: "GR-9",
    },
  ],
};
