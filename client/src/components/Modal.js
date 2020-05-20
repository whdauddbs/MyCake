import React from "react";
import styled from "styled-components";

const Modal = ({ close, id }) => {
  return (
    <React.Fragment>
      <React.Fragment>
        <ModalOverlay onClick={close} />
        <Modaldiv>
          <Title>ID : {id}</Title>
          <Content>
            <p>
              매장의 카카오 ID가 복사되었습니다.
              <br />
              카톡을 켜서 아이디를 추가하여 주문하세요!
            </p>
          </Content>
          <ButtonWrap>
            <button onClick={close}>닫기</button>
          </ButtonWrap>
        </Modaldiv>
      </React.Fragment>
    </React.Fragment>
  );
};
export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;

const Modaldiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Title = styled.p`
  font-size: 16pt;
  font-weight: bold;
  color: #333;
`;

const Content = styled.div`
  border-top: 1px solid #bebebe;
  margin-top: 16px;
  p {
    padding: 8px;
    font-size: 12pt;
    color: #000;
  }
`;

const ButtonWrap = styled.div`
  margin: 0;
  margin-top: 8px;
  button {
    width: 100%;
    padding: 12px 0;
    border-radius: 0 0 10px 10px;
    background-color: #f18287;
    font-size: 13pt;
    color: white;
    border: 0;
    cursor: pointer;
    &:hover {
      background-color: #e94c56;
    }
    &:active {
      background-color: #e94c56;
    }
  }
`;
