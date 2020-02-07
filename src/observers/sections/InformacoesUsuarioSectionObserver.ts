import { GenericObserver } from '../GenericObserver'
import { State } from '../../State'

export class InformacoesUsuarioSectionObserver extends GenericObserver {
    section: HTMLElement;

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
    }

    update(state: State): void {
        switch (state.servico) {
            case 'remocao-de-lodo':
            case 'limpeza-de-fossa-septica':
            case 'pgrs':
                this.addActiveClass(this.section)
                break
            default:
                this.removeActiveClass(this.section)
        }
    }
}

