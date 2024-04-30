import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fcAction } from "../redux/action/fcAction";
import UserInfo from "../components/UserInfo";

const Home = () => {
  const [ouid, setOuid] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearchUser = (e) => {
    setOuid(e.target.value);
  };

  const onChEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/userinfo/?q=${ouid}`);
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
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
