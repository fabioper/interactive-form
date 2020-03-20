import { fetchData, loadResiduesCards, extractDropdownOptionsMarkup, extractIndustriesFrom } from './utils/helpers'
import Section from './Section'
import { Sections } from './utils/enums'
import SectionRouter from './SectionRouter'
import InMemoryFormRepository from './FormRepository/InMemoryFormRepository'

const loading = document.querySelector('.loading') as HTMLDivElement

(async (): Promise<void> => {
    const data = await fetchData()
    const router = SectionRouter.instance
    const repository = InMemoryFormRepository.instance

    loading.remove()

    router.append(
        new Section(Sections.MODO_DE_PESQUISA, 1, data),
        new Section(Sections.INDUSTRIAS, 2, data,
            state => state.searchMode === 'industrias'),
        new Section(Sections.SERVICOS, 2, data,
            state => state.searchMode === 'servicos'),
        new Section(Sections.RESIDUOS, 3, data),
        new Section(Sections.CALCULO_MONTANTE, 4, data),
        new Section(Sections.INFO_PESSOAIS, 5, data),
        new Section(Sections.REVISE_PEDIDO, 6, data),
        new Section(Sections.PEDIDO_ENVIADO, 7, data)
    )

    router.find(Sections.RESIDUOS).onMount(function() {
        const cards = this.query('[data-cards]')
        const description = this.query('.cards-description')
        const industries = extractIndustriesFrom(data)
        loadResiduesCards(repository.active, data, cards)
        if (description) description.remove()
        if (repository.active.industry) {
            const markup = /*html*/`
                <p class="cards-description">
                    Normalmente, a <strong>indústria
                    <span>${industries.get(repository.active.industry).toLowerCase()}</strong> gera os seguintes tipos de resíduos:
                </p>
            `
            cards.insertAdjacentHTML('beforebegin', markup)
        }
    })

    router.find(Sections.CALCULO_MONTANTE).onMount(function() {
        const recipients = this.query('.iq__options')
        const activator = recipients.previousElementSibling as HTMLElement
        const containers = repository.active.residuo.containers[0].container
        recipients.innerHTML = extractDropdownOptionsMarkup(containers)
        activator.onclick = (): boolean => recipients.parentElement.classList.toggle('active')
    })

    router.moveTo(Sections.MODO_DE_PESQUISA)
})()

