import React from "react";

const ModeTitle = ({ title, idx, setToggle, isDone }) => {
  const setToggleIdx = () => {
    setToggle(idx);
  };
  return (
    <li className={isDone ? "activated" : "readyActive"}>
      <a onClick={setToggleIdx}>{title}</a>
    </li>
  );
};

export default ModeTitle;
