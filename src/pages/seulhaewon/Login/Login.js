import './Login.scss';
import "../../../styles/reset.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate = useNavigate();
  const idReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const pwdReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const [inputid, setId] = useState("");
  const [inputPwd, setPwd] = useState("");
  const [pwdStatus, setPwdStatus] = useState({
    icon: faEyeSlash,
    type:"password"
  });

  const HandleIdInput = event =>{
    setId(event.target.value);
  }
  const HandlePwdInput = event =>{
    setPwd(event.target.value);
  }
  const ButtonChange = (trueValue, falseValue) =>{
    return (inputid.match(idReg) && inputPwd.match(pwdReg)) ? trueValue:falseValue;
  }
  const BorderChange = (flag, trueValue, falseValue) =>{
    if(flag === "id")
      return (inputid.match(idReg)) ? trueValue : falseValue;
    else if(flag === "pwd")
      return (inputPwd.match(pwdReg)) ? trueValue : falseValue;
    else
      return false;
  }
  const goToMain = () => {
    (inputid.match(idReg) && inputPwd.match(pwdReg)) ? navigate("/list-haewon") : goToDefault();
  }
  const goToDefault = () => {
    return true;
  }
  const changeEye = ()=>{
    setPwdStatus({
      icon: (pwdStatus.icon===faEyeSlash) ? faEye : faEyeSlash,
      type :(pwdStatus.type==="password") ? "text" : "password"
    });
  }
  return (
    <div>
        <section className="container">
            <div id="login_box" onKeyPress={(event)=>{(event.key === "Enter") ? goToMain() : goToDefault()}}>
                <div className="webucks">webucks</div>
                <input id="id" className={BorderChange("id","idBorderGreen","idBorderDefault")} type="text" placeholder="전화번호,사용자 이름 또는 이메일" onChange={HandleIdInput}/>
                <div className="pwdBox">
                    <input id="pwd" className={BorderChange("pwd","pwdBorderGreen","pwdBorderDefault")} type={pwdStatus.type} placeholder="비밀번호" onChange={HandlePwdInput}/>
                    <FontAwesomeIcon icon={pwdStatus.icon} className="fa-eye-slash" onClick={changeEye}/>
                </div>
                <button className={ButtonChange("activeBtn","inactiveBtn")} 
                        onClick={goToMain}
                        disabled={ButtonChange(false,true)}>11
                        로그인
                </button>
                <Link to ={"#"}>비밀번호를 잊으셨나요?</Link>
            </div>
        </section>
    </div>
  );
}

export default Login;