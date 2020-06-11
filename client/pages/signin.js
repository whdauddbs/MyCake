import React, { useState } from "react";
import Router from "next/router";
import Header from "../components/layOut/header";
import Loading from "../components/layOut/loading";
import Input from "../components/form/input/index";
import axios from "axios";

const apiURL = "http://localhost:5000/api";
const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const pwdRegex = /(?=.*\d)(?=.*[~`!@#$%\^&*()-+=])(?=.*[a-z]).{8,}$/;

const SingInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!userInfo.email) {
      return alert("이메일을 입력해주세요.");
    }
    if (!emailRegex.test(userInfo.email)) {
      return alert("유효하지 않은 형식의 이메일입니다.");
    }
    if (!userInfo.password) {
      return alert("비밀번호를 입력해주세요.");
    }
    // if (!pwdRegex.test(userInfo.password)) {
    //     return alert('유효하지 않은 형식의 비밀번호입니다.')
    // }

    const data = {
      id: userInfo.email,
      password: userInfo.password,
    };

    setIsLoading(true);

    axios({
      url: apiURL + "/signin",
      method: "post",
      data: data,
    })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        if (res.data[0]) {
          // 로그인 넣기
          //Router.push("/");
        } else {
          alert("이메일과 비밀번호를 확인해주세요.");
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Loading show={isLoading} />
      <Header title="로그인" />
      <section className="join-container">
        <Input
          name="email"
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
        <button className="btn-green" onClick={handleSubmit}>
          로그인
        </button>
        <button className="btn-green" onClick={() => Router.push("/signup")}>
          회원가입
        </button>
      </section>
    </React.Fragment>
  );
};

export default SingInPage;
