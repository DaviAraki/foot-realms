import basicCard from "./basicCard";

export default class jacks2 extends basicCard{
    constructor(){
        super({
            name: "jacks2",
            cards: 1,
            coin: 1,
            cost: 0,
            position: "2",
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new jacks2());
        }
        return cards;
    }
}