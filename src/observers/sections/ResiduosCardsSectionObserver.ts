import { GenericObserver } from '../GenericObserver'
import { State } from '../../State'

export class ResiduosCardsSectionObserver extends GenericObserver {
    section: HTMLElement;
    cards: HTMLElement[]

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
        this.cards = Array.from(
            this.section.querySelectorAll('[data-residuo]')
        )
    }

    update(state: State): void {
        if (state.modo === 'residuos' || (state.industria || state.servico)) {
            this.addActiveClass(this.section)
        } else {
            this.removeActiveClass(this.section)
        }
    }
}
