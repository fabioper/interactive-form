import State from './State'
import { Residuo } from './Residuo'
import { section } from './SectionsEnum'
import { extractIndustriesFrom } from './helpers'

export default class Section {
    rootElement: HTMLElement;
    name: string;

    constructor(name: string) {
        this.name = name
        this.rootElement = document.querySelector(`[data-section=${this.name}]`) as HTMLElement
    }

    query(selector: string): HTMLElement {
        return this.rootElement.querySelector(selector) as HTMLElement
    }

    queryAll(selector: string): NodeListOf<HTMLElement> {
        return this.rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
    }

    updateState(state: State): void {
        console.log(state.industria)
    }

    initilize(data: Residuo[]): void {
        switch (this.name) {
            case section.INDUSTRIAS:
                this.renderIndustriesCards(data)
                break
            case section.RESIDUOS:
                this.renderResiduesCards(data)
                break
            default:
                break
        }
    }

    renderIndustriesCards(data: Residuo[]): void {
        const cards = this.rootElement.querySelector('.section__cards')
        const industrias = extractIndustriesFrom(data)
        const markup = Array.from(industrias).map(([key, value]) => `
            <a href="#" data-state-industria="${key}" data-section-action="residuos">
                ${value}
            </a>
        `)
        cards.innerHTML = markup.join(' ')
    }

    renderResiduesCards(data: Residuo[]): void {
        const cards = this.rootElement.querySelector('.section__cards')
        const markup = data.map(residuo => (`
            <a href="#" data-state-residuo="${residuo.slug}" data-section-action="calculo-montante">
                ${residuo.nome}
            </a>
        `))
        cards.innerHTML = markup.join(' ')
    }

    extractIndustriesFrom(residuos: Residuo[]): Map<string, string> {
        const extractMap = (acc: Map<string, string>, curr: object): Map<string, string> => {
            Object.keys(curr).forEach(key => (acc.set(key, curr[key])))
            return acc
        }
        return residuos.map(residuo => residuo.industrias)
            .reduce(extractMap, new Map()) as Map<string, string>
    }
}
