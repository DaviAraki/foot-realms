import basicCard from "./basicCard";

export default class jacks0 extends basicCard{
    constructor(){
        super({
            name: "jacks0",
            cards: 1,
            coin: 1,
            cost: 0,
            position: "0",
            role: "Staff",
            powerText: "Draw a Card"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new jacks0());
        }
        return cards;
    }
}