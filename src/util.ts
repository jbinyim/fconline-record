export const getDivision = (division: number | undefined) => {
  switch (division) {
    case 800:
      return "슈퍼챔피언스";
    case 900:
      return "챔피언스";
    case 1000:
      return "슈퍼챌린지";
    case 1100:
      return "챌린지1";
    case 1200:
      return "챌린지2";
    case 1300:
      return "챌린지3";
    case 2000:
      return "월드클래스1";
    case 2100:
      return "월드클래스2";
    case 2200:
      return "월드클래스3";
    case 2300:
      return "프로1";
    case 2400:
      return "프로2";
    case 2500:
      return "프로3";
    case 2600:
      return "세미프로1";
    case 2700:
      return "세미프로2";
    case 2800:
      return "세미프로3";
    case 2900:
      return "유망주1";
    case 3000:
      return "유망주2";
    case 3100:
      return "유망주3";
  }
};

export const getDivisionImg = (division: number | undefined) => {
  switch (division) {
    case 800:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png";
    case 900:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank1.png";
    case 1000:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank2.png";
    case 1100:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank3.png";
    case 1200:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank4.png";
    case 1300:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank5.png";
    case 2000:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank6.png";
    case 2100:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank7.png";
    case 2200:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank8.png";
    case 2300:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank9.png";
    case 2400:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank10.png";
    case 2500:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank11.png";
    case 2600:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank12.png";
    case 2700:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank13.png";
    case 2800:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank14.png";
    case 2900:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank15.png";
    case 3000:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank16.png";
    case 3100:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank17.png";
    default:
      return "https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank_default.png";
  }
};

export const getToggle = (toggle: number | undefined) => {
  switch (toggle) {
    case 50:
      return "공식경기";
    case 52:
      return "감독모드";
    case 214:
      return "볼타모드";
    case 60:
      return "친선경기";
  }
};

export interface MatchDetails {
  ouid: string;
  nickname: string;
  matchDetail: {
    seasonId: number;
    matchResult: string;
    matchEndType: number;
    systemPause: number;
    foul: number;
    injury: number;
    redCards: number;
    yellowCards: number;
    dribble: number;
    cornerKick: number;
    possession: number;
    OffsideCount: number;
    averageRating: number;
    controller: string;
  };
  shoot: {
    shootTotal: number;
    effectiveShootTotal: number;
    shootOutScore: number;
    goalTotal: number;
    goalTotalDisplay: number;
    ownGoal: number;
    shootHeading: number;
    goalHeading: number;
    shootFreekick: number;
    goalFreekick: number;
    shootInPenalty: number;
    goalInPenalty: number;
    shootOutPenalty: number;
    goalOutPenalty: number;
    shootPenaltyKick: number;
    goalPenaltyKick: number;
  };
  shootDetail: {
    goalTime: number;
    x: number;
    y: number;
    type: number;
    result: number;
    spId: number;
    spGrade: number;
    spLevel: number;
    spIdType: boolean;
    assist: boolean;
    assistSpI: number;
    assistX: number;
    assistY: number;
    hitPost: boolean;
    inPenalty: boolean;
  }[];
  pass: {
    passTry: number;
    passSuccess: number;
    shortPassTry: number;
    shortPassSuccess: number;
    longPassTry: number;
    longPassSuccess: number;
    bouncingLobPassTry: number;
    bouncingLobPassSuccess: number;
    drivenGroundPassTry: number;
    drivenGroundPassSuccess: number;
    throughPassTry: number;
    throughPassSuccess: number;
    lobbedThroughPassTry: number;
    lobbedThroughPassSuccess: number;
  };
  defence: {
    blockTry: number;
    blockSuccess: number;
    tackleTry: number;
    tackleSuccess: number;
  };
  player: {
    spId: number;
    spPosition: number;
    spGrade: number;
    status: {
      shoot: number;
      effectiveShoot: number;
      assist: number;
      goal: number;
      dribble: number;
      intercept: number;
      defending: number;
      passTry: number;
      passSuccess: number;
      dribbleTry: number;
      dribbleSuccess: number;
      ballPossesionTry: number;
      ballPossesionSuc: number;
      aerialTry: number;
      aerialSuccess: number;
      blockTry: number;
      block: number;
      tackleTry: number;
      tackle: number;
      yellowCards: number;
      redCards: number;
      spRating: number;
    };
  }[];
}

export interface MatchData {
  matchId: string;
  matchDate: string;
  matchType: number;
  matchInfo: MatchDetails[];
}
