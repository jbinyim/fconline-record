import React from "react";
import { useSearchParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Info = () => {
  const [nickname, setNickname] = useSearchParams();
  const userNickname = nickname.get("q");

  return (
    <div>
      <UserInfo userNickname={userNickname} />
    </div>
  );
};

export default Info;
