import basicCard from "./basicCard";

export default class commonManager0 extends basicCard{
    constructor(){
        super({
            name: "commonManager0",
            cards: 0,
            coin: 2,
            cost: 1,
            position: "0",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonManager0());
        }
        return cards;
    }
}