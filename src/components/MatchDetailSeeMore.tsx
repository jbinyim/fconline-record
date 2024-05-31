import React, { useEffect } from "react";
import { MatchData } from "../util";
import { useQuery } from "react-query";
import { fetchSpid } from "../api";

interface IMatchDetailSeeMore {
  data: MatchData;
}

const MatchDetailSeeMore = ({ data }: IMatchDetailSeeMore) => {
  const { data: spid, refetch } = useQuery<any>(["spid"], () => fetchSpid(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch, data]);

  const shootSpId = data.matchInfo?.map((user) =>
    user.shootDetail.filter((it) => it.result === 3).map((it) => it.spId)
  );

  const goalSpId =
    spid &&
    shootSpId &&
    shootSpId.map((spIdArray) =>
      spIdArray.map((spId) => spid.find((item: any) => item.id === spId))
    );

  console.log(goalSpId);
  return (
    <div className="seemoreArea" style={{ textAlign: "center" }}>
      <div style={{ display: "flex", gap: "50px", marginBottom: "50px" }}>
        <div>
          {goalSpId &&
            goalSpId[0] &&
            goalSpId[0].map((id: any) => <p>{id.name}</p>)}
        </div>
        <div>
          {goalSpId &&
            goalSpId[1] &&
            goalSpId[1].map((id: any) => <p>{id.name}</p>)}
        </div>
      </div>
      <div style={{ display: "flex", gap: "50px" }}>
        {data.matchInfo.map((item, idx) => (
          <>
            <div key={item.ouid}>
              <p>{item.nickname ?? 0}</p>
              <p>{item.shoot.shootTotal}</p>
              <p>{item.shoot.effectiveShootTotal}</p>
              <p>{item.matchDetail.possession}%</p>
              <p>{item.pass.passTry}</p>
              <p>{item.pass.passSuccess}</p>
              <p>{item.matchDetail.foul}</p>
              <p>{item.matchDetail.yellowCards}</p>
              <p>{item.matchDetail.redCards}</p>
              <p>{item.matchDetail.OffsideCount ?? 0}</p>
              <p>{item.matchDetail.cornerKick}</p>
            </div>
            <div key={idx}>
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
          </>
        ))}
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default MatchDetailSeeMore;
