import basicCard from "./basicCard";

export default class goodManager1 extends basicCard {
    constructor() {
        super({
            name: "goodManager1",
            cards: 1,
            coin: 3,
            cost: 3,
            position: "1",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodManager1());
        }
        return cards;
    }
}