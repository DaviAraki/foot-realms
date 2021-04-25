import basicCard from "./basicCard";

export default class littleHatter2 extends basicCard{
    constructor(){
        super({
            name: "littleHatter2",
            cards: 2,
            cost: 0,
            chuteira : 0,
            position: "2",
            role: "Player",
            powerText: "Draw 2 Cards"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleHatter2());
        }
        return cards;
    }
}