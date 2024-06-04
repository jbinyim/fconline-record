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
  const players01 = item.matchInfo[0].player.map((data: IPlater) => data);
  const players02 = item.matchInfo[1].player.map((data: IPlater) => data);

  const { data, refetch } = useQuery<ISpId[]>(["spid"], () => fetchSpid(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <section style={{ height: "100%" }} className="seemorePosition">
      {players01.map((player) => (
        <div className={player.spPosition + ""} key={player.spId}>
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

      {players02.map((player) => (
        <div className={player.spPosition + "02"} key={player.spId}>
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
  );
};

export default Spposition;
