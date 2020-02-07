import { GenericObserver } from '../GenericObserver'
import { State } from '../../State'

export class ModeSelectorSectionObserver extends GenericObserver {
    buttons: HTMLButtonElement[];
    section: HTMLElement;

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
        this.buttons = Array.from(this.section.querySelectorAll('[data-modo]'))
    }

    update(state: State): void {
        if (state.dados) {
            this.addActiveClass(this.section)
        } else {
            this.removeActiveClass(this.section)
        }
    }
}
