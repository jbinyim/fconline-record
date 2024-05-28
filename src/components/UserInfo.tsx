import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchUserBasic } from "../api";
import Maxdivision from "./Maxdivision";

interface IUserInfoProps {
  userNickname: string | null;
}

interface Basic {
  ouid: string;
  nickname: string;
  level: number;
}

const UserInfo = ({ userNickname }: IUserInfoProps) => {
  const { isLoading: basicLoading, data: basic } = useQuery<Basic>(
    ["basic", userNickname],
    () => fetchUserBasic(userNickname ?? undefined)
  );

  if (basic) {
    return (
      <div>
        <div>
          <p>닉네임 : {basic?.nickname}</p>
          <p>레벨 : {basic?.level}</p>
        </div>
        <Maxdivision ouid={basic.ouid} />
      </div>
    );
  } else {
    return <h1>데이터 정보가 없습니다.</h1>;
  }
};

export default UserInfo;
