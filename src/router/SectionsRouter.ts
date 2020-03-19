/* eslint-disable @typescript-eslint/no-empty-function */
import SectionComponent from './SectionRouterComponent'

export default class SectionsRouter {
    private static _instance: SectionsRouter
    private _sections: Map<string, SectionComponent>

    private constructor() { this._sections = new Map() }

    static get instance(): SectionsRouter {
        if (SectionsRouter._instance) return SectionsRouter._instance
        SectionsRouter._instance = new SectionsRouter()
        return SectionsRouter._instance
    }

    moveForward(): void {}

    moveBackwards(): void {}

    jumpTo(sectionName: string): void {
        this._sections.get(sectionName).mount()
    }

    add(...sections: SectionComponent[]): void {
        sections.forEach(section => {
            this._sections.set(section.key, section)
        })
    }
}
