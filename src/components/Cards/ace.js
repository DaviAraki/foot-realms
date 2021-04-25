import basicCard from "./basicCard";

export default class ace extends basicCard{
    constructor(){
        super({
            name: "Ace",
            cards: 0,
            coin: 5,
            cost: 8,
            chuteira : 5,
            position: '0'
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new ace());
        }
        return cards;
    }
}