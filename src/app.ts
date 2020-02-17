import Section from './Section'
import { Form } from './Form'
import FormManager from './FormManager'
import { fetchData } from './helpers'
import { Residuo } from './Residuo'
import { State } from './State'

const sections = [
    'modo-de-pesquisa',
    'industrias',
    'servicos',
    'residuos',
    'calculo-montante',
    'informacoes-pessoais',
    'revise-seu-pedido'
]

const extractIndustriesFrom = (residuos: Residuo[]): Map<string, string> => {
    const extractMap = (acc: Map<string, string>, curr: object): Map<string, string> => {
        Object.keys(curr).forEach(key => (acc.set(key, curr[key])))
        return acc
    }
    return residuos.map(residuo => residuo.industrias)
        .reduce(extractMap, new Map()) as Map<string, string>
}

const addActionsClickEvents = (): void => {
    const actions = document.querySelectorAll('[data-section-action]') as NodeListOf<HTMLAnchorElement>
    actions.forEach(action => action.addEventListener('click', () => {
        const { sectionAction } = action.dataset
        Section.moveTo(sectionAction)
    }))
}

const renderResiduesWithFilter = (state: State, residuosData: Residuo[]): void => {
    if (state.servico === 'tratamento-de-residuos') {
        return renderResidues(residuosData, (residuo: Residuo): boolean => residuo.tratamento)
    }

    if (state.industria) {
        return renderResidues(residuosData, (residuo: Residuo): boolean => (
            Object.keys(residuo.industrias).includes(state.industria)
        ))
    }

    renderResidues(residuosData, () => true)
}

const addCardsClickEvent = (form: Form, ...keys: string[]): void => {
    keys.forEach(key => {
        const cards = document.querySelectorAll(`[data-${key}]`) as NodeListOf<HTMLElement>
        cards.forEach(card => card.addEventListener('click', () => (
            form.setState({ [key]: card.dataset[key] })
        )))
    })
}

const bindResidue = (sidebar: HTMLElement, state: State): void => {
    const title = sidebar.querySelector('[data-residuo-nome]')
    const examples = sidebar.querySelector('[data-residuo-exemplos]')
    const destination = sidebar.querySelector('[data-residuo-destinacao]')

    const { nome, destinacao, exemplos } = state.getResiduo()
    title.textContent = nome
    destination.textContent = destinacao

    !exemplos ?
        examples.previousElementSibling.remove() :
        examples.innerHTML = state.getAsList(exemplos)
}

const renderIndustries = (data: Residuo[]): void => {
    const section = Section.find('industrias')
    const cards = section.querySelector('.section__cards')
    const industrias = extractIndustriesFrom(data)
    const markup = Array.from(industrias).map(([key, value]) => `
        <a href="#" data-industria="${key}" data-section-action="residuos">
            ${value}
        </a>
    `)
    cards.innerHTML = markup.join(' ')
}

const renderResidues = (data: Residuo[], filtering: (value: Residuo, index: number, array: Residuo[]) => boolean): void => {
    const section = Section.find('residuos')
    const cards = section.querySelector('.section__cards')
    const markup = data.filter(filtering).map(residuo => (`
        <a href="#" data-residuo="${residuo.slug}" data-section-action="calculo-montante">
            ${residuo.nome}
        </a>
    `))
    cards.innerHTML = markup.join(' ')
}

(async (): Promise<void> => {
    const residuosData = await fetchData()
    const formManager = new FormManager()
    const currentForm = new Form()

    formManager.setActive(currentForm)

    Section.add(...sections)

    Section.onStateChange(state => {
        renderIndustries(residuosData)
        renderResiduesWithFilter(state, residuosData)
        state.residuo && bindResidue(Section.find('calculo-montante'), state)
        addActionsClickEvents()
        addCardsClickEvent(formManager.active,
            'modo',
            'industria',
            'servico',
            'residuo'
        )
    })

    Section.moveTo('modo-de-pesquisa')

    currentForm.setState({ dados: residuosData })
})()
