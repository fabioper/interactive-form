import Section from '../Section'

export default class ProgressBarValue {
    private _element: HTMLElement;
    private _section: Section

    constructor(section: Section) {
        this._section = section
        this._element = document.createElement('div')
        this._element.classList.add('progress__value')
    }

    get element(): HTMLElement {
        return this._element
    }

    get isActive(): boolean {
        return this._element.classList.contains('active')
    }

    fill(): void {
        this._element.classList.add('active')
    }

    addOnClickEvent(callback: (progressValue: ProgressBarValue, section: Section) => void): void {
        this._element.onclick = (): void => (
            callback(this, this._section)
        )
    }
}
