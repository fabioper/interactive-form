import InteractiveForm from './InteractiveForm'

abstract class Section {
    section: HTMLElement;
    name: string;

    constructor(sectionName: string) {
        this.name = sectionName
        this.section = this.getSection(this.name)
    }

    private getSection(name: string): HTMLElement {
        return document.querySelector(`[data-section=${name}]`) as HTMLElement
    }

    beforeInit(form: InteractiveForm): void {
        this.section.classList.add('active')
        this.onInit(form)
    }

    abstract onInit(form: InteractiveForm): void;

    onExit(): void {
        this.section.classList.remove('active')
    }
}

export default Section
