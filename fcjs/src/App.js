import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
