import Section from './Section'
import StateManager, { Listener, State } from './StateManager'

class InteractiveForm implements Listener {
    private activeSection: Section;
    private sections: Section[] = []
    state: StateManager

    constructor(stateManager: StateManager) {
        this.state = stateManager
        this.state.addListener(this)
    }

    public moveSection(name: string): void {
        const found = this.findSectionBy(name)
        this.activeSection = found
        found.init(this)
    }

    public addSection(...sections: Section[]): void {
        this.sections.push(...sections)
    }

    public update(state: State): void {
        this.activeSection.update(state)
    }

    private findSectionBy(name: string): Section {
        const section = this.sections.find(section => section.name === name)
        if (!section) { throw new Error(`Section ${name} not found`) }
        return section
    }
}

export default InteractiveForm
