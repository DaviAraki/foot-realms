import basicCard from "./basicCard";

export default class commonCaptain3 extends basicCard{
    constructor(){
        super({
            name: "commonCaptain3",
            cost: 3,
            chuteira : 3,
            position: "3",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonCaptain3());
        }
        return cards;
    }
}