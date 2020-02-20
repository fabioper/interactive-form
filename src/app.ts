import FormController from './form/FormController'
import Form from './form/Form'
import RegularSection from './sections/RegularSection'
import { section } from './sections/SectionsEnum'
import { fetchData } from './utils/helpers'

;(async (): Promise<void> => {
    const controller = new FormController(new Form(), await fetchData())
    const sectionsController = controller.sectionsController

    sectionsController.appendSections(
        new RegularSection(section.MODO_DE_PESQUISA),
        new RegularSection(section.INDUSTRIAS),
        new RegularSection(section.SERVICOS),
        new RegularSection(section.RESIDUOS),
        new RegularSection(section.CALCULO_MONTANTE),
        new RegularSection(section.INFO_PESSOAIS),
        new RegularSection(section.REVISE_PEDIDO),
        new RegularSection(section.PEDIDO_ENVIADO)
    )

    sectionsController.moveTo(section.MODO_DE_PESQUISA)
})()

