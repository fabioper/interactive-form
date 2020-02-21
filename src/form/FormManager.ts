import Form from './Form'
import { Residuo } from '../utils/Residuo'
import SectionsController from '../sections/SectionsController'

export default class FormController {
    formState: FormData;
    sectionsController: SectionsController;

    constructor(initialForm: Form, data: Residuo[]) {
        console.log('Creating [FormController]: constructor()')
        this.setActive(initialForm)
        this.sectionsController = new SectionsController(this, data)
    }

    setActive(form: Form): void {
        console.log('\tRunning: setActive() ->')
        this.formState = form.formState
        console.log(this.formState)
    }
}
