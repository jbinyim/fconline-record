import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcMatchAction } from "../redux/action/fcMatchAction";
import MatchInfo from "./MatchInfo";

const GameMode = ({ toggle, userOuid }) => {
  let type = 50;
  let offset = 0;
  const dispatch = useDispatch();
  const { userMatch } = useSelector((state) => state.fcMatch);

  const getFcMatch = async () => {
    dispatch(fcMatchAction.getMatch(userOuid, type, offset));
  };

  useEffect(() => {
    getFcMatch();
  }, []);

  return (
    <div id={toggle} className="tabPage activated">
      {userMatch?.map((item) => (
        <MatchInfo item={item} />
      ))}
      <ul>
        <li>0000.00.00 / 00시00분</li>
        <li>호날두 0 : 0 메시</li>
        <li>패배</li>
        <li>&#60;</li>
      </ul>
      <ul>
        <li>0000.00.00 / 00시00분</li>
        <li>호날두 0 : 0 메시</li>
        <li>승리</li>
        <li>&#60;</li>
      </ul>
      <ul>
        <li>0000.00.00 / 00시00분</li>
        <li>호날두 0 : 0 메시</li>
        <li>승리</li>
        <li>&#60;</li>
      </ul>
      <ul>
        <li>0000.00.00 / 00시00분</li>
        <li>호날두 0 : 0 메시</li>
        <li>승리</li>
        <li>&#60;</li>
      </ul>
      <ul>
        <li>0000.00.00 / 00시00분</li>
        <li>호날두 0 : 0 메시</li>
        <li>승리</li>
        <li>&#60;</li>
      </ul>
    </div>
  );
};

export default GameMode;
