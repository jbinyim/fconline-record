import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMatchDetail } from "../api";
import MatchDetailSeeMore from "./MatchDetailSeeMore";

interface IMatchDetailProps {
  item: string;
}

interface MatchDetails {
  ouid: string;
  nickname: string;
  matchDetail: {
    seasonId: number;
    matchResult: string;
    matchEndType: number;
    systemPause: number;
    foul: number;
    injury: number;
    redCards: number;
    yellowCards: number;
    dribble: number;
    cornerKick: number;
    possession: number;
    OffsideCount: number;
    averageRating: number;
    controller: string;
  };
  shoot: {
    shootTotal: number;
    effectiveShootTotal: number;
    shootOutScore: number;
    goalTotal: number;
    goalTotalDisplay: number;
    ownGoal: number;
    shootHeading: number;
    goalHeading: number;
    shootFreekick: number;
    goalFreekick: number;
    shootInPenalty: number;
    goalInPenalty: number;
    shootOutPenalty: number;
    goalOutPenalty: number;
    shootPenaltyKick: number;
    goalPenaltyKick: number;
  };
  shootDetail: {
    goalTime: number;
    x: number;
    y: number;
    type: number;
    result: number;
    spId: number;
    spGrade: number;
    spLevel: number;
    spIdType: boolean;
    assist: boolean;
    assistSpI: number;
    assistX: number;
    assistY: number;
    hitPost: boolean;
    inPenalty: boolean;
  }[];
  pass: {
    passTry: number;
    passSuccess: number;
    shortPassTry: number;
    shortPassSuccess: number;
    longPassTry: number;
    longPassSuccess: number;
    bouncingLobPassTry: number;
    bouncingLobPassSuccess: number;
    drivenGroundPassTry: number;
    drivenGroundPassSuccess: number;
    throughPassTry: number;
    throughPassSuccess: number;
    lobbedThroughPassTry: number;
    lobbedThroughPassSuccess: number;
  };
  defence: {
    blockTry: number;
    blockSuccess: number;
    tackleTry: number;
    tackleSuccess: number;
  };
  player: {
    spId: number;
    spPosition: number;
    spGrade: number;
    status: {
      shoot: number;
      effectiveShoot: number;
      assist: number;
      goal: number;
      dribble: number;
      intercept: number;
      defending: number;
      passTry: number;
      passSuccess: number;
      dribbleTry: number;
      dribbleSuccess: number;
      ballPossesionTry: number;
      ballPossesionSuc: number;
      aerialTry: number;
      aerialSuccess: number;
      blockTry: number;
      block: number;
      tackleTry: number;
      tackle: number;
      yellowCards: number;
      redCards: number;
      spRating: number;
    };
  }[];
}

interface MatchData {
  matchId: string;
  matchDate: string;
  matchType: number;
  matchInfo: MatchDetails[];
}

const MatchDetail = ({ item }: IMatchDetailProps) => {
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const { data, refetch } = useQuery<MatchData>(["matchDetail", item], () =>
    fetchMatchDetail(item)
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
              {data?.matchInfo[0]?.shoot.goalTotal}
            </p>
            <p> : </p>
            <p>
              {data?.matchInfo[1]?.shoot.goalTotal}{" "}
              {data?.matchInfo[1]?.nickname}
            </p>
          </div>
        </div>
        <div onClick={seeMore}>더보기</div>
      </div>
      {shouldRefetch ? <MatchDetailSeeMore /> : null}
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
