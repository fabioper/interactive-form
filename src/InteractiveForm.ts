import Section from './Section'

class InteractiveForm {
    private _activeSection: Section;
    private sections: Section[] = []

    get activeSection(): Section {
        return this._activeSection
    }

    set activeSection(section: Section) {
        if (this.activeSection) { this.activeSection.onExit() }
        section.beforeInit(this)
        this._activeSection = section
    }

    moveSection(name: string): void {
        const found = this.sections.find(section => section.name === name)
        if (!found) { throw new Error(`Section ${name} not found`) }
        this.activeSection = found
    }

    addSection(...sections: Section[]): void {
        this.sections.push(...sections)
    }
}

export default InteractiveForm
