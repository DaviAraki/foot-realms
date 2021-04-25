import basicCard from "./basicCard";

export default class playerKid0 extends basicCard{
    constructor(){
        super({
            name: "playerKid0",
            cost: 0,
            chuteira : 1,
            position: "0",
            role: "Player",
            power:""
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new playerKid0());
        }
        return cards;
    }
}