import React from "react";
import { useSearchParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Info = () => {
  const [nickname, setNickname] = useSearchParams();
  const userNickname = nickname.get("q");

  return (
    <div>
      <UserInfo userNickname={userNickname} />
      <section className="recordArea">
        <div>
          <ul>
            <li>공식경기</li>
            <li>감독모드</li>
            <li>친선경기</li>
            <li>선수별 공격포인트</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Info;
