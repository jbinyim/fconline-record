import React, { useState } from "react";
import GameMode from "./GameMode";
import AttackPoints from "./AttackPoints";
import ModeTitle from "./ModeTitle";

const titleMode = [
  "1:1 공식 경기",
  "감독 모드",
  "친선 경기",
  "선수별 공격포인트",
];

const Match = ({ userOuid }) => {
  const [toggle, setToggle] = useState(0);
  console.log(toggle);
  return (
    <div className="recordArea">
      <div>
        <ul className="tabMenu">
          {titleMode.map((title, idx) => (
            <ModeTitle
              key={idx}
              title={title}
              idx={idx}
              setToggle={setToggle}
              isDone={toggle === idx}
            />
          ))}
        </ul>

        {toggle === 3 ? (
          <AttackPoints />
        ) : (
          <GameMode toggle={toggle} userOuid={userOuid} />
        )}
      </div>
    </div>
  );
};

export default Match;
