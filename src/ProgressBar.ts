import Section from './Section'
import ProgressBarValue from './ProgressBarValue'

export default class ProgressBar {
    private _sections: Section[];
    private _values: ProgressBarValue[];

    constructor(sections: Section[]) {
        this._sections = sections
        this._values = this._sections.map(section => new ProgressBarValue(section))
    }

    get markup(): string {
        return this._values.map(value => value.element.outerHTML).join(' ')
    }

    fillUntil(activeSection: Section): void {
        for (let i = 0; i <= this._sections.indexOf(activeSection); i++)
            this._values[i].fill()
    }

    renderAt(container: HTMLElement): void {
        console.log(this.markup)
        console.log(container)
        container.innerHTML = this.markup
    }

    onClick(callback: (section: Section) => void): void {
        this._values.forEach(value => value.addOnClickEvent(callback))
    }
}
