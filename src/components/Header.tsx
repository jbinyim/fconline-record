import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchOuid } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface OuidInterface {
  ouid: string;
}

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);
  const [nickname, setNickname] = useState("99156cc13fbdadffb8c87df57f12f3ad");
  const navigate = useNavigate();

  const { data, refetch } = useQuery<OuidInterface>(
    ["ouid", nickname],
    () => fetchOuid(nickname ?? undefined),
    {
      enabled: !!nickname,
      refetchOnWindowFocus: false,
    }
  );

  const onChSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearch = (
    e: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        alert("구단주명을 입력해주세요!!");
      } else {
        setNickname(e.target.value);
        e.target.value = "";
      }
    }
  };

  const onClickSearch = () => {
    setNickname(searchText);
    setSearchText("");
  };

  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  useEffect(() => {
    if (data?.ouid) {
      navigate(`/info/?q=${data?.ouid}`);
      setNickname("");
    }
  }, [data, navigate]);

  const goToHome = () => {
    navigate("/");
  };

  const onClickToggle = () => {
    setToggleBtn((prev) => !prev);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <header>
        <h1 onClick={goToHome}>피파전적.com</h1>
        <nav>
          <ul>
            <li>
              <a
                href="https://fconline.nexon.com/main/index"
                target="_blank"
                rel="noopener noreferrer"
                className="hovercolor"
              >
                FC Online
              </a>
            </li>
            <li>
              <p className="hovercolor">선수 검색</p>
            </li>
          </ul>
        </nav>
      </header>

      <section className="header2">
        <div>
          <ul>
            <li
              onClick={() =>
                handleOpenNewTab("https://fconline.nexon.com/news/notice/list")
              }
            >
              공지사항
              <div className="subMenu">
                <ul>
                  <li>
                    <a
                      href="https://fconline.nexon.com/news/notice/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      공지사항
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/news/play/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      개발자 노트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/news/nf/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      넥스트 필드
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/news/update/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      업데이트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/news/events/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      이벤트
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() =>
                handleOpenNewTab(
                  "https://fconline.nexon.com/community/recommend"
                )
              }
            >
              커뮤니티
              <div className="subMenu">
                <ul>
                  <li>
                    <a
                      href="https://fconline.nexon.com/community/recommend"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      추천 게시판
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/community/free/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      자유 게시판
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/community/tip/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      팁
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/community/qa/list"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      질문 게시판
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() =>
                handleOpenNewTab("https://fconline.nexon.com/club/list")
              }
            >
              클럽
              <div className="subMenu">
                <ul>
                  <li>
                    <a
                      href="https://fconline.nexon.com/Club/List"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      내 클럽
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/Club/List"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      클럽 리스트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/ClubPromotion/PromotionList"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      클럽 홍보
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/Club/Create"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      클럽 생성
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() =>
                handleOpenNewTab("https://shop.fconline.nexon.com/")
              }
            >
              웹 상점
              <div className="subMenu">
                <ul>
                  <li>
                    <a
                      href="https://shop.fconline.nexon.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      웹 상점
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shop.fconline.nexon.com/Membership"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      멤버십
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shop.fconline.nexon.com/ShopEvent/Index"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      스페셜 상점
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shop.fconline.nexon.com/mypage"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      마이페이지
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() =>
                handleOpenNewTab(
                  "https://fconline.nexon.com/datacenter/dailysquad"
                )
              }
            >
              랭킹
              <div className="subMenu">
                <ul>
                  <li>
                    <a
                      href="https://fconline.nexon.com/datacenter/rank"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      공식경기 랭킹
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/datacenter/rank_volta_topplayer"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      볼타라이브 랭킹
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fconline.nexon.com/datacenter/rank_arena"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      아레나 모드 랭킹
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() =>
                handleOpenNewTab(
                  "https://fconline.nexon.com/datacenter/squadmaker"
                )
              }
            >
              스쿼드메이커
            </li>
            <li
              onClick={() =>
                handleOpenNewTab(
                  "https://fconline.nexon.com/datacenter/playergrow"
                )
              }
            >
              강화부스트 도우미
            </li>
            <li onClick={onClickToggle} className="toggle">
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </div>
      </section>
      <section className="searchArea">
        <div>
          <input
            value={searchText}
            onChange={onChSearch}
            onKeyUp={onSearch}
            type="text"
          />
          <span onClick={onClickSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </section>
      {toggleBtn ? (
        <div className="toggleSlider">
          <ul>
            <li>공지사항</li>
            <li>커뮤니티</li>
            <li>클럽</li>
            <li>웹상점</li>
            <li>랭킹</li>
            <li>스쿼드메이커</li>
            <li>강화부스트 도우미</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
