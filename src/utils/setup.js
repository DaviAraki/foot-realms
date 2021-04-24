import bigManager from "../components/Cards/bigManager";
import commonCaptain0 from "../components/Cards/commonCaptain0";
import commonCaptain1 from "../components/Cards/commonCaptain1";
import commonCaptain2 from "../components/Cards/commonCaptain2";
import commonCaptain3 from "../components/Cards/commonCaptain3";
import commonManager0 from "../components/Cards/commonManager0";
import commonManager1 from "../components/Cards/commonManager1";
import commonManager2 from "../components/Cards/commonManager2";
import commonManager3 from "../components/Cards/commonManager3";
import goodManager0 from "../components/Cards/goodManager0";
import goodManager1 from "../components/Cards/goodManager1";
import goodManager2 from "../components/Cards/goodManager2";
import goodManager3 from "../components/Cards/goodManager3";
import starManager0 from "../components/Cards/starManager0";
import starManager1 from "../components/Cards/starManager1";
import starManager2 from "../components/Cards/starManager2";
import starManager3 from "../components/Cards/starManager3";
import goodCaptain0 from "../components/Cards/goodCaptain0";
import goodCaptain1 from "../components/Cards/goodCaptain1";
import goodCaptain2 from "../components/Cards/goodCaptain2";
import goodCaptain3 from "../components/Cards/goodCaptain3";
import starCaptain0 from "../components/Cards/starCaptain0";
import starCaptain1 from "../components/Cards/starCaptain1";
import starCaptain2 from "../components/Cards/starCaptain2";
import starCaptain3 from "../components/Cards/starCaptain3";
import generateUniqueId from "../utils/generateUniqueId";
import generateSchedule from "./generateSchedule";
import { dealPowerToDummies, shuffle, shuffleOffer, updateStrenghtSchedule } from "../actions/gameActions";

const game = {
    players: [
        {
            id: generateUniqueId(),
            name: "PLA",
            hand: [],
            deck: [].concat(commonCaptain0.create(2), commonCaptain1.create(2), commonCaptain2.create(2), commonCaptain3.create(2), commonManager0.create(2), commonManager1.create(2), commonManager2.create(2), commonManager3.create(2)),
            playZone: [],
            discardZone: [],
            money: 0,
            strength: 0,
            points: 0,
            positions: [false, false, false, false]
        },
    ],
    board: {
        dummies: [
            {
                name: "BLA",
                strength: 0,
                points: 0
            },
            {
                name: "BLU",
                strength: 0,
                points: 0
            },
            {
                name: "ZAS",
                strength: 0,
                points: 0
            },
            {
                name: "DOR",
                strength: 0,
                points: 0
            },
            {
                name: "FRU",
                strength: 0,
                points: 0
            },
            {
                name: "CAN",
                strength: 0,
                points: 0
            },
            {
                name: "BAT",
                strength: 0,
                points: 0
            },
        ],
        schedule: [],
        offerZone: [],
        deck: [].concat(
            bigManager.create(5),
            commonManager0.create(3),
            commonManager1.create(3),
            commonManager2.create(3),
            commonManager3.create(3),
            goodManager0.create(2),
            goodManager1.create(2),
            goodManager2.create(2),
            goodManager3.create(2),
            starManager0.create(1),
            starManager1.create(1),
            starManager2.create(1),
            starManager3.create(1),
            commonCaptain0.create(3),
            commonCaptain1.create(3),
            commonCaptain2.create(3),
            commonCaptain3.create(3),
            goodCaptain0.create(2),
            goodCaptain1.create(2),
            goodCaptain2.create(2),
            goodCaptain3.create(2),
            starCaptain0.create(2),
            starCaptain1.create(2),
            starCaptain2.create(2),
            starCaptain3.create(2),
        ),
    },
}
game.board.schedule = generateSchedule(game)
shuffleOffer(game)
dealPowerToDummies(game, { turn: 1 })
updateStrenghtSchedule(game, {turn:1})
export default game;