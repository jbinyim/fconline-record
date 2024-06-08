import React, { useEffect } from "react";
import { MatchData, ISpId } from "../util";
import { fetchSpid } from "../api";
import { useQuery } from "react-query";

interface ISpposition {
  item: MatchData;
}

interface IPlater {
  spGrade: number;
  spId: number;
  spPosition: number;
}

const Spposition = ({ item }: ISpposition) => {
  const players01 = item?.matchInfo[0]?.player?.map((data: IPlater) => data);
  const players02 = item?.matchInfo[1]?.player?.map((data: IPlater) => data);

  const { data, refetch } = useQuery<ISpId[]>(["spid"], () => fetchSpid(), {
    refetchOnWindowFocus: false,
  });

  console.log(players01);

  useEffect(() => {
    refetch();
  }, [refetch]);
  if (item && data) {
    return (
      <div>
        <section style={{ height: "100%" }} className="seemorePosition">
          <p className="nick1">{item.matchInfo[0].nickname}</p>
          {players01?.map((player) => (
            <div className={"po" + player.spPosition} key={player.spId}>
              <img
                src={`https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${player.spId}.png`}
                alt="playerImg"
              />
              {
                <p>
                  {data && data?.find((it: ISpId) => it.id === player.spId)?.name}
                </p>
              }
            </div>
          ))}
          <p className="nick2">{item.matchInfo[1].nickname}</p>
          {players02?.map((player) => (
            <div className={"po02" + player.spPosition} key={player.spId}>
              <img
                src={`https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${player.spId}.png`}
                alt="playerImg"
              />
              {
                <p>
                  {data && data?.find((it: ISpId) => it.id === player.spId)?.name}
                </p>
              }
            </div>
          ))}
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Spposition;
