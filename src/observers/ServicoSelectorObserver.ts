import { GenericObserver } from './GenericObserver'
import { State } from '../State'

export class ServicoSelectorObserver extends GenericObserver {
    section: HTMLElement;
    selectElement: HTMLSelectElement;

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
        this.selectElement = this.section.querySelector('select')
    }

    update(state: State): void {
        if (state.modo === 'servicos') {
            this.addActiveClass(this.section)
        } else {
            this.removeActiveClass(this.section)
        }
    }
}
