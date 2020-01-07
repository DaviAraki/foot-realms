import basicCard from "./basicCard";

export default class superStar extends basicCard{
    constructor(){
        super({
            name: "superStar",
            cards: 0,
            coin: 1,
            cost: 1,
            chuteira : 2
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new superStar());
        }
        return cards;
    }
}