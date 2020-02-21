import Section from './Section'
import { Residuo } from '../utils/Residuo'
import { Sections } from '../utils/enums'

export default class IndustriesSection extends Section {
    onMount(): void {
        super.onMount()
        console.log(`\t\t[ IndustriesSection ] Running: mount() -> ${this.name}`)
        this.appendIndustriesCards()
    }

    private appendIndustriesCards(): void {
        const industries = this.extractIndustriesFrom(this.controller.data)
        const cards = this.query('.section__cards')
        const markup = Array.from(industries).map(([key, name]) => (
            this.toMarkup(key, name, Sections.RESIDUOS)
        ))
        cards.innerHTML = markup.join(' ')
    }

    private extractIndustriesFrom(data: Residuo[]): Map<string, string> {
        const extractMap = (acc: Map<string, string>, curr: object): Map<string, string> => {
            Object.keys(curr).forEach(key => (acc.set(key, curr[key])))
            return acc
        }
        return data.map(residuo => residuo.industrias)
            .reduce(extractMap, new Map()) as Map<string, string>
    }

    private toMarkup(key: string, name: string, action: Sections): string {
        return (`
            <a href="#" class="card-residuo" data-card="${key}" data-action="${action}">
                <div class="card-residuo-conteudo">
                    <div class="card-residuo-frente">
                        <img class="card-residuo-icone"
                            src="http://gruporodocon.com.br/residuos3/wp-content/uploads/2020/01/comum.svg">
                        <h3>${name}</h3>
                    </div>
                </div>
            </a>
        `)
    }
}
