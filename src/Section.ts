import InteractiveForm from './InteractiveForm'
import { State } from './StateManager'

abstract class Section {
    section: HTMLElement;
    name: string;
    buttons: NodeListOf<HTMLAnchorElement>;

    constructor(sectionName: string) {
        this.name = sectionName
        this.section = Section.find(this.name)
    }

    private static find(name: string): HTMLElement {
        return document.querySelector(`[data-section=${name}]`) as HTMLElement
    }

    onInit(form: InteractiveForm): void {
        this.section.classList.add('active')
        this.buttons = this.getActionButtons()
        this.addActionEvents(form)
    }

    private addActionEvents(form: InteractiveForm): void {
        this.onclick(this.buttons, button => {
            form.moveSection(button.dataset.sectionAction)
        })
    }

    protected onclick(elements: HTMLElement[] | NodeList, callback): void {
        elements.forEach(el => {
            el.addEventListener('click', event => {
                event.preventDefault()
                callback(el)
            })
        })
    }

    private getActionButtons(): NodeListOf<HTMLAnchorElement> {
        return this.section.querySelectorAll('[data-section-action]') as NodeListOf<HTMLAnchorElement>
    }

    onUpdate(state: State): void {
        console.log(state)
    }

    onExit(): void {
        this.section.classList.remove('active')
    }
}

export default Section
