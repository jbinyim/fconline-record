import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
            <h1 class="outline-button" onClick={() => navigate("/")}>FC GG.KR</h1>
        <nav>
          <ul>
            <li>
              <a href="https://fconline.nexon.com/main/index" target="_blank">
                FC Online
              </a>
            </li>
            <li><a>선수 검색</a></li>
            <li><a>랭커 닉네임조회</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
