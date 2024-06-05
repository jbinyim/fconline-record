import React, { useState, useEffect } from "react";
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

  useEffect(() => {}, [matchType]);

  if (userNickname) {
    return (
      <div>
        <UserInfo userNickname={userNickname} />
        <section className="recordArea">
          <div>
            <ul>
              <li
                style={
                  matchType === 50 ? { color: "#29d9be" } : { color: "#000" }
                }
                onClick={() => matchBox(50)}
              >
                공식경기
              </li>
              <li
                style={
                  matchType === 52 ? { color: "#29d9be" } : { color: "#000" }
                }
                onClick={() => matchBox(52)}
              >
                감독모드
              </li>
              <li
                style={
                  matchType === 60 ? { color: "#29d9be" } : { color: "#000" }
                }
                onClick={() => matchBox(60)}
              >
                친선경기
              </li>
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
