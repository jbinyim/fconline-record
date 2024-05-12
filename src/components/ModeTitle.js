import React, { useEffect } from "react";
import { getToggle } from "../util";

const ModeTitle = ({ title, idx, setToggle, isDone }) => {
  const setToggleIdx = () => {
    console.log(idx);
    setToggle(idx);
  };

  useEffect(() => {}, []);

  return (
    <li className={isDone ? "activated" : "readyActive"}>
      <a onClick={setToggleIdx}>{title}</a>
    </li>
  );
};

export default ModeTitle;
