import React, { useState, useEffect, useCallback } from "react";
import Item from "./components/Body/Item";
import Nav from "./components/Header/Search";
import "./App.css";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";

function App() {
  const [pageScrollY, setPageScrollY] = useState(0);

  // 훅(HOOK) useState, useEffect, useCallback
  // 기존에 리액트 컴포넌트 => Class Component
  // const app = new ComponentA();
  // app.update();
  // app.render();
  //
  // Stateless Component => Funciton으로 작성된 컴포넌트

  // const appFunc = function() {
  //  setState(1)
  //  callback
  // }
  // render: appFunc();

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
  });

  const handlePageScroll = useCallback(() => {
    setPageScrollY(window.scrollY);
  }, [setPageScrollY]);

  return (
    <div
      className="App"
      style={{
        display: "grid",
        height: "1000px",
        alignContent: "flex-start",
      }}
    >
      <Nav pageScrollY={pageScrollY} />
      <p>추천 상품</p>
      <div style={{ display: "flex", height: "500px" }}>
        <Item itemName={"맥북프로 m1"} itemImage={image1} salePercentage={1}/>
        <Item itemName={"아이패드 프로 4세대"} itemImage={image2} salePercentage={1} />
        <Item itemName={"아이맥 27인치"} itemImage={image3} salePercentage={2} />
        <Item itemName={"아이폰12"} itemImage={image4} salePercentage={13} />
        <Item itemName={"아이폰12"} itemImage={image4} salePercentage={4} />
        <Item itemName={"아이폰12"} itemImage={image4} salePercentage={500} />
      </div>
    </div>
  );
}

export default App;
