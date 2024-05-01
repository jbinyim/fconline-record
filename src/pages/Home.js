import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fcAction } from "../redux/action/fcAction";

const Home = () => {
  const [ouid, setOuid] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearchUser = (e) => {
    setOuid(e.target.value);
  };

  const onClickSearch = () => {
    if (!ouid) {
      alert("구단주명을 입력해주세요.");
    } else {
      navigate(`/userinfo/?q=${ouid}`);
    }
  };

  const onChEnter = (e) => {
    if (e.key === "Enter") {
      if (!ouid) {
        alert("구단주명을 입력해주세요.");
      } else {
        navigate(`/userinfo/?q=${ouid}`);
        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    dispatch(fcAction.getFc());
  }, []);
  return (
    <div>
      <section className="searchArea">
        <div>
          <input
            onChange={onSearchUser}
            onKeyUp={onChEnter}
            type="text"
            placeholder="구단주명"
          />
          <span onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
