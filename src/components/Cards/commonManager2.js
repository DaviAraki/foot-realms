import basicCard from "./basicCard";

export default class commonManager2 extends basicCard{
    constructor(){
        super({
            name: "commonManager2",
            cards: 0,
            coin: 2,
            cost: 1,
            position: "MF",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonManager2());
        }
        return cards;
    }
}