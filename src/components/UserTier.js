import React from "react";
import { getDivision, getDivisionImg } from "../util";

const UserTier = ({ text, userMaxDivision }) => {
  return (
    <div>
      <img
        src={
          userMaxDivision?.division
            ? getDivisionImg(userMaxDivision?.division)
            : "X"
        }
      />
      <p>
        {text} 역대 최고 티어 -{" "}
        {userMaxDivision?.division
          ? getDivision(userMaxDivision?.division)
          : "조회되지 않습니다"}
      </p>
      <p>
        최고 티어 달성 날짜 -{" "}
        {userMaxDivision?.achievementDate
          ? userMaxDivision?.achievementDate.slice(0, 10)
          : "조회되지 않습니다"}
      </p>
    </div>
  );
};

export default UserTier;
