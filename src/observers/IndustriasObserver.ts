import { GenericObserver } from './GenericObserver'
import { State } from '../State'
import { slug } from '../helpers/helpers'

export class IndustriasObserver extends GenericObserver {
    residuosCards: HTMLDivElement[]

    constructor(residuosSection: HTMLElement) {
        super()
        this.residuosCards = Array.from(
            residuosSection.querySelectorAll('[data-residuo]')
        )
    }

    update(state: State): void {
        this.residuosCards.forEach(card => {
            const residuo = state.dados.find(res => res.slug === card.dataset.residuo)
            const industrias = residuo?.industrias.map(industria => slug(industria))

            if (residuo && state.industria && industrias.includes(state.industria)) {
                this.addActiveClass(card)
            } else {
                this.removeActiveClass(card)
            }
        })
    }
}
