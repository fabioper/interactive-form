import { fetchData, loadResiduesCards, extractDropdownOptionsMarkup, extractIndustriesFrom } from './utils/helpers'
import Router from './Router'
import FormManager from './FormManager'
import Section from './Section'
import { Sections } from './utils/enums'

const loading = document.querySelector('.loading') as HTMLDivElement

(async (): Promise<void> => {
    const data = await fetchData()
    const manager = new FormManager()
    const controller = new Router(manager, data)
    loading.remove()

    const sections = []

    controller.append(
        new Section(Sections.MODO_DE_PESQUISA, 1),
        new Section(Sections.INDUSTRIAS, 2),
        new Section(Sections.SERVICOS, 2),
        new Section(Sections.RESIDUOS, 3),
        new Section(Sections.CALCULO_MONTANTE, 4),
        new Section(Sections.INFO_PESSOAIS, 5),
        new Section(Sections.REVISE_PEDIDO, 6),
        new Section(Sections.PEDIDO_ENVIADO, 7)
    )

    controller.find(Sections.RESIDUOS).onMount(function() {
        const cards = this.query('[data-cards]')
        const description = this.query('.cards-description')
        const industries = extractIndustriesFrom(this.data)
        loadResiduesCards(this.state, this.data, cards)
        if (description) description.remove()
        if (this.state.industry) {
            const markup = /*html*/`
                <p class="cards-description">
                    Normalmente, a <strong>indústria
                    <span>${industries.get(this.state.industry).toLowerCase()}</strong> gera os seguintes tipos de resíduos:
                </p>
            `
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

