import React from "react";
import { useQuery } from "react-query";
import { fetchMaxdivision } from "../api";
import { getDivision, getDivisionImg, getToggle } from "../util";

interface IMaxdivision {
  ouid: string;
}

interface Max {
  matchType?: number;
  division?: number;
  achievementDate?: string;
}

const Maxdivision = ({ ouid }: IMaxdivision) => {
  const { data } = useQuery<Max[]>(["max", ouid], () =>
    fetchMaxdivision(ouid ?? undefined)
  );

  return (
    <div>
      {data?.map((item, idx) => (
        <div key={idx}>
          <h2>{getToggle(item.matchType)}</h2>
          <img src={getDivisionImg(item.division)} alt="tier" />
          <p>{getDivision(item.division)}</p>
          <p>{item.achievementDate?.slice(0, 10)}</p>
        </div>
      ))}
    </div>
  );
};

export default Maxdivision;
