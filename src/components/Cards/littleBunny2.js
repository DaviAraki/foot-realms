import basicCard from "./basicCard";

export default class littleBunny2 extends basicCard{
    constructor(){
        super({
            name: "littleBunny2",
            cards: 1,
            cost: 0,
            chuteira : 1,
            position: "2",
            role: "Player",
            power:""
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new littleBunny2());
        }
        return cards;
    }
}