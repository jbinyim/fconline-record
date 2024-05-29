import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import Match from "../components/Match";

const Info = () => {
  const [matchType, setMatchType] = useState(50);
  const [nickname] = useSearchParams();
  const userNickname = nickname.get("q");

  const matchBox = (type: number) => {
    setMatchType(type);
  };

  if (userNickname) {
    return (
      <div>
        <UserInfo userNickname={userNickname} />
        <section className="recordArea">
          <div>
            <ul>
              <li onClick={() => matchBox(50)}>공식경기</li>
              <li onClick={() => matchBox(52)}>감독모드</li>
              <li onClick={() => matchBox(60)}>친선경기</li>
              <li onClick={() => matchBox(0)}>선수별 공격포인트</li>
            </ul>
          </div>
          <Match matchType={matchType} userNickname={userNickname} />
        </section>
      </div>
    );
  }
  return <h1>데이터 로딩중</h1>;
};

export default Info;
