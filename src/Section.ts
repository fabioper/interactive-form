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
        this.addCardsClickEvent()
        this.addActionsClickEvent()
        this.addBindings()
        this.addFormBindings()
        this.bindSidebar()

        const save = this.query('[data-save]')
        if (save)
            save.onclick = (event): void => {
                event.preventDefault()
                this.controller.save()
            }
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
            cardButtons.forEach(card => this.onCardClick(card))
        }
    }

    private onCardClick(card: HTMLButtonElement): void {
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
                this.controller.moveTo(action.dataset.action)
            }
        })
    }

    private addBindings(): void {
        const bindings = this.queryAll('[data-bind]')
        bindings.forEach(binding => {
            let value
            if (binding.dataset.bind.includes(':')) {
                const [state, key] = binding.dataset.bind.split(':')
                value = this.state[state][key]
            } else {
                value = this.state[binding.dataset.bind]
            }

            if (!value)
                return binding.parentElement.remove()

            if (binding.hasAttribute('data-transform'))
                value = value
                    .map(v => Object.values(v))
                    .map(v=> `<li>${v}</li>`)
                    .join(' ')

            binding.innerHTML = value
        })
    }

    // eslint-disable-next-line max-statements
    private addFormBindings(): void {
        if (this.name === Sections.CALCULO_MONTANTE) {
            const frequencia = this.query('input[name=frequencia]') as HTMLInputElement
            const periodo = this.query('select[name=periodo]') as HTMLSelectElement
            const recipientes = this.queryAll('input[name=quantidade]') as HTMLInputElement[]

            frequencia.value = this.state.calculoMontante.frequencia.toString()
            periodo.value = this.state.calculoMontante.periodo.toString()

            frequencia.onchange = (): void => {
                this.state.calculoMontante.frequencia = frequencia.valueAsNumber
                console.log(this.state)
            }
            periodo.onchange = (): void => {
                this.state.calculoMontante.periodo = periodo.value
                console.log(this.state)
            }
            recipientes.forEach(input => {
                const recipiente = this.state.calculoMontante.recipientes[input.id]
                if (recipiente)
                    input.value = recipiente.toString()

                input.onchange = (): void => {
                    this.state.calculoMontante.recipientes[input.id] = input.valueAsNumber
                    console.log(this.state)
                }
            })
        }

        if (this.name === Sections.INFO_PESSOAIS) {
            const inputs = this.queryAll('input') as HTMLInputElement[]
            inputs.forEach(input => {
                input.value = this.state.userInfo[input.name]
                input.onchange = (): void => {
                    this.state.userInfo[input.name] = input.value
                    console.log(this.state)
                }
            })
        }
    }

    bindSidebar(): void {
        const aside = document.querySelector('[data-aside]') as HTMLElement
        if (this.controller.hasState()) {
            aside.innerHTML = this.controller.states.map((state, idx) => `
                    <div>
                        <h3>Resíduo</h3>
                        <p>${state.residuo.nome}</p>
                        <h3>Frequência</h3>
                        <p>${state.frequencia}</p>
                        <h3>Recipiente(s)</h3>
                        <p>${state.recipientes}</p>
                        <div>
                            <button data-edit="${idx}">Editar</button>
                            <button data-remove="${idx}">Excluir</button>
                        </div>
                    </div>
                `).join(' ')
            aside.insertAdjacentHTML('beforeend', `
                <div>
                    <h3>Informações de Contato</h3>
                    <p>${this.controller.states[0].contato}</p>
                </div>
            `)

            const edit = document.querySelectorAll('[data-edit]') as NodeListOf<HTMLButtonElement>
            const remove = document.querySelectorAll('[data-remove]') as NodeListOf<HTMLButtonElement>

            edit.forEach(btn => {
                btn.onclick = (event): void => {
                    event.preventDefault()
                    this.controller.editState(btn.dataset.edit)
                    this.controller.moveTo(Sections.CALCULO_MONTANTE)
                }
            })

            remove.forEach(btn => {
                btn.onclick = (event): void => {
                    event.preventDefault()
                    this.controller.removeState(btn.dataset.remove)
                }
            })
        } else { aside.innerHTML = '' }
    }
}
