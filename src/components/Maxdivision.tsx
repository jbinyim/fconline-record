import React from "react";
import { useQuery } from "react-query";
import { fetchMaxdivision } from "../api";

interface IMaxdivision {
  ouid: string | null;
}

interface Max {
  matchType: number;
  division: number;
  achievementDate: string;
}

const Maxdivision = ({ ouid }: IMaxdivision) => {
  const { isLoading, data } = useQuery<Max>(["max", ouid], () =>
    fetchMaxdivision(ouid ?? undefined)
  );
  console.log(data);
  return <div>Maxdivision</div>;
};

export default Maxdivision;
