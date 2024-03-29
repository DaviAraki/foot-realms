import generateUniqueId from '../../utils/generateUniqueId';

export default class BasicCard {
  constructor(data) {
    this.id = generateUniqueId();
    this.name = data.name;
    this.cards = data.cards || 0;
    this.coin = data.coin || 0;
    this.cost = (data.cost) || 0;
    this.chuteira = data.chuteira || 0;
    this.position = data.position || 0;
    this.role = data.role;
    this.power = data.power;
    this.powerText = data.powerText || '';
    this.onDraw = data.onDraw;
  }
}
