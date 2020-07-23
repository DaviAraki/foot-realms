import basicCard from "./basicCard";

export default class commonCaptain extends basicCard{
    constructor(){
        super({
            name: "commonCaptain",
            cards: 0,
            coin: 3,
            cost: 3,
            chuteira : 3,
            position: "MF"
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonCaptain());
        }
        return cards;
    }
}