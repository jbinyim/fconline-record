import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fcBasicAction } from "../redux/action/fcBasicAction";
import UserTier from "./UserTier";

const UserInfoBox = ({ userOuid }) => {
  const dispatch = useDispatch();
  const { userBasic, userMaxDivision } = useSelector((state) => state.fcBasic);

  const getFcBasic = async () => {
    dispatch(fcBasicAction.getBasic(userOuid));
  };

  const onClickBtn = () => {
    window.location.reload();
  };

  useEffect(() => {
    getFcBasic();
  }, [userOuid]);

  return (
    <div>
      <section className="infoArea">
        <div>
          <UserTier text="공식경기 1:1" userMaxDivision={userMaxDivision[0]} />
          <UserTier text="감독모드" userMaxDivision={userMaxDivision[1]} />
          <UserTier text="볼타모드" userMaxDivision={userMaxDivision[2]} />
          <div>
            <h2>{userBasic.nickname}</h2>
            <p>Level. {userBasic.level}</p>
          </div>
        </div>
        <button type="button" onClick={onClickBtn}>
          갱신
        </button>
      </section>
    </div>
  );
};

export default UserInfoBox;
