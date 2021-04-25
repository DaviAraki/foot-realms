import basicCard from "./basicCard";

export default class littleHatter0 extends basicCard{
    constructor(){
        super({
            name: "littleHatter0",
            cards: 2,
            cost: 0,
            chuteira : 0,
            position: "0",
            role: "Player",
            powerText: "Draw 2 Cards"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleHatter0());
        }
        return cards;
    }
}