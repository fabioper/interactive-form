import FormController from '../form/FormController'
import Section from './Section'
import { Residuo } from '../utils/Residuo'

export default class SectionsController {
    private _current: Section;
    private _previous: Section;
    private sections: Map<string, Section> = new Map<string, Section>();
    public data: Residuo[];
    state: FormData;

    constructor(form: FormController, data: Residuo[]) {
        console.log('Creating [SectionsController]: constructor()')
        this.state = form.formState
        this.setData(data)
    }

    set current(section: Section) {
        console.log(`\tRunning: current() setter -> ${section.name}`)
        this._current = section
        this._current.mount()
    }

    set previous(section: Section) {
        this._previous = section
        this._previous?.unmount()
    }

    moveTo(sectionName: string): void {
        console.log(`\tRunning: moveTo() -> ${sectionName}`)
        this.previous = this._current
        this.current = this.sections.get(sectionName)
    }

    appendSections(...sections: Section[]): void {
        console.log(`\tRunning: appendSections() -> size(${sections.length})`)
        sections.forEach(section => {
            section.setController(this)
            this.sections.set(section.name, section)
        })
    }

    private setData(data: Residuo[]): void {
        this.data = data
    }
}
