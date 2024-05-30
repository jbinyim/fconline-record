import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMatchDetail } from "../api";
import MatchDetailSeeMore from "./MatchDetailSeeMore";
import { MatchDetails, MatchData } from "../util";

interface IMatchDetailProps {
  item: string;
}

const MatchDetail = ({ item }: IMatchDetailProps) => {
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const { isLoading, data, refetch } = useQuery<MatchData>(
    ["matchDetail", item],
    () => fetchMatchDetail(item),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, item]);

  const seeMore = () => {
    setShouldRefetch((prev) => !prev);
  };

  return (
    <>
      <div className="matchdetailArea">
        <div>{data?.matchDate}</div>
        <div>
          <div>
            <p>
              {data?.matchInfo[0]?.nickname}{" "}
              {data?.matchInfo[0]?.shoot.goalTotal}{" "}
            </p>
            <p> : </p>{" "}
            <p>
              {data?.matchInfo[1]?.shoot.goalTotal}{" "}
              {data?.matchInfo[1]?.nickname}
            </p>
          </div>
        </div>
        <div onClick={seeMore}>더보기</div>
      </div>
      {shouldRefetch && data ? <MatchDetailSeeMore data={data} /> : null}
    </>
  );
};

export default MatchDetail;

// {data?.matchInfo.map((item, idx) => (
//   <div key={idx}>
//     <p>{item.nickname}</p>
//     <p>:</p>
//     <p>{item.shoot.goalTotal}</p>
//   </div>
// ))}
