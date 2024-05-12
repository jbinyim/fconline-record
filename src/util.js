export const getDivision = (division) => {
  const targetDivision = String(division);
  switch (targetDivision) {
    case "800":
      return "슈퍼챔피언스";
    case "900":
      return "챔피언스";
    case "1000":
      return "슈퍼챌린지";
    case "1100":
      return "챌린지1";
    case "1200":
      return "챌린지2";
    case "1300":
      return "챌린지3";
    case "2000":
      return "월드클래스1";
    case "2100":
      return "월드클래스2";
    case "2200":
      return "월드클래스3";
    case "2300":
      return "프로1";
    case "2400":
      return "프로2";
    case "2500":
      return "프로3";
    case "2600":
      return "세미프로1";
    case "2700":
      return "세미프로2";
    case "2800":
      return "세미프로3";
    case "2900":
      return "유망주1";
    case "3000":
      return "유망주2";
    case "3100":
      return "유망주3";
  }
};

export const getDivisionImg = (division) => {
  const targetDivision = String(division);
  switch (targetDivision) {
    case "800":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png";
    case "900":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png";
    case "1000":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank2.png";
    case "1100":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank3.png";
    case "1200":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank4.png";
    case "1300":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank5.png";
    case "2000":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank6.png";
    case "2100":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank7.png";
    case "2200":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank8.png";
    case "2300":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank9.png";
    case "2400":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank10.png";
    case "2500":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank11.png";
    case "2600":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank12.png";
    case "2700":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank13.png";
    case "2800":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank14.png";
    case "2900":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank15.png";
    case "3000":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank16.png";
    case "3100":
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank17.png";
    default:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank_default.png";
  }
};

export const getToggle = (toggle) => {
  switch (toggle) {
    case 0:
      return 50;
    case 1:
      return 52;
    case 2:
      return 40;
    default:
      return 3;
  }
};
