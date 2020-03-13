import Section from './Section'
import Residuo from './utils/Residuo'
import FormManager from './FormManager'
import State from './State'
import { Sections } from './utils/enums'

export default class Router {
    private _active: Section
    private _previous: Section
    private _sections: Map<string, Section> = new Map()
    private _manager: FormManager
    private _history: string[] = []
    data: Residuo[]

    constructor(manager: FormManager, data: Residuo[]) {
        this.data = data
        this._manager = manager
        window.addEventListener('popstate', (): void => {
            this._history.pop()
            if (this._history.length > 0)
                this.moveTo(this._history.pop())
        })
    }

    get state(): State {
        return this._manager.state
    }

    get states(): State[] {
        return this._manager.states
    }

    set active(section: Section) {
        this.previous = this._active
        this._active = section
        this._history.push(section.name)
        this.changeHistoryState(section)
        this._active.mount()
    }

    get active(): Section {
        return this._active
    }

    set previous(section: Section) {
        this._previous = section
        if (this._previous) this._previous.unmount()
    }

    get previous(): Section {
        return this._previous
    }

    get sections(): Map<string, Section> {
        return this._sections
    }

    private changeHistoryState(section: Section): void {
        this._history.length > 0 ?
            history.pushState({ section: section.name }, section.name) :
            history.replaceState({ section: section.name }, section.name)
    }

    append(...sections: Section[]): void {
        sections.forEach(section => {
            section.router = this
            this._sections.set(section.name, section)
        })
    }

    find(key: string): Section {
        return this._sections.get(key)
    }

    moveTo(key: string, cb?: (destSection: Section) => void): void {
        this.active = this.find(key)
        if (cb) cb(this.active)
    }

    save(): void {
        this._manager.save(this.state)
        this.moveTo(Sections.RESIDUOS)
    }

    send(): void {
        this._manager.save(this.state)
        this._manager.send()
    }

    hasState(): boolean {
        return this._manager.hasState()
    }

    removeState(index: string): void {
        this._manager.removeState(parseInt(index, 10))
    }

    editState(index: string): void {
        this._manager.editState(parseInt(index, 10))
    }

    clear(): void {
        const message = 'Tem certeza que deseja limpar o formulário?'
        // eslint-disable-next-line no-alert
        if (window.confirm(message)) location.reload()
    }
}
