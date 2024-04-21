import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Main = ({ setUserOuid }) => {
  const API_KEY =
    "test_8fe786cce7f7ae48cfc42749cde66ec1f24a0712e02df26cb4df8ce00d72a2661adc361db9adbdd7f21d9627de734cd7";
  const [ouid, setOuid] = useState("");
  const navigate = useNavigate();

  const oncheckEnter = (e) => {};

  const onChangeSearch = (e) => {
    setOuid(e.target.value);
  };

  const getUserOuid = async () => {
    const url = `https://open.api.nexon.com/fconline/v1/id?nickname=${ouid}`;
    const response = await fetch(url, {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    });
    const data = await response.json();

    setUserOuid(data);
  };

  useEffect(() => {
    getUserOuid();
  }, [ouid]);

  return (
    <div>
      <section className="searchArea">
        <div>
          <form>
            <input
              value={ouid}
              onKeyUp={oncheckEnter}
              onChange={onChangeSearch}
              type="search"
              placeholder="구단주명"
            ></input>
            <button type="button" onClick={() => navigate("/userinfo")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Main;
