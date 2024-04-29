import React from "react";
import Match from "./Match";

const UserInfo = ({ userOuid }) => {
  console.log(userOuid);

  return (
    <div>
      <section className="infoArea">
        <div>
          <div>
            <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png"></img>
            <p>공식경기 1:1 역대 최고 티어 - 챔피언스</p>
            <p>최고 티어 달성 날짜 - 0000.00.00</p>
          </div>
          <div>
            <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png"></img>
            <p>볼타 역대 최고 티어 - 루키</p>
            <p>최고 티어 달성 날짜 - 0000.00.00</p>
          </div>
          <div>
            <h2>닉네임 : 발긔</h2>
            <p>LV.100</p>
          </div>
        </div>
        <button type="button">전적갱신</button>
      </section>
      <Match />
    </div>
  );
};

export default UserInfo;
