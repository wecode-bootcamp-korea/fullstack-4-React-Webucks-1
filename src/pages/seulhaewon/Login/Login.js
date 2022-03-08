import './Login.scss';
import '../../../styles/reset.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate = useNavigate();
  const idReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const pwdReg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const [inputid, setId] = useState('');
  const [inputPwd, setPwd] = useState('');
  const [pwdStatus, setPwdStatus] = useState({
    icon: faEyeSlash,
    type: 'password',
  });

  const HandleIdInput = event => {
    setId(event.target.value);
  };
  const HandlePwdInput = event => {
    setPwd(event.target.value);
  };
  const ButtonChange = (trueValue, falseValue) => {
    return inputid.match(idReg) && inputPwd.match(pwdReg)
      ? trueValue
      : falseValue;
  };
  const BorderChange = (flag, trueValue, falseValue) => {
    if (flag === 'id') return inputid.match(idReg) ? trueValue : falseValue;
    else if (flag === 'pwd')
      return inputPwd.match(pwdReg) ? trueValue : falseValue;
    else return false;
  };
  const loginhandle = () => {
    let flag = inputid.match(idReg) && inputPwd.match(pwdReg) ? true : false;
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputid,
        password: inputPwd,
      }),
    })
      .then(res => res.json())
      .then(result => {
        alert(result.message);
        if (result.token) {
          flag ? navigate('/list-haewon') : goToDefault();
        }
      });
  };
  const goToDefault = () => {
    return true;
  };
  const changeEye = () => {
    setPwdStatus({
      icon: pwdStatus.icon === faEyeSlash ? faEye : faEyeSlash,
      type: pwdStatus.type === 'password' ? 'text' : 'password',
    });
  };
  return (
    <div className="login_shw">
      <section className="container">
        <div
          id="login_box"
          onKeyPress={event => {
            event.key === 'Enter' ? loginhandle() : goToDefault();
          }}
        >
          <div className="webucks">webucks</div>
          <input
            id="id"
            className={BorderChange('id', 'idBorderGreen', 'idBorderDefault')}
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={HandleIdInput}
          />
          <div className="pwdBox">
            <input
              id="pwd"
              className={BorderChange(
                'pwd',
                'pwdBorderGreen',
                'pwdBorderDefault'
              )}
              type={pwdStatus.type}
              placeholder="비밀번호"
              onChange={HandlePwdInput}
            />
            <FontAwesomeIcon
              icon={pwdStatus.icon}
              className="fa-eye-slash"
              onClick={changeEye}
            />
          </div>
          <button
            className={ButtonChange('activeBtn', 'inactiveBtn')}
            onClick={loginhandle}
            disabled={ButtonChange(false, true)}
          >
            로그인
          </button>
          <div className="loginOption">
            <Link to>비밀번호를 잊으셨나요?</Link> /&nbsp;
            <Link to="/signup-haewon">회원가입</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
