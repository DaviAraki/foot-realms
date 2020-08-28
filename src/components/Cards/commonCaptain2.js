import basicCard from "./basicCard";

export default class commonCaptain2 extends basicCard{
    constructor(){
        super({
            name: "commonCaptain2",
            cost: 3,
            chuteira : 3,
            position: "MF",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new commonCaptain2());
        }
        return cards;
    }
}