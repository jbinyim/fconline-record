import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcMatchDetailAction } from "../redux/action/fcMatchDetailAction";
import MatchInfo from "./MatchInfo";

const GameMode = ({ userMatch }) => {
  const dispatch = useDispatch();

  const { userMatchDetail, loading } = useSelector(
    (state) => state.fcMatchDetail
  );

  const getFcMatchDetail = async () => {
    dispatch(fcMatchDetailAction.getMatchDetail(userMatch));
  };

  const info = () => {
    console.log("e");
  };

  useEffect(() => {
    getFcMatchDetail();
    console.log(userMatch);
    //console.log(item);
  }, [userMatch]);
  console.log(userMatchDetail);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div onClick={info} className="tabPage1 activated">
        <ul>
          <li>
            {userMatchDetail?.matchDate?.slice(0, 10)} /{" "}
            {userMatchDetail?.matchDate?.slice(11, 16)}
          </li>
          <li>
            {userMatchDetail.matchDate &&
              userMatchDetail?.matchInfo[0]?.nickname}{" "}
            {userMatchDetail.matchDate &&
              userMatchDetail?.matchInfo[0]?.shoot?.goalTotal}{" "}
            :{" "}
            {userMatchDetail.matchDate &&
              userMatchDetail?.matchInfo[1]?.shoot?.goalTotal}{" "}
            {userMatchDetail.matchDate &&
              userMatchDetail?.matchInfo[1]?.nickname}
          </li>
          <li>
            {userMatchDetail.matchDate &&
              userMatchDetail?.matchInfo[0]?.matchDetail?.matchResult}
          </li>
          <li>&#60;</li>
        </ul>
        <MatchInfo />
      </div>
    );
  }
};

export default GameMode;
