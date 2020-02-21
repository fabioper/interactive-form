import Section from './Section'
import { Residuo } from '../utils/Residuo'
import { Sections } from '../utils/enums'

export default class FormSection extends Section {
    onMount(): void {
        super.onMount()
        console.log(`\t\t[ FormSection ] Running: mount() -> ${this.name}`)

        const placeholders = this.queryAll('[data-residuo]')
        placeholders.forEach(placeholder => {
            const key = placeholder.dataset.residuo
            if (placeholder.nodeName === 'UL') {
                const contents = this.getSelectedResidue()[key]
                !contents ? placeholder.remove() :
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

    getSelectedResidue(): Residuo {
        const slug = this.controller.formState.get(Sections.RESIDUOS).toString()
        return this.controller.data.find(residuo => residuo.slug === slug)
    }
}
