import basicCard from "./basicCard";

export default class starManager1 extends basicCard {
    constructor() {
        super({
            name: "starManager1",
            cards: 2,
            coin: 5,
            cost: 7,
            position: "1",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new starManager1());
        }
        return cards;
    }
}