import React, { useEffect } from "react";
import { getToggle } from "../util";

const ModeTitle = ({ title, idx, setToggle, isDone }) => {
  const setToggleIdx = () => {
    setToggle(getToggle(idx));
  };

  useEffect(() => {}, []);

  return (
    <li className={isDone ? "activated" : "readyActive"}>
      <a onClick={setToggleIdx}>{title}</a>
    </li>
  );
};

export default ModeTitle;
