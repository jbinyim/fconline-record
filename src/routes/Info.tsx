import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

const Info = () => {
  const [nickname, setNickname] = useSearchParams();
  const userNickname = nickname.get("q");
  console.log(userNickname);
  return <div>infp</div>;
};

export default Info;
