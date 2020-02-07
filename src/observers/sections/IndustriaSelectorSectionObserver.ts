import { GenericObserver } from '../GenericObserver'
import { State } from '../../State'

export class IndustriaSelectorSectionObserver extends GenericObserver {
    section: HTMLElement;
    selectElement: HTMLSelectElement;

    constructor(seletor: string) {
        super()
        this.section = document.querySelector(seletor)
        this.selectElement = this.section.querySelector('select')
    }

    update(state: State): void {
        if (state.modo === 'industria') {
            this.addActiveClass(this.section)
        } else {
            this.removeActiveClass(this.section)
        }
    }
}
