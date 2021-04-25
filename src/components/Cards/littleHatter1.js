import basicCard from "./basicCard";

export default class littleHatter1 extends basicCard{
    constructor(){
        super({
            name: "littleHatter1",
            cards: 2,
            cost: 0,
            chuteira : 0,
            position: "1",
            role: "Player",
            powerText: "Draw 2 Cards"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleHatter1());
        }
        return cards;
    }
}