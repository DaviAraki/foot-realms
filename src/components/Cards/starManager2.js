import basicCard from "./basicCard";

export default class starManager2 extends basicCard {
    constructor() {
        super({
            name: "starManager2",
            cards: 2,
            coin: 5,
            cost: 7,
            position: "2",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new starManager2());
        }
        return cards;
    }
}