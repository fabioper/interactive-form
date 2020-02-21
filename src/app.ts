import FormManager from './form/FormManager'
import Form from './form/Form'
import { Sections } from './utils/enums'
import { fetchData } from './utils/helpers'

(async (): Promise<void> => {
    const form = new Form()

    const manager = new FormManager(form, await fetchData())
    const sectionsController = manager.sectionsController

    const sections = sectionsController.querySections(
        Sections.MODO_DE_PESQUISA,
        Sections.INDUSTRIAS,
        Sections.SERVICOS,
        Sections.RESIDUOS,
        Sections.CALCULO_MONTANTE,
        Sections.INFO_PESSOAIS,
        Sections.REVISE_PEDIDO,
        Sections.PEDIDO_ENVIADO
    )

    sectionsController.appendSections(...sections)

    sectionsController.moveTo(Sections.MODO_DE_PESQUISA)
})()

