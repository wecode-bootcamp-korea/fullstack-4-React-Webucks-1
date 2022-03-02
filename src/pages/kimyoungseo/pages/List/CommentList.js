import Detail from "../Detail/Detail";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./List.scss";

function CommentList(props) {
  const [iClass, setIClass] = useState("fa-regular fa-heart");

  //하트 누르면 색 채우기
  function changeButton() {
    iClass === "fa-regular fa-heart"
      ? setIClass("fa-solid fa-heart")
      : setIClass("fa-regular fa-heart");
  }
  return (
    <>
      <li>
        <div className="hidden">
          <Link to="/detail-youngseo">
            <img src={props.img} alt={props.name} />
          </Link>
        </div>
        <div className="coffeeName">
          <Link to="detail">{props.name}</Link>
          <i className={iClass} onClick={changeButton}></i>
        </div>
      </li>
    </>
  );
}
export default CommentList;
