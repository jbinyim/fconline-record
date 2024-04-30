import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcBasicAction } from "../redux/action/fcBasicAction";
import { getDivision } from "../util";

const UserInfoBox = ({ userOuid }) => {
  //const [division, setDivision] = useState([]);
  const dispatch = useDispatch();
  const { userBasic, userMaxDivision } = useSelector((state) => state.fcBasic);

  const getFcBasic = async () => {
    dispatch(fcBasicAction.getBasic(userOuid));
  };

  console.log(userMaxDivision);
  useEffect(() => {
    getFcBasic();
  }, [userOuid]);

  return (
    <div>
      <section className="infoArea">
        <div>
          <div>
            <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png" />
            <p>공식경기 1:1 역대 최고 티어 - </p>
            <p>최고 티어 달성 날짜 - 0000.00.00</p>
          </div>
          <div>
            <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png"></img>
            <p>볼타 역대 최고 티어 - 루키</p>
            <p>최고 티어 달성 날짜 - 0000.00.00</p>
          </div>
          <div>
            <h2>닉네임 : {userBasic.nickname}</h2>
            <p>LV. {userBasic.level}</p>
          </div>
        </div>
        <button type="button">전적갱신</button>
      </section>
    </div>
  );
};

export default UserInfoBox;
