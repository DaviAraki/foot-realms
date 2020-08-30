import basicCard from "./basicCard";

export default class goodManager3 extends basicCard {
    constructor() {
        super({
            name: "goodManager3",
            cards: 1,
            coin: 3,
            cost: 3,
            position: "3",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodManager3());
        }
        return cards;
    }
}