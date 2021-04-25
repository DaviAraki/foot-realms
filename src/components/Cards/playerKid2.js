import basicCard from "./basicCard";

export default class playerKid2 extends basicCard{
    constructor(){
        super({
            name: "playerKid2",
            cost: 0,
            chuteira : 1,
            position: "2",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new playerKid2());
        }
        return cards;
    }
}