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
        const buttons = this.getActionButtons()
        this.addActionEvents(buttons, form)
        this.onInit(form)
    }

    private addActionEvents(buttons: NodeListOf<HTMLAnchorElement>, form: InteractiveForm): void {
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault()
                form.moveSection(button.dataset.sectionAction)
            })
        })
    }

    private getActionButtons(): NodeListOf<HTMLAnchorElement> {
        return document.querySelectorAll('[data-section-action]') as NodeListOf<HTMLAnchorElement>
    }

    abstract onInit(form: InteractiveForm): void;

    onExit(): void {
        this.section.classList.remove('active')
    }
}

export default Section
