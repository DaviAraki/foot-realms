import basicCard from "./basicCard";

export default class smallCaterpillar3 extends basicCard{
    constructor(){
        super({
            name: "smallCaterpillar3",
            cards: 0,
            coin: 2,
            cost: 0,
            position: "3",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new smallCaterpillar3());
        }
        return cards;
    }
}