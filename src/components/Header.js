import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const enter = (e) => {
    if (e.key === "Enter") {
      const ouid = e.target.value;
      if (!ouid) {
        alert("구단주명을 입력해주세요.");
      } else {
        navigate(`/userinfo/?q=${ouid}`);
        e.target.value = "";
      }
    }
  };
  return (
    <div>
      <header>
        <h1 onClick={() => navigate("/")}>FC GG.KR</h1>
        <nav>
          <ul>
            <li>
              <a href="https://fconline.nexon.com/main/index" target="_blank">
                FC Online
              </a>
            </li>
            <li>
              <a className="hovercolor">선수 검색</a>
            </li>
            <li>
              <input type="checkbox" id="toggleBtn" />
              <label className="toggleBtn">닉네임조회</label>
              <input onKeyUp={enter} type="text" className="textbox" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
