import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcMatchDetailAction } from "../redux/action/fcMatchDetailAction";
import MatchInfo from "./MatchInfo";

const GameMode = ({ item }) => {
  const [match, setMatch] = useState();
  const dispatch = useDispatch();

  const { userMatchDetail } = useSelector((state) => state.fcMatchDetail);

  const getFcMatchDetail = async () => {
    dispatch(fcMatchDetailAction.getMatchDetail(item));
  };

  useEffect(() => {
    getFcMatchDetail();
    setMatch(userMatchDetail);
  }, [match, dispatch]);

  return (
    <div className="tabPage activated">
      {/* {userMatch?.map((item, idx) => (
        <MatchInfo key={idx} item={item} />
      ))} */}
    </div>
  );
};

export default GameMode;
