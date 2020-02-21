import { Sections } from './../utils/enums'
import FormManager from '../form/FormManager'
import Section from './Section'
import { Residuo } from '../utils/Residuo'
import IndustriesSection from './IndustriesSection'
import ResiduesSection from './ResiduesSection'
import FormSection from './FormSection'

export default class SectionsController {
    private _current: Section;
    private _previous: Section;
    private sections: Map<string, Section> = new Map<string, Section>();
    private manager: FormManager;
    formState: FormData
    data: Residuo[]

    constructor(formManager: FormManager, data: Residuo[]) {
        console.log('Creating [SectionsController]: constructor()')
        this.manager = formManager
        this.formState = formManager.formState
        this.data = data
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

    querySections(...names: string[]): Section[] {
        console.log(`\tRunning: createSections() -> size(${names.length})`)

        return names.map(name => {
            switch (name) {
                case Sections.INDUSTRIAS:
                    return new IndustriesSection(name)
                case Sections.RESIDUOS:
                    return new ResiduesSection(name)
                case Sections.CALCULO_MONTANTE || Sections.INFO_PESSOAIS:
                    return new FormSection(name)
                default:
                    return new Section(name)
            }
        })
    }

    appendSections(...sections: Section[]): void {
        console.log(`\tRunning: appendSections() -> size(${sections.length})`)
        sections.forEach(section => {
            section.controller = this
            this.sections.set(section.name, section)
        })
    }
}
