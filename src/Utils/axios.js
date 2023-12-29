import axios from "axios";

// axios 쿠키 데이터 주고받기 위해서 ..

const DOMAIN = "http://localhost";
axios.defaults.withCredentials = true;
const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default request;

// import axios from 'axios';

// // axios 인스턴스 생성 및 기본 설정
// const api = axios.create({
//   baseURL: 'http://localhost', // 특정 도메인 설정
//   withCredentials: true, // 자격 증명 설정
// });

// // HTTP 요청 함수 정의
// const request = (method, url, data) => {
//   return api({
//     method,
//     url,
//     data,
//   })
//     .then((response) => response.data)
//     .catch((error) => {
//       // 오류 처리 - 예: 사용자에게 알림을 표시하거나 적절한 로깅
//       console.error(error);
//       throw error; // 호출자에게 오류 전달
//     });
// };

// export default request;
