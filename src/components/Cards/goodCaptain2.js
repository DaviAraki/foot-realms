import basicCard from "./basicCard";

export default class goodCaptain2 extends basicCard {
    constructor() {
        super({
            name: "goodCaptain2",
            cost: 5,
            chuteira: 5,
            position: "MF",
            role: "Player"

        })
    }

    static create(qty) {
        let cards = [];
        for (let i = 0; i < qty; i++) {
            cards.push(new goodCaptain2());
        }
        return cards;
    }
}