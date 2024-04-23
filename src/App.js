
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [userOuid, setUserOuid] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main setUserOuid={setUserOuid} />} />
        <Route path="/userinfo" element={<UserInfo userOuid={userOuid} />} />
      </Routes>
    </div>
  );
}

export default App;
