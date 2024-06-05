import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchMatchDetail } from "../api";
import { MatchData } from "../util";
import MatchDetailSeeMore from "./MatchDetailSeeMore";
import Spinner from "react-bootstrap/Spinner";

interface IMatchDetailProps {
  item: string;
}

const MatchDetail = ({ item }: IMatchDetailProps) => {
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [ouid] = useSearchParams();
  const userOuid = ouid.get("q");

  const { isLoading, data, refetch } = useQuery<MatchData>(
    ["matchDetail", item],
    () => fetchMatchDetail(item),
    {
      refetchOnWindowFocus: false,
    }
  );

  const getFormatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    let hours: number = (date.getHours() + 9) % 24;
    const hoursStr: string = hours.toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${year}.${month}.${day} ${hoursStr}:${minutes}`;
    return formattedDate;
  };

  useEffect(() => {
    refetch();
  }, [refetch, item]);

  const seeMore = () => {
    setShouldRefetch((prev) => !prev);
  };
  console.log(userOuid);

  if (isLoading) {
    return <Spinner animation="border" variant="success" />;
  } else {
    return (
      <>
        {data?.matchInfo[0].ouid === userOuid ||
        data?.matchInfo[1].ouid === userOuid
          ? (data?.matchInfo[0].ouid === userOuid &&
              data?.matchInfo[0].matchDetail.matchResult) ||
            (data?.matchInfo[1].ouid === userOuid &&
              data?.matchInfo[1].matchDetail.matchResult)
          : null}
        <div
          className={`matchdetailArea ${
            data?.matchInfo[0].ouid === userOuid ||
            data?.matchInfo[1].ouid === userOuid
              ? (data?.matchInfo[0].ouid === userOuid &&
                  data?.matchInfo[0].matchDetail.matchResult) ||
                (data?.matchInfo[1].ouid === userOuid &&
                  data?.matchInfo[1].matchDetail.matchResult)
              : null
          }`}
        >
          {data && data.matchInfo && data.matchInfo.length > 0 && (
            <>
              <div>{getFormatDate(data?.matchDate)}</div>
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
            </>
          )}
        </div>
        {shouldRefetch && data ? <MatchDetailSeeMore data={data} /> : null}
      </>
    );
  }
};

export default MatchDetail;
