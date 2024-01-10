import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Styles/Main.css";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_TOKEN } from "../Reducer/UserAuth";

function Main(props) {
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.auth.token);

  const signOut = () => {
    dispatch({ type: CLEAR_TOKEN });
    localStorage.clear();
    window.location.replace("/");
  };

  const token = localStorage.getItem("token");

  const lecApi = `/class`;

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const selectLec = async () => {
      if (!token) {
        alert("로그인 후 이용 가능합니다.");
        navigate("/");
        return;
      }

      try {
        const { data } = await axios.get(`${lecApi}`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });

        console.log(data);

        if (data.data) {
          setData(data.data);
        } else {
          alert("로그인 유효기간이 만료되었습니다 다시 로그인 해주세요!.");
          signOut();
        }
      } catch (error) {
        console.log(
          "알 수 없는 오류로 수강 정보를 받아오지 못했습니다. 관리자에게 문의하세요.",
          error
        );
      }
    };
    selectLec();
  }, [lecApi, token, navigate]);

  const [cardStates, setCardStates] = useState({});

  const handleCardClick = (cardId) => {
    setCardStates((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

  const handleCrossClick = (cardId) => {
    setCardStates((prevState) => ({
      ...prevState,
      [cardId]: false,
    }));
  };

  const classDetailTrans = async (index) => {
    try {
      navigate(`/post/detail/${index}`);
    } catch (error) {
      alert("페이지 이동 오류입니다.");
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header__title">수강목록</h1>
      </div>

      <div className="cards">
        {data.map((card, index) => (
          <div
            key={index}
            className={`card ${
              cardStates[index] ? "is-expanded" : "is-collapsed"
            }`}
          >
            <div className="card__inner" onClick={() => handleCardClick(index)}>
              <p>{card.class_number}</p>
              <p>{card.department}</p>
              <p>{card.professor}교수님</p>
              <p>{card.lec_name}</p>
            </div>
            <div className="card__expander">
              <i
                className="fa fa-close"
                onClick={() => handleCrossClick(index)}
              ></i>
              <div className="subDetail">
                <p>{card.lec_type}</p>
                <p>평점: {card.star_lating}</p>
                <button
                  type="submit"
                  onClick={() => {
                    classDetailTrans(index + 1);
                  }}
                >
                  수강 후기 작성
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
