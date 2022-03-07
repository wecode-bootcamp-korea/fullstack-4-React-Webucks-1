import { React, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const userInfo = useRef({ userEmail: '', userPassword: '', loginActive: 0 });
  const [classChangeBtn, setClassChangeBtn] = useState('login_button_off');
  const focusInput = useRef();
  const loginNavi = useNavigate();

  const loginCheck = e => {
    e.target.name === 'id'
      ? (userInfo.current.userEmail = e.target.value)
      : (userInfo.current.userPassword = e.target.value);

    if (
      userInfo.current.userEmail.includes('@') &&
      userInfo.current.userPassword.length > 7
    ) {
      setClassChangeBtn('login_button_on');
      userInfo.current.loginActive = 1;
    }
    if (
      !userInfo.current.userEmail.includes('@') ||
      userInfo.current.userPassword.length < 8
    ) {
      setClassChangeBtn('login_button_off');
      userInfo.current.loginActive = 0;
    }
  };

  const startLogin = () => {
    if (userInfo.current.loginActive === 1) {
      loginNavi('/list-euitaek');
    }
  };

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <>
      <div id="container">
        <div id="container_boxing">
          <header>
            <h1>WeBucks</h1>
          </header>
          <section className="login_area">
            <div className="login_form">
              <input
                ref={focusInput}
                name="id"
                className="login_input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={loginCheck}
              />
              <input
                name="password"
                className="login_input"
                type="text"
                placeholder="비밀번호"
                onChange={loginCheck}
              />
            </div>
            <div className="login_button">
              <button className={classChangeBtn} onClick={startLogin}>
                로그인
              </button>
            </div>
          </section>
          <footer>
            <div className="passwprd_forgot">
              <p>비밀번호를 잊으셨나요?</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
