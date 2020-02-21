import { Residuo } from './../utils/Residuo'
import SectionsController from './SectionsController'
import { Sections } from '../utils/enums'

export default class Section {
    protected rootElement: HTMLElement;
    name: string;
    controller: SectionsController;

    constructor(name: string) {
        console.log(`Creating [Section]: constructor() -> ${name}`)
        this.name = name
        this.rootElement = document.querySelector(`[data-section=${this.name}]`) as HTMLElement
    }

    mount(): void {
        console.log(`\tRunning: mount() -> ${this.name}`)
        this.rootElement.classList.add('active')
        this.onMount()
        this.setActionClickEvents()
        if (this.name === Sections.REVISE_PEDIDO) {
            this.bindFormData()
            this.query('[data-new]').onclick = (): void => this.newQuote()
        }
    }

    private newQuote(): void {
        this.controller.addNewQuote()
    }

    // eslint-disable-next-line max-statements
    private bindFormData(): void {
        const residuo = this.query('[data-bind="residuo"]')
        const frequencia = this.query('[data-bind="frequencia"]')
        const recipiente = this.query('[data-bind="recipiente"]')
        const contato = this.query('[data-bind="contato"]')
        const { formState } = this.controller

        const selected = this.getSelectedResidue()
        residuo.innerHTML = selected.nome
        frequencia.innerHTML = `${formState.get('frequencia')}x por ${formState.get('periodo')}`
        recipiente.innerHTML = formState.get('recipiente')?.toString() || ''
        contato.innerHTML = `
            ${formState.get('nome')}<br>
            ${formState.get('telefone')}<br>
            ${formState.get('empresa')}<br>
            ${formState.get('endereco')}
        `
    }

    unmount(): void {
        console.log(`\tRunning: unmount() -> ${this.name}`)
        this.rootElement.classList.remove('active')
        this.onUnmount()
    }

    onMount(): void {
        console.log(`\tRunning: onMount() -> ${this.name}`)
    }

    onUnmount(): void {
        console.log(`\tRunning: onUnmount() -> ${this.name}`)
    }

    protected query(selector: string): HTMLElement {
        return this.rootElement.querySelector(selector) as HTMLElement
    }

    protected queryAll(selector: string): NodeListOf<HTMLElement> {
        return this.rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
    }

    private setActionClickEvents(): void {
        console.log(`\tRunning: addActionsEvent() -> ${this.name}`)
        this.queryAll('[data-action]').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault()
                this.controller.formState.set(this.name, element.dataset.card)
                this.controller.moveTo(element.dataset.action)

                this.controller.formState.forEach((value, key) => {
                    console.log(`${key} => ${value}`)
                })
            })
        })
    }

    protected getSelectedResidue(): Residuo {
        const slug = this.controller.formState.get(Sections.RESIDUOS).toString()
        return this.controller.data.find(residuo => residuo.slug === slug)
    }
}
