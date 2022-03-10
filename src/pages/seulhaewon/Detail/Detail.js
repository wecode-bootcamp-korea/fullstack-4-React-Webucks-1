import './Detail.scss';
import TopNav from '../common/TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as FH } from '@fortawesome/free-regular-svg-icons';
import { faHeart as FHS } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Review from '../review/review';
import React from 'react';

function Detail() {
  const location = useLocation();
  const { coffee } = location.state;
  const [Heart, setHearts] = useState({
    Heart: coffee.heart,
    HeartColor: coffee.heartColor,
  });

  coffee.Heart === 'FH' ? (Heart.Heart = FH) : (Heart.Heart = FHS);
  const HeartChange = event => {
    setHearts({
      Heart: Heart.Heart === FH ? FHS : FH,
      HeartColor: Heart.HeartColor === '#CFCFCF' ? 'red' : '#CFCFCF',
    });
  };
  return (
    <div className="detail_shw">
      <TopNav />
      <h2>&nbsp;&nbsp;콜드브루</h2>
      <section>
        <div className="container1">
          <div className="path">홈>MENU>음료>콜드브루>나이트로 바닐라크림</div>
          <div className="imgBox">
            <img src={coffee.imageURL} alt="나이트로 바닐라 크림" />
          </div>
          <div className="wrap2">
            <div className="title">
              {coffee.name}
              <div id="heart">
                <FontAwesomeIcon
                  icon={Heart.Heart}
                  onClick={HeartChange}
                  color={Heart.HeartColor}
                />
              </div>
            </div>
            <p className="eng_name">{coffee.engname}</p>
            <p className="intro">{coffee.comment}</p>
            <table>
              <thead>
                <tr>
                  <th colSpan="2" width="50%" className="first_th">
                    제품영양정보
                  </th>
                  <th colSpan="2" width="50%" className="second_th">
                    Tall(톨) / 355ml (12 fl oz)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1회 제공량</td>
                  <td className="borderline">80</td>
                  <td>나트륨 (mg)</td>
                  <td>{coffee.nutrition.Na}</td>
                </tr>
                <tr>
                  <td>포화지방 (g)</td>
                  <td className="borderline">2</td>
                  <td>당류 (g)</td>
                  <td>{coffee.nutrition.sugar}</td>
                </tr>
                <tr>
                  <td>단백질 (g)</td>
                  <td className="borderline">{coffee.nutrition.protein}</td>
                  <td>카페인 (mg)</td>
                  <td>{coffee.nutrition.caffein}</td>
                </tr>
              </tbody>
            </table>
            <div className="allergy">
              알레르기 유발요인:{coffee.arrergy.map(coffee => coffee + ' ')}
            </div>

            <h4>리뷰</h4>
            <Review />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="list">
        <ul>
          <li>COMPANY</li>
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
        <ul>
          <li>CORPORATE SALE</li>
          <li>단체 및 기업 구매 안내</li>
        </ul>
        <ul>
          <li>PARTNERSHIP</li>
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ul>
        <ul>
          <li>ONLINE COMMUNITY</li>
          <li>페이스북</li>
          <li>트위터</li>
          <li>유튜브</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ul>
        <ul>
          <li>RECRUIT</li>
          <li>채용 소개</li>
          <li>채용 지원하기</li>
        </ul>
        <ul>
          <li>WEBUCKS</li>
        </ul>
      </div>
    </footer>
  );
}

export default React.memo(Detail);
