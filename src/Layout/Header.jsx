import { React, useEffect } from "react";
import "../Layout/Styles/Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const signOut = () => {
    dispatch({
      type: "CLEAR_TOKEN",
    });
    alert("로그아웃 되었습니다!");
    window.location.replace("/");
  };

  useEffect(() => {
    console.log("현재 토큰: ", token);
  }, [token]);

  return (
    <div className="HeaderContainer">
      <h1>
        <a href="/main">동서대학교 수강 리뷰 시스템</a>
      </h1>
      {token && (
        <button id="logOut" onClick={signOut} disabled={token === false}>
          로그아웃
        </button>
      )}
    </div>
  );
}

export default Header;
