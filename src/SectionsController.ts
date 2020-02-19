import Section from './Section'
import FormController from './FormController'
import State from './State'

export default class SectionsController {
    private _current: Section;
    private _previous: Section;
    private sections: Map<string, Section> = new Map<string, Section>();
    formController: FormController;

    set current(value: Section) {
        this._current = value
        this._current.rootElement.classList.add('active')
    }

    set previous(value: Section) {
        this._previous = value
        this._previous?.rootElement.classList.remove('active')
    }

    moveTo(key: string): void {
        this.previous = this._current
        this.current = this.sections.get(key)
    }

    appendSections(...sections: Section[]): void {
        sections.forEach(section => {
            this.sections.set(section.name, section)
            section.initilize(this.formController.data)
        })

        this.addActionsClickEvents()
        this.addCardsClickEvent()
    }

    observe(form: FormController): void {
        this.formController = form
        this.formController.onStateChange(state => this.notifySections(state))
    }

    notifySections(state: State): void {
        this.sections.forEach(section => section.updateState(state))
    }

    addActionsClickEvents(): void {
        const actions = document.querySelectorAll('[data-section-action]') as NodeListOf<HTMLAnchorElement>
        actions.forEach(action => action.addEventListener('click', event => {
            event.preventDefault()
            this.moveTo(action.dataset.sectionAction)
        }))
    }

    addCardsClickEvent(): void {
        const keys = [
            'modo',
            'industria',
            'servico',
            'residuo'
        ]
        keys.forEach(key => {
            const cards = document.querySelectorAll(`[data-state-${key}]`) as NodeListOf<HTMLElement>
            const capitalizedKey = this.capilizeWord(key)
            cards.forEach(card => card.addEventListener('click', () => {
                this.formController.state.setState({
                    [key]: card.dataset[`state${capitalizedKey}`]
                })
            }))
        })
    }

    private capilizeWord(key: string): string {
        return key.charAt(0).toUpperCase() + key.slice(1)
    }
}
