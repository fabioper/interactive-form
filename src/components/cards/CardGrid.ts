import Component from '../Component'
import Card from './Card'

export default class CardGrid extends Component {
    protected _cards: Card[]

    constructor(...cards: Card[]) {
        super()
        this._cards = cards
    }

    setup(): void {
        this.element = document.createElement('div')
        this.element.classList.add('card__wrapper')
        this.append(...this._cards)
    }
}
