import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.scss';
import DetailReview from './DetailReview';

function Detail() {
  const locationData = useLocation();
  const [inputVal, setInputVal] = useState('');
  const [signUpVal, setSignUpVal] = useState('');
  const [auth, setAuth] = useState(true);

  const activeHeart = e => {
    if (e.target.getAttribute('tag') === null) {
      e.target.setAttribute('tag', 'on');
      e.target.style.color = 'rgb(228, 15, 15)';
      e.target.className = 'fa-solid fa-heart';
    } else {
      e.target.removeAttribute('tag');
      e.target.style.color = 'rgb(93, 93, 93)';
      e.target.className = 'fa-solid fa-heart-crack';
    }
  };

  const valHandle = e => {
    setInputVal(e.target.value);
  };

  const enterHandle = e => {
    if (e.key === 'Enter') {
      signUp();
    }
  };

  const signUp = () => {
    if (auth === false) {
      alert('게스트 댓글 작성은 한 번만 가능합니다.');
      setInputVal('');
      return;
    }
    if (inputVal.length <= 0 || inputVal.length > 33) {
      alert('글자가 없거나 글자수 최대치를 넘으셨습니다.');
      setInputVal('');
      return;
    }
    setSignUpVal(inputVal);
    setInputVal('');
    setAuth(false);
  };

  return (
    <>
      <div id="container_detail">
        <div id="container_boxing_detail">
          <section>
            <div className="coffee_type">
              <h3>{locationData.state.type}</h3>
            </div>
            <div className="coffee_detail_container">
              <div className="coffee_detail_img">
                <img src={locationData.state.imgUrl} alt="" />
              </div>
              <div className="coffee_detail">
                <h4>
                  {locationData.state.productName}
                  <i
                    onClick={activeHeart}
                    className="fa-solid fa-heart-crack"
                  ></i>
                </h4>
                {locationData.state.productViewInfo ? (
                  <div className="product_info_content">
                    <ul>
                      <li className="kcal">
                        <dl>
                          <dt>1회 제공량 (kcal)</dt>
                          <dd>{locationData.state.productViewInfo.kal}</dd>
                        </dl>
                      </li>
                      <li className="sat_FAT">
                        <dl>
                          <dt>포화지방 (g)</dt>
                          <dd>
                            {locationData.state.productViewInfo.saturatedFat}
                          </dd>
                        </dl>
                      </li>
                      <li className="protein">
                        <dl>
                          <dt>단백질 (g)</dt>
                          <dd>{locationData.state.productViewInfo.protein}</dd>
                        </dl>
                      </li>
                    </ul>
                    <ul>
                      <li className="sodium">
                        <dl>
                          <dt>나트륨 (mg)</dt>
                          <dd>{locationData.state.productViewInfo.sodium}</dd>
                        </dl>
                      </li>
                      <li className="sugars">
                        <dl>
                          <dt>당류 (g)</dt>
                          <dd>{locationData.state.productViewInfo.sugar}</dd>
                        </dl>
                      </li>
                      <li className="caffeine last">
                        <dl>
                          <dt>카페인 (mg)</dt>
                          <dd>{locationData.state.productViewInfo.caffeine}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                ) : null}
                <div className="coffee_detail_allergy">
                  <p>알레르기 유발요인 : {locationData.state.allergy}</p>
                </div>
                <div className="coffee_review">
                  <ul>
                    <li>
                      <h4 className="coffee_review_title">리뷰</h4>
                    </li>
                    <li>
                      <ul className="coffee_review_container">
                        {locationData.state.reviewComment
                          ? locationData.state.reviewComment.map(
                              (item, indx) => (
                                <li
                                  key={indx}
                                  className="coffee_review_contentbox"
                                >
                                  <div>
                                    <i
                                      onClick={activeHeart}
                                      id="small"
                                      className="fa-solid fa-heart-crack"
                                    ></i>
                                  </div>
                                  <div className="coffee_review_name">
                                    <h4>{item.userName + ' :'}</h4>
                                  </div>
                                  <div className="coffee_review_content">
                                    <span>{item.mesege}</span>
                                  </div>
                                </li>
                              )
                            )
                          : null}
                        {signUpVal ? (
                          <DetailReview
                            activeHeart={activeHeart}
                            inputVal={signUpVal}
                            setSignUpVal={setSignUpVal}
                            setAuth={setAuth}
                          />
                        ) : null}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="coffee_review_inputbox">
                  <div className="coffee_review_input_area">
                    <input
                      type="text"
                      value={inputVal}
                      onChange={valHandle}
                      onKeyPress={enterHandle}
                      placeholder="리뷰를 입력해주세요"
                    />
                  </div>
                  <div className="coffee_review_inputbutton">
                    <i onClick={signUp} className="fa-solid fa-pen"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Detail;
