import basicCard from "./basicCard";

export default class smallCaterpillar2 extends basicCard{
    constructor(){
        super({
            name: "smallCaterpillar2",
            cards: 0,
            coin: 2,
            cost: 0,
            position: "2",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new smallCaterpillar2());
        }
        return cards;
    }
}