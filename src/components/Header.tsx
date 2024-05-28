import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchOuid } from "../api";

interface OuidInterface {
  ouid: string;
}

const Header = () => {
  const [nickname, setNickname] = useState("99156cc13fbdadffb8c87df57f12f3ad");
  const navigate = useNavigate();

  const { isLoading, data } = useQuery<OuidInterface>(
    ["ouid", nickname],
    () => fetchOuid(nickname ?? undefined),
    {
      enabled: !!nickname,
    }
  );

  const onSearch = (e: any) => {
    if (e.key === "Enter") {
      setNickname(e.target.value);
      e.target.value = "";
    }
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

  return (
    <div>
        <header>
              <h1 onClick={goToHome}>FC GG.KR</h1>
              <nav>
                <ul>
                  <li>
                    <a href="https://fconline.nexon.com/main/index" target="_blank" className="hovercolor">
                      FC Online
                    </a>
                  </li>
                  <li>
                    <a className="hovercolor">선수 검색</a>
                  </li>
                </ul>
              </nav>
            </header>

            <section className="header2">
              <div>
                <ul>
                  <li>
                    공지사항
                    <div className="subMenu">
                      <ul>
                        <li><a href="https://fconline.nexon.com/news/notice/list" target="_blank">공지사항</a></li>
                        <li><a href="https://fconline.nexon.com/news/play/list" target="_blank">개발자 노트</a></li>
                        <li><a href="https://fconline.nexon.com/news/nf/list" target="_blank">넥스트 필드</a></li>
                        <li><a href="https://fconline.nexon.com/news/update/list" target="_blank">업데이트</a></li>
                        <li><a href="https://fconline.nexon.com/news/events/list" target="_blank">이벤트</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    커뮤니티
                    <div className="subMenu">
                      <ul>
                        <li><a href="https://fconline.nexon.com/community/recommend" target="_blank">추천 게시판</a></li>
                        <li><a href="https://fconline.nexon.com/community/free/list" target="_blank">자유 게시판</a></li>
                        <li><a href="https://fconline.nexon.com/community/tip/list" target="_blank">팁</a></li>
                        <li><a href="https://fconline.nexon.com/community/qa/list" target="_blank">질문 게시판</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    클럽
                    <div className="subMenu">
                      <ul>
                        <li><a href="https://fconline.nexon.com/Club/List" target="_blank">내 클럽</a></li>
                        <li><a href="https://fconline.nexon.com/Club/List" target="_blank">클럽 리스트</a></li>
                        <li><a href="https://fconline.nexon.com/ClubPromotion/PromotionList" target="_blank">클럽 홍보</a></li>
                        <li><a href="https://fconline.nexon.com/Club/Create" target="_blank">클럽 생성</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    웹 상점
                    <div className="subMenu">
                      <ul>
                        <li><a href="https://shop.fconline.nexon.com/" target="_blank">웹 상점</a></li>
                        <li><a href="https://shop.fconline.nexon.com/Membership" target="_blank">멤버십</a></li>
                        <li><a href="https://shop.fconline.nexon.com/ShopEvent/Index" target="_blank">스페셜 상점</a></li>
                        <li><a href="https://shop.fconline.nexon.com/mypage" target="_blank">마이페이지</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    랭킹
                    <div className="subMenu">
                      <ul>
                        <li><a href="https://fconline.nexon.com/datacenter/rank" target="_blank">공식경기 랭킹</a></li>
                        <li><a href="https://fconline.nexon.com/datacenter/rank_volta_topplayer" target="_blank">볼타라이브 랭킹</a></li>
                        <li><a href="https://fconline.nexon.com/datacenter/rank_arena" target="_blank">아레나 모드 랭킹</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="https://fconline.nexon.com/datacenter/squadmaker" target="_blank">스쿼드메이커</a></li>
                  <li><a href="https://fconline.nexon.com/datacenter/playergrow" target="_blank">강화부스트 도우미</a></li>
                </ul>
              </div>
            </section>
        <section className="searchArea">
          <div>
            <input onKeyUp={onSearch} type="text" />
            <span>검색아이콘</span>
          </div>
        </section>
    </div>
  );
};

export default Header;
