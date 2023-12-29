import React from "react";
import "../Components/Styles/Aside.css";

function Aside(props) {
  return (
    <>
      <aside className="asideContainer">
        <div className="asideWrap">
          <h1 className="asideContent">수강후기</h1>
          <h1>마이페이지</h1>
          <h1>공지사항</h1>
        </div>
      </aside>
    </>
  );
}

export default Aside;
