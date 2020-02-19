import FormController from './FormController'
import Form from './Form'
import Section from './Section'
import SectionsController from './SectionsController'
import { section } from './SectionsEnum'
import { fetchData } from './helpers'

const controller = new FormController()
const form = new Form()
const sectionsController = new SectionsController()

;(async (): Promise<void> => {
    const data = await fetchData()

    controller.data = data
    controller.active = form
    sectionsController.observe(controller)

    sectionsController.appendSections(
        new Section(section.MODO_DE_PESQUISA),
        new Section(section.INDUSTRIAS),
        new Section(section.SERVICOS),
        new Section(section.RESIDUOS)
    )

    sectionsController.moveTo(section.MODO_DE_PESQUISA)
})()

