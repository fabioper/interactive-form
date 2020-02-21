import SectionsController from './SectionsController'

export default class Section {
    protected rootElement: HTMLElement;
    name: string;
    controller: SectionsController;

    constructor(name: string) {
        console.log(`Creating [Section]: constructor() -> ${name}`)
        this.name = name
        this.rootElement = document.querySelector(`[data-section=${this.name}]`) as HTMLElement
    }

    mount(): void {
        console.log(`\tRunning: mount() -> ${this.name}`)
        this.rootElement.classList.add('active')
        this.onMount()
        this.setActionClickEvents()
    }

    unmount(): void {
        console.log(`\tRunning: unmount() -> ${this.name}`)
        this.rootElement.classList.remove('active')
        this.onUnmount()
    }

    onMount(): void {
        console.log(`\tRunning: onMount() -> ${this.name}`)
    }

    onUnmount(): void {
        console.log(`\tRunning: onUnmount() -> ${this.name}`)
    }

    protected query(selector: string): HTMLElement {
        return this.rootElement.querySelector(selector) as HTMLElement
    }

    protected queryAll(selector: string): NodeListOf<HTMLElement> {
        return this.rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
    }

    private setActionClickEvents(): void {
        console.log(`\tRunning: addActionsEvent() -> ${this.name}`)
        this.queryAll('[data-action]').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault()
                this.controller.formState.set(this.name, element.dataset.card)
                this.controller.moveTo(element.dataset.action)

                this.controller.formState.forEach((value, key) => {
                    console.log(`${key} => ${value}`)
                })
            })
        })
    }
}
