import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcMatchDetailAction } from "../redux/action/fcMatchDetailAction";
import MatchInfo from "./MatchInfo";

const GameMode = ({ item }) => {
  const [detail, setDetail] = useState();
  const dispatch = useDispatch();

  const { userMatchDetail } = useSelector((state) => state.fcMatchDetail);

  const getFcMatchDetail = async () => {
    dispatch(fcMatchDetailAction.getMatchDetail(item));
  };

  useEffect(() => {
    getFcMatchDetail();
    console.log(item);
    setDetail(userMatchDetail);
    console.log(detail);
    //console.log(detail);
  }, [item, detail]);
  return (
    <div className="tabPage activated">
      <ul>
        <li>{userMatchDetail.matchDate} 0000.00.00 / 00시00분</li>
        <li>호날두 0 : 0 메시</li>
        <li>패배</li>
        <li>&#60;</li>
      </ul>
    </div>
  );
};

export default GameMode;
