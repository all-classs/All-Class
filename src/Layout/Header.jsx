import { React, useEffect } from "react";
import "../Layout/Styles/Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_TOKEN } from "../Reducer/UserAuth";

function Header(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const nickname = useSelector((state) => state.auth.userNickname);



  const signOut = () => {
    dispatch({ type: CLEAR_TOKEN });
    localStorage.clear();
    alert("로그아웃 되었습니다!");
    window.location.replace("/");
  };

  useEffect(() => {
    console.log("현재 토큰: ", token);
  }, [token]);

  return (
    <div className="HeaderContainer">
      <div className="TitleContainer">
        <Link to={token ? "/main" : "/"}>
          <img
            width={70}
            className="img"
            src="https://user-images.githubusercontent.com/76634341/215338313-34991d4d-4899-45e6-9b02-4f64dae14d06.png"
            alt="Dongseo"
          />
        </Link>
        <h2 className="title">동서대학교 수강 리뷰 시스템</h2>
      </div>
      {token && (
        <div className="headerRight">
          <p>환영합니다! {nickname} 님!</p>
          <Link to="/">
            <p>수강목록</p>
          </Link>
          <Link to="/mypage">
            <p>마이페이지</p>
          </Link>
          <Link to="/info">
            <p>공지사항</p>
          </Link>
          <button
            id="logOut"
            className="btn"
            onClick={signOut}
            disabled={token === false}
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
