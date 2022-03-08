import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [isIdActive, setIsIdActive] = useState(false);
  const [isPwActive, setIsPwActive] = useState(false);
  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);
  const loginBtnRef = useRef(null);
  const showBtnRef = useRef(null);

  useEffect(() => {
    if (isIdActive && isPwActive) {
      loginBtnRef.current.disabled = false;
      loginBtnRef.current.style.background = '#61ADED';
      loginBtnRef.current.style.cursor = 'pointer';
    } else {
      loginBtnRef.current.disabled = true;
      loginBtnRef.current.style.background = '#add4ea';
      loginBtnRef.current.style.cursor = 'default';
    }
  }, [isIdActive, isPwActive]);

  function idInputChange(e) {
    const { value } = e.target;
    const reg = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (reg.test(value)) {
      idInputRef.current.style.border = '1px solid green';
      idInputRef.current.className = 'active';
      setIsIdActive(true);
    } else {
      idInputRef.current.style.border = '1px solid #ccc';
      idInputRef.current.className = 'unactive';
      setIsIdActive(false);
    }
  }

  function pwInputChange(e) {
    const { value } = e.target;
    const reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (reg.test(value)) {
      pwInputRef.current.style.border = '1px solid green';
      pwInputRef.current.className = 'active';
      setIsPwActive(true);
    } else {
      pwInputRef.current.style.border = '1px solid #ccc';
      pwInputRef.current.className = 'unactive';
      setIsPwActive(false);
    }
  }

  function showBtnClick() {
    if (pwInputRef.current.type === 'password') {
      pwInputRef.current.type = 'text';
      showBtnRef.current.innerText = 'hide';
    } else {
      pwInputRef.current.type = 'password';
      showBtnRef.current.innerText = 'show';
    }
  }

  function loginInputKeyPress(e) {
    if (e.key === 'Enter') {
      loginBtnClick();
    }
  }

  // id : seonghoson@gmail.com
  // pw : !Q@W#E$R5t6y7u8i
  function loginBtnClick() {
    if (isIdActive && isPwActive) {
      const username = idInputRef.current.value;
      const userpw = pwInputRef.current.value;
      const params = JSON.stringify({
        email: username,
        password: userpw,
      });
      const headers = {
        'Content-Type': 'application/json',
        Accept: '*/*',
      };

      axios.post('/users/login', params, { headers }).then(response => {
        if (response.statusText === 'OK') {
          localStorage.setItem('webucks_token', response.data.token);
          navigate('/list-seonghoson', { state: { username } });
        } else {
          alert('아이디 비밀번호를 재확인 해주세요');
        }
      });
    }
  }

  return (
    <section className="login_main">
      <article>
        <header>
          <img alt="webucks" src="images/seonghoson/icon_webucks.png" />
        </header>
        <div className="input_container">
          <input
            ref={idInputRef}
            id="login_id"
            className="unactive"
            type="text"
            maxLength="20"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyPress={loginInputKeyPress}
            onChange={idInputChange}
          />
          <div className="login_password_wrap">
            <input
              ref={pwInputRef}
              id="login_pw"
              className="unactive"
              type="password"
              maxLength="20"
              placeholder="비밀번호"
              onKeyPress={loginInputKeyPress}
              onChange={pwInputChange}
            />
            <span id="show_button" ref={showBtnRef} onClick={showBtnClick}>
              show
            </span>
          </div>
          <button
            ref={loginBtnRef}
            id="login_button"
            onClick={() => loginBtnClick()}
          >
            로그인
          </button>
        </div>
        <footer>
          <Link to="/signup-seonghoson">회원가입 하러가기</Link>
        </footer>
      </article>
    </section>
  );
}

export default Login;
