import basicCard from "./basicCard";

export default class commonManager3 extends basicCard{
    constructor(){
        super({
            name: "commonManager3",
            cards: 0,
            coin: 2,
            cost: 1,
            position: "3",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonManager3());
        }
        return cards;
    }
}