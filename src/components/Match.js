import React from "react";
import GameMode from "./GameMode";
import AttackPoints from "./AttackPoints";

const Match = () => {
  return (
    <div className="recordArea">
      <div>
        <ul className="tabMenu">
          <li className="activated">
            <a href="">1:1 공식 경기</a>
          </li>
          <li>
            <a href="">감독 모드</a>
          </li>
          <li>
            <a href="">친선 경기</a>
          </li>
          <li>
            <a href="">선수별 공격포인트</a>
          </li>
        </ul>

        <GameMode />
        <AttackPoints />
      </div>
    </div>
  );
};

export default Match;
