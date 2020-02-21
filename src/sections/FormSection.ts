import Section from './Section'
import { Sections } from '../utils/enums'

export default class FormSection extends Section {
    onMount(): void {
        super.onMount()
        console.log(`\t\t[ FormSection ] Running: mount() -> ${this.name}`)

        this.fillPlaceholders()
        this.bindFields()

        if (this.name === Sections.CALCULO_MONTANTE) {
            const recipientInput = this.query('.recipiente-input__content')
            const recipients = this.getSelectedResidue().containers
            const recipientsData = {}
            recipients.forEach(recipient => {
                const markup = recipient.container.map(container => (`
                    <span>
                        ${container} <input type="number" name="quantidade-recipiente" id="${container}"/>
                    </span>
                `)).join(' ')
                recipientInput.innerHTML = markup
            })
            this.queryAll('[name=quantidade-recipiente]').forEach((input: HTMLInputElement) => {
                input.onchange = (): void => {
                    recipientsData[input.id] = input.value || '0'
                    console.log(`recipientes: ${JSON.stringify(recipientsData)}`)
                    this.controller.formState.set('recipientes', JSON.stringify(recipientsData))
                    this.controller.formState.forEach((value, key) => {
                        console.log(`\t__STATE__ \n\t> ${key}->${value}`)
                    })
                }
            })
        }
    }

    private bindFields(): void {
        const inputFields = this.queryAll('input, select') as NodeListOf<HTMLInputElement>

        inputFields.forEach(inputField => {
            inputField.value = this.controller.formState.get(inputField.name)?.toString() || ''
            inputField.onkeydown = this.updateFormFields(inputField)
            inputField.onchange = this.updateFormFields(inputField)
            inputField.onblur = this.updateFormFields(inputField)
        })
    }

    private updateFormFields(inputField: HTMLInputElement | HTMLSelectElement): (ev: Event) => void {
        return (): void => (this.controller.formState.set(inputField.name, inputField.value))
    }

    private fillPlaceholders(): void {
        const placeholders = this.queryAll('[data-residuo]')
        placeholders.forEach(placeholder => {
            const key = placeholder.dataset.residuo
            if (placeholder.nodeName === 'UL') {
                const contents = this.getSelectedResidue()[key]
                !contents ? placeholder.previousElementSibling.remove() :
                    placeholder.innerHTML = this.toMarkupList(contents)
            } else {
                placeholder.innerHTML = this.getSelectedResidue()[key]
            }
        })
    }

    toMarkupList(args: {exemplo: string}[]): string {
        return args.map(({ exemplo }) => (`
            <li>${exemplo}</li>
        `)).join(' ')
    }
}
