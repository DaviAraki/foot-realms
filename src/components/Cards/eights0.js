import basicCard from "./basicCard";

export default class eights0 extends basicCard{
    constructor(){
        super({
            name: "eights0",
            cost: 0,
            chuteira : 1,
            coin: 1,
            position: "0",
            role: "Player",
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new eights0());
        }
        return cards;
    }
}