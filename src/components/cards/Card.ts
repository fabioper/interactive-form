import Component from '../Component'

export default class Card extends Component {
    protected _text: string
    protected _iconUri: string
    protected _iconAlt: string

    get text(): string { return this._text }
    set text(value: string) { this._text = value }

    get iconUri(): string { return this._iconUri }
    set iconUri(uri: string) { this._iconUri = uri }

    get iconAlt(): string { return this._iconAlt }
    set iconAlt(alt: string) { this._iconAlt = alt }

    constructor(text: string, iconUri: string, iconAlt: string) {
        super()
        this._text = text
        this._iconUri = iconUri
        this._iconAlt = iconAlt
    }

    setup(): void {
        this.createElement()
        this.addIcon()
        this.addText()
    }

    private createElement(): void {
        this.element = document.createElement('div')
        this.element.classList.add('card')
    }

    private addText(): void {
        const text = document.createElement('h3')
        text.textContent = this.text
        this.element.appendChild(text)
    }

    private addIcon(): void {
        const icon = document.createElement('img')
        icon.src = this.iconUri
        icon.alt = this.iconAlt
        this.element.appendChild(icon)
    }
}
