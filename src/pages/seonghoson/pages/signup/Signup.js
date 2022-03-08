import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Signup.scss';

function _Signup() {
  const navigate = useNavigate();
  const [idText, setIdText] = useState('');
  const [pwText, setPwText] = useState('');
  const [view, setView] = useState('id');
  const [isIdInputActive, setIsIdInputActive] = useState(false);
  const [isPwInputActive, setIsPwInputActive] = useState(false);

  function handleIdChage(e) {
    const { value } = e.target;
    const reg = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (reg.test(value)) {
      setIsIdInputActive(true);
    } else {
      setIsIdInputActive(false);
    }
    setIdText(value);
  }

  function handlePwChange(e) {
    const { value } = e.target;
    const reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (reg.test(value)) {
      setIsPwInputActive(true);
    } else {
      setIsPwInputActive(false);
    }
    setPwText(value);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      if (view === 'id' && isIdInputActive) {
        handleNextBtn();
      } else if (view === 'pw' && isPwInputActive) {
        handleCreateBtn();
      }
    }
  }

  function handleNextBtn() {
    if (isIdInputActive) {
      setView('pw');
    }
  }

  function handleBackBtn() {
    setView('id');
    setPwText('');
    setIsPwInputActive(false);
  }

  function handleCreateBtn() {
    const params = JSON.stringify({
      email: idText,
      password: pwText,
    });
    const headers = {
      'Content-Type': 'application/json',
      Accept: '*/*',
    };
    axios.post('/users/signup', params, { headers }).then(response => {
      if (response.statusText === 'Created') {
        alert(response.data.message);
        navigate('/login-seonghoson');
      }
    });
  }
  return (
    <main className="signup_seonghoson">
      <section className="signup_main">
        {view === 'id' ? (
          <>
            <div className="container_top">
              <h1>이메일 형식으로 입력하세요</h1>
            </div>
            <div className="container_center">
              <input
                className={
                  isIdInputActive ? 'active_id_input' : 'unactive_id_input'
                }
                type="text"
                placeholder="아이디를 입력하세요"
                onKeyPress={handleKeyPress}
                onChange={handleIdChage}
                value={idText}
              />
            </div>
            <div className="container_bottom">
              <button
                className={
                  isIdInputActive ? 'active_id_btn' : 'unactive_id_btn'
                }
                onClick={handleNextBtn}
                disabled={!isIdInputActive}
              >
                다음
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="container_top">
              <span onClick={handleBackBtn}>이전으로 돌아가기</span>
              <h1>대문자/소문자/특수문자 포함 8자 이상으로 입력하세요</h1>
            </div>
            <div className="container_center">
              <input
                className={
                  isPwInputActive ? 'active_pw_input' : 'unactive_pw_input'
                }
                type="password"
                placeholder="패스워드를 입력하세요"
                onKeyPress={handleKeyPress}
                onChange={handlePwChange}
                value={pwText}
              />
            </div>
            <div className="container_bottom">
              <button
                className={
                  isPwInputActive ? 'active_pw_btn' : 'unactive_pw_btn'
                }
                onClick={handleCreateBtn}
                disabled={!isPwInputActive}
              >
                생성
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default _Signup;
