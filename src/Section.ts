/* eslint-disable no-alert */
import Residuo from './utils/Residuo'
import State from './State'
import ProgressBar from './components/ProgressBar'
import { Sections } from './utils/enums'
import SectionRouter from './SectionRouter'
import FormRepository from './FormRepository/FormRepository'
import FormHandler from './FormHandler'
import InMemoryFormRepository from './FormRepository/InMemoryFormRepository'

export default class Section {
    private _name: string
    private _position: number;
    private _rootElement: HTMLElement
    private _onMount: ((this: this) => void)[]
    private _satisfied: boolean
    private _condition: (state: State) => boolean
    private _router: SectionRouter
    private _repository: FormRepository<State>
    private _handler: FormHandler
    private _data: Residuo[]

    constructor(name: string, step: number, data: Residuo[], condition?: (state: State) => boolean) {
        this._name = name
        this._position = step
        this._rootElement = document.querySelector(`[data-section=${name}`) as HTMLElement
        this._onMount = []
        this._satisfied = false
        this._condition = condition
        this._router = SectionRouter.instance
        this._repository = InMemoryFormRepository.instance
        this._handler = FormHandler.instance
        this._data = data
    }

    get name(): string { return this._name }

    get position(): number { return this._position }

    set isSatisfied(value: boolean) { this._satisfied = value }

    get isSatisfied(): boolean { return this._satisfied }

    get condition(): boolean {
        if (this._condition)
            return this._condition(this._repository.active)

        return true
    }

    mount(): void {
        this._rootElement.classList.add('active')
        this._onMount.forEach(onMount => onMount.bind(this)())
        this.fillProgressBar()
        this.addCardsClickEvent()
        this.addBindings()
        this.addButtonsClickEvents()

        if (this.name === 'revise-seu-pedido')
            this.renderHistory()
    }

    // eslint-disable-next-line max-statements
    renderHistory(): void {
        const orders = [...this._repository.getAll(), this._repository.active]

        const editButton = (idx: number): string => `
                <button data-edit="${idx}" class="btn__secondary btn__secondary--edit">
                    Editar
                </button>`

        const removeButton = (idx: number): string => `
                <button data-remove="${idx}" class="btn__secondary btn__secondary--remove">
                    Excluir
                </button>`

        const markup = orders.map((state, idx) => `
            <div>
                <div>
                    <div>
                        <h3>Resíduo</h3>
                        <p>${state.residuo.nome}</p>
                    </div>
                    <div>
                        <h3>Frequência</h3>
                        <p>${state.frequencia}</p>
                    </div>
                    <div>
                        <h3>Recipientes</h3>
                        <p>${state.recipientes}</p>
                        <div>${editButton(idx)} ${removeButton(idx)}</div>
                    </div>
                </div>
            </div>
            `)

        const historyPlaceholder = this.query('[data-history]')
        historyPlaceholder.innerHTML = markup.join(' ')

        this.addEditButtonsClickEvents()
        this.addRemoveButtonsClickEvents()
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
                if (this._repository.active[state])
                    value = this._repository.active[state][key]
            } else {
                value = this._repository.active[binding.dataset.bind]
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
        if (!State.userInfo.nome && this._repository.isEmpty()) return (aside.innerHTML = '')

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
            console.log(this._repository.active)
            const frequenciaInput = this.query('input[name=frequencia]') as HTMLInputElement
            const periodoSelect = this.query('select[name=periodo]') as HTMLSelectElement
            const recipientesInput = this.queryAll('input[name=quantidade]') as HTMLInputElement[]

            frequenciaInput.value = this._repository.active.calculoMontante.frequencia.toString()
            periodoSelect.value = this._repository.active.calculoMontante.periodo.toString()

            frequenciaInput.onchange = (): number => (
                this._repository.active.calculoMontante.frequencia = frequenciaInput.valueAsNumber
            )
            periodoSelect.onchange = (): string => (
                this._repository.active.calculoMontante.periodo = periodoSelect.value
            )
            recipientesInput.forEach(input => {
                const recipiente = this._repository.active.calculoMontante.recipientes[input.id]
                if (recipiente) input.value = recipiente.toString()
                input.onchange = (): number => (
                    this._repository.active.calculoMontante.recipientes[input.id] = input.valueAsNumber
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
        const markup = this._repository.getAll().map((state, idx) => {
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
        })
            .join(' ')

        return startDiv + markup + endDiv
    }

    private fillProgressBar(): void {
        const progressBar = new ProgressBar()
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
                    console.log(`Removing item: ${btn.dataset.remove}`)
                    this._repository.remove(parseInt(btn.dataset.remove, 10))
                    if (!this._repository.isEmpty())
                        return this._router.moveTo(this._name)

                    this._router.moveTo(this._name)
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
                this.onClick(confirm, () => {
                    this._router.moveTo(Sections.REVISE_PEDIDO)
                    confirm.textContent = 'Avançar'
                })
            }

            this.onClick(btn, () => {
                if (btn.dataset.edit !== '') {
                    this._repository.active = this._repository.getById(parseInt(btn.dataset.edit, 10))
                    return this._router.moveTo(Sections.CALCULO_MONTANTE, redirect)
                }

                return this._router.moveTo(Sections.INFO_PESSOAIS, redirect)
            })
        })
    }

    private addButtonsClickEvents(): void {
        if (this.name === Sections.CALCULO_MONTANTE) {
            const moveForwardButton = this.query('.submit')
            if (State.userInfo.nome)
                this.onClick(moveForwardButton, () => this._router.moveTo(Sections.REVISE_PEDIDO))
        }

        const saveButton = this.query('[data-save]')
        if (!this._repository.active.residuo && saveButton) saveButton.remove()
        this.onClick(saveButton, () => {
            this._repository.add(this._repository.active)
            this._router.moveTo(Sections.RESIDUOS)
        })

        const submitButton = this.query('[type=submit]')
        this.onClick(submitButton, () => this._handler.sendAll())

        const clearButton = this.query('.clear')
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
                this._repository.active.searchMode = card.dataset.card
            if (this._name === Sections.INDUSTRIAS)
                this._repository.active.industry = card.dataset.card
            if (this._name === Sections.SERVICOS)
                this._repository.active.service = card.dataset.card
            if (this._name === Sections.RESIDUOS)
                this._repository.active.residuo = this._data.find(({ slug }) => (slug === card.dataset.card))
            this.isSatisfied = true
        })
    }

    private addActionsClickEvent(): void {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event): void => {
                event.preventDefault()
                const inputs = this.queryAll('input, select') as HTMLInputElement[]
                if (this.isValid(inputs)) {
                    this._router.moveTo(action.dataset.action)
                    this.isSatisfied = true
                }
            }
        })
    }
}
