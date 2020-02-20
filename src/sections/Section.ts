import { Residuo } from '../utils/Residuo'
import SectionsController from './SectionsController'

export default abstract class Section {
    private controller: SectionsController;
    rootElement: HTMLElement;
    name: string;

    constructor(name: string) {
        console.log(`Creating [Section]: constructor() -> ${name}`)
        this.name = name
        this.rootElement = document.querySelector(`[data-section=${this.name}]`) as HTMLElement
    }

    protected query(selector: string): HTMLElement {
        return this.rootElement.querySelector(selector) as HTMLElement
    }

    protected queryAll(selector: string): NodeListOf<HTMLElement> {
        return this.rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
    }

    mount(): void {
        console.log(`\tRunning: mount() -> ${this.name}`)
        this.rootElement.classList.add('active')
        this.onMount()
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

    setController(controller: SectionsController): void {
        this.controller = controller
    }
}
