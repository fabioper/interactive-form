import Form from './Form'
import { Residuo } from '../utils/Residuo'
import SectionsController from '../sections/SectionsController'

export default class FormController {
    formState: FormData;
    sectionsController: SectionsController;

    constructor(initialForm: Form, data: Residuo[]) {
        console.log('Creating [FormController]: constructor()')
        this.sectionsController = new SectionsController(this, data)
        this.setActive(initialForm)
    }

    setActive(form: Form): void {
        this.formState = form.formState
    }
}
