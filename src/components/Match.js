import React from "react";

const Match = () => {
  return (
    <div className="recordArea">
      <div>
        <ul class="tabMenu">
          <li data-tabNumb="tab1" class="activated">
            <a href="">1:1 공식 경기</a>
          </li>
          <li data-tabNumb="tab2">
            <a href="">감독 모드</a>
          </li>
          <li data-tabNumb="tab3">
            <a href="">친선 경기</a>
          </li>
          <li>
            <a href="">선수별 공격포인트</a>
          </li>
        </ul>
        <div id="tab1" class="tabPage activated">
          tabPage1
          <ul>
            <li>0000.00.00 / 00시00분</li>
            <li>발긔 0 : 0 뱔기</li>
            <li>패배</li>
            <li>&#60;</li>
          </ul>
          <ul>
            <li>0000.00.00 / 00시00분</li>
            <li>발긔 0 : 0 뱔기</li>
            <li>승리</li>
            <li>&#60;</li>
          </ul>
          <ul>
            <li>0000.00.00 / 00시00분</li>
            <li>발긔 0 : 0 뱔기</li>
            <li>승리</li>
            <li>&#60;</li>
          </ul>
          <ul>
            <li>0000.00.00 / 00시00분</li>
            <li>발긔 0 : 0 뱔기</li>
            <li>승리</li>
            <li>&#60;</li>
          </ul>
          <ul>
            <li>0000.00.00 / 00시00분</li>
            <li>발긔 0 : 0 뱔기</li>
            <li>승리</li>
            <li>&#60;</li>
          </ul>
        </div>
        <div id="tab2" class="tabPage">
          tabPage2
        </div>
        <div id="tab3" class="tabPage">
          tabPage3
        </div>
        <div id="tab4" class="tabPage">
          tabPage4
        </div>
      </div>
    </div>
  );
};

export default Match;
