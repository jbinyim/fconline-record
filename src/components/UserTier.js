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
        {userMaxDivision?.division
          ? `역대 최고 티어 - ${getDivision(userMaxDivision?.division)}`
          : ""}
      </p>
      <p>
        {userMaxDivision?.achievementDate
          ? `최고 티어 달성 날짜 - ${userMaxDivision?.achievementDate.slice(
              0,
              10
            )}`
          : "조회되지 않습니다"}
      </p>
    </div>
  );
};

export default UserTier;
