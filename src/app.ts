import { fetchData, loadIndustriesCards, loadResiduesCards, extractDropdownOptionsMarkup } from './utils/helpers'
import SectionsController from './SectionsController'
import { Sections } from './utils/enums'
import FormManager from './FormManager'

(async (): Promise<void> => {
    const data = await fetchData()
    const manager = new FormManager()
    const controller = new SectionsController(manager, data)

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

    controller.find(Sections.INDUSTRIAS).onMount(function() {
        loadIndustriesCards(this.data, this.query('[data-cards]'))
    })

    controller.find(Sections.RESIDUOS).onMount(function() {
        loadResiduesCards(this.state, this.data, this.query('[data-cards]'))
    })

    controller.find(Sections.CALCULO_MONTANTE).onMount(function() {
        const recipients = this.query('.iq__options')
        const containers = this.state.residuo.containers[0].container
        recipients.innerHTML = extractDropdownOptionsMarkup(containers)
    })

    controller.moveTo(Sections.MODO_DE_PESQUISA)
})()

