import React from 'react';
import { useState } from 'react';
import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const idReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const pwdReg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const [inputid, setId] = useState('');
  const [inputPwd, setPwd] = useState('');

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
  const signupHandle = () => {
    let flag = inputid.match(idReg) && inputPwd.match(pwdReg) ? true : false;
    fetch('/users/signup', {
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
        console.log(result);
        alert(result.message);
        if (result.userId) {
          flag ? navigate('/login-haewon') : goToDefault();
        }
      });
  };
  const goToDefault = () => {
    return true;
  };
  return (
    <div className="login_shw">
      <section className="container">
        <div
          id="login_box"
          onKeyPress={event => {
            event.key === 'Enter' ? signupHandle() : goToDefault();
          }}
        >
          <div className="signup">회원가입</div>
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
              type="password"
              placeholder="비밀번호"
              onChange={HandlePwdInput}
            />
          </div>
          <button
            className={ButtonChange('activeBtn', 'inactiveBtn')}
            onClick={signupHandle}
            disabled={ButtonChange(false, true)}
          >
            회원가입
          </button>
        </div>
      </section>
    </div>
  );
}

export default Signup;
