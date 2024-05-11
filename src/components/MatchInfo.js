import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fcMatchDetailAction } from "../redux/action/fcMatchDetailAction";

const MatchInfo = ({ userMatchDetail }) => {
  return (
    <ul>
      <li>{userMatchDetail.matchDate} 0000.00.00 / 00시00분</li>
      <li>호날두 0 : 0 메시</li>
      <li>패배</li>
      <li>&#60;</li>
    </ul>
  );
};

export default MatchInfo;
