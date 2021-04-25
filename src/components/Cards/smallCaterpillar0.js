import basicCard from "./basicCard";

export default class smallCaterpillar0 extends basicCard{
    constructor(){
        super({
            name: "smallCaterpillar0",
            cards: 0,
            coin: 2,
            cost: 0,
            position: "0",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new smallCaterpillar0());
        }
        return cards;
    }
}