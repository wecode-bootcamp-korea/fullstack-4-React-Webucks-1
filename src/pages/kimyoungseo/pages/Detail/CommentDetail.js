import './Detail.scss';
import { useState } from 'react';
//use location useEffect
function CommetDetail(props) {
  //하트 색
  const [isLike, setIsLike] = useState(false);
  const changeButton = () => {
    setIsLike(prev => !prev);
  };

  return (
    <li id={props.id} className="review_list">
      <div className="id">coffee_lover</div>
      <div className="review">{props.name}</div>
      <i
        className={isLike ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
        onClick={changeButton}
      ></i>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => props.deletcomment(props.id)}
      ></i>
    </li>
  );
}
export default CommetDetail;
