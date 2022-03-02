
import './Login.scss';
import "../../../styles/reset.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate = useNavigate();
  
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
    return (inputid.indexOf('@')!==-1 && inputPwd.length>4) ? trueValue:falseValue;
  }
  const goToMain = () => {
    navigate("/list-haewon");
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
            <div id="login_box">
                <h1>webucks</h1>
                <input id="id" type="text" placeholder="전화번호,사용자 이름 또는 이메일" onChange={HandleIdInput}/>
                <div className="pwdBox"><input id="pwd" type={pwdStatus.type} placeholder="비밀번호" onChange={HandlePwdInput}/>
                    <FontAwesomeIcon icon={pwdStatus.icon} className="fa-eye-slash" onClick={changeEye}/>
                </div>
                <button className={ButtonChange("activeBtn","inactiveBtn")} 
                        onClick={goToMain}
                        disabled={ButtonChange(false,true)}>
                        로그인
                </button>
                <Link to ={"#"}>비밀번호를 잊으셨나요?</Link>
            </div>
        </section>
    </div>
  );
}

export default Login;