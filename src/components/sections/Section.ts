import Component from '../Component'
import SectionComponent from '../../router/SectionComponent'

export default class Section extends Component implements SectionComponent {
    private _key: string

    get key(): string { return this._key }
    set key(value: string) { this._key = value }

    constructor(key: string) {
        super()
        this.key = key
    }

    setup(): void {
        this.element = document.createElement('section')
        this.element.classList.add('form-section')
    }
}
