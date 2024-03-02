import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Components/Styles/Review.css";
import "../Components/Styles/Main.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { FaThumbsUp, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Chart from "react-apexcharts";

function MainDetail() {
  const token = localStorage.getItem("token");
  const username = useSelector((state) => state.auth.username);
  const nickname = useSelector((state) => state.auth.nickname);
  const navigate = useNavigate();

  const reviewApi = `/post/detail?id=`;
  const userApi = `&user_number=`;
  const deleteAPi = `/review/delete?id=`;

  const params = useParams();
  let index = parseInt(params.id);

  const [modalIsOpen, setModalIsOpen] = useState(null);
  const [writeModalIsOpen, setWriteModalIsOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(null);

  const [authData, setAuthData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [bestData, setBestData] = useState([]);
  const sortData = bestData.slice().map((item, index) => {
    if (index === 0) return bestData[1];
    if (index === 1) return bestData[0];
    return bestData[2];
  });

  const [reload, setReload] = useState(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const selectReview = async () => {
      if (!token) {
        alert("로그인 후 이용 가능합니다.");
        navigate("/");
        return;
      }
      try {
        const { data } = await axios.get(
          `${reviewApi}${index}${userApi}${username}`,
          {
            headers: {
              Authorization: token,
            },
            withCredentials: true,
          }
        );
        if (data.status === "200") {
          setAuthData(data.data[0]);
          setReviewData(data.data[1]);
          setBestData(data.data[3]);
          console.log(data.data);
        } else if (data.status === "201") {
          setAuthData(data.data[0]);
          setBestData(data.data[3]);
          console.log(data);
        } else if (data.status === "202") {
          setAuthData(data.data[0]);
          setReviewData(data.data[1]);
          setBestData(data.data[3]);
          console.log(data);
        } else {
          console.log(data);
          alert("리뷰 정보를 받아오지 못했습니다.");
        }
      } catch (error) {
        alert(
          "알 수 없는 오류로 리뷰 정보를 받아오지 못했습니다. 관리자에게 문의하세요.",
          error
        );
      }
    };
    selectReview();
  }, [reviewApi, index, token, navigate, reload, username, userApi]);

  const [star_lating, setStarLating] = useState("");
  const [post_title, setPostTitle] = useState("");
  const [post_content, setPostContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const userStarLatingHandler = (e) => {
    setStarLating(e.target.value);
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
        user_number: username,
        lec_name: authData[0].lec_name,
        star_lating: star_lating,
        post_title: post_title,
        post_content: post_content,
      });
      console.log(Data);

      const response = await axios({
        method: "POST",
        url: "/review/add",
        data: Data,
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      console.log(response.data);
      if (response.data.status === "200") {
        alert("수업 리뷰 등록 성공!");
        setStarLating("");
        setPostTitle("");
        setPostContent("");
        setWriteModalIsOpen(false);
        setReload(!reload);
      } else if (response.data.status === "299") {
        alert(response.data.server);
        setStarLating("");
        setPostTitle("");
        setPostContent("");
        setWriteModalIsOpen(false);
      }
    } catch (error) {
      alert("리뷰 등록을 실패하였습니다.");
    }
  };

  const userPostUpdate = async (post_id, editTitle, editContent) => {
    try {
      const Data = JSON.stringify({
        post_id: post_id,
        post_title: editTitle,
        post_content: editContent,
      });

      const response = await axios({
        method: "POST",
        url: "/review/update",
        data: Data,
        headers: { "Content-Type": "application/json", Authorization: token },
      });

      if (response.data.status === 200) {
        alert(response.data.server);
        setReload(!reload);
      }
      console.log(response);
    } catch (error) {
      alert("리뷰 수정을 실패하였습니다.");
    }
  };

  const userPostDelete = async (post_id) => {
    if (window.confirm("정말 내 리뷰를 삭제하시겠습니까?")) {
      console.log(post_id);
      console.log(deleteAPi);
      try {
        const { data } = await axios.post(
          `${deleteAPi}${post_id}`,
          {},
          {
            headers: {
              Authorization: token,
            },
            withCredentials: true,
          }
        );
        alert("리뷰가 삭제되었습니다.");
        setReload(!reload);
        console.log({ data });
      } catch (error) {
        console.error(error);
        alert("리뷰 삭제를 실패하였습니다.");
      }
    }
  };

  const userLikes = async (post_id) => {
    try {
      const Data = JSON.stringify({
        post_id: post_id,
        user_number: username,
      });
      console.log(post_id);
      console.log(username);
      const response = await axios({
        method: "POST",
        url: "/review/likes",
        data: Data,
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      if (response.data.status === "200") {
        alert(response.data.server);
        setReload(!reload);
      } else if (response.data.status === "401") {
        alert(response.data.server);
      }
      console.log(response.data);
    } catch (error) {
      alert("좋아요 등록을 실패하였습니다.");
    }
  };

  const totalStars =
    reviewData.length > 0
      ? reviewData.reduce((acc, review) => acc + review.star_lating, 0)
      : 0;

  const averageStars =
    reviewData.length > 0 ? (totalStars / reviewData.length).toFixed(1) : 0;

  const totalReviews = reviewData.length;

  const chartOptions = {
    chart: {
      type: "bar",
      height: 450,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: sortData.map((item) => item.nickname),
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return `${value}`;
        },
      },
    },
    colors: ["#ff0000", "#ff3333", "#ff6666"],
  };

  const chartSeries = [
    {
      name: "좋아요 수",
      data: sortData.map((item) => item.likes),
    },
  ];

  return (
    <div>
      <div className="body">
        <div className="topContainer">
          {authData &&
            authData.map((authData, key) => (
              <div key={key} className="AuthContainer">
                <h1 className="AuthTitle">수강 소개</h1>
                <div className="Class">
                  <div className="ClassTitle">
                    <h2>수강명: {authData.lec_name}</h2>
                    <img
                      width={200}
                      className="imgs"
                      src={authData.image_url}
                      alt="교수님 사진"
                    />
                    <h2>{authData.prof_name} 교수</h2>
                    <p className="p">{authData.department}</p>
                  </div>
                  <div className="ClassInner">
                    <p className="InnerP">과목 유형: {authData.lec_type}</p>
                    <p className="InnerP">평점: {averageStars} / 5</p>
                    <p className="InnerP">
                      과목 소개: {authData.class_introduction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div className="AuthContainer">
            <h1 className="AuthTitle">베스트 수강 리뷰</h1>
            <div className="bestReviews">
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                width={500}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ReviewWrapper">
        <div className="header">
          <div className="header__left">
            <h1>
              <span>{authData && authData[0] && authData[0].lec_name}</span>
              <span className="header__title"> 평가 및 리뷰</span>
            </h1>
            <div className="header__info">
              <p>
                <span className="averageStars">{averageStars}</span>{" "}
                <span className="totalReviews">/ 5</span>
              </p>
              <p>{totalReviews}개의 수강 리뷰</p>
            </div>
          </div>
          <div className="header__center">
            <input type="checkbox" />
            <label>최신순</label>
            <input type="checkbox" />
            <label>별점 높은순</label>
            <input type="checkbox" />
            <label>별점 낮은순</label>
            <input type="checkbox" />
            <label>좋아요 많은순</label>
          </div>
          <div className="header__right">
            <button
              className="reviewBtn"
              onClick={() => setWriteModalIsOpen(true)}
            >
              글쓰기
            </button>
            <Modal
              isOpen={writeModalIsOpen}
              onRequestClose={() => setWriteModalIsOpen(false)}
              className="modal-overlay"
            >
              <div className="modal-container">
                <form
                  className="modal-content"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="hidden"
                    value={authData && authData[0] ? authData[0].lec_name : ""}
                  />
                  <label>별점</label>
                  <input
                    type="text"
                    value={star_lating}
                    onChange={userStarLatingHandler}
                  ></input>
                  <button
                    className="cancleBtn"
                    onClick={() => setWriteModalIsOpen(false)}
                  ></button>
                  <label>글 제목:</label>
                  <input
                    className="title-input"
                    type="text"
                    value={post_title}
                    onChange={userPostTitleHandler}
                  ></input>
                  <textarea
                    className="content-input"
                    value={post_content}
                    onChange={userPostContentHandler}
                  ></textarea>
                  <div className="btnArea">
                    <button type="submit" onClick={userPosting}>
                      등록하기
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
        <div className="Reviews">
          {reviewData.map((review, key) => (
            <div
              key={key}
              className={`ReviewCard ${
                nickname === review.nickname ? "myReviewCard" : ""
              }`}
            >
              <div className="ReviewCard_inner">
                <div className="CardTop">
                  <div className="star-rating">
                    {[...Array(5)].map((star, i) => {
                      const starValue = i + 1;
                      return (
                        <img
                          key={i}
                          src={
                            starValue <= review.star_lating
                              ? "https://d27b8p6cm1t9cq.cloudfront.net/static/images/teacher_page/icon_page_star01_on.png"
                              : "https://d27b8p6cm1t9cq.cloudfront.net/static/images/teacher_page/icon_page_star01_off.png"
                          }
                          alt="star"
                        />
                      );
                    })}
                  </div>
                  <div className="buttonWrap">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <FaThumbsUp
                        type="submit"
                        onClick={() => userLikes(review.post_id)}
                        className="thumb-up"
                      />
                    </form>
                    <p>{review.likes}</p>
                  </div>
                </div>
                <p>
                  {review.nickname},{" "}
                  {new Date(review.create_time).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
                <div className="reviewContent">
                  <div className="reviewWrap">
                    <h3 className="post_title">{review.post_title}</h3>
                    <p className="post_content">{review.post_content}</p>
                  </div>
                  <div className="btnWrap">
                    <button
                      className="reviewBtn"
                      onClick={() => setModalIsOpen(key)}
                    >
                      자세히 보기
                    </button>
                    {nickname === review.nickname && (
                      <div className="iconWrap">
                        <FaEdit
                          className="deleteBtn"
                          onClick={() => {
                            setEditTitle(review.post_title);
                            setEditContent(review.post_content);
                            setEditModalOpen(key);
                          }}
                        />
                        <Modal
                          isOpen={editModalOpen === key}
                          onRequestClose={() => setEditModalOpen(null)}
                          className="modal-overlay"
                          ariaHideApp={false}
                        >
                          <div className="modal-container">
                            <div className="modal-content">
                              <div className="ReviewCard_inner">
                                <div className="CardTop">
                                  <div className="star-rating">
                                    {[...Array(5)].map((star, i) => {
                                      const starValue = i + 1;
                                      return (
                                        <img
                                          key={i}
                                          src={
                                            starValue <= review.star_lating
                                              ? "https://d27b8p6cm1t9cq.cloudfront.net/static/images/teacher_page/icon_page_star01_on.png"
                                              : "https://d27b8p6cm1t9cq.cloudfront.net/static/images/teacher_page/icon_page_star01_off.png"
                                          }
                                          alt="star"
                                        />
                                      );
                                    })}
                                  </div>{" "}
                                  <button
                                    className="cancleBtn"
                                    onClick={() => setEditModalOpen(null)}
                                  ></button>
                                </div>
                                <p>
                                  {review.nickname},{" "}
                                  {new Date(
                                    review.create_time
                                  ).toLocaleDateString("ko-KR", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  })}
                                </p>
                                <div className="reviewContent">
                                  <form
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      userPostUpdate(
                                        review.post_id,
                                        editTitle,
                                        editContent
                                      );
                                      setEditModalOpen(null);
                                    }}
                                  >
                                    <label htmlFor="title">제목</label>
                                    <input
                                      id="title"
                                      type="text"
                                      value={editTitle}
                                      onChange={(e) =>
                                        setEditTitle(e.target.value)
                                      }
                                    />
                                    <label htmlFor="content">내용</label>
                                    <textarea
                                      id="content"
                                      value={editContent}
                                      onChange={(e) =>
                                        setEditContent(e.target.value)
                                      }
                                    />
                                    <button type="submit">수정하기</button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal>

                        <MdDelete
                          className="deleteBtn"
                          onClick={() => userPostDelete(review.post_id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Modal
                isOpen={modalIsOpen === key}
                onRequestClose={() => setModalIsOpen(null)}
                className="modal-overlay"
                ariaHideApp={false}
              >
                <div className="modal-container">
                  <div className="modal-content">
                    <div className="ReviewCard_inner">
                      <div className="CardTop">
                        <div className="star-rating">
                          {[...Array(5)].map((star, i) => {
                            const starValue = i + 1;
                            return (
                              <img
                                key={i}
                                src={
                                  starValue <= review.star_lating
                                    ? "https://d27b8p6cm1t9cq.cloudfront.net/static/images/teacher_page/icon_page_star01_on.png"
                                    : "https://d27b8p6cm1t9cq.cloudfront.net/static/images/teacher_page/icon_page_star01_off.png"
                                }
                                alt="star"
                              />
                            );
                          })}
                        </div>{" "}
                        <button
                          className="cancleBtn"
                          onClick={() => setModalIsOpen(null)}
                        ></button>
                      </div>
                      <p>
                        {review.nickname},{" "}
                        {new Date(review.create_time).toLocaleDateString(
                          "ko-KR",
                          {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          }
                        )}
                      </p>
                      <div className="reviewContent">
                        <h3 className="post_title">{review.post_title}</h3>
                        <div className="postTop">
                          <div className="post_title">
                            <p>{review.post_content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          ))}
        </div>
        {!reviewData[0] && (
          <div className="noReview">
            <h3>현재 수강 리뷰 데이터가 존재하지 않습니다.</h3>
            <p>가장 먼저 리뷰의 주인공이 되어보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainDetail;
