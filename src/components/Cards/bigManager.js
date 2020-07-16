import basicCard from "./basicCard";

export default class bigManager extends basicCard{
    constructor(){
        super({
            name: "bigManager",
            cards: 2,
            coin: 2,
            cost: 5,
            chuteira : 4,
            position :'MF'
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