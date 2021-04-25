import basicCard from "./basicCard";

export default class jacks3 extends basicCard{
    constructor(){
        super({
            name: "jacks3",
            cards: 1,
            coin: 1,
            cost: 0,
            position: "3",
            powerText: "Draw a Card"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new jacks3());
        }
        return cards;
    }
}