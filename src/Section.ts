import SectionsController from './SectionsController'
import Residuo from './utils/Residuo'
import { Sections } from './utils/enums'
import State from './State'

export default class Section {
    name: string
    controller: SectionsController
    private rootElement: HTMLElement
    private _onMount: ((this: this) => void)[]

    constructor(name: string) {
        this.name = name
        this.rootElement = document.querySelector(`[data-section=${name}`) as HTMLElement
        this._onMount = []
    }

    get state(): State {
        return this.controller.state
    }

    get data(): Residuo[] {
        return this.controller.data
    }

    mount(): void {
        this.rootElement.classList.add('active')
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
        this.rootElement.classList.remove('active')
    }

    onMount(...callback: ((this: this) => void)[]): void {
        this._onMount.push(...callback)
    }

    query(selector: string): HTMLElement {
        return this.rootElement.querySelector(selector) as HTMLElement
    }

    queryAll(selector: string): HTMLElement[] {
        return Array.from(
            this.rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
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
            if (this.name === Sections.MODO_DE_PESQUISA)
                this.state.searchMode = card.dataset.card
            if (this.name === Sections.INDUSTRIAS)
                this.state.industry = card.dataset.card
            if (this.name === Sections.SERVICOS)
                this.state.service = card.dataset.card
            if (this.name === Sections.RESIDUOS)
                this.state.residuo = this.data.find(({ slug }) => (slug === card.dataset.card))
        })
    }

    private addActionsClickEvent(): void {
        this.queryAll('[data-action]').forEach(action => {
            action.onclick = (event): void => {
                event.preventDefault()
                const inputs = this.queryAll('input, select') as HTMLInputElement[]
                if (!action.dataset.ignoreValidation || this.isValid(inputs))
                    this.controller.moveTo(action.dataset.action)
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
        if (this.name === Sections.CALCULO_MONTANTE) {
            const frequencia = this.query('input[name=frequencia]') as HTMLInputElement
            const periodo = this.query('select[name=periodo]') as HTMLSelectElement
            const recipientes = this.queryAll('input[name=quantidade]') as HTMLInputElement[]

            frequencia.value = this.state.calculoMontante.frequencia.toString()
            periodo.value = this.state.calculoMontante.periodo.toString()

            frequencia.onchange = (): number => (
                this.state.calculoMontante.frequencia = frequencia.valueAsNumber
            )
            periodo.onchange = (): string => (
                this.state.calculoMontante.periodo = periodo.value
            )
            recipientes.forEach(input => {
                const recipiente = this.state.calculoMontante.recipientes[input.id]
                if (recipiente) input.value = recipiente.toString()
                input.onchange = (): number => (
                    this.state.calculoMontante.recipientes[input.id] = input.valueAsNumber
                )
            })
        }

        if (this.name === Sections.INFO_PESSOAIS) {
            const inputs = this.queryAll('input') as HTMLInputElement[]
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
            btn.onclick = (event): void => {
                event.preventDefault()
                this.controller.removeState(btn.dataset.remove)
                this.controller.moveTo(this.name)
            }
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
        const progressBar = this.query('.progress')
        this.removeAllChildrenFrom(progressBar)
        this.setActiveSteps(progressBar)
    }

    private setActiveSteps(progressBar: HTMLElement): void {
        const step = parseInt(progressBar.dataset.value, 10)
        const max = parseInt(progressBar.dataset.max, 10)
        for (let i = 1; i <= max; i++) {
            const progressValue = this.createProgressValue()
            if (i <= step) progressValue.classList.add('active')
            progressBar.appendChild(progressValue)
        }
    }

    private createProgressValue(): HTMLElement {
        const progressValue = document.createElement('div')
        progressValue.classList.add('progress__value')
        return progressValue
    }

    private addButtonsClickEvents(): void {
        const saveButton = this.query('[data-save]')
        const submitButton = this.query('[type=submit]')
        if (saveButton)
            saveButton.onclick = (event): void => {
                event.preventDefault()
                this.controller.save()
            }

        if (submitButton)
            submitButton.onclick = event => {
                event.preventDefault()
                this.controller.send()
            }
    }
}
