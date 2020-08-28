import basicCard from "./basicCard";

export default class commonManager1 extends basicCard{
    constructor(){
        super({
            name: "commonManager1",
            cards: 0,
            coin: 2,
            cost: 1,
            position: "DF",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonManager1());
        }
        return cards;
    }
}