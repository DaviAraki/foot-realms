import basicCard from "./basicCard";

export default class smallCaterpillar1 extends basicCard{
    constructor(){
        super({
            name: "smallCaterpillar1",
            cards: 0,
            coin: 2,
            cost: 0,
            position: "1",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new smallCaterpillar1());
        }
        return cards;
    }
}