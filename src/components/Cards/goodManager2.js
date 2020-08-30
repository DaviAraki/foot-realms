import basicCard from "./basicCard";

export default class goodManager2 extends basicCard {
    constructor() {
        super({
            name: "goodManager2",
            cards: 1,
            coin: 3,
            cost: 3,
            position: "2",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodManager2());
        }
        return cards;
    }
}