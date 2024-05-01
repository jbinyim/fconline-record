import React from "react";
import { useDispatch, useSelector } from "react-redux";

const GameMode = ({ toggle, userOuid }) => {
  const dispatch = useDispatch();

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
