import React, { useEffect, useState } from "react";
import Match from "./Match";
import UserInfoBox from "./UserInfoBox";
import { useDispatch, useSelector } from "react-redux";
import { fcAction } from "../redux/action/fcAction";
import { useSearchParams } from "react-router-dom";

const UserInfo = () => {
  const [query, setQuery] = useSearchParams("");
  const dispatch = useDispatch();
  const { userOuid } = useSelector((state) => state.fc);

  const getFcUser = async () => {
    const searchQuery = query.get("q");

    dispatch(fcAction.getFc(searchQuery));
  };

  useEffect(() => {
    getFcUser();
  }, [query]);

  return (
    <div>
      <UserInfoBox userOuid={userOuid.ouid} />
      <Match userOuid={userOuid.ouid} />
    </div>
  );
};

export default UserInfo;
