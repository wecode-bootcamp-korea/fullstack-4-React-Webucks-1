import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as FH } from '@fortawesome/free-regular-svg-icons';
import { faHeart as FHS } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useCallback } from 'react';
import './review.scss';
import React from 'react';

function Review() {
  const [reviewList, setReviewList] = useState([]);
  const [review, setReview] = useState({
    id: '',
    comment: '',
  });
  const nextId = useRef(1);

  const addReview = event => {
    setReview({
      ...review,
      [event.target.name]: event.target.value, //{event.target.name : event.target.value}
    });
  };
  const removeReview = useCallback(
    key => {
      setReviewList(reviewList.filter(review => review.key !== key));
    },
    [reviewList]
  );

  const makeReviewList = event => {
    if (review.id === '' || review.comment === '') return true;
    const Review = {
      key: nextId.current,
      id: review.id,
      comment: review.comment,
      heart: FH,
      heartColor: '#CFCFCF',
    };
    setReviewList(reviewList.concat(Review));
    nextId.current += 1;
  };
  return (
    <div className="review_shw">
      <div className="reviewContainer" onKeyUp={addReview}>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          className="review_id"
        />
        <input
          name="comment"
          type="text"
          placeholder="리뷰를 입력해 주세요"
          className="review"
        />
        <button onClick={makeReviewList}>등록</button>
      </div>
      <div>
        {reviewList.map((_review, index) => (
          <ReviewBox
            review={_review}
            key={index}
            removeReview={removeReview}
            rvList={reviewList}
          />
        ))}
      </div>
    </div>
  );
}

const ReviewBox = React.memo(function ReviewBox({
  review,
  removeReview,
  rvList,
}) {
  const [reviewList, setReviewList] = useState();
  const listHeartChange = _review => {
    setReviewList(
      rvList.map(rv => {
        if (rv.key === _review.key) {
          rv.heart = _review.heart === FH ? FHS : FH;
          rv.heartColor = _review.heartColor === '#CFCFCF' ? 'red' : '#CFCFCF';
        }
        return rv;
      })
    );
  };
  return (
    <div className="reviewBox">
      <div>
        <b>{review.id}</b>&nbsp;&nbsp;&nbsp;&nbsp;{review.comment}====
        {review.key}
      </div>
      <div>
        <FontAwesomeIcon
          icon={review.heart}
          onClick={() => listHeartChange(review)}
          color={review.heartColor}
        />
        <FontAwesomeIcon
          icon={faX}
          onClick={() => {
            removeReview(review.key);
          }}
        />
        .
      </div>
    </div>
  );
});

export default React.memo(Review);
