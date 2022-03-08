import './Login.scss';
import '../../../../styles/reset.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigte = useNavigate();

  const goToList = () => {
    navigte('/list-youngseo');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [cursor, setCoursor] = useState('auto');
  const [idBoxColor, setidBoxColor] = useState('#e3e3e3');
  const [pwBoxColor, setpwdBoxColor] = useState('#e3e3e3');
  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };
  //엔터로 화면이동
  const keyInput = e => {
    if (e.key === 'Enter' && isActive === false) {
      handleLogin();
    }
  };

  const isPassedLogin = () => (
    CheckEmail(id) && checkPW(pw)
      ? (setIsActive(false), setCoursor('pointer'))
      : (setIsActive(true), setCoursor('auto')),
    CheckEmail(id) ? setidBoxColor('green') : setidBoxColor('#e3e3e3'),
    checkPW(pw) ? setpwdBoxColor('green') : setpwdBoxColor('#e3e3e3')
  );

  //이메일 체크
  function CheckEmail(str) {
    const reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
      return false;
    } else {
      return true;
    }
  }
  //비밀번호 체크
  function checkPW(str) {
    const reg_pw =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!reg_pw.test(str)) {
      return false;
    } else {
      return true;
    }
  }
  //누르면 비밀번호 보기
  const [iClassName, setiClassName] = useState('fa-solid fa-eye-slash');
  const [pwd, setPwd] = useState('password');

  const eyeChange = () => {
    return iClassName === 'fa-solid fa-eye-slash' && pwd === 'password'
      ? (setiClassName('fa-solid fa-eye'), setPwd('text'))
      : (setiClassName('fa-solid fa-eye-slash'), setPwd('password'));
  };

  // 서버 연결 회원가입
  const handleSignUp = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  // 서버 연결 로그인
  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === 'client input invalid') {
          alert(
            ' 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요. '
          );
        } else {
          goToList();
        }
      });
  };
  return (
    <>
      <div className="Total">
        <div className="secTion">
          <header className="mainTitle">WeBucks</header>
          <div className="inputArea">
            <div>
              <input
                className="inputBox"
                type="id"
                id="idInput"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onKeyPress={keyInput}
                onChange={handleIdInput}
                onKeyUp={isPassedLogin}
                style={{ borderColor: idBoxColor }}
              />
              <input
                className="inputBox"
                id="pwInput"
                type={pwd}
                placeholder="비밀번호"
                onKeyPress={keyInput}
                onChange={handlePwInput}
                onKeyUp={isPassedLogin}
                style={{ borderColor: pwBoxColor }}
              />
              <i className={iClassName} onClick={eyeChange}></i>
              <button
                style={{ cursor: cursor }}
                className="loginBtn"
                disabled={isActive}
                onClick={handleLogin}
              >
                로그인
              </button>
            </div>
            <button
              style={{ cursor: cursor }}
              className="loginBtn"
              disabled={isActive}
              onClick={handleSignUp}
            >
              회원가입
            </button>
          </div>
          <div>비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </>
  );
}

export default Login;
