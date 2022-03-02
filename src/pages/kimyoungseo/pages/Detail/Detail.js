import { useState } from "react";
import TopNav from "../Common/TopNav";
import CommentDetail from "./CommentDetail";
import "./Detail.scss";
import "../../../../styles/reset.scss";

let arrayKey = 0;
function Detail() {
  const [inputText, setInputText] = useState({});
  const [array, setArray] = useState([]);
  //배열에 넣어주기
  const addComment = (item) => {
    const items = {
      id: arrayKey,
      item: item,
    };
    arrayKey += 1;
    setArray(array.concat([items]));
  };
  //엔터 누르면 댓글
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      setInputText(e.target.value);
      addComment(e.target.value);
      e.target.value = "";
    }
  };
  //detail 상단 하트 클릭시 색 변환
  const [iClass, setIClass] = useState("fa-regular fa-heart");
  const changeButton = () => {
    iClass === "fa-regular fa-heart"
      ? setIClass("fa-solid fa-heart")
      : setIClass("fa-regular fa-heart");
  };
  //댓글 삭제
  const parentsId = (e) => {
    //배열 비교 하면서 값이 다르면 삭제  [값이 같으면 다 삭제되는 오류 발생]
    // const value = e.target.parentNode.childNodes[1].innerText;
    const targetId = e.target.parentNode.id;
    setArray(array.filter((array) => array.id !== Number(targetId)));
    //key 값으로 구현 해야 하는데 모르겠음...
  };
  return (
    <div className="boxDetail">
      <div className="box">
        <div className="container">
          <TopNav />
          <section className="mainText">
            <div className="title">콜드 브루</div>
            <ul className="link">
              <li>홈 ></li>
              <li>MENU ></li>
              <li>음료 ></li>
              <li>에스프레소 ></li>
              <li>화이트 초콜릿 모카</li>
            </ul>
          </section>
          <section className="mainPage">
            <div className="mainPageLeft">
              <img
                src="/images/kimyoungseo/jacob-bentzinger-nin2FDduuI0-unsplash.jpg"
                alt="나이트로 바닐라 크림"
              />
            </div>
            <div className="mainPageRight">
              <div className="mainHeader">
                <div className="mainText">
                  <div className="subTitle">화이트 초콜릿 모카</div>
                  <div className="englishTitle">White Chocolate Mocha</div>
                </div>
                <div className="mainHeart">
                  <i className={iClass} onClick={changeButton}></i>
                </div>
              </div>
              <p className="product_info">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </p>
              <div className="product_info_head">
                <p className="product_info_title">제품 영양 정보</p>
                <p>Tall(톨) / 355ml(12 floz)</p>
              </div>
              <div className="product_info_content">
                <div className="content">
                  <ul className="content_left">
                    <li className="kcal">
                      <div className="kcal_name">1회 제공량 (kcal)</div>
                      <div className="kcal_ weight">345</div>
                    </li>
                    <li className="sat_Fat">
                      <div className="Fat_name">포화지방 (g)</div>
                      <div className="Fat_ weight">11</div>
                    </li>
                    <li calss="protein">
                      <div className="protein_name">단백질 (g)</div>
                      <div className="protein_weight">11</div>
                    </li>
                  </ul>
                  <ul className="content_right">
                    <li className="sodium">
                      <div className="sodium_name">나트륨 (mg)</div>
                      <div className="sodium_weight">40</div>
                    </li>
                    <li className="sugrs">
                      <div className="sugrs_name">당류 (g)</div>
                      <div className="sugrs_weight">10</div>
                    </li>
                    <li className="caffeine">
                      <div className="caffeine_name">카페인 (mg)</div>
                      <div className="caffeine_weight">232</div>
                    </li>
                  </ul>
                </div>
                <div className="product_factor">
                  <p>알레르기 유발 요인 : 우유</p>
                </div>
                <div className="review">
                  <div className="review_header">리뷰</div>
                  <ul className="review_content">
                    <li className="review_list">
                      <div className="id">coffee_lover</div>
                      <div className="review">너무 맛있어요!</div>
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-solid fa-trash-can"></i>
                    </li>
                    {array.map((comment) => {
                      return (
                        <CommentDetail
                          name={comment.item}
                          id={comment.id}
                          parentsId={parentsId}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="review_input">
                  <input
                    id="review_text"
                    type="text"
                    placeholder="리뷰를 입력해주세요."
                    onKeyPress={pressEnter}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <table>
          <thead>
            <tr>
              <th>COMPANY</th>
              <th>CORPORATE SALES</th>
              <th>PATNERSHIP</th>
              <th>ONLINE COMMUNITY</th>
              <th>RECRUIT</th>
              <th>WEBUCKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>한눈에 보기</td>
              <td>단체 및 기업 구매 안내</td>
              <td>신규 입점 제의</td>
              <td>페이스북</td>
              <td>채용 소개</td>
              <td></td>
            </tr>
            <tr>
              <td>스타벅스 사명</td>
              <td></td>
              <td>협력 고객사 등록 신청</td>
              <td>트위터</td>
              <td>채용 지원하기</td>
              <td></td>
            </tr>
            <tr>
              <td>스타벅스 소개</td>
              <td></td>
              <td></td>
              <td>유튜브</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>국내 뉴스룸</td>
              <td></td>
              <td></td>
              <td>블로그</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>세계의 스타벅스</td>
              <td></td>
              <td></td>
              <td>인스타그램</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>글로벌 뉴스룸</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
}

export default Detail;
