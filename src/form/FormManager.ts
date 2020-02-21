import Form from './Form'
import { Residuo } from '../utils/Residuo'
import SectionsController from '../sections/SectionsController'

export default class FormManager {
    formState: FormData;
    sectionsController: SectionsController;
    active: Form;
    forms: Form[]

    constructor(initialForm: Form, data: Residuo[]) {
        console.log('Creating [FormController]: constructor()')
        this.forms = []
        this.sectionsController = new SectionsController(this, data)
        this.setActive(initialForm)
    }

    setActive(form: Form): void {
        console.log('\tRunning: setActive() ->')
        this.active = form
        this.formState = this.active.formState
    }

    add(form: Form): void {
        this.forms.push(form)
    }
}
