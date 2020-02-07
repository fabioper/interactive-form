import { GenericObserver } from '../GenericObserver'
import { State } from '../../State'

export class CalculoMontanteSectionObserver extends GenericObserver {
    section: HTMLElement;

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
    }

    update(state: State): void {
        if (state.residuo) {
            this.addActiveClass(this.section)
        } else {
            this.removeActiveClass(this.section)
        }
    }
}
