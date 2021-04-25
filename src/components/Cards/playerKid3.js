import basicCard from "./basicCard";

export default class playerKid3 extends basicCard{
    constructor(){
        super({
            name: "playerKid3",
            cost: 0,
            chuteira : 2,
            position: "3",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new playerKid3());
        }
        return cards;
    }
}