import axios from "axios";

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
