import basicCard from "./basicCard";

export default class commonManager extends basicCard{
    constructor(){
        super({
            name: "commonManager",
            cards: 0,
            coin: 2,
            cost: 1,
            chuteira : 1,
            position: "DF"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonManager());
        }
        return cards;
    }
}