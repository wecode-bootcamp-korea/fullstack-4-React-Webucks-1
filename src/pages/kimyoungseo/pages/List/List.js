import './List.scss';
import TopNav from '../Common/TopNav';
import { useEffect, useState } from 'react';
import CommentList from './CommentList';
import '../../../../styles/reset.scss';

function List() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('/data/kimyoungseo/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);
  return (
    <div className="body">
      <div className="container">
        <TopNav />
        <section className="subTitleSection">
          <div className="subTitle">콜드 브루 커피</div>
          <i className="fa-solid fa-mug-saucer"></i>
          <span className="summary">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </section>
        <section>
          <ul className="product">
            {commentList.map(comment => {
              if (comment.id < 11) {
                return (
                  <CommentList
                    key={comment.id}
                    img={comment.imgUrl}
                    title={comment.title}
                    name={comment.name}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section className="subTitleSection">
          <div className="subtitle">브루드 커피</div>
          <i className="fa-solid fa-mug-saucer"></i>
          <span className="summary">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </section>
        <section>
          <ul className="product">
            {commentList.map(comment => {
              if (comment.id >= 11) {
                return (
                  <CommentList
                    key={comment.id}
                    img={comment.imgUrl}
                    title={comment.title}
                    name={comment.name}
                  />
                );
              }
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default List;
