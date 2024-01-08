import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Styles/Main.css";

function Main(props) {
  const lecApi = `/class`;

  const [data, setData] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const selectLec = async () => {
      try {
        const { data } = await axios.get(`${lecApi}`, {
          withCredentials: true,
        });

        console.log(data.data);

        if (data.data) {
          setData(data.data);
        } else {
          alert("수강 정보를 받아오지 못했습니다.");
        }
      } catch (error) {
        console.log(
          "알 수 없는 오류로 수강 정보를 받아오지 못했습니다. 관리자에게 문의하세요.",
          error
        );
      }
    };
    selectLec();
  }, [lecApi]);

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

  const navigate = useNavigate();

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
