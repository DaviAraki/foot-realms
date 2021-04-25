import basicCard from "./basicCard";

export default class jacks1 extends basicCard{
    constructor(){
        super({
            name: "jacks1",
            cards: 1,
            coin: 1,
            cost: 0,
            position: "1",
            role: "Staff"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new jacks1());
        }
        return cards;
    }
}