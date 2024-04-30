import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcBasicAction } from "../redux/action/fcBasicAction";

const UserInfoBox = ({ userOuid }) => {
  const [ouid, setOuid] = useState("");

  console.log(userOuid);
  const dispatch = useDispatch();
  const { userBasic } = useSelector((state) => state.fcBasic);

  const getFcBasic = async () => {
    dispatch(fcBasicAction.getBasic(ouid));
  };
  useEffect(() => {
    getFcBasic();
    setOuid(userOuid);
  }, []);
  console.log(userBasic);
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
            <h2>닉네임 : 호날두</h2>
            <p>LV.100</p>
          </div>
        </div>
        <button type="button">전적갱신</button>
      </section>
    </div>
  );
};

export default UserInfoBox;
