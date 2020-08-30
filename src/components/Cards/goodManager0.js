import basicCard from "./basicCard";

export default class goodManager0 extends basicCard {
    constructor() {
        super({
            name: "goodManager0",
            cards: 1,
            coin: 3,
            cost: 3,
            position: "0",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodManager0());
        }
        return cards;
    }
}