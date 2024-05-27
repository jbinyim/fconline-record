import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchOuid } from "../api";

interface OuidInterface {
  ouid: string;
}

const Header = () => {
  const [nickname, setNickname] = useState("99156cc13fbdadffb8c87df57f12f3ad");
  const navigate = useNavigate();

  const { isLoading, data } = useQuery<OuidInterface>(
    ["ouid", nickname],
    () => fetchOuid(nickname ?? undefined),
    {
      enabled: !!nickname,
    }
  );

  const onSearch = (e: any) => {
    if (e.key === "Enter") {
      setNickname(e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (data?.ouid) {
      navigate(`/info/?q=${data?.ouid}`);
      setNickname("");
    }
  }, [data, navigate]);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <h1 onClick={goToHome}>FC.GG</h1>
        <ul>
          <li>선수검색</li>
          <li>fconline</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>공지사항</li>
        </ul>
      </div>
      <div>
        <input onKeyUp={onSearch} type="text" />
      </div>
    </div>
  );
};

export default Header;
