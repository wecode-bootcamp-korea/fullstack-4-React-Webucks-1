import "./Detail.scss";
import { useState } from "react";

function CommetDetail(props) {
  //하트 색
  const [iClass, setIClass] = useState("fa-regular fa-heart");
  const changeButton = () => {
    iClass === "fa-regular fa-heart"
      ? setIClass("fa-solid fa-heart")
      : setIClass("fa-regular fa-heart");
  };
  return (
    <li id={props.id} className="review_list" key={props}>
      <div className="id">coffee_lover</div>
      <div className="review">{props.name}</div>
      <i className={iClass} onClick={changeButton}></i>
      <i className="fa-solid fa-trash-can" onClick={props.parentsId}></i>
    </li>
  );
}
export default CommetDetail;
