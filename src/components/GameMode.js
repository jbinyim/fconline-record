import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcMatchAction } from "../redux/action/fcMatchAction";
const type = 50;
const offset = 0;

const GameMode = ({ toggle, userOuid }) => {
  const [match, setMatch] = useState([]);
  const dispatch = useDispatch();
  const { userMatch } = useSelector((state) => state.fcMatch);

  const getFcMatch = async () => {
    dispatch(fcMatchAction.getMatch(userOuid, type, offset));
  };

  useEffect(() => {
    getFcMatch();

    console.log(match);
  }, [userOuid]);

  if (toggle === 0) {
  }
  console.log(userMatch);
  return (
    <div id="tab1" className="tabPage activated">
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
