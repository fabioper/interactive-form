import Section from './Section'
import StateManager, { Listener, State } from './StateManager'

class InteractiveForm implements Listener {
    private _activeSection: Section;
    private _previousSection: Section;
    private sections: Section[] = []
    state: StateManager

    constructor() {
        this.state = new StateManager()
        this.state.addListener(this)
    }

    get activeSection(): Section {
        return this._activeSection
    }

    set activeSection(section: Section) {
        this.moveActiveSectionToPrevious()
        this._activeSection = section
    }

    set previousSection(section: Section) {
        this._previousSection = section
    }

    public moveSection(name: string): void {
        const found = this.findSectionBy(name)
        this.activeSection = found
        found.onInit(this)
    }

    public addSection(...sections: Section[]): void {
        this.sections.push(...sections)
    }

    public update(state: State): void {
        this.activeSection.onUpdate(state)
    }

    private findSectionBy(name: string): Section {
        const section = this.sections.find(section => section.name === name)
        if (!section) { throw new Error(`Section ${name} not found`) }
        return section
    }

    private moveActiveSectionToPrevious(): void {
        if (this.activeSection) {
            this.previousSection = this.activeSection
            this._previousSection.onExit()
        }
    }
}

export default InteractiveForm
