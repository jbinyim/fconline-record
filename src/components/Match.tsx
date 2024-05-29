import React, { useEffect } from "react";
import MatchDetail from "./MatchDetail";
import { useQuery } from "react-query";
import { fetchMatch } from "../api";

interface IMatchTypeProps {
  matchType: number;
  userNickname: string;
}

interface IMatch {
  matchId: string;
}

const Match = ({ matchType, userNickname }: IMatchTypeProps) => {
  let offset = 0;
  let limit = 10;
  const { data } = useQuery<IMatch[]>(["match", "matchId"], () =>
    fetchMatch(userNickname, matchType, offset, limit)
  );

  if (matchType === 50) {
    return (
      <div>
        {data?.map((item, idx) => (
          <MatchDetail key={idx} item={item + ""} />
        ))}
      </div>
    );
  }
  if (matchType === 52) {
    return <div>{matchType}</div>;
  }
  if (matchType === 60) {
    return <div>{matchType}</div>;
  }
  if (matchType === 0) {
    return <div>{matchType}</div>;
  } else {
    return <div>매치타입이 없습니다</div>;
  }
};

export default Match;
