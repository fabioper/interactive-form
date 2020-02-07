import { GenericObserver } from './GenericObserver'
import { State } from '../State'

export class AsideObserver extends GenericObserver {
    section: HTMLElement;
    title: HTMLElement;
    examples: HTMLUListElement;
    destination: HTMLElement;

    constructor(selector: string) {
        super()
        this.section = document.querySelector(selector)
        this.title = this.section.querySelector('.residuo-info__titulo')
        this.examples = this.section.querySelector('.residuo-info__exemplos')
        this.destination = this.section.querySelector('.residuo-info__destinacao')
    }

    update(state: State): void {
        if (state.residuo) {
            const residuo = state.dados.find(res => res.slug === state.residuo)
            this.removeAllChildren(this.examples)
            this.title.textContent = residuo.nome
            this.destination.textContent = residuo.destinacao
            if (residuo.exemplos) {
                this.examples.insertAdjacentHTML(
                    'beforeend',
                    this.examplesToList(residuo.exemplos).join(' ')
                )
            }
        }
    }

    private examplesToList(arr): string[] {
        return arr.map(item => `<li>${item.exemplo}</li>`)
    }
}
