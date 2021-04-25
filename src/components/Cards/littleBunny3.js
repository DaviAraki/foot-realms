import basicCard from "./basicCard";

export default class littleBunny3 extends basicCard{
    constructor(){
        super({
            name: "littleBunny3",
            cards: 1,
            cost: 0,
            chuteira : 1,
            position: "3",
            role: "Player",
            power: "Draw a Card"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleBunny3());
        }
        return cards;
    }
}