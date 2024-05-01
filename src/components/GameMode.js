import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcBasicAction } from "../redux/action/fcBasicAction";
const type = 50;
const offset = 0;

const GameMode = ({ toggle, userOuid }) => {
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
