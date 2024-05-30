import React, { useEffect } from "react";
import { MatchData } from "../util";
import { useQuery } from "react-query";
import { fetchSpid } from "../api";

interface IMatchDetailSeeMore {
  data: MatchData;
}

const MatchDetailSeeMore = ({ data }: IMatchDetailSeeMore) => {
  const { data: spid, refetch } = useQuery(["spid"], () => fetchSpid(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch, data]);

  console.log(data);

  return (
    <div className="seemoreArea" style={{ display: "flex", gap: "50px" }}>
      <div>
        <p>{data.matchInfo[0].nickname ?? 0}</p>
        <p>{data.matchInfo[0].shoot.shootTotal}</p>
        <p>{data.matchInfo[0].shoot.effectiveShootTotal}</p>
        <p>{data.matchInfo[0].matchDetail.possession}%</p>
        <p>{data.matchInfo[0].pass.passTry}</p>
        <p>{data.matchInfo[0].pass.passSuccess}</p>
        <p>{data.matchInfo[0].matchDetail.foul}</p>
        <p>{data.matchInfo[0].matchDetail.yellowCards}</p>
        <p>{data.matchInfo[0].matchDetail.redCards}</p>
        <p>{data.matchInfo[0].matchDetail.OffsideCount ?? 0}</p>
        <p>{data.matchInfo[0].matchDetail.cornerKick}</p>
      </div>
      <div>
        <p>팀 기록</p>
        <p>슈팅</p>
        <p>유효슈팅</p>
        <p>점유율</p>
        <p>패스 횟수</p>
        <p>패스 성공횟수</p>
        <p>파울</p>
        <p>옐로우 카드</p>
        <p>레드 카드</p>
        <p>오프사이드</p>
        <p>코너킥</p>
      </div>
      <div>
        <p>{data.matchInfo[1].nickname}</p>
        <p>{data.matchInfo[1].shoot.shootTotal}</p>
        <p>{data.matchInfo[1].shoot.effectiveShootTotal}</p>
        <p>{data.matchInfo[1].matchDetail.possession}%</p>
        <p>{data.matchInfo[1].pass.passTry}</p>
        <p>{data.matchInfo[1].pass.passSuccess}</p>
        <p>{data.matchInfo[1].matchDetail.foul}</p>
        <p>{data.matchInfo[1].matchDetail.yellowCards}</p>
        <p>{data.matchInfo[1].matchDetail.redCards}</p>
        <p>{data.matchInfo[1].matchDetail.OffsideCount ?? 0}</p>
        <p>{data.matchInfo[1].matchDetail.cornerKick}</p>
      </div>
    </div>
  );
};

export default MatchDetailSeeMore;
