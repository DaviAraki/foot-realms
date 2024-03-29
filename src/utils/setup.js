import ace0 from "../components/Cards/ace0";
import playerKid0 from "../components/Cards/playerKid0";
import playerKid1 from "../components/Cards/playerKid1";
import playerKid2 from "../components/Cards/playerKid2";
import playerKid3 from "../components/Cards/playerKid3";
import smallCaterpillar0 from "../components/Cards/smallCaterpillar0";
import smallCaterpillar1 from "../components/Cards/smallCaterpillar1";
import smallCaterpillar2 from "../components/Cards/smallCaterpillar2";
import smallCaterpillar3 from "../components/Cards/smallCaterpillar3";
import eights0 from "../components/Cards/eights0";
import eights1 from "../components/Cards/eights1";
import eights2 from "../components/Cards/eights2";
import eights3 from "../components/Cards/eights3";
import jacks0 from "../components/Cards/jacks0";
import jacks1 from "../components/Cards/jacks1";
import jacks2 from "../components/Cards/jacks2";
import jacks3 from "../components/Cards/jacks3";
import littleBunny0 from "../components/Cards/littleBunny0";
import littleBunny1 from "../components/Cards/littleBunny1";
import littleBunny2 from "../components/Cards/littleBunny2";
import littleBunny3 from "../components/Cards/littleBunny3";
import littleHatter0 from "../components/Cards/littleHatter0";
import littleHatter1 from "../components/Cards/littleHatter1";
import littleHatter2 from "../components/Cards/littleHatter2";
import littleHatter3 from "../components/Cards/littleHatter3";
import generateUniqueId from "../utils/generateUniqueId";
import generateSchedule from "./generateSchedule";
import shuffleOffer from "../actions/shuffleOffer";
import dealPowerToDummies from "../actions/dealPowerToDummies";
import updateStrenghtSchedule from "../actions/updateStrengthSchedule";
import joker0 from "../components/Cards/joker0";
import defender0 from "../components/Cards/defender0";
import attacker0 from "../components/Cards/attacker0";
import ace1 from "../components/Cards/ace1";
import ace2 from "../components/Cards/ace2";
import ace3 from "../components/Cards/ace3";
import attacker1 from "../components/Cards/attacker1";
import attacker2 from "../components/Cards/attacker2";
import attacker3 from "../components/Cards/attacker3";
import defender1 from "../components/Cards/defender1";
import defender2 from "../components/Cards/defender2";
import defender3 from "../components/Cards/defender3";
import queen0 from "../components/Cards/queen0";
import queen1 from "../components/Cards/queen1";
import queen2 from "../components/Cards/queen2";
import queen3 from "../components/Cards/queen3";
import shuffle from "../actions/shuffle";

const game = {
  players: [
    {
      id: generateUniqueId(),
      name: "PLA",
      hand: [],
      deck: [].concat(
        playerKid0.create(1),
        playerKid1.create(1),
        playerKid2.create(1),
        playerKid3.create(1),
        smallCaterpillar0.create(1),
        smallCaterpillar1.create(1),
        smallCaterpillar2.create(1),
        smallCaterpillar3.create(1)
      ),
      playZone: [],
      discardZone: [],
      money: 0,
      strength: 0,
      points: 0,
      pointsPerTurn: [0],
      moneyPerTurn: [],
      goals: 0,
      goalsAgainst: 0,
      goalsDiference: 0,
      positions: [false, false, false, false],
      strengthPerTurn: [{ turn: 0, strength: 0 }],
      strengthPerTurn2: [],
    },
  ],
  board: {
    dummies: [
      {
        name: "BLA",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [0],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
      {
        name: "BLU",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
      {
        name: "ZAS",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [0],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
      {
        name: "DOR",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [0],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
      {
        name: "FRU",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [0],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
      {
        name: "CAN",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [0],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
      {
        name: "BAT",
        strength: 0,
        strengthPerTurn: [],
        points: 0,
        pointsPerTurn: [0],
        goals: 0,
        goalsAgainst: 0,
        goalsDiference: 0,
      },
    ],
    attacking: "A",
    schedule: [],
    offerZone: [],
    deck: [].concat(
      smallCaterpillar0.create(3),
      smallCaterpillar1.create(3),
      smallCaterpillar2.create(3),
      smallCaterpillar3.create(3),
      eights0.create(2),
      eights1.create(2),
      eights2.create(2),
      eights3.create(2),
      jacks0.create(2),
      jacks1.create(2),
      jacks2.create(2),
      jacks3.create(2),
      playerKid0.create(3),
      playerKid1.create(3),
      playerKid2.create(3),
      playerKid3.create(3),
      littleBunny0.create(2),
      littleBunny1.create(2),
      littleBunny2.create(2),
      littleBunny3.create(2),
      littleHatter0.create(2),
      littleHatter1.create(2),
      littleHatter2.create(2),
      littleHatter3.create(2),
      ace0.create(2),
      ace1.create(2),
      ace2.create(2),
      ace3.create(2),
      attacker0.create(2),
      attacker1.create(2),
      attacker2.create(2),
      attacker3.create(2),
      defender0.create(2),
      defender1.create(2),
      defender2.create(2),
      defender3.create(2),
      queen0.create(2),
      queen1.create(2),
      queen2.create(2),
      queen3.create(2)
    ),
  },
};
game.board.schedule = generateSchedule(game);
shuffleOffer(game);
dealPowerToDummies(game, { turn: 1 });
updateStrenghtSchedule(game, { turn: 1 });
shuffle(game, { currentPlayer: "0" });
export default game;
