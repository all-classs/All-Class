import axios from "axios";
import modal from "react-modal";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Components/Styles/Review.css";
import "../Components/Styles/Main.css";

function MainDetail() {
  const params = useParams();
  let index = parseInt(params.id);

  const reviewApi = `/post/detail?id=`;

  const navigate = useNavigate();

  const [authData, setAuthData] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  axios.defaults.withCredentials = true;

  const getReviewData = async () => {
    try {
      const { data } = await axios.get(`${reviewApi}${index}`, {
        withCredentials: true,
      });
      return { data: data.data };
    } catch (error) {
      alert("리뷰를 받아오는데 실패했습니다.");
    }
  };

  const selectReview = async () => {
    try {
      const result = await getReviewData();

      if (result.data) {
        setAuthData(result.data[0]);
        setReviewData(result.data[1]);
        console.log(result.data[0]);
        console.log(result.data[1]);
      } else {
        alert("리뷰 정보를 받아오지 못했습니다.");
      }
    } catch (error) {
      alert(
        error,
        "알 수 없는 오류로 리뷰 정보를 받아오지 못했습니다. 관리자에게 문의하세요."
      );
    }
  };

  useEffect(() => {
    selectReview();
  }, []);

  const [user_number, setUserNumber] = useState("");
  const [star_lating, setStarLating] = useState("");
  const [lec_name, setLecName] = useState("");
  const [post_title, setPostTitle] = useState("");
  const [post_content, setPostContent] = useState("");

  const userNumberHandler = (e) => {
    setUserNumber(e.target.value);
  };
  const userStarLatingHandler = (e) => {
    setStarLating(e.target.value);
  };
  const userLecHandler = (e) => {
    setLecName(e.target.value);
  };
  const userPostTitleHandler = (e) => {
    setPostTitle(e.target.value);
  };
  const userPostContentHandler = (e) => {
    setPostContent(e.target.value);
  };

  const userPosting = async () => {
    try {
      const Data = JSON.stringify({
        user_number: user_number,
        lec_name: lec_name,
        star_lating: star_lating,
        post_title: post_title,
        post_content: post_content,
      });

      const response = await axios({
        method: "POST",
        url: "/review/add",
        data: Data,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      if (response.data.status === "200") {
        alert("수업 리뷰 등록 성공!");
        // navigate(`${reviewApi}${index}`);
      } else if (response.data.status === "299") {
        alert(response.data.server);
      }
    } catch (error) {
      alert("리뷰 등록을 실패하였습니다.");
    }
  };

  return (
    <div>
      <div>
        {authData &&
          authData.map((authData, key) => (
            <div key={key} className="AuthContainer">
              <h1>수강 소개</h1>
              <h2>수강명: {authData.lec_name}</h2>
              <p>과목 유형: {authData.lec_type}</p>
              <p>학과: {authData.department}</p>
              <p>교수님 이름: {authData.prof_name}</p>
              <p>평점: {authData.star_lating}</p>
              <img width={200} src={authData.image_url} alt="교수님 사진" />
              <p>과목 소개: {authData.class_introduction}</p>
            </div>
          ))}
      </div>
      <div className="wrapper">
        <div className="header">
          <h1 className="header__title">리뷰</h1>
        </div>
        <div className="cards">
          {reviewData[0] &&
            Object.values(reviewData[0]).map((review, key) => (
              <div key={key} className="card">
                <div className="card_inner">
                  <p>{review.star_lating}</p>
                  <p>{review.nickname}</p>
                  <p>{review.create_time}</p>
                  <h3>{review.post_title}</h3>
                  <p>{review.post_content}</p>
                  <p>{review.likes}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>학번</label>
          <input
            type="text"
            value={user_number}
            onChange={userNumberHandler}
          ></input>
          <label>수업명</label>
          <input type="text" value={lec_name} onChange={userLecHandler}></input>
          <label>별점</label>
          <input
            type="text"
            value={star_lating}
            onChange={userStarLatingHandler}
          ></input>
          <label>글 제목</label>
          <input
            type="text"
            value={post_title}
            onChange={userPostTitleHandler}
          ></input>
          <label>글 내용</label>
          <input
            type="text"
            value={post_content}
            onChange={userPostContentHandler}
          ></input>
          <button type="submt" onClick={userPosting}>
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainDetail;
