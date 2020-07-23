import basicCard from "./basicCard";

export default class manager2 extends basicCard{
    constructor(){
        super({
            name: "manager2",
            cards: 1,
            coin: 1,
            cost: 3,
            chuteira : 1,
            position: "DF"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new manager2());
        }
        return cards;
    }
}