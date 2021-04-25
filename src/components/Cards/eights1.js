import basicCard from "./basicCard";

export default class eights1 extends basicCard{
    constructor(){
        super({
            name: "eights1",
            cost: 0,
            chuteira : 1,
            coin: 1,
            position: "1",
            role: "Player",
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new eights1());
        }
        return cards;
    }
}