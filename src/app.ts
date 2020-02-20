import FormManager from './form/FormManager'
import Form from './form/Form'
import CardsSection from './sections/CardsSection'
import { section } from './utils/enums'
import { fetchData } from './utils/helpers'

;(async (): Promise<void> => {
    const manager = new FormManager(new Form(), await fetchData())
    const sectionsController = manager.sectionsController

    sectionsController.appendSections(
        new CardsSection(section.MODO_DE_PESQUISA),
        new CardsSection(section.INDUSTRIAS),
        new CardsSection(section.SERVICOS),
        new CardsSection(section.RESIDUOS),
        new CardsSection(section.CALCULO_MONTANTE),
        new CardsSection(section.INFO_PESSOAIS),
        new CardsSection(section.REVISE_PEDIDO),
        new CardsSection(section.PEDIDO_ENVIADO)
    )

    sectionsController.moveTo(section.MODO_DE_PESQUISA)
})()

