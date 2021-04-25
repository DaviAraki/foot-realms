import basicCard from "./basicCard";

export default class littleHatter3 extends basicCard{
    constructor(){
        super({
            name: "littleHatter3",
            cards: 2,
            cost: 0,
            chuteira : 2,
            position: "3",
            role: "Player",
            power:""
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleHatter3());
        }
        return cards;
    }
}