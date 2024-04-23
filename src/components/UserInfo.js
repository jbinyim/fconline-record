import React from "react";

const UserInfo = ({ userOuid }) => {
  console.log(userOuid);

  return <div>
    <section class="infoArea">
        <div>
          <div>
            <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png"></img>
            <p>공식경기 1:1 역대 최고 티어 - 챔피언스</p>
            <p>최고 티어 달성 날짜 - 0000.00.00</p>
          </div>
          <div>
            <img src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png"></img>
            <p>볼타 역대 최고 티어 - 루키</p>
            <p>최고 티어 달성 날짜 - 0000.00.00</p>
          </div>
          <div>
              <h2>닉네임 : 발긔</h2>
              <p>LV.100</p>
          </div>
        </div>
        <button type="button">전적갱신</button>
    </section>
    
    <section class="recordArea">
        
        <div>
          <ul class="tabMenu">
            <li data-tabNumb="tab1" class="activated"><a href="">1:1 공식 경기</a></li>
            <li data-tabNumb="tab2"><a href="">감독 모드</a></li>
            <li data-tabNumb="tab3"><a href="">친선 경기</a></li>
            <li><a href="">선수별 공격포인트</a></li>
          </ul>
          <div id="tab1" class="tabPage activated">tabPage1
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
          <div id="tab2" class="tabPage">tabPage2</div>
          <div id="tab3" class="tabPage">tabPage3</div>
          <div id="tab4" class="tabPage">tabPage4</div>
        </div>


        <div>
        
          
        </div>  
    </section>

  </div>;
};

export default UserInfo;
