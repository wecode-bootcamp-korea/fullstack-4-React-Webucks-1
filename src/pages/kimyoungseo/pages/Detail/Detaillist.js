import "./Detail.scss";
import { useState } from "react";

function Detaillist(props) {
  return (
    <>
      <li className="detailList">
        <div className="detailList_name">{props.name}</div>
        <div className="detailList_ percent">{props.percent}</div>
      </li>
    </>
  );
}
export default Detaillist;
