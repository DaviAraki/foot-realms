import basicCard from "./basicCard";

export default class commonFoward extends basicCard{
    constructor(){
        super({
            name: "commonFoward",
            cards: 0,
            coin: 1,
            cost: 1,
            chuteira : 2,
            position: "FW"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonFoward());
        }
        return cards;
    }
}