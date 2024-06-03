import React from "react";
import { MatchData } from "../util";

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
  console.log(players01);
  return (
    <div>
      <div>
        {players01.map((player) => (
          <div key={player.spId}>
            <p>{player.spId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spposition;
