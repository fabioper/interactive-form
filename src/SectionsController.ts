import Section from './Section'
import Residuo from './utils/Residuo'
import FormManager from './FormManager'
import State from './State'
import { Sections } from './utils/enums'

export default class SectionController {
    private _active: Section
    private _previous: Section
    private _sections: Map<string, Section> = new Map()
    private manager: FormManager
    data: Residuo[]

    constructor(manager: FormManager, data: Residuo[]) {
        this.data = data
        this.manager = manager
    }

    get state(): State {
        return this.manager.state
    }

    set active(section: Section) {
        this.previous = this._active
        this._active = section
        this._active.mount()
    }

    set previous(section: Section) {
        this._previous = section
        if (this._previous)
            this._previous.unmount()
    }

    append(...keys: string[]): void {
        keys.forEach(key => {
            const section = new Section(key)
            section.controller = this
            this._sections.set(key, section)
        })
    }

    find(key: string): Section {
        return this._sections.get(key)
    }

    moveTo(key: string): void {
        this.active = this.find(key)
    }

    save(): void {
        this.manager.save(this.state)
        this.moveTo(Sections.RESIDUOS)
    }

    send(): void {
        this.manager.save(this.state)
        this.manager.send()
    }

    hasState(): boolean {
        return this.manager.hasState()
    }

    get states(): State[] {
        return this.manager.states
    }

    removeState(index: string): void {
        this.manager.removeState(parseInt(index, 10))
    }
    editState(index: string): void {
        this.manager.editState(parseInt(index, 10))
    }
}
