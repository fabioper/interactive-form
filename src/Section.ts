/* eslint-disable no-alert */
import Router from './Router'
import Residuo from './utils/Residuo'
import State from './State'
import ProgressBar from './components/ProgressBar'
import { Sections } from './utils/enums'

export default class Section {
    private _name: string
    router: Router
    private _position: number;
    private _rootElement: HTMLElement
    private _onMount: ((this: this) => void)[]
    private _satisfied: boolean
    private _condition: (state: State) => boolean

    constructor(name: string, step: number, condition?: (state: State) => boolean) {
        this._name = name
        this._position = step
        this._rootElement = document.querySelector(`[data-section=${name}`) as HTMLElement
        this._onMount = []
        this._satisfied = false
        this._condition = condition
    }

    get name(): string { return this._name }

    get position(): number { return this._position }

    get state(): State { return this.router.state }

    get data(): Residuo[] { return this.router.data }

    set isSatisfied(value: boolean) { this._satisfied = value }

    get isSatisfied(): boolean { return this._satisfied }

    get condition(): boolean {
        console.log('called')
        if (this._condition)
            return this._condition(this.state)

        return true
    }

    mount(): void {
        this._rootElement.classList.add('active')
        this._onMount.forEach(onMount => onMount.bind(this)())
        this.fillProgressBar()
        this.addCardsClickEvent()
        this.addBindings()
        this.addButtonsClickEvents()
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

    removeAllChildrenFrom(progressBar: HTMLElement): void {
        while (progressBar.firstChild)
            progressBar.removeChild(progressBar.firstChild)
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

    private bindSidebarFields(): string {
        const aside = document.querySelector('[data-aside]') as HTMLElement
        if (!State.userInfo.nome && !this.router.hasState()) return (aside.innerHTML = '')

        aside.innerHTML = this.getResiduesListingMarkup()

        if (State.userInfo.nome)
            aside.insertAdjacentHTML('beforeend', this.getUserInfoListingMarkup())

        this.addEditButtonsClickEvents()
        this.addRemoveButtonsClickEvents()
    }

    // eslint-disable-next-line max-statements
    private bindFormFields(): void {
        if (this._name === Sections.CALCULO_MONTANTE) {
            this.isSatisfied = true
            console.log(this.state)
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

    private clearCurrentForm(): void {
        const inputs = this.queryAll('input, select') as HTMLInputElement[]
        inputs.forEach(input => input.value = input.defaultValue || '')
    }

    private isValid(inputs: HTMLInputElement[]): boolean {
        return inputs.every(input => {
            input.reportValidity()
            return input.checkValidity()
        })
    }

    private getUserInfoListingMarkup(): string {
        return /* html */`
                <div>
                    <h3>Informações de Contato</h3>
                    <p>${State.contato.toString()}</p>
                    <div>
                        <button data-edit class="btn__secondary btn__secondary--edit">
                            Editar
                        </button>
                    </div>
                </div>
            `
    }

    private getResiduesListingMarkup(): string {
        const startDiv = '<div>'
        const endDiv = '</div>'
        const markup = this.router.states.map((state, idx) => {
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

        return startDiv + markup + endDiv
    }

    private fillProgressBar(): void {
        const progressBar = new ProgressBar(this.router)
        progressBar.fillUntil(this)
        progressBar.renderAt(this.query('.progress'))
    }

    private onClick(element: HTMLElement, cb: (event: Event) => void): void {
        if (element)
            element.onclick = (event): void => {
                event.preventDefault()
                cb(event)
            }
    }

    private addRemoveButtonsClickEvents(): void {
        const remove = document.querySelectorAll('[data-remove]') as NodeListOf<HTMLButtonElement>
        remove.forEach(btn => {
            this.onClick(btn, () => {
                if (window.confirm('Deseja realmente excluir este item?')) {
                    this.router.removeState(btn.dataset.remove)
                    this.router.moveTo(this._name)
                }
            })
        })
    }

    private addEditButtonsClickEvents(): void {
        const edit = document.querySelectorAll('[data-edit]') as NodeListOf<HTMLButtonElement>
        edit.forEach(btn => {
            const redirect = (dest: Section): void => {
                const confirm = dest.query('.submit') as HTMLButtonElement
                confirm.textContent = 'Ok'
                this.onClick(confirm, () => this.router.moveTo(Sections.REVISE_PEDIDO))
            }

            this.onClick(btn, () => {
                if (btn.dataset.edit !== '') {
                    this.router.editState(btn.dataset.edit)
                    return this.router.moveTo(Sections.CALCULO_MONTANTE, redirect)
                }
                return this.router.moveTo(Sections.INFO_PESSOAIS, redirect)
            })
        })
    }

    private addButtonsClickEvents(): void {
        const saveButton = this.query('[data-save]')
        const submitButton = this.query('[type=submit]')
        const clearButton = this.query('.clear')

        if (!this.state.residuo && saveButton) saveButton.remove()

        this.onClick(saveButton, () => this.router.save())
        this.onClick(submitButton, () => this.router.send())
        this.onClick(clearButton, () => this.clearCurrentForm())
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
            this.isSatisfied = true
        })
    }

    private addActionsClickEvent(): void {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event): void => {
                event.preventDefault()
                const inputs = this.queryAll('input, select') as HTMLInputElement[]
                if (this.isValid(inputs)) {
                    this.router.moveTo(action.dataset.action)
                    this.isSatisfied = true
                }
            }
        })
    }
}
