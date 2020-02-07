import { GenericObserver } from './GenericObserver'
import { State } from '../State'

export class TratamentoObserver extends GenericObserver {
    residuosCards: HTMLDivElement[];

    constructor(residuosSection: HTMLElement) {
        super()
        this.residuosCards = Array.from(residuosSection.querySelectorAll('[data-residuo]'))
    }

    update(state: State): void {
        if (state.servico === 'tratamento-de-residuos') {
            this.residuosCards.forEach(residuo => {
                const data = state.dados.find(res => res.slug === residuo.dataset.residuo)
                if (data && data.tratamento) {
                    this.addActiveClass(residuo)
                } else {
                    this.removeActiveClass(residuo)
                }
            })
        }
    }
}
