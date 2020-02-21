import Section from './Section'
import { Sections } from '../utils/enums'
import { Residuo } from '../utils/Residuo'

export default class ResiduesSection extends Section {
    onMount(): void {
        super.onMount()
        console.log(`\t\t[ ResiduesSection ] Running: mount() -> ${this.name}`)

        const filter = this.chooseFilter()

        this.appendResiduesCards(filter)
    }

    private chooseFilter(): (value: Residuo) => boolean {
        const { formState } = this.controller
        const hasSelectedIndustry = formState.has(Sections.INDUSTRIAS)
        let filter: (value: Residuo) => boolean = (): boolean => true

        if (hasSelectedIndustry) {
            const selectedIndustry = formState.get(Sections.INDUSTRIAS)
            filter = this.belongsTo(selectedIndustry)
        }

        if (formState.get(Sections.SERVICOS) === 'tratamento-de-residuos') {
            filter = this.hasTreatment()
        }

        return filter
    }

    private hasTreatment(): (value: Residuo) => boolean {
        return (residuo: Residuo): boolean => residuo.tratamento
    }

    private belongsTo(industry: FormDataEntryValue): (value: Residuo) => boolean {
        return (residuo: Residuo): boolean => {
            const industrias = Object.keys(residuo.industrias)
            return industrias.includes(industry.toString())
        }
    }

    private appendResiduesCards(filter?: (value: Residuo) => boolean): void {
        const { data } = this.controller
        const cards = this.query('.section__cards')
        const markup = data.filter(filter).map(residuo => (
            this.toMarkup(residuo.slug, residuo.nome, Sections.CALCULO_MONTANTE)
        ))
        cards.innerHTML = markup.join(' ')
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
