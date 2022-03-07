import Detail from "../Detail/Detail";
import { Link, useNavigate } from "react-router-dom";
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

  const navigte = useNavigate();

  const goToDetail = () => {
    navigte(`/list-youngseo/${props.name}`);
  };

  return (
    <>
      <li>
        <div className="hidden">
          <img src={props.img} alt={props.name} onClick={goToDetail} />
        </div>
        <div className="coffeeName">
          <div onClick={goToDetail}>{props.title}</div>
          <i className={iClass} onClick={changeButton}></i>
        </div>
      </li>
    </>
  );
}
export default CommentList;
