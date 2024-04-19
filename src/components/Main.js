import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="searchArea">
        <div>
          <form>
            <input type="search" placeholder="구단주명"></input>
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
