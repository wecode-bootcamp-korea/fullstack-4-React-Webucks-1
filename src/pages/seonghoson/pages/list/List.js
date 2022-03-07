import React, { useEffect, useState } from "react";
import Coffee from "../../components/coffee/Coffee";
import Header from "../../components/header/Header";

import "./List.scss";

if (!localStorage.getItem("likes")) {
  localStorage.setItem("likes", JSON.stringify([]));
}

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let coldbrew = new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("data/seonghoson/coldbrew.json")
          .then((response) => response.json())
          .then((data) => {
            resolve({ type: "콜드 브루", data });
          });
      }, 2000);
    });

    let brood = new Promise((resolve, reject) => {
      fetch("data/seonghoson/brood.json")
        .then((response) => response.json())
        .then((data) => {
          resolve({ type: "브루드", data });
        });
    });

    Promise.all([coldbrew, brood]).then((value) => {
      setData(value);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="list_main">
        {data.length > 0 ? (
          data.map((box) => {
            return (
              <section className="box_main" key={box.type}>
                <header className="box_header">
                  <h2>{box.type}</h2>
                  <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
                </header>
                <article className="box_container">
                  {box.data.map((item) => {
                    return <Coffee item={item} key={item.id} />;
                  })}
                </article>
              </section>
            );
          })
        ) : (
          <section className="loading_main">
            <article className="loading_logo_wrapper">
              <img
                alt="loading..."
                src="images/seonghoson/icon_loading_coffee.gif"
              />
              <h2>WeBucks</h2>
            </article>
          </section>
        )}
      </main>
    </>
  );
}

export default List;
