function DetailReview({ activeHeart, inputVal, setSignUpVal, setAuth }) {
  const deleteReview = () => {
    setSignUpVal(null);
    setAuth(true);
  };

  return (
    <>
      <li className="coffee_review_contentbox">
        <div>
          <i
            onClick={activeHeart}
            id="small"
            className="fa-solid fa-heart-crack"
          ></i>
        </div>
        <div className="coffee_review_name">
          <h4>Guest :</h4>
        </div>
        <div className="coffee_review_content">
          <span>{inputVal}</span>
        </div>
        <div className="coffee_review_del">
          <i onClick={deleteReview} className="fa-solid fa-delete-left"></i>
        </div>
      </li>
    </>
  );
}

export default DetailReview;
