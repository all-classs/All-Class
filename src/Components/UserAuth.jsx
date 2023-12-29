import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../Components/Styles/User.css";

function UserAuth(props) {
  const departmentApi = `/department`;

  const [data, setData] = useState([]);

  axios.defaults.withCredentials = true;

  const getDepartmentData = async () => {
    try {
      const { data } = await axios.get(`${departmentApi}`, {
        withCredentials: true,
      });
      return { data: data.data };
    } catch (error) {
      console.log(error);
    }
  };

  const selectDepartment = async () => {
    try {
      const result = await getDepartmentData();

      if (result.data) {
        setData(result.data);
      } else {
        alert("학과 정보를 받아오지 못했습니다.");
      }
    } catch (error) {
      console.log(
        "알 수 없는 오류로 학과 정보를 받아오지 못했습니다. 관리자에게 문의하세요.",
        error
      );
    }
  };

  useEffect(() => {
    selectDepartment();
    console.log("업로딩");
  }, []);

  const navigate = useNavigate();

  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const pwHandler = (e) => {
    setPassword(e.target.value);
  };

  const [user_name, setUserName] = useState("");
  const [user_number, setUserId] = useState("");
  const [user_password, setUserPassword] = useState("");
  const [department, setUserDepartment] = useState("");
  const [nickname, setUserNickName] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };
  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };
  const userDepartmentHandler = (e) => {
    setUserDepartment(e.target.value);
  };
  const userNickNameHandler = (e) => {
    setUserNickName(e.target.value);
  };

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const setToken = () => {
    dispatch({
      type: "SET_TOKEN",
      payload: true,
    });
  };

  const userSignIn = async () => {
    try {
      const Data = JSON.stringify({
        user_number: id,
        password: password,
      });

      const response = await axios({
        method: "POST",
        url: "/signin",
        data: Data,
        headers: { "Content-Type": "application/json" },
      });

      console.log(response.data);

      if (response.data.status === "200") {
        setToken();
        alert("로그인 성공");
        navigate("/main");
      } else if (response.data.status === "201") {
        alert(response.data.server);
      } else if (response.data.status === "203") {
        alert(response.data.server);
      } else {
        alert("다시 시도 해주세요.");
      }
    } catch (error) {
      alert(
        "알수없는 오류로 실패 했습니다. 재시도후 로그인 실패시 관리자에게 문의하세요.",
        error
      );
    }
  };

  const userSignup = async () => {
    try {
      const Data = JSON.stringify({
        user_name: user_name,
        user_number: user_number,
        password: user_password,
        department: department,
        nickname: nickname,
      });

      const response = await axios({
        method: "POST",
        url: "/signup",
        data: Data,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);

      if (response.data.status === "200") {
        alert("회원가입이 완료되었습니다!");
        window.location.replace("/");
      } else if (response.data.status === "201") {
        alert(response.data.server);
      } else if (response.data.status === "203") {
        alert(response.data.server);
      } else {
        alert("다시 시도 해주세요.");
      }
    } catch (error) {
      alert(
        "알수없는 오류로 실패 했습니다. 재시도후 회원가입 실패시 관리자에게 문의하세요.",
        error
      );
    }
  };

  return (
    <div>
      <div className="body">
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
        >
          <div className="form-container sign-up-container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <h1 className="h1">회원가입</h1>
              <label className="label">닉네임</label>
              <input
                className="input"
                type="text"
                placeholder="NICKNAME"
                value={nickname}
                onChange={userNickNameHandler}
              ></input>
              <label className="label">이름</label>
              <input
                className="input"
                type="text"
                placeholder="NAME"
                value={user_name}
                onChange={userNameHandler}
              ></input>
              <label className="label">아이디</label>
              <input
                className="input"
                type="text"
                placeholder="ID"
                value={user_number}
                onChange={userIdHandler}
              ></input>
              <label className="label">비밀번호</label>
              <input
                className="input"
                type="text"
                placeholder="PASSWORD"
                value={user_password}
                onChange={userPasswordHandler}
              ></input>
              <label className="label">학과</label>

              <select
                className="input"
                value={department}
                onChange={userDepartmentHandler}
                required
              >
                {data.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>

              <button className="button" type="submit" onClick={userSignup}>
                회원가입
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <h1>로그인</h1>
              <label className="label">아이디</label>
              <input
                className="input"
                type="text"
                placeholder="ID"
                value={id}
                onChange={idHandler}
              ></input>
              <label className="label">비밀번호</label>
              <input
                className="input"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={pwHandler}
              ></input>
              <button className="button" type="submit" onClick={userSignIn}>
                로그인
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>아이디가 있으신가요?</h1>
                <p>내가 들은 수업을 지금 리뷰해보세요!</p>
                <button className="button ghost" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>아이디가 없으신가요?</h1>
                <p>동서대 학생이라면 지금 회원가입을 하세요!</p>
                <button className="button ghost" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuth;
