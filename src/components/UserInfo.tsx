import React from "react";
import { useQuery } from "react-query";
import { fetchUserBasic } from "../api";
import Maxdivision from "./Maxdivision";
import Spinner from "react-bootstrap/Spinner";

interface IUserInfoProps {
  userNickname: string;
}

interface Basic {
  ouid: string;
  nickname: string;
  level: number;
}

const UserInfo = ({ userNickname }: IUserInfoProps) => {
  const { data: basic } = useQuery<Basic>(["basic", userNickname], () =>
    fetchUserBasic(userNickname ?? undefined)
  );

  if (basic) {
    return (
      <div>
        <section className="infoArea">
          <div>
            <div>
              <p>닉네임 : {basic?.nickname}</p>
              <p>레벨 : {basic?.level}</p>
            </div>
            <Maxdivision ouid={basic.ouid} />
          </div>
        </section>
      </div>
    );
  } else {
    return <Spinner animation="border" variant="success" />;
  }
};

export default UserInfo;
