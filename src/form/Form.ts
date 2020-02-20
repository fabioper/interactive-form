export default class Form {
    formState: FormData

    constructor() {
        console.log('Creating [Form]: constructor()')
        this.formState = new FormData()
    }
}
