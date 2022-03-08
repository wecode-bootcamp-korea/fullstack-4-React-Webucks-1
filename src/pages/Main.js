import { Link } from 'react-router-dom';
import './Main.scss';
function Main() {
  return (
    <div className="firstpageMain">
      <div className="firstpageTitle">Fullstack 4기 1팀</div>
      <div className="firstpageList">
        <Link to="login-youngseo">
          <div className="firstListName">Fullstack 4기 김영서</div>
        </Link>
        <Link to="login-haewon">
          <div className="firstListName">Fullstack 4기 설혜원</div>
        </Link>
        <Link to="login-seonghoson">
          <div className="firstListName">Fullstack 4기 손성호</div>
        </Link>
        <Link to="login-euitaek">
          <div className="firstListName">Fullstack 4기 이의택</div>
        </Link>
      </div>
    </div>
  );
}
export default Main;
