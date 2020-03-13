/* eslint-disable no-alert */
import SectionsController from './SectionsController'
import Residuo from './utils/Residuo'
import { Sections } from './utils/enums'
import State from './State'
import ProgressBar from './components/ProgressBar'

export default class Section {
    private _name: string
    controller: SectionsController
    private _position: number;
    private _rootElement: HTMLElement
    private _onMount: ((this: this) => void)[]
    private _isFullfilled: boolean

    constructor(name: string, step: number) {
        this._name = name
        this._position = step
        this._rootElement = document.querySelector(`[data-section=${name}`) as HTMLElement
        this._onMount = []
        this._isFullfilled = false
    }

    get name(): string {
        return this._name
    }

    get position(): number {
        return this._position
    }

    get state(): State {
        return this.controller.state
    }

    get data(): Residuo[] {
        return this.controller.data
    }

    set isFullfilled(value: boolean) {
        this._isFullfilled = value
    }

    get isFullfilled(): boolean {
        return this._isFullfilled
    }

    mount(): void {
        this._rootElement.classList.add('active')
        this._onMount.forEach(onMount => onMount.bind(this)())
        this.fillProgressBar()
        this.addCardsClickEvent()
        this.addBindings()
        this.addButtonsClickEvents()
    }

    removeAllChildrenFrom(progressBar: HTMLElement): void {
        while (progressBar.firstChild)
            progressBar.removeChild(progressBar.firstChild)
    }

    unmount(): void {
        this._rootElement.classList.remove('active')
    }

    onMount(...callback: ((this: this) => void)[]): void {
        this._onMount.push(...callback)
    }

    query(selector: string): HTMLElement {
        return this._rootElement.querySelector(selector) as HTMLElement
    }

    queryAll(selector: string): HTMLElement[] {
        return Array.from(
            this._rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
        )
    }

    private addCardsClickEvent(): void {
        const cards = this.query('[data-cards]')
        if (cards) {
            const cardButtons = cards.querySelectorAll('button')
            cardButtons.forEach(card => this.addCardClickEvent(card))
        }
        this.addActionsClickEvent()
    }

    private addCardClickEvent(card: HTMLButtonElement): void {
        card.addEventListener('click', event => {
            event.preventDefault()
            if (this._name === Sections.MODO_DE_PESQUISA)
                this.state.searchMode = card.dataset.card
            if (this._name === Sections.INDUSTRIAS)
                this.state.industry = card.dataset.card
            if (this._name === Sections.SERVICOS)
                this.state.service = card.dataset.card
            if (this._name === Sections.RESIDUOS)
                this.state.residuo = this.data.find(({ slug }) => (slug === card.dataset.card))

            this.isFullfilled = true
        })
    }

    private addActionsClickEvent(): void {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event): void => {
                event.preventDefault()
                const inputs = this.queryAll('input, select') as HTMLInputElement[]
                if (this.isValid(inputs)) {
                    this.controller.moveTo(action.dataset.action)
                    this.isFullfilled = true
                }
            }
        })
    }

    private isValid(inputs: HTMLInputElement[]): boolean {
        return inputs.every(input => {
            input.reportValidity()
            return input.checkValidity()
        })
    }

    private addBindings(): void {
        const bindings = this.queryAll('[data-bind]')
        bindings.forEach(binding => {
            let value
            if (binding.dataset.bind.includes(':')) {
                const [state, key] = binding.dataset.bind.split(':')
                if (this.state[state])
                    value = this.state[state][key]
            } else {
                value = this.state[binding.dataset.bind]
            }

            if (!value)
                return binding.parentElement.style.display = 'none'

            binding.parentElement.style.display = 'block'

            if (binding.hasAttribute('data-transform'))
                value = value
                    .map(v => Object.values(v))
                    .map(v=> `<li>${v}</li>`)
                    .join(' ')

            binding.innerHTML = value
        })

        this.bindFormFields()
        this.bindSidebarFields()
    }

    // eslint-disable-next-line max-statements
    private bindFormFields(): void {
        if (this._name === Sections.CALCULO_MONTANTE) {
            this.isFullfilled = true
            const frequenciaInput = this.query('input[name=frequencia]') as HTMLInputElement
            const periodoSelect = this.query('select[name=periodo]') as HTMLSelectElement
            const recipientesInput = this.queryAll('input[name=quantidade]') as HTMLInputElement[]

            frequenciaInput.value = this.state.calculoMontante.frequencia.toString()
            periodoSelect.value = this.state.calculoMontante.periodo.toString()

            frequenciaInput.onchange = (): number => (
                this.state.calculoMontante.frequencia = frequenciaInput.valueAsNumber
            )
            periodoSelect.onchange = (): string => (
                this.state.calculoMontante.periodo = periodoSelect.value
            )
            recipientesInput.forEach(input => {
                const recipiente = this.state.calculoMontante.recipientes[input.id]
                if (recipiente) input.value = recipiente.toString()
                input.onchange = (): number => (
                    this.state.calculoMontante.recipientes[input.id] = input.valueAsNumber
                )
            })
        }

        if (this._name === Sections.INFO_PESSOAIS) {
            const inputs = this.queryAll('input, textarea') as HTMLInputElement[]
            inputs.forEach(input => {
                input.value = State.userInfo[input.name]
                input.onchange = (): string => State.userInfo[input.name] = input.value
            })
        }
    }

    private bindSidebarFields(): string {
        const aside = document.querySelector('[data-aside]') as HTMLElement
        if (!this.controller.hasState()) return (aside.innerHTML = '')

        aside.innerHTML = this.getResiduesListingMarkup()
        aside.insertAdjacentHTML('beforeend', this.getUserInfoListingMarkup())

        this.addEditButtonsClickEvents()
        this.addRemoveButtonsClickEvents()
    }

    private addRemoveButtonsClickEvents(): void {
        const remove = document.querySelectorAll('[data-remove]') as NodeListOf<HTMLButtonElement>
        remove.forEach(btn => {
            this.onClick(btn, () => {
                if (window.confirm('Deseja realmente excluir este item?')) {
                    this.controller.removeState(btn.dataset.remove)
                    this.controller.moveTo(this._name)
                }
            })
        })
    }

    private addEditButtonsClickEvents(): void {
        const edit = document.querySelectorAll('[data-edit]') as NodeListOf<HTMLButtonElement>
        edit.forEach(btn => {
            btn.onclick = (event): void => {
                event.preventDefault()
                if (btn.dataset.edit !== '') {
                    this.controller.editState(btn.dataset.edit)
                    return this.controller.moveTo(Sections.CALCULO_MONTANTE)
                }
                this.controller.moveTo(Sections.INFO_PESSOAIS)
            }
        })
    }

    private getUserInfoListingMarkup(): string {
        return /* html */`
                <div>
                    <h3>Informações de Contato</h3>
                    <p>${this.state.contato}</p>
                    <div>
                        <button data-edit class="btn__secondary btn__secondary--edit">
                            Editar
                        </button>
                    </div>
                </div>
            `
    }

    private getResiduesListingMarkup(): string {
        return this.controller.states.map((state, idx) => {
            if (state.calculoMontante.periodo)
                return /* html */`
                    <div>
                        <h3>Resíduo</h3>
                        <p>${state.residuo.nome}</p>
                        <h3>Frequência</h3>
                        <p>${state.frequencia}</p>
                        <h3>Recipiente(s)</h3>
                        <p>${state.recipientes}</p>
                        <div>
                            <button data-edit="${idx}" class="btn__secondary btn__secondary--edit">
                                Editar
                            </button>
                            <button data-remove="${idx}" class="btn__secondary btn__secondary--remove">
                                Excluir
                            </button>
                        </div>
                    </div>
                `
            return ''
        }).join(' ')
    }

    private fillProgressBar(): void {
        const progressBar = new ProgressBar(this.controller)
        progressBar.fillUntil(this)
        progressBar.renderAt(this.query('.progress'))
    }

    private clearCurrentForm(): void {
        const inputs = this.queryAll('input, select') as HTMLInputElement[]
        inputs.forEach(input => input.value = input.defaultValue || '')
    }

    private addButtonsClickEvents(): void {
        const saveButton = this.query('[data-save]')
        const submitButton = this.query('[type=submit]')
        const clearButton = this.query('.clear')

        this.onClick(saveButton, () => this.controller.save())
        this.onClick(submitButton, () => this.controller.send())
        this.onClick(clearButton, () => this.clearCurrentForm())
    }

    private onClick(element: HTMLElement, cb: (event: Event) => void): void {
        if (element)
            element.onclick = (event): void => {
                event.preventDefault()
                cb(event)
            }
    }
}
