import React, { useEffect, useState } from "react";
import { MatchData, ISpId } from "../util";
import { useQuery } from "react-query";
import { fetchSpid } from "../api";
import Spposition from "./Spposition";

interface IMatchDetailSeeMore {
  data: MatchData;
}

const MatchDetailSeeMore = ({ data }: IMatchDetailSeeMore) => {
  const [subBtn, setSubBtn] = useState(false);
  const { data: spid, refetch } = useQuery<ISpId[]>(
    ["spid"],
    () => fetchSpid(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const onClickSubBtn = () => {
    setSubBtn((prev) => !prev);
  };

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
      spIdArray.map((spId) => spid.find((item) => item.id === spId))
    );

  return (
    <div className="seemoreArea">
      <button onClick={onClickSubBtn}>{subBtn ? "경기 기록" : "라인업"}</button>
      {subBtn ? (
        <Spposition item={data} />
      ) : (
        <>
          <div>
            <div>
              {goalSpId &&
                goalSpId[0] &&
                goalSpId[0].map((id) => <p key={id?.id}>{id?.name}</p>)}
            </div>
            <img
              src="https://ssl.gstatic.com/onebox/sports/game_feed/goal_icon.svg"
              alt="ball"
            />
            <div>
              {goalSpId &&
                goalSpId[1] &&
                goalSpId[1].map((id) => <p key={id?.name}>{id?.name}</p>)}
            </div>
          </div>
          <p></p>
          <div>
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
        </>
      )}
    </div>
  );
};

export default MatchDetailSeeMore;
