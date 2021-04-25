import basicCard from "./basicCard";

export default class littleBunny1 extends basicCard{
    constructor(){
        super({
            name: "littleBunny1",
            cards: 1,
            cost: 0,
            chuteira : 1,
            position: "1",
            role: "Player",
            power:""
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleBunny1());
        }
        return cards;
    }
}