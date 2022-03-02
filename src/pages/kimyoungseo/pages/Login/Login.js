import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigte = useNavigate();

  const goToList = () => {
    navigte("/list-youngseo");
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdInput = (e) => {
    setId(e.target.value);
    if (e.key === "Enter") {
      goToList();
    }
  };
  const handlePwInput = (event) => {
    setPw(event.target.value);
  };
  const [isActive, setIsActive] = useState(true);
  const [cursor, setCoursor] = useState("auto");
  const isPassedLogin = () => {
    return id.includes("@") && pw.length >= 5
      ? (setIsActive(false), setCoursor("pointer"))
      : (setIsActive(true), setCoursor("auto"));
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
                onChange={handleIdInput}
                onKeyUp={isPassedLogin}
              />
              <input
                className="inputBox"
                id="pwInput"
                type="password"
                placeholder="비밀번호"
                onChange={handlePwInput}
                onKeyUp={isPassedLogin}
              />
              <i className="fa-solid fa-eye-slash"></i>
              <button
                style={{ cursor: cursor }}
                className="loginBtn"
                disabled={isActive}
                onClick={goToList}
              >
                로그인
              </button>
            </div>
          </div>
          <div>비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </>
  );
}

export default Login;
