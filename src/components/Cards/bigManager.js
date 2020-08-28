import basicCard from "./basicCard";

export default class bigManager extends basicCard{
    constructor(){
        super({
            name: "bigManager",
            cards: 2,
            coin: 2,
            cost: 5,
            position : "GK"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new bigManager());
        }
        return cards;
    }
}