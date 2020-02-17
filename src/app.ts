import Section from './Section'
import { Form } from './Form'
import FormManager from './FormManager'
import { fetchData } from './helpers'
import { Residuo } from './Residuo'

const sections = ['modo-de-pesquisa', 'industrias', 'residuos']

const getIndustrias = (residuos: Residuo[]): Map<string, string> => {
    const extractMap = (acc: Map<string, string>, curr: object): Map<string, string> => {
        Object.keys(curr).forEach(key => (acc.set(key, curr[key])))
        return acc
    }
    return residuos.map(residuo => residuo.industrias)
        .reduce(extractMap, new Map()) as Map<string, string>
}

const addActionsClickEvent = (): void => {
    const actions = document.querySelectorAll('[data-section-action]') as NodeListOf<HTMLAnchorElement>
    actions.forEach(action => {
        action.addEventListener('click', () => {
            const { sectionAction } = action.dataset
            Section.moveTo(sectionAction)
        })
    })
}

const loadIndustriesData = (rediduosData: Residuo[]): void => {
    const industriasSection = Section.find('industrias')
    const industriasCards = industriasSection.querySelector('.section__cards')
    const industrias = getIndustrias(rediduosData)
    const markup = Array.from(industrias).map(([key, value]) => `
        <a href="#" data-modo="${key}" data-section-action="${key}">
        ${value}
        </a>`)
    industriasCards.insertAdjacentHTML('afterbegin', markup.join(' '))
}

const loadResiduesData = (rediduosData: Residuo[]): void => {
    const residuosSection = Section.find('residuos')
    const residuosCards = residuosSection.querySelector('.section__cards')
    const residuosMarkup = rediduosData.map(residuo => (`
                <a href="#" data-residuo="${residuo.slug}" data-section-action="calculo-montante">
                    ${residuo.nome}
                </a>
            `))
    residuosCards.insertAdjacentHTML('afterbegin', residuosMarkup.join(' '))
}

(async (): Promise<void> => {
    const rediduosData = await fetchData()
    const formManager = new FormManager()
    const currentForm = new Form(rediduosData)

    formManager.setActive(currentForm)

    Section.add(...sections)

    Section.onStateChange(state => {
        loadIndustriesData(rediduosData)
        loadResiduesData(rediduosData)
        addActionsClickEvent()
    })

    Section.moveTo('residuos')

    currentForm.setState({ dados: rediduosData })
})()

