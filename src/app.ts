import FormController from './FormController'
import Form from './Form'
import Section from './Section'
import SectionsController from './SectionsController'
import { section } from './SectionsEnum'

const manager = new FormController()
const form = new Form()
const sectionsController = new SectionsController()

manager.active = form
sectionsController.observe(manager)

sectionsController.appendSections(
    new Section(section.MODO_DE_PESQUISA),
    new Section(section.INDUSTRIAS),
    new Section(section.RESIDUOS)
)

sectionsController.moveTo(section.MODO_DE_PESQUISA)

manager.active = form
