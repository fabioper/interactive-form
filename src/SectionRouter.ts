/* eslint-disable @typescript-eslint/no-empty-function */

import Section from './Section'

/* eslint-disable no-useless-constructor */
export default class SectionRouter {
    private static _instance: SectionRouter;
    private _active: Section
    private _previous: Section
    private _sections: Map<string, Section> = new Map()
    private _history: string[] = []

    private constructor() {}

    static get instance(): SectionRouter {
        if (this._instance) return this._instance
        this._instance = new SectionRouter()
        return this._instance
    }

    set active(section: Section) {
        this.previous = this._active
        this._active = section
        this._history.push(section.name)
        this.changeHistoryState(section)
        this._active.mount()
    }

    get active(): Section { return this._active }

    set previous(section: Section) {
        this._previous = section
        if (this._previous) this._previous.unmount()
    }

    get previous(): Section { return this._previous }

    get sections(): Map<string, Section> {
        return this._sections
    }

    append(...sections: Section[]): void {
        sections.forEach(section => {
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

    private changeHistoryState(section: Section): void {
        this._history.length > 0 ?
            history.pushState({ section: section.name }, section.name) :
            history.replaceState({ section: section.name }, section.name)
    }
}
