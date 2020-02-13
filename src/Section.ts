import InteractiveForm from './InteractiveForm'
import { State } from './StateManager'

abstract class Section {
    section: HTMLElement;
    name: string;

    constructor(sectionName: string) {
        this.name = sectionName
        this.section = Section.find(this.name)
    }

    private static find(name: string): HTMLElement {
        return document.querySelector(`[data-section=${name}]`) as HTMLElement
    }

    init(form: InteractiveForm): void {
        this.section.classList.add('active')
        this.oninit(form)
    }

    abstract oninit(form: InteractiveForm): void;

    update(state: State): void {
        console.log(state)
    }

    exit(): void {
        this.section.classList.remove('active')
    }
}

export default Section
