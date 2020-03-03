import { fetchData, loadResiduesCards, extractDropdownOptionsMarkup, extractIndustriesFrom } from './utils/helpers'
import SectionsController from './SectionsController'
import { Sections } from './utils/enums'
import FormManager from './FormManager'

const loading = document.querySelector('.loading') as HTMLDivElement

(async (): Promise<void> => {
    const data = await fetchData()
    const manager = new FormManager()
    const controller = new SectionsController(manager, data)
    loading.remove()

    controller.append(
        Sections.MODO_DE_PESQUISA,
        Sections.INDUSTRIAS,
        Sections.SERVICOS,
        Sections.RESIDUOS,
        Sections.CALCULO_MONTANTE,
        Sections.INFO_PESSOAIS,
        Sections.REVISE_PEDIDO,
        Sections.PEDIDO_ENVIADO
    )

    controller.find(Sections.RESIDUOS).onMount(function() {
        const cards = this.query('[data-cards]')
        const description = this.query('.cards-description')
        const industries = extractIndustriesFrom(this.data)
        loadResiduesCards(this.state, this.data, cards)
        if (description) description.remove()
        if (this.state.industry) {
            const markup = `<p class="cards-description">Normalmente, a <strong>indústria <span>${industries.get(this.state.industry).toLowerCase()}</strong> gera os seguintes tipos de resíduos:</p>`
            cards.insertAdjacentHTML('beforebegin', markup)
        }
    })

    controller.find(Sections.CALCULO_MONTANTE).onMount(function() {
        const recipients = this.query('.iq__options')
        const activator = recipients.previousElementSibling as HTMLElement
        const containers = this.state.residuo.containers[0].container
        recipients.innerHTML = extractDropdownOptionsMarkup(containers)
        activator.onclick = (): boolean => recipients.parentElement.classList.toggle('active')
    })

    controller.moveTo(Sections.MODO_DE_PESQUISA)
})()

