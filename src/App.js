import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserAuthPage from "./Components/UserAuth";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DeatilPage";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import NoticePage from "./Pages/NoticePage";
import MyPage from "./Pages/MyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<UserAuthPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/post/detail/:id" element={<DetailPage />}></Route>
          <Route path="/info" element={<NoticePage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
