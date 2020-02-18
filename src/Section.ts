import State from './State'

export default class Section {
    rootElement: HTMLElement;
    name: string;

    constructor(name: string, render?) {
        this.name = name
        this.rootElement = document.querySelector(`[data-section=${this.name}]`) as HTMLElement
        if (render) { render(this) }
    }

    query(selector: string): HTMLElement {
        return this.rootElement.querySelector(selector) as HTMLElement
    }

    queryAll(selector: string): NodeListOf<HTMLElement> {
        return this.rootElement.querySelectorAll(selector) as NodeListOf<HTMLElement>
    }

    updateState(state: State): void {
        console.log(state)
    }
}
