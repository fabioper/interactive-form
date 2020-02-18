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
        sections.forEach(section => (
            this.sections.set(section.name, section)
        ))
        this.addActionsClickEvents()
    }

    observe(form: FormController): void {
        this.formController = form
        this.formController.onStateChange(state => this.notifySections(state))
    }

    private notifySections(state: State): void {
        return this.sections.forEach(section => section.updateState(state))
    }

    private addActionsClickEvents(): void {
        this.sections.forEach(section => {
            const actions = section.queryAll('[data-section-action]')
            actions.forEach(action => action.addEventListener('click', event => {
                event.preventDefault()
                this.moveTo(action.dataset.sectionAction)
            }))
        })
    }
}
