import basicCard from "./basicCard";

export default class commonCaptain0 extends basicCard{
    constructor(){
        super({
            name: "commonCaptain0",
            cost: 3,
            chuteira : 3,
            position: "0",
            role: "Player"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonCaptain0());
        }
        return cards;
    }
}