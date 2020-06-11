import React, { useState, useEffect } from "react";
import Router from "next/router";
import Header from "../components/layOut/header";
import Loading from "../components/layOut/loading";
import Input from "../components/form/input/index";
import BtnInput from "../components/form/input/btnInput";
import AllCheckBox from "../components/form/checkbox/allCheck";
import CheckBox from "../components/form/checkbox/index";
import axios from "axios";

const apiURL =
  "http://ec2-13-209-15-173.ap-northeast-2.compute.amazonaws.com:5000/api";
const idRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const pwdRegex = /(?=.*\d)(?=.*[~`!@#$%\^&*()-+=])(?=.*[a-z]).{8,}$/;

const SingUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    shop_name: "",
    shop_link: "",
  });
  const [isAuth, setIsAuth] = useState(true);
  const [allCheck, setAllCheck] = useState(false);
  const [checkList, setCheckList] = useState({
    check01: false,
    check02: false,
    check03: false,
  });

  const handleChangeInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAllCheck = () => {
    setAllCheck(!allCheck);
    if (!allCheck === true) {
      setCheckList({
        check01: true,
        check02: true,
        check03: true,
      });
    } else {
      setCheckList({
        check01: false,
        check02: false,
        check03: false,
      });
    }
  };

  const handleCheck = (e) => {
    if (e.target.id === "check01") {
      setCheckList({
        ...checkList,
        check01: !checkList.check01,
      });
    }
    if (e.target.id === "check02") {
      setCheckList({
        ...checkList,
        check02: !checkList.check02,
      });
    }
    if (e.target.id === "check03") {
      setCheckList({
        ...checkList,
        check03: !checkList.check03,
      });
    }
  };

  const handleSubmit = () => {
    if (!userInfo.name) {
      return alert("이름을 입력해주세요.");
    }
    if (!userInfo.id) {
      return alert("이메일을 입력해주세요.");
    }
    if (!idRegex.test(userInfo.id)) {
      return alert("유효하지 않은 형식의 이메일입니다.");
    }
    if (!userInfo.password) {
      return alert("비밀번호를 입력해주세요.");
    }
    if (!pwdRegex.test(userInfo.password)) {
      return alert("유효하지 않은 형식의 비밀번호입니다.");
    }
    if (userInfo.password != userInfo.passwordConfirm) {
      return alert("비밀번호를 동일하게 입력하세요.");
    }
    if (!userInfo.shop_name) {
      return alert("가게 이름을 입력해주세요.");
    }
    if (!userInfo.phone) {
      return alert("휴대폰 번호를 입력해주세요.");
    }
    if (!checkList.check01) {
      return alert("서비스 이용약관에 동의해주세요");
    }
    if (!checkList.check02) {
      return alert("개인정보 수집 및 이용에 동의해주세요.");
    }

    const data = {
      name: userInfo.name,
      id: userInfo.id,
      password: userInfo.password,
      phone: userInfo.phone,
      shop_name: userInfo.shop_name,
      shop_link: userInfo.shop_link,
    };

    setIsLoading(true);

    axios({
      url: apiURL + "/signup",
      method: "post",
      data: data,
    })
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        alert("회원 가입이 완료되었습니다.");
        Router.push("/signin");
        1;
      })
      .catch((err) => {
        // console.log(err.response);
        setIsLoading(false);
        if (err.response.status === 409) {
          alert("이미 가입된 이메일입니다.");
        } else {
          alert("등록 중 오류가 발생했습니다.");
        }
      });
  };

  return (
    <React.Fragment>
      <Loading show={isLoading} />
      <Header title="회원가입" />
      <section className="join-container">
        <Input
          name="name"
          label="성명"
          type="text"
          placeholder="홍길동"
          visible={false}
          onChange={handleChangeInput}
        />
        <Input
          name="id"
          label="이메일"
          type="text"
          visible={false}
          onChange={handleChangeInput}
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          visible={true}
          onChange={handleChangeInput}
        />
        <Input
          name="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          visible={true}
          onChange={handleChangeInput}
        />
        <Input
          name="shop_name"
          label="가게명"
          placeholder="상호명 입력"
          type="text"
          visible={false}
          onChange={handleChangeInput}
        />
        <Input
          name="shop_link"
          label="가게SNS주소"
          placeholder="선택 사항입니다."
          type="text"
          visible={false}
          onChange={handleChangeInput}
        />
        <BtnInput
          name="phone"
          label="휴대폰 번호"
          type="text"
          placeholder="01012341234"
          visible={false}
          onChange={handleChangeInput}
        />
        <Input
          name="number"
          label="인증번호"
          type="text"
          placeholder="4자리"
          visible={false}
        />
        <AllCheckBox
          id="allCheck"
          label="전체 동의하기"
          checked={allCheck}
          onChange={handleAllCheck}
        />
        <CheckBox
          id="check01"
          label="서비스 이용약관"
          checked={checkList.check01}
          onChange={handleCheck}
        />
        <CheckBox
          id="check02"
          label="개인정보 수집 및 이용에 관한 동의 요청"
          checked={checkList.check02}
          onChange={handleCheck}
        />
        <CheckBox
          id="check03"
          label="홍보 안내 수신 (선택)"
          checked={checkList.check03}
          onChange={handleCheck}
        />
        <button className="btn-green" onClick={handleSubmit}>
          가입완료
        </button>
      </section>
    </React.Fragment>
  );
};

export default SingUpPage;
