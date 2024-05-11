import React, { useState, useEffect } from "react";
import GameMode from "./GameMode";
import AttackPoints from "./AttackPoints";
import ModeTitle from "./ModeTitle";
import { useDispatch, useSelector } from "react-redux";
import { fcMatchAction } from "../redux/action/fcMatchAction";

const titleMode = [
  "1:1 공식 경기",
  "감독 모드",
  "친선 경기",
  "선수별 공격포인트",
];

const Match = ({ userOuid }) => {
  const [toggle, setToggle] = useState(0);

  let offset = 0;
  let type = 50;
  const dispatch = useDispatch();

  const { userMatch } = useSelector((state) => state.fcMatch);

  const getFcMatch = async () => {
    dispatch(fcMatchAction.getMatch(userOuid, type, offset));
  };

  useEffect(() => {
    getFcMatch();
  }, [toggle, userOuid]);
  // console.log(userMatch);
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
          userMatch.map((item, idx) => <GameMode key={idx} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Match;
