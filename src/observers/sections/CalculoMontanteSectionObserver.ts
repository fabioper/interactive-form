import { GenericObserver } from '../GenericObserver'
import { State } from '../../State'
import { slug } from '../../helpers/helpers'

export class CalculoMontanteSectionObserver extends GenericObserver {
    section: HTMLElement;
    acondicionamentoSelect: HTMLSelectElement;
    form: HTMLFormElement

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
        this.acondicionamentoSelect = this.section.querySelector('select#acondicionamento')
        this.form = this.section.querySelector('form')
        this.form.addEventListener('submit', event => {
            event.preventDefault()
        })
    }

    update(state: State): void {
        if (state.residuo) {
            this.addActiveClass(this.section)
            const residuo = state.dados.find(res => res.slug === state.residuo)
            const options = residuo.containers[0].container.map(this.generateContainerOptions)
            this.removeAllChildren(this.acondicionamentoSelect)
            this.acondicionamentoSelect.append(...options)
        } else {
            this.removeActiveClass(this.section)
        }
    }

    generateContainerOptions(container: string): HTMLOptionElement {
        const opt = document.createElement('option')
        opt.value = slug(container)
        opt.textContent = container
        return opt
    }
}
