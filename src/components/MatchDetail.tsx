import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMatchDetail } from "../api";

interface IMatchDetailProps {
  item: string;
}

const MatchDetail = ({ item }: IMatchDetailProps) => {
  const { data } = useQuery<any>(["matchDetail"], () => fetchMatchDetail(item));

  console.log(item);

  return (
    <div style={{ width: 1280, height: "100px", border: "1px solid #000" }}>
      {item}
    </div>
  );
};

export default MatchDetail;

// const item = {

//   6647487ad74cd8544030895f
//   6631fb73d9003b47859441d3
//   6631f86678e0b967e83b87ad
//   6631f62960403194b88d90f1
//   6631f42e8715222f50ee34df
//   6631f1420fa1fc039cd7ebe2
//   6631ee6258168af8b32a3627
//   6631ed33619a883e601be0fe
// }
