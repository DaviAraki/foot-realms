import basicCard from "./basicCard";

export default class littleBunny0 extends basicCard{
    constructor(){
        super({
            name: "littleBunny0",
            cards: 1,
            cost: 0,
            chuteira : 1,
            position: "0",
            role: "Player",
            power: "Draw a Card"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleBunny0());
        }
        return cards;
    }
}