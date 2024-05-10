import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const enter = (e) => {
    if (e.key === "Enter") {
      const ouid = e.target.value;
      if (!ouid) {
        alert("구단주명을 입력해주세요.");
      } else {
        navigate(`/userinfo/?q=${ouid}`);
        e.target.value = "";
      }
    }
  };
  return (
    <div>
      <header>
        <h1 onClick={() => navigate("/")}>FC GG.KR</h1>
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
            <li>
              <input type="checkbox" id="toggleBtn" />
              <label className="toggleBtn">닉네임조회</label>
              <input onKeyUp={enter} type="text" className="textbox" placeholder="구단주명"/>
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
    </div>
  );
};

export default Header;
