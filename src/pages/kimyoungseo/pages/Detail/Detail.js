import { useEffect, useState } from 'react';
import TopNav from '../Common/TopNav';
import CommentDetail from './CommentDetail';
import './Detail.scss';
import '../../../../styles/reset.scss';
import { useParams } from 'react-router-dom';
import Detaillist from './Detaillist';

let arrayKey = 0;
function Detail() {
  const [inputText, setInputText] = useState({});
  const [array, setArray] = useState([]);
  //배열에 넣어주기
  const addComment = item => {
    const items = {
      id: arrayKey,
      item: item,
    };
    arrayKey += 1;
    setArray(array.concat([items]));
  };
  //엔터 누르면 댓글
  const pressEnter = e => {
    if (e.key === 'Enter') {
      setInputText(e.target.value);
      addComment(e.target.value);
      e.target.value = '';
    }
  };
  //detail 상단 하트 클릭시 색 변환
  const [iClass, setIClass] = useState('fa-regular fa-heart');
  const changeButton = () => {
    iClass === 'fa-regular fa-heart'
      ? setIClass('fa-solid fa-heart')
      : setIClass('fa-regular fa-heart');
  };
  //댓글 삭제
  const parentsId = e => {
    //배열 비교 하면서 값이 다르면 삭제  [값이 같으면 다 삭제되는 오류 발생]
    // const value = e.target.parentNode.childNodes[1].innerText;
    //key 값으로 구현
    const targetId = e.target.parentNode.id;
    setArray(array.filter(array => array.id !== Number(targetId)));
  };
  //디테일 페이지 데이터 바꾸기
  const params = useParams();
  const [cofffeeDetail, setCoffeeDetail] = useState({
    id: 0,
    imgUrl: '',
    title: '',
    titleName: '',
    name: '',
    nameContent: '',
    nutrition: [],
    product_fator: '',
  });

  useEffect(() => {
    fetch(`/data/kimyoungseo/${params.id}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCoffeeDetail(data);
      });
  }, []);
  return (
    <div className="boxDetail">
      <div className="box">
        <div className="container">
          <TopNav />
          <section className="mainText">
            <div className="title">{cofffeeDetail.title}</div>
            <ul className="link">
              <li>홈 {'>'}</li>
              <li>MENU {'>'}</li>
              <li>음료 {'>'}</li>
              <li>
                {cofffeeDetail.title} {'>'}
              </li>
              <li>{cofffeeDetail.titleName}</li>
            </ul>
          </section>
          <section className="mainPage">
            <div className="mainPageLeft">
              <img src={cofffeeDetail.imgUrl} alt={cofffeeDetail.titleName} />
            </div>
            <div className="mainPageRight">
              <div className="mainHeader">
                <div className="mainText">
                  <div className="subTitle">{cofffeeDetail.titleName}</div>
                  <div className="englishTitle">{cofffeeDetail.name}</div>
                </div>
                <div className="mainHeart">
                  <i className={iClass} onClick={changeButton}></i>
                </div>
              </div>
              <p className="product_info">{cofffeeDetail.nameContent}</p>
              <div className="product_info_head">
                <p className="product_info_title">제품 영양 정보</p>
                <p>Tall(톨) / 355ml(12 floz)</p>
              </div>
              <div className="product_info_content">
                <div className="content">
                  <ul className="content_left">
                    {cofffeeDetail.nutrition.map(comment => {
                      if (comment.id < 4) {
                        return (
                          <Detaillist
                            key={comment.id}
                            name={comment.name}
                            percent={comment.percent}
                          />
                        );
                      }
                    })}
                  </ul>
                  <ul className="content_right">
                    {cofffeeDetail.nutrition.map(comment => {
                      if (comment.id > 3) {
                        return (
                          <Detaillist
                            key={comment.id}
                            name={comment.name}
                            percent={comment.percent}
                          />
                        );
                      }
                    })}
                  </ul>
                </div>
                <div className="product_factor">
                  <p>알레르기 유발 요인 : {cofffeeDetail.product_fator}</p>
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
                    {array.map(comment => {
                      return (
                        <CommentDetail
                          key={comment.id}
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
