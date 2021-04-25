import basicCard from "./basicCard";

export default class eights3 extends basicCard{
    constructor(){
        super({
            name: "eights3",
            cost: 0,
            chuteira : 1,
            coin: 1,
            position: "3",
            role: "Player",
            power:""
        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new eights3());
        }
        return cards;
    }
}